import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 bg-black text-white" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <span>your@email.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-400" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span>San Francisco, CA</span>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            ></textarea>
            <button className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}