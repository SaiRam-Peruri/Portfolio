import React, { useState } from 'react';
import { Mail, Phone, MapPin, User, Building2, MessageSquareText } from 'lucide-react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAILJS_USER_ID
        )

      .then(() => {
        toast.success('Message sent successfully! 🚀');
        setFormData({ name: '', company: '', email: '', message: '' });
      })
      .catch(() => {
        toast.error('Something went wrong. Try again! ❌');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white px-4 md:px-20">
      <ToastContainer />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Let's Connect</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Have questions, collaborations, or just want to say hi? Drop a message and we’ll get back to you!
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-white shadow-xl rounded-2xl p-8 space-y-6 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800">Contact Information</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-center space-x-4">
                <Mail size={20} />
                <span>sairam.peruri.work@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={20} />
                <span>+1 (978) 726-6536</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin size={20} />
                <span>Lowell, MA, USA</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 space-y-6 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Field with icon */}
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none"
                required
              />
            </div>

            <div className="relative">
              <Building2 className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company (Optional)"
                className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none"
                required
              />
            </div>

            <div className="relative">
              <MessageSquareText className="absolute left-3 top-3.5 text-gray-400" size={18} />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Your Message"
                className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
