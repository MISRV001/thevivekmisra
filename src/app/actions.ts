"use server";

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email");
  const phone = formData.get("phone");

  if (!email && !phone) {
    return { success: false, message: "Email or Phone is required" };
  }

  // 1. Database Integration (Placeholder for Supabase/Vercel Postgres)
  console.log(`[DB] saving user: email=${email}, phone=${phone}`);
  // await supabase.from('subscribers').insert({ email, phone });

  // 2. Email Service (Placeholder for Resend)
  if (email) {
    console.log(`[RESEND] Sending welcome email to ${email}`);
    /* 
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Vivek Misra <newsletter@yourdomain.com>',
      to: email as string,
      subject: 'Welcome to AI Decode Weekly!',
      html: '<p>Thanks for subscribing to the cutting-edge insights!</p>'
    });
    */
  }

  // 3. SMS/WhatsApp Service (Placeholder for Twilio)
  if (phone) {
    console.log(`[TWILIO] Sending welcome SMS/WhatsApp to ${phone}`);
    /*
    import twilio from 'twilio';
    const client = twilio(process.env.TWILIO_ACCOUNTSID, process.env.TWILIO_AUTHTOKEN);
    await client.messages.create({
       body: 'Welcome to Vivek Misra Weekly Insights!',
       from: 'whatsapp:+14155238886', // Twilio sandbox number
       to: `whatsapp:${phone}`
    });
    */
  }

  // Artificial delay to show loading state
  await new Promise(resolve => setTimeout(resolve, 1500));

  return { success: true, message: "Subscribed successfully! Welcome aboard." };
}
