import * as sgMail from '@sendgrid/mail';

export default async function handler(req, res) {

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const body = JSON.parse(req.body);
  const msg = {
    to: body.email,
    from: body.email,
    subject: 'Message From Cboard Portal',
    text: 'Hi ' + body.name + '!' +
      '\nThanks for your interest in participate in our product preview. ' + 
      '\nThis is your exclusive code to join: ' + body.code +
      '\nUse this code to login to the following link: ' + body.link,
    html: '<p>Hi ' + body.name + '!' + '</p>' +
      '<p>\nThanks for your interest in participate in our product preview. ' + '</p>' +
      '<p>\nThis is your exclusive code to join: ' + body.code + '</p>' +
      '<p>\nUse this code to login to the following link: ' + body.link + '</p>',
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