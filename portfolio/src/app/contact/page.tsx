import ContactForm from '../components/ContactForm';
import { FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 mt-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>
      <p className="text-lg text-gray-700 mb-6 text-center">Feel free to get in touch with us. We'd love to hear from you!</p>

      <div className='flex flex-col md:flex-row gap-8'>
        {/* Contact Info Section */}
        <div className='flex flex-col gap-6 w-full md:w-1/2'>
          <div className='flex items-center'>
           
          <FaMapMarker size={24}
           //@ts-ignore
           className="text-blue-500 inline-block mr-4"  
           />
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Address</h4>
              <p className="text-gray-600">123 Main Street, City, Country</p>
            </div>
          </div>

          <div className='flex items-center'>
            <FaEnvelope size={24}
             //@ts-ignore
             className="text-blue-500 inline-block mr-4" 
             />
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Email Address</h4>
              <p className="text-gray-600">0b3tM@example.com</p>
            </div>
          </div>

          <div className='flex items-center'>
            <FaPhone size={24} 
            //@ts-ignore 
            className="text-blue-500 inline-block mr-4" 
            />
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Phone Number</h4>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="mt-6">
            <h4 className="font-semibold text-lg text-gray-800">Our Location</h4>
            <div className="overflow-hidden rounded-lg shadow-md mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31522.7443667228!2d38.755859866732926!3d9.032437912406246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8595f57edab7%3A0x803be3de4da75b9a!2z4Yqg4YqV4Yu14YqQ4Ym1IOGNk-GIreGKrQ!5e0!3m2!1sam!2set!4v1737880984270!5m2!1sam!2set"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className='w-full md:w-1/2'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
