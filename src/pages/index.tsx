import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Product from '../components/Product';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-5 overflow-hidden`}>
      <div className={`relative bg-background md:grid md:grid-cols-2`}>
        <div className="mx-auto md:col-span-1">
          <div
            className={`relative pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:pb-20 xl:pb-20`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <div className="lg:col-span-1 md:h-full md:w-full md:flex">
          <MainHeroImage />
        </div>
      </div>
      <LazyShow>
        <>
          <Product />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
