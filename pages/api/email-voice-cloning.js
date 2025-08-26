import * as sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const body = JSON.parse(req.body);

  const {
    firstName,
    lastName,
    email,
    phone,
    dob,
    gender,
    address,
    city,
    county,
    contactPersonName,
    contactEmail,
    contactPhone,
    primaryDiagnosis,
    dateOfDiagnosis,
    hospital,
    source
  } = body;

  const displayName = `${firstName} ${lastName}`;
  const submittedAt = new Date().toLocaleString();
  const applicationId = 'VC-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);

  // Email to the applicant
  const applicantMsg = {
    to: email,
    from: 'support@cboard.io',
    subject: 'Voice Cloning Application Received - Cboard',
    text: `Hi ${displayName}!\n\nThank you for your interest in Voice Cloning through Cboard and ElevenLabs.\n\nYour application has been successfully received with the following details:\n\nApplication ID: ${applicationId}\nSubmitted: ${submittedAt}\nName: ${displayName}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nDate of Birth: ${dob || 'Not provided'}\nGender: ${gender || 'Not provided'}\nAddress: ${address || 'Not provided'}\nCity: ${city || 'Not provided'}\nCounty: ${county || 'Not provided'}\n\nAlternative Contact:\nContact Person: ${contactPersonName || 'Not provided'}\nContact Email: ${contactEmail || 'Not provided'}\nContact Phone: ${contactPhone || 'Not provided'}\n\nMedical Information:\nPrimary Diagnosis: ${primaryDiagnosis || 'Not provided'}\nDate of Diagnosis: ${dateOfDiagnosis || 'Not provided'}\nHospital: ${hospital || 'Not provided'}\n\nOur team will review your application and get back to you soon.\n\nBest regards,\nThe Cboard Team`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2196F3;">Voice Cloning Application Received</h2>
        <p>Hi ${displayName}!</p>
        <p>Thank you for your interest in Voice Cloning through Cboard and ElevenLabs.</p>
        <p><strong>Your application has been successfully received.</strong></p>
        
        <h3 style="color: #2196F3;">Application Details:</h3>
        <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
          <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Application ID:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${applicationId}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Submitted:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${submittedAt}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${displayName}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Phone:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone || 'Not provided'}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; background: #f9f9f9;"><strong>County:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${county || 'Not provided'}</td></tr>
        </table>
        
        <p>Our team will review your application and get back to you soon.</p>
        <p>Best regards,<br><strong>The Cboard Team</strong></p>
        
        <hr style="margin: 30px 0;">
        <p style="font-size: 12px; color: #666;">
          This is an automated message. Please do not reply directly to this email.
          If you have questions, contact us at support@cboard.io
        </p>
      </div>
    `,
  };

  // Email to the admin team
  const adminMsg = {
    to: 'support@cboard.io',
    from: 'support@cboard.io',
    subject: `New Voice Cloning Application - ${displayName}`,
    text: `New Voice Cloning Application Received\n\nApplication ID: ${applicationId}\nSubmitted: ${submittedAt}\n\nPersonal Information:\nName: ${displayName}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nDate of Birth: ${dob || 'Not provided'}\nGender: ${gender || 'Not provided'}\nAddress: ${address || 'Not provided'}\nCity: ${city || 'Not provided'}\nCounty: ${county || 'Not provided'}\n\nAlternative Contact Information:\nContact Person: ${contactPersonName || 'Not provided'}\nContact Email: ${contactEmail || 'Not provided'}\nContact Phone: ${contactPhone || 'Not provided'}\n\nMedical Information:\nPrimary Diagnosis: ${primaryDiagnosis || 'Not provided'}\nDate of Diagnosis: ${dateOfDiagnosis || 'Not provided'}\nHospital: ${hospital || 'Not provided'}\n\nSource: ${source || 'Voice Cloning Application'}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #ff6b35;">New Voice Cloning Application</h2>
        <p><strong>Application ID:</strong> ${applicationId}</p>
        <p><strong>Submitted:</strong> ${submittedAt}</p>
        
        <h3 style="color: #2196F3;">Personal Information</h3>
        <ul>
          <li><strong>Name:</strong> ${displayName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
          <li><strong>Date of Birth:</strong> ${dob || 'Not provided'}</li>
          <li><strong>Gender:</strong> ${gender || 'Not provided'}</li>
          <li><strong>Address:</strong> ${address || 'Not provided'}</li>
          <li><strong>City:</strong> ${city || 'Not provided'}</li>
          <li><strong>County:</strong> ${county || 'Not provided'}</li>
        </ul>
        
        <h3 style="color: #2196F3;">Alternative Contact Information</h3>
        <ul>
          <li><strong>Contact Person:</strong> ${contactPersonName || 'Not provided'}</li>
          <li><strong>Contact Email:</strong> ${contactEmail || 'Not provided'}</li>
          <li><strong>Contact Phone:</strong> ${contactPhone || 'Not provided'}</li>
        </ul>
        
        <h3 style="color: #2196F3;">Medical Information</h3>
        <ul>
          <li><strong>Primary Diagnosis:</strong> ${primaryDiagnosis || 'Not provided'}</li>
          <li><strong>Date of Diagnosis:</strong> ${dateOfDiagnosis || 'Not provided'}</li>
          <li><strong>Hospital:</strong> ${hospital || 'Not provided'}</li>
        </ul>
        
        <p><strong>Source:</strong> ${source || 'Voice Cloning Application'}</p>
      </div>
    `,
  };

  try {
    // Send confirmation email to applicant
    await sgMail.send(applicantMsg);

    // Send notification email to admin team
    await sgMail.send(adminMsg);

    console.log(`Voice cloning application emails sent for ${displayName} (${email}) - Application ID: ${applicationId}`);

    return res.status(200).json({
      message: 'Voice cloning application submitted successfully',
      applicationId,
      displayName,
      email
    });
  } catch (error) {
    console.error('Email sending error:', error.message);
    if (error.response) {
      console.error('SendGrid Error Response:', error.response.body);
    }
    return res.status(500).json({
      message: 'Failed to send application emails: ' + error.message
    });
  }
}
