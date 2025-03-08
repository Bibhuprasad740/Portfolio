import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Header = () => {
  return (
    <div className="mb-16 text-center relative">
      <h1 className="text-6xl font-bold mb-6 animated-gradient">
        Bibhu Prasad Sahoo
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-gray-600 mb-8">
        <a href="tel:+917735605546" className="flex items-center gap-2 hover:text-blue-600 transition-all duration-300 px-6 py-2.5 rounded-full hover:bg-white/80 hover:shadow-lg hover:scale-105 dark:hover:text-gray-300 dark:hover:bg-gray-800 glass-card group">
          <Phone className="group-hover:rotate-12 transition-transform" size={18} />
          <span>+91 7735605546</span>
        </a>
        <a href="mailto:bibhuprasadsahoojobs@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-all duration-300 px-6 py-2.5 rounded-full hover:bg-white/80 hover:shadow-lg hover:scale-105 dark:hover:text-gray-300 dark:hover:bg-gray-800 glass-card group">
          <Mail className="group-hover:-rotate-12 transition-transform" size={18} />
          <span>bibhuprasadsahoojobs@gmail.com</span>
        </a>
        <a href="https://linkedin.com" className="flex items-center gap-2 hover:text-blue-600 transition-all duration-300 px-6 py-2.5 rounded-full hover:bg-white/80 hover:shadow-lg hover:scale-105 dark:hover:text-gray-300 dark:hover:bg-gray-800 glass-card group">
          <Linkedin className="group-hover:scale-110 transition-transform" size={18} />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com" className="flex items-center gap-2 hover:text-blue-600 transition-all duration-300 px-6 py-2.5 rounded-full hover:bg-white/80 hover:shadow-lg hover:scale-105 dark:hover:text-gray-300 dark:hover:bg-gray-800 glass-card group">
          <Github className="group-hover:rotate-180 transition-transform duration-500" size={18} />
          <span>GitHub</span>
        </a>
        <span className="flex items-center gap-2 px-6 py-2.5 rounded-full dark:hover:text-gray-300 dark:hover:bg-gray-800 glass-card group">
          <MapPin className="group-hover:bounce transition-transform" size={18} />
          <span>Cuttack, India</span>
        </span>
      </div>
      <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-gradient-x"></div>
    </div>
  );
};

export default Header;