'use client';
import { useState, FormEvent } from "react";
import axios from "axios"

const ContactForm: React.FC = () => {
  // State for form fields
 // State for form fields
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});

// Handle input change
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { id, value } = e.target;
  setFormData((prevState) => ({
    ...prevState,
    [id]: value,
  }));
};

// Handle form submit
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  try {
    const response = await axios.post('/api/sendEmail',formData, {
      // method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form after submission
    } else {
      alert('Failed to send message.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while sending the message.');
  }
};
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-gray-700">Your Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700">Your Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-700">Your Message</label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
