import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // 1. Save to Supabase
const { error: dbError } = await supabase
  .from('messages')
  .insert([{ name, email, message }]);

if (dbError) {
  console.error("Supabase Insertion Error:", JSON.stringify(dbError, null, 2));
  return NextResponse.json({ error: 'Failed to save message to database' }, { status: 500 });
}

  // 2. Send email
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USERNAME}>`,
      to: process.env.EMAIL_TO,
      subject: 'New Contact Message',
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (emailError) {
    console.error("Nodemailer Error:", emailError);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
