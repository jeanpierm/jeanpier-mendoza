import Link from 'next/link';
import { contact } from '../core/data/home.data';
import GithubIcon from './icons/GithubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import MailIcon from './icons/MailIcon';
import SectionTitle from './SectionTitle';
import StackOverFlowIcon from './icons/StackOverFlowIcon';

const Contact = () => {
  return (
    <section className="home-section" id="contact">
      <div className="container center">
        <SectionTitle title="Contact" />
        <div>
          <span className="contact">
            <Link href={contact.github}>
              <a target="_blank">
                <GithubIcon />
              </a>
            </Link>
          </span>
          <span className="contact">
            <Link href={contact.linkedIn}>
              <a target="_blank">
                <LinkedInIcon alt={1} />
              </a>
            </Link>
          </span>
          <span className="contact">
            <Link href={contact.stackOverFlow}>
              <a target="_blank">
                <StackOverFlowIcon />
              </a>
            </Link>
          </span>
          <span className="contact">
            <a href={`mailto:${contact.email}`}>
              <MailIcon />
            </a>
          </span>
        </div>
      </div>
      <style jsx>{`
        .contact:not(:last-child) {
          margin-right: 2rem;
        }
      `}</style>
    </section>
  );
};

export default Contact;
