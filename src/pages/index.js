import React from 'react';
import Layout from '@theme/Layout';

function Home() {
  return (
    <Layout>
      <header className="hero">
        <div className="container">
          <h1>Willkommen auf meiner Landing Page!</h1>
          <p>Hero-Bereich </p> 
          <p>Deine Call-to-Action hier.</p>
        </div>
      </header>
      <section className="features">
        <div className="container">
          <div className="feature">
            <h2>Warum Uns Wählen?</h2>
            <p>Einige Gründe, die deine Besucher überzeugen sollen.</p>
            <p>Informationen über das Unternehmen, Mission, Team</p>   
          </div>
          <div className="feature">
            <h2>Unsere Leistungen</h2>
            <p>Beschreibe hier, was du anbietest und warum es einzigartig ist.</p>
          </div>
        </div>
      </section>
      <section className="image-block">
        <div className="container">
          <h2 className="section-title">Unsere Einrichtungen</h2>
          <div className="image-container">
            <img src="/img/facility1.jpg" alt="Einrichtung 1" />
            <img src="/img/facility2.jpg" alt="Einrichtung 2" />
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Was Unsere Kunden Sagen</h2>
          <div className="testimonial">
            <p>"Ein großartiger Service! Hat unsere Erwartungen übertroffen."</p>
            <p>- Kunde 1</p>
          </div>
          <div className="testimonial">
            <p>"Sehr professionell und effizient. Empfehle es jedem!"</p>
            <p>- Kunde 2</p>
          </div>
        </div>
      </section>
      <section className="newsletter">
        <div className="container">
          <h2 className="section-title">Abonniere Unseren Newsletter</h2>
          <p>Erhalte die neuesten Updates direkt in deine Inbox.</p>
          <form>
            <label>
              Deine E-Mail:
              <input type="email" name="email" />
            </label>
            <button type="submit" className="cta-button">Abonnieren</button>
          </form>
        </div>
      </section>
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Kontaktiere Mich</h2>
          <p>Hast du Fragen oder möchtest mehr erfahren? Kontaktiere uns gerne!</p>
          <button className="cta-button">Kontakt</button>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
