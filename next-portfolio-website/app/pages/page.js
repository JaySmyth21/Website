// ./pages/index.js

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Next.js Website</h1>
      <p>This is the homepage of my website.</p>
      <ul>
        <li><Link href="/about"><a>About</a></Link></li>
        <li><Link href="/contact"><a>Contact</a></Link></li>
      </ul>
    </div>
  );
};

export default HomePage;
