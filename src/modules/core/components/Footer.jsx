import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';
import Logo from './Logo';

export default function Footer() {
  const footerLinks = [
    {
      title: 'Fitur',
      links: [
        { name: 'Validator Ide', path: '/validator' },
        { name: 'Panduan Bisnis', path: '/guide' },
        { name: 'Tips & Trik', path: '/tips' },
        { name: 'Template Bisnis', path: '/templates' },
        { name: 'Riset Pasar', path: '/market-research' },
        { name: 'Generator RBX76S', path: '/generator' },
      ]
    },
    {
      title: 'Bantuan',
      links: [
        { name: 'FAQ', path: '#' },
        { name: 'Kontak Kami', path: '#' },
        { name: 'Ketentuan Layanan', path: '#' },
        { name: 'Kebijakan Privasi', path: '#' },
      ]
    },
    {
      title: 'Hubungi Kami',
      isContact: true,
      contacts: [
        { icon: <FaEnvelope className="w-4 h-4" />, text: 'info@validatorbisnis.com' },
        { icon: <FaPhoneAlt className="w-4 h-4" />, text: '+62 21 1234 5678' },
        { icon: <FaMapMarkerAlt className="w-4 h-4" />, text: 'Jakarta, Indonesia' },
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook className="w-5 h-5" />, url: '#' },
    { icon: <FaTwitter className="w-5 h-5" />, url: '#' },
    { icon: <FaInstagram className="w-5 h-5" />, url: '#' },
    { icon: <FaLinkedin className="w-5 h-5" />, url: '#' },
  ];

  return (
    <footer className="bg-dark-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Aplikasi Validator Ide Bisnis dirancang untuk membantu Anda menganalisis ide bisnis, 
              memberikan panduan implementasi lengkap, dan mendukung pertumbuhan usaha melalui 
              teknologi terkini.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.isContact ? (
                  section.contacts.map((contact, contactIndex) => (
                    <li key={contactIndex} className="text-gray-300 flex items-start space-x-2">
                      <span className="mt-1 text-gray-400">{contact.icon}</span>
                      <span>{contact.text}</span>
                    </li>
                  ))
                ) : (
                  section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.path} 
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Validator Ide Bisnis. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Ketentuan Layanan
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}