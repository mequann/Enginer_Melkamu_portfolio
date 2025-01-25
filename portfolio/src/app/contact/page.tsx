

import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 mt-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
      <p className="text-lg text-gray-700 mb-6">Feel free to get in touch with us. We'd love to hear from you!</p>
      
      {/* Include the ContactForm component */}
      <ContactForm />
    </section>
  );
};

export default ContactPage;
