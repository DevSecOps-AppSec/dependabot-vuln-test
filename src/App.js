
import React, { useState } from 'react';
import _ from 'lodash';
import axios from 'axios';
import marked from 'marked';
import serialize from 'serialize-javascript';

export default function App() {
  const [md, setMd] = useState("# Hello world\nThis repo exists to trigger **Dependabot**.");
  const [html, setHtml] = useState("");

  const renderMarkdown = () => {
    // Intentionally uses old 'marked' without sanitization (do NOT copy to production)
    setHtml(marked(md));
  };

  const demoAxios = async () => {
    try {
      // Old axios version; request will likely fail but is here to keep the dep visible
      await axios.get('/api/ping');
      alert('Axios request attempted');
    } catch (e) {
      console.log('Demo axios error:', e?.message);
    }
  };

  const serializeExample = () => {
    const payload = { time: Date.now(), data: _.shuffle([1,2,3,4,5]) };
    alert('Serialized: ' + serialize(payload));
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
      <h1>Dependabot Vulnerable Test App</h1>
      <p><strong>Warning:</strong> This app intentionally uses outdated, vulnerable dependencies for testing.</p>

      <textarea
        rows={6}
        cols={60}
        value={md}
        onChange={(e) => setMd(e.target.value)}
        style={{ display: 'block', marginBottom: 12 }}
      />

      <button onClick={renderMarkdown} style={{ marginRight: 8 }}>Render Markdown (unsafe)</button>
      <button onClick={demoAxios} style={{ marginRight: 8 }}>Demo Axios</button>
      <button onClick={serializeExample}>Serialize Example</button>

      <div style={{ marginTop: 24 }}>
        <h2>Rendered (unsafe):</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
