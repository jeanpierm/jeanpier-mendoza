import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Jeanpier Mendoza Website</p>
      <p>
        Made in Ecuador{' '}
        <Image
          priority
          src="/images/ecuador.png"
          height={16}
          width={30}
          objectFit="contain"
          alt="ecuador flag"
        />
      </p>

      <style jsx>{`
        .footer {
          display: flex;
          flex: 1;
          padding: 2rem 0;
          border-top: 1px solid #eaeaea;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          .footer {
            border-color: #414141;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
