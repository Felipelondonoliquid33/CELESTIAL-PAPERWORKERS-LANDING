import React from 'react';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#003366] hover:text-[#4F97A3] transition-all duration-300 transform hover:scale-110"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 p-4 sm:p-6 md:p-8 lg:p-12 w-full">
      <div className="container mx-auto text-center flex flex-col items-center gap-3 sm:gap-4">
        <div className="flex gap-4 sm:gap-6">
          <SocialIcon href="#">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </SocialIcon>
          <SocialIcon href="#">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </SocialIcon>
           <SocialIcon href="#">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.062-.327-.019-1.011.044-1.49.09-1.07.644-4.53 1.258-6.726.54-1.92 3.13-8.117 3.13-8.117s-.86-.68-1.74-.68c-1.62 0-2.83 1.21-2.83 2.66 0 1.58.98 2.78 2.22 2.78 1.05 0 1.55-.77 1.55-1.69 0-.98-.58-1.71-1.32-1.71-.97 0-1.77.9-1.77 2.12 0 .78.29 1.35.66 1.35.31 0 .46-.43.34-.97-.13-.59-.39-1.22-.39-1.65 0-.9.62-1.65 1.76-1.65 1.48 0 2.57 1.09 2.57 2.92 0 2.9-1.84 5.03-4.47 5.03-2.91 0-4.63-2.2-4.63-5.06 0-2.18 1.52-3.92 3.6-3.92 1.74 0 2.71 1.02 2.71 2.24 0 1.07-.46 2.52-.72 3.73-.25 1.14.93 2.08 2.07 2.08 2.5 0 4.18-3.15 4.18-6.52 0-3.41-2.9-5.96-6.62-5.96-4.52 0-7.36 3.39-7.36 7.05 0 2.45 1.15 4.29 2.75 4.29.58 0 1.16-.31 1.38-.68.09-.15.17-.32.22-.48a.793.793 0 0 0 .15-.65c-.09-.37-.21-1-1.55-1H12c-.5 0-.58-.55-.58-1.12 0-.9 1-2.12 1-2.12s2.5-10.75 2.5-10.75c0 0 .5-.5.5-1 0-.5-.5-1-.5-1s-1.5 0-1.5 1c0 0-2.5 10.75-2.5 10.75s-1 4.5-1 4.5c0 .5.5 1 .5 1s1.5 0 1.5-1c0 0 1-4.5 1-4.5s.5-2.5.5-2.5c0-.5.5-1 .5-1s.5.5.5 1c0 0-1 4.5-1 4.5s-1 4.5-1 4.5c0 .5.5 1 .5 1s1.5 0 1.5-1c0 0 1-4.5 1-4.5z" clipRule="evenodd" />
            </svg>
          </SocialIcon>
        </div>
        <p className="font-semibold text-xs sm:text-sm md:text-base text-[#003366] px-4">
          &copy; {new Date().getFullYear()} Celestial Paperworkers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
