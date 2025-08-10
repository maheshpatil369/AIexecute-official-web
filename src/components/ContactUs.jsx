import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // In a real app, you would handle form submission here (e.g., API call)
    console.log('Form data submitted:', formData);
    setTimeout(() => {
      setStatus('Message Sent!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000); // Clear status after 3 seconds
    }, 1500);
  };

  return (
    <div className="w-full text-white px-4 py-24 md:px-8 lg:px-16" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Get In <span className="rainbow-text">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-purple-400" size={24} />
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href="mailto:contact@aiexecute.com" className="text-gray-400 hover:text-purple-300 transition-colors">
                    contact@aiexecute.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-purple-400" size={24} />
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <span className="text-gray-400">(+91) 123-456-7890</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-purple-400" size={24} />
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <span className="text-gray-400">Navi Mumbai, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-40"></div>
            <form
              onSubmit={handleSubmit}
              className="relative p-8 space-y-6 rounded-xl bg-black/80 backdrop-blur-sm border border-white/10"
            >
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="5"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 relative overflow-hidden text-white font-semibold py-3 px-10 rounded-lg border border-white/30 transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:border-white/60 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={status === 'Sending...'}
                >
                  <Send size={20} />
                  <span>{status === 'Sending...' ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>
              {status && status !== 'Sending...' && (
                 <p className="text-center text-green-400 font-semibold">{status}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
