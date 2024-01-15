import React from 'react';
import Layout from '@theme/Layout';

function Podcast() {
  return (
    <Layout title="Titel der Episode 1">
      <div>
        <h1>Titel der Episode 1</h1>
        <h2>Beschreibung</h2>
        <p>Hier können Sie eine kurze Beschreibung Ihrer Podcast-Episode hinzufügen.</p>
        <h2>Shownotes</h2>
        <ul>
          <li>Punkt 1</li>
          <li>Punkt 2</li>
          <li>Punkt 3</li>
        </ul>
        <h2>Transkript</h2>
        <p>Hier können Sie das vollständige Transkript Ihrer Podcast-Episode hinzufügen.</p>
        <h2>Hören Sie die Episode</h2>
        <p>Fügen Sie hier den Link zu Ihrer Podcast-Episode hinzu.</p>
      </div>
    </Layout>
  );
}

export default Podcast;
