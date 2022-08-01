import Link from 'next/link';
import { contact } from '../core/data/home.data';
import GithubIcon from './github-icon';
import LinkedInIcon from './linkedin-icon';
import MailIcon from './mail-icon';
import SectionTitle from './section-title';
import StackOverFlowIcon from './StackOverFlowIcon';

const Contact = () => {
  return (
    <section className="home-section" id="contact">
      <div className="container">
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
                <LinkedInIcon />
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
