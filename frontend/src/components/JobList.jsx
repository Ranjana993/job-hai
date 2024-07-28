import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      // const res = await axios.get('/api/jobs');
      // setJobs(res.data);
    };
    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      {jobs.map(job => (
        <div key={"job._id"} className="border p-4 mb-4">
          <h2 className="text-xl font-bold">{job.title}</h2>
          <p>{"job.description"}</p>
          <p>{"job.salary"}</p>
          <p>{"job.location"}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
