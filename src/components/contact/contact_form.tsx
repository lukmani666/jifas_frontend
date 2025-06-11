'use client';
import React, { useState } from 'react';
import { 
  HiOutlineLocationMarker, 
  HiOutlinePhone, 
  HiOutlineMail, 
  HiOutlineClock,
  HiOutlinePaperAirplane
} from 'react-icons/hi';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [hoveredButton, setHoveredButton] = useState<'call' | 'email' | null>(null);


  const contactInfo = [
    {
      icon: HiOutlineLocationMarker,
      title: 'Address',
      details: ['Plot 3, New Oluyole Industrial Estate, Felele, Ibadan, Oyo State. Nigeria.'],
      color: 'text-blue-600'
    },
    {
      icon: HiOutlinePhone,
      title: 'Phone',
      details: ['+2348033485373', '+2348023034727'],
      color: 'text-green-600'
    },
    {
      icon: HiOutlineMail,
      title: 'Email',
      details: ['just.farms@yahoo.com', 'info@jifasltd.com'],
      color: 'text-purple-600'
    },
    {
      icon: HiOutlineClock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 8:00 AM - 1:00 PM', 'Sun: Closed'],
      color: 'text-orange-600'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would normally send the data to your API
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#2E2E2E] mb-4">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-[#2C2C2C] max-w-3xl mx-auto">
            Have questions about our products or services? We&apos;d love to hear from you. 
            Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#2E2E2E] mb-6">
                Contact Information
              </h3>
              <p className="text-[#2C2C2C] mb-8">
                Reach out to us through any of the following channels. We&apos;re here to help!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 ${info.color}`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#2E2E2E] mb-2">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-[#2C2C2C] text-sm sm:text-base">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="bg-gray-200 rounded-lg h-48 sm:h-64 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253486.32210193374!2d3.3479572867187435!3d6.9235856000000044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bd093fb4b51e1%3A0xe9cccf07ab6122ee!2sDerivatives%20Industries%20Limited!5e0!3m2!1sen!2sng!4v1749633249247!5m2!1sen!2sng"
                  className="w-full h-full rounded-lg border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2E2E2E] mb-6">
              Send us a Message
            </h3>

            <div className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#2B4B38] rounded-lg focus:ring focus:ring-[#2B4B38] focus:border-transparent transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#2B4B38] rounded-lg focus:ring focus:ring-[#2B4B38] focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone and Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#2B4B38] rounded-lg focus:ring focus:ring-[#2B4B38] focus:border-transparent transition-colors duration-200"
                    placeholder="+234 123 456 7890"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#2B4B38] rounded-lg focus:ring focus:ring-[#2B4B38] focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="products">Product Information</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="support">Customer Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-[#2B4B38] rounded-lg focus:ring focus:ring-[#2B4B38] focus:border-transparent transition-colors duration-200 resize-vertical"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full cursor-pointer bg-[#2B4B38] hover:bg-[#233d2d] disabled:bg-[#cbe9d7] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <HiOutlinePaperAirplane className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    ✅ Message sent successfully! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">
                    ❌ There was an error sending your message. Please try again.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#2E2E2E] mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-gray-600 mb-6">
              For urgent inquiries, please call us directly or visit our office during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+2348033485373"
                className={`font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${
                  hoveredButton === 'email' 
                    ? 'bg-transparent text-[#2B4B38] border border-[#2B4B38]' 
                    : 'bg-[#2B4B38] hover:bg-transparent hover:text-[#2B4B38] hover:border hover:border-[#2B4B38] text-white'
                }`}
                onMouseEnter={() => setHoveredButton('call')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Call Now: +2348033485373
              </a>
              <a 
                href="mailto:info@jifasltd.com"
                className={`font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${
                  hoveredButton === 'call' 
                    ? 'bg-[#2B4B38] text-white' 
                    : 'bg-transparent hover:bg-[#2B4B38] hover:text-white border border-[#2B4B38] text-[#2B4B38]'
                }`}
                onMouseEnter={() => setHoveredButton('email')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                Email: info@jifasltd.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;