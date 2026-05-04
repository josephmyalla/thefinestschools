import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

interface FormData {
  name: string;
  email: string;
  photo: string | null;
}

//const GOOGLE_SCRIPT_URL = 'YOUR_WEB_APP_URL_HERE';

const ApplicationTest: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    photo: null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, photo: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // 1. Send text data to Google Sheets
    // try {
    //   await fetch(GOOGLE_SCRIPT_URL, {
    //     method: 'POST',
    //     mode: 'no-cors', // Important for GAS
    //     body: JSON.stringify({ name: formData.name, email: formData.email }),
    //   });
    // } catch (err) {
    //   console.error('Error saving to sheet:', err);
    // }

    // 2. Generate and download PDF locally
    const doc = new jsPDF();
    doc.text(`Name: ${formData.name}`, 10, 10);
    doc.text(`Email: ${formData.email}`, 10, 20);

    if (formData.photo) {
      doc.addImage(formData.photo, 'JPEG', 10, 30, 50, 50);
    }

    doc.save('application-form.pdf');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData((prev) => ({ ...prev, name: e.target.value }))
        }
        required
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        required
      />
      <button type="submit">Submit & Download PDF</button>
    </form>
  );
};

export default ApplicationTest;