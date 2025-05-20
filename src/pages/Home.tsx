import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Treatments from '../components/Treatments';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Treatments />
      <Testimonials />
    </>
  );
}

export default Home;