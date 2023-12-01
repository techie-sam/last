// 'use client';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
// import img from 'next/image';
// import a from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react';

const navLinks = ['Home', 'Services', 'About', 'Contact Us', 'FAQS'];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const pathname = useRouter();
  // const [navbarColor, setNavbarColor] = useState(
  //   pathname === '/' ? 'transparent' : 'white'
  // );
  // const [activeNav, setActiveNav] = useState('home');
  // const [isOpen, setIsOpen] = useState(false);

  // const checkPathAndSetNavLink = (link) => {
  //   let href = `/#${link.split(' ')[0].toLowerCase()}`;

  //   if (pathname === '/') {
  //     href =
  //       link.toLowerCase() === 'process'
  //         ? ''
  //         : '#' + link.split(' ')[0].toLowerCase();
  //   }
  //   return href;
  // };

  // useEffect(() => {
  //   if (pathname === '/') {
  //     const handleScroll = () => {
  //       const scrollHeight = window.scrollY;
  //       const changeNavbarColorHeight = 100;

  //       if (scrollHeight > changeNavbarColorHeight) {
  //         setNavbarColor('white');
  //       } else {
  //         setNavbarColor('transparent');
  //       }
  //     };

  //     window.addEventListener('scroll', handleScroll);
  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  //   }
  // });

  return (
    <nav
      className={`transition-all delay-150 fixed w-full z-20 top-0 left-0  border-gray-200 bg-gray-50`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:py-5">
        <a href="https://lylaminds.com/" className="flex items-center">
          <span className="self-center text-xl text-[#2060a8] font-semibold whitespace-nowrap">
            NEXT GEN
          </span>
        </a>
        <div className="flex md:order-2">
          {/* Contact us link */}
          <a
            href="#contact"
            className="text-white hidden md:block bg-[#1c5698] hover:bg-secondary transition-all delay-100 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
          >
            Book Now
          </a>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg  md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-476 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            {navLinks.map((link) => {
              return (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className={`block py-2 pl-3 pr-4 text-gray-900  rounded md:bg-transparent  md:p-0 `}
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Small Devices Navbar */}
        {isOpen && (
          <div
            className={`fixed flex top-0 left-0 z-40 h-screen sm:hidden  shadow-gray-500 shadow-xl transition-all`}
          >
            <div className="w-[64vw] py-5 bg-white">
              <div className="flex justify-between">
                <a
                  href={'https://lylaminds.com'}
                  className="p-3 flex  text-primary font-extrabold"
                >
                  <img
                    src="/logo.png"
                    width={200}
                    height={200}
                    className="h-5 w-5 md:w-8 md:h-8 mx-2"
                    alt="Lylaminds Logo"
                  />
                </a>
                <button type="button">
                  <small className="sr-only">Close Menu</small>
                  <FontAwesomeIcon icon={faTimes} className="p-3" />
                </button>
              </div>
              <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                {navLinks.map((link) => {
                  // const href = checkPathAndSetNavLink(link);
                  return (
                    <li key={link}>
                      <a
                        href={`/${link.toLowerCase()}`}
                        className={`block py-2 pl-3 pr-4 text-gray-900  rounded md:bg-transparent   md:p-0 `}
                        // onClick={() => setIsOpen(false)}
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div
              className="h-full w-[36vw] backdrop-blur-15 bg-nav flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Close Menu</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
