import React from 'react';
import JobList from '../components/JobList';
import Banner from '../components/Banner';
import PopularSearchedJob from '../components/PopularSearchedJob';
import Hiring from '../components/Hiring';
import JobOpenings from '../components/JobOpening';
import About from '../components/About';
import Partner from '../components/Partners';
import Testimonial from '../components/Testimonial';
import JobSection from '../components/JobSection';

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularSearchedJob />
      <JobOpenings />
      <About />
      {/* <Hiring /> */}
      <Partner />
      <JobSection />
      <Testimonial />
    </div>
  );
};

export default Home;
