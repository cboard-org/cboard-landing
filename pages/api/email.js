import * as sgMail from '@sendgrid/mail';

export default async function handler(req, res) {

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const body = JSON.parse(req.body);
  const msg = {
    to: 'support@cboard.io',
    from: body.email,
    subject: 'Message From Cboard Portal',
    text: 'Name: ' + body.name +
      '\nEmail: ' + body.email +
      '\nPhone: ' + body.phone +
      '\nCompany: ' + body.company +
      '\nMessage: ' + body.message,
    html: '<p>Name: ' + body.name + '</p>' +
      '<p>\nEmail: ' + body.email + '</p>' +
      '<p>\nPhone: ' + body.phone + '</p>' +
      '<p>\nCompany: ' + body.company + '</p>' +
      '<p>\nMessage: ' + body.message + '</p>',
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error.message);
    if (error.response) {
      console.error(error.response.body)
    }
    return res.status(500).json({ message: 'Email failed to send' + error.message });
  }
  return res.status(200).json({ message: 'Email sent' });
}