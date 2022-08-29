import Link from 'next/link';
import { useState } from 'react';
import { contact } from '../core/data/contact.data';
import GithubIcon from '../components/icons/GithubIcon';
import LinkedInIcon from '../components/icons/LinkedInIcon';

interface Option {
  label: string;
  href: string;
  target?: string;
}

export const options: Option[] = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Open projects', href: '#projects' },
  { label: 'About me', href: '#about-me' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '/jeanpier-mendoza-resume.pdf', target: '__blank' },
];

const HamburgerIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      {/* Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License -
      https://fontawesome.com/license (Commercial License) Copyright 2022
      Fonticons, Inc. */}
      <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
    </svg>
  );
};

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="options">
          <span id="jm">
            <a href="#">JM</a>
          </span>

          <button
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <HamburgerIcon />
          </button>

          <ul className={isNavExpanded ? 'menu expanded' : 'menu'}>
            {options.map(({ href, label, target }, i) => (
              <li key={i}>
                <a
                  href={`${href}`}
                  target={target}
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="contacts">
          <a className="contact" href={contact.github} target="__blank">
            <GithubIcon />
          </a>
          <a className="contact" href={contact.linkedIn} target="__blank">
            <LinkedInIcon alt={1} />
          </a>
        </div>
      </nav>

      <style jsx>{`
        header {
          position: fixed;
          width: 100%;
          background-color: var(--bg-header);
          z-index: 999;
        }

        .navbar {
          display: flex;
          padding: 1rem 2rem;
          justify-content: space-between;
          align-items: center;
        }

        .resume-button {
          border: 1px solid black;
          padding: 0.4rem 0.8rem;
          border-radius: 0.3rem;
        }

        .contacts {
          display: flex;
          align-items: center;
        }

        .menu {
          display: flex;
          background-color: white;
          padding-left: 0;
        }

        .menu li {
          list-style: none;
          padding-left: 3rem;
        }

        .options {
          display: flex;
          align-items: center;
        }

        .contact:not(:last-child) {
          margin-right: 2rem;
        }

        .hamburger {
          border: 0;
          height: 40px;
          width: 40px;
          padding: 0.5rem;
          cursor: pointer;
          background-color: var(--bg-header);
          position: absolute;
          top: 50%;
          left: 25px;
          transform: translateY(-50%);
          display: none;
        }

        #jm {
          font-size: 1.5rem;
          font-weight: 700;
        }

        @media (prefers-color-scheme: dark) {
          header {
            background-color: var(--bg-header-dark);
          }

          .hamburger {
            background-color: var(--bg-header-dark);
          }

          .resume-button {
            border-color: white;
          }

          .resume-button:hover {
            border-color: var(--primary-dark);
          }

          .menu {
            background-color: var(--bg-header-dark);
          }
        }

        @media screen and (max-width: 44em) {
          #jm {
            display: none;
          }

          .hamburger {
            display: block;
          }

          .menu {
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            height: calc(100vh - 60px);
            border-top: 1px solid white;
            display: none;
            margin: 0;
          }

          .menu li {
            text-align: center;
            margin: 0;
            padding-left: 0 !important;
            padding: 1rem 0;
          }

          .menu.expanded {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
