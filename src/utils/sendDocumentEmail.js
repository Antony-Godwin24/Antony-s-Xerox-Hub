import emailjs from '@emailjs/browser';

export const sendDocumentEmail = async (from_name, reply_to, files) => {
  // Convert files to base64 strings
  const filesBase64 = await Promise.all(
    files.map(file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]); // only Base64 content
      reader.onerror = err => reject(err);
      reader.readAsDataURL(file);
    }))
  );

  const templateParams = {
    from_name,
    reply_to,
    to_email: 'antonygodwin08@gmail.com', // your receiving email
    files: filesBase64 // EmailJS template {{#each files}}
  };

  return emailjs.send(
    'service_sur83ih',
    'template_1y0kl4a',
    templateParams,
    'ih17ZMLd8MM7biW4d'
  );
};
