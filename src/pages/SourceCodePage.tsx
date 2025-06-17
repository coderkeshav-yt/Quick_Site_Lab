import React from 'react';
import { Helmet } from 'react-helmet';
import SourceCodeProducts from '../components/sections/SourceCodeProducts';

const SourceCodePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Source Code Packages | Launchory</title>
        <meta name="description" content="Browse our collection of premium source code packages. Purchase once, use forever." />
      </Helmet>

      <div id="products" className="container mx-auto px-4 py-16">
        <SourceCodeProducts />
      </div>
    </>
  );
};

export default SourceCodePage;
