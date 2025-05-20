import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CoursesSection from '@/components/CoursesSection';
import AboutSection from '@/components/AboutSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';

const Index = () => {
  return (
    <div className="min-h-screen bg-graphite text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <AboutSection />
      <CtaSection />
      <Footer />
      
      {/* Countdown Timer */}
      <div className="fixed bottom-4 left-4 z-50">
        <CountdownTimer />
      </div>
    </div>
  );
};

export default Index;
