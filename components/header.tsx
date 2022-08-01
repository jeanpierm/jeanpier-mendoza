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
  { label: 'Resume', href: '/resume.pdf', target: '__blank' },
];

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1 className="">
          <a href="#">JM</a>
        </h1>
        <ul className="header-menu">
          {options.map(({ href, label, target }, i) => (
            <li key={i}>
              <a href={`${href}`} target={target}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        header {
          position: fixed;
          width: 100%;
          background-color: var(--bg-header);
          color: var(--color-header);
          z-index: 999;
        }

        .header-content {
          display: flex;
          padding-left: 2rem;
          padding-right: 2rem;
          justify-content: space-between;
          align-items: center;
        }

        .header-menu {
          display: flex;
        }

        .header-menu li {
          padding-left: 3rem;
          list-style: none;
        }

        a:hover,
        a:focus,
        a:active {
          color: var(--primary);
        }

        @media (prefers-color-scheme: dark) {
          header {
            background-color: rgb(32, 33, 45);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
