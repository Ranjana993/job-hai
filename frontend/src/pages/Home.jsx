import React from 'react';
import JobList from '../components/JobList';
import Banner from '../components/Banner';
import PopularSearchedJob from '../components/PopularSearchedJob';
import Hiring from '../components/Hiring';
import JobOpenings from '../components/JobOpening';

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularSearchedJob />
      <JobOpenings />
      {/* <Hiring /> */}
    </div>
  );
};

export default Home;
