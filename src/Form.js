import React, { useState, useRef } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import { sendDocumentEmail } from './utils/sendDocumentEmail';

const Form = () => {
  const formRef = useRef();
  const [files, setFiles] = useState([]); // should always contain File objects
  const [status, setStatus] = useState({ success: null, message: '' });

  // Convert a File object to Base64
  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      if (!(file instanceof Blob)) {
        reject(new Error('Not a valid file'));
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files).slice(0, 5);
    setFiles(selectedFiles); // must be File objects
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.length === 0) {
      setStatus({ success: false, message: 'Please upload at least one document.' });
      return;
    }

    try {
      // Convert all files to Base64
      const base64Files = await Promise.all(
        files.map((file) => fileToBase64(file))
      );

      await sendDocumentEmail(
        formRef.current.from_name.value,
        formRef.current.reply_to.value,
        base64Files
      );

      setStatus({ success: true, message: 'Document sent successfully!' });
      formRef.current.reset();
      setFiles([]);
    } catch (error) {
      console.error(error);
      setStatus({ success: false, message: 'Failed to send. Try again later.' });
    }
  };

  return (
    <Box sx={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Upload Your Documents
      </Typography>

      <form ref={formRef} onSubmit={handleSubmit} style={{ maxWidth: 600, margin: '0 auto' }}>
        <TextField name="from_name" label="Your Name" fullWidth sx={{ mb: 2 }} required />
        <TextField name="reply_to" label="Your Email" type="email" fullWidth sx={{ mb: 2 }} required />

        <input
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.jpg,.png"
          onChange={handleFileChange}
          style={{ marginBottom: '20px' }}
        />
        <Typography sx={{ mb: 2 }}>{files.length} / 5 files selected</Typography>

        <Button type="submit" variant="contained" color="primary" disabled={files.length === 0}>
          Send to PrintCraft
        </Button>

        {status.message && (
          <Alert severity={status.success ? 'success' : 'error'} sx={{ mt: 3 }}>
            {status.message}
          </Alert>
        )}
      </form>
    </Box>
  );
};

export default Form;
