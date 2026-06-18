const fs = require('fs');

try {
  let html = fs.readFileSync('../loyalist-site/site/public/index.html', 'utf8');

  // Extract body innerHTML
  let bodyStart = html.indexOf('<body');
  if (bodyStart === -1) throw new Error("Body tag not found");
  bodyStart = html.indexOf('>', bodyStart) + 1;
  
  let bodyEnd = html.indexOf('</body>');
  let body = html.slice(bodyStart, bodyEnd);

  // class -> className
  body = body.replace(/class=/g, 'className=');

  // for -> htmlFor
  body = body.replace(/for=/g, 'htmlFor=');

  // Close unclosed tags: img, input, br, hr
  body = body.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');
  body = body.replace(/<input([^>]*?)(?<!\/)>/g, '<input$1 />');
  body = body.replace(/<br([^>]*?)(?<!\/)>/g, '<br$1 />');
  body = body.replace(/<hr([^>]*?)(?<!\/)>/g, '<hr$1 />');

  // Remove HTML comments
  body = body.replace(/<!--[\s\S]*?-->/g, '');

  // Convert <a href="/something"> to <Link to="/something">
  body = body.replace(/<a([^>]*)href="(\/[a-z]+)"([^>]*)>([\s\S]*?)<\/a>/g, '<Link$1to="$2"$3>$4</Link>');

  // React specific SVG cases
  body = body.replace(/stroke-width/g, 'strokeWidth');
  body = body.replace(/stroke-linecap/g, 'strokeLinecap');
  body = body.replace(/stroke-linejoin/g, 'strokeLinejoin');

  // Replace data-parallax-speed with data-parallaxspeed to avoid react warnings, or just leave it since React 16+ supports custom data-*
  
  const jsx = `import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-background text-pure-white w-full overflow-hidden">
      ${body}
    </div>
  );
}
`;

  fs.writeFileSync('./src/pages/Home.jsx', jsx);
  console.log('Conversion successful!');
} catch (error) {
  console.error('Error during conversion:', error);
}
