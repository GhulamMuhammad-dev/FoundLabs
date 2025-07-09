import { Suspense } from 'react';
import ContactClient from './ContactClient';

// 🛑 Important: disables static rendering to fix build error
export const dynamic = 'force-dynamic';

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="text-center text-gray-400">Loading contact form...</div>}>
      <ContactClient />
    </Suspense>
  );
}
