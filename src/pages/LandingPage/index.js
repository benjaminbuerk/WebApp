import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const LandingPage = () => {
  return (
    <div style={styles.container}>
      {/* Willkommensblock */}
      <div style={{ ...styles.welcome }}>
        <header>
          <h1>Herzlich Willkommen!</h1>
          <p>Mein Name ist [Dein Name], ein erfahrener IT System Engineer mit 20 Jahren Berufserfahrung.</p>
        </header>
      </div>

      {/* Über Mich Block */}
      <div style={{ ...styles.aboutMe }}>
        <section>
          <h2>Über Mich</h2>
          <p>Als Senior System Engineer bei der BUSINESS IT AG liegt mein Fokus auf modernen Microsoft 365 Umgebungen und der Migration bestehender On-Premise-Systeme. Neben meiner beruflichen Tätigkeit bin ich Podcaster, Autor und Trainer im IT-Bereich.</p>
        </section>
      </div>

      {/* Podcast und Blog Block */}
      <div style={{ ...styles.podcastBlog }}>
        <section>
          <h2>Podcast und Blog</h2>
          <p>Ich moderiere den "IT as a Pro" Podcast, in dem wir spannende IT-Themen diskutieren. Außerdem schreibe ich regelmäßig für WindowsPro. Höre rein und lese mehr über die neuesten Entwicklungen in der IT-Welt.</p>
          {/* Hier könnten Links zu deinem Podcast und Blog eingefügt werden */}
        </section>
      </div>

      {/* Videokurs Block */}
      <div style={{ ...styles.videoCourse }}>
        <section>
          <h2>Videokurs "Exchange Online für Administratoren"</h2>
          <p>Entdecke meinen Videokurs bei der Heise-Academy und erweitere dein Wissen über Exchange Online für Administratoren.</p>
          {/* Hier könnte ein Link zu deinem Videokurs eingefügt werden */}
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
