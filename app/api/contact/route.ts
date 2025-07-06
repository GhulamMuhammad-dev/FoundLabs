import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Save to Supabase
  const { error } = await supabase.from('messages').insert([{ name, email, message }]);
  if (error) {
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }

  // Send email to you
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME!,
        pass: process.env.EMAIL_PASSWORD!, // App password if using Gmail
      },
    });

    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USERNAME}>`,
      to: process.env.EMAIL_TO!,
      subject: 'New Contact Message',
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
     console.error('Email send error:', err);
    return NextResponse.json({ error: 'Email sending failed' }, { status: 500 });
  }
}
