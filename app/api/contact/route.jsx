import { NextResponse, NextRequest } from 'next/server';
// import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.MY_EMAIL;

export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get('name');
  const lastName = formData.get('lastName');
  const email = formData.get('email');
  const regimen = formData.get('regimen');
  const company = formData.get('company');
  const additionalInfo = formData.get('additionalInfo');
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: myEmail,
    subject: `Cliente nuevo! ${name}`,
    react: (
      <div>
        <p>Nombre: ${name} </p>
        <p>Apellido: ${lastName} </p>
        <p>Correo: ${email} </p>
        <p>Regimen: ${regimen} </p>
        <p>Empresa: ${company} </p>
        <p>Mensaje: ${additionalInfo} </p>
      </div>
    ),
  });

  if (error) {
    console.log(error);
    return NextResponse.json({
      detail: 'No se pudo enviar el correo',
    });
  }

  return NextResponse.json({ message: 'Correo enviado con éxito!' });
}
// const nodemailer = require('nodemailer');

// Handles POST requests to /api

// export async function POST(request) {
//   const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
//   const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
//   const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
//   const formData = await request.formData();
//   const name = formData.get('name');
//   const lastName = formData.get('lastName');
//   const email = formData.get('email');
//   const regimen = formData.get('regimen');
//   const company = formData.get('company');
//   const additionalInfo = formData.get('additionalInfo');

//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//       user: username,
//       pass: password,
//     },
//   });

//   try {
//     const mail = await transporter.sendMail({
//       from: username,
//       to: myEmail,
//       replyTo: email,
//       subject: `Cliente nuevo! ${email}`,
//       html: `
//         <p>Nombre: ${name} </p>
//         <p>Apellido: ${lastName} </p>
//         <p>Correo: ${email} </p>
//         <p>Regimen: ${regimen} </p>
//         <p>Empresa: ${company} </p>
//         <p>Mensaje: ${additionalInfo} </p>
//         `,
//     });

//     return NextResponse.json({ message: 'Success: email was sent' });
//   } catch (error) {
//     console.log(error);
//     NextResponse.status(500).json({ message: 'COULD NOT SEND MESSAGE' });
//   }
// }
