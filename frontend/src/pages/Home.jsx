import React from 'react';
import JobList from '../components/JobList';
import Banner from '../components/Banner';
import PopularSearchedJob from '../components/PopularSearchedJob';

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularSearchedJob />
    </div>
  );
};

export default Home;
