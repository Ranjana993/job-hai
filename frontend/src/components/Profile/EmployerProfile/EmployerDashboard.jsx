import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployerDashBorad = () => {
  const [profile, setProfile] = useState({
    companyName: '',
    website: '',
    location: '',
    industry: '',
    description: '',
    founded: '',
    contactInfo: {
      email: '',
      phone: '',
      address: '',
    },
    jobPostings: []
  });

  useEffect(() => {
    // Dummy data for testing
    const dummyData = {
      companyName: 'Tech Innovators Inc.',
      website: 'https://techinnovators.com',
      location: 'San Francisco, CA',
      industry: 'Software Development',
      description: 'We innovate and create cutting-edge software solutions.',
      founded: '2010-05-15',
      contactInfo: {
        email: 'contact@techinnovators.com',
        phone: '+1 234 567 890',
        address: '123 Innovation Drive, San Francisco, CA',
      },
      jobPostings: [
        {
          title: 'Frontend Developer',
          description: 'We are looking for a skilled frontend developer...',
          location: 'San Francisco, CA',
          salary: '$100,000'
        },
        {
          title: 'Backend Developer',
          description: 'We need a backend developer with experience in Node.js...',
          location: 'Remote',
          salary: '$110,000'
        }
      ]
    };
    setProfile(dummyData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Employer Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-xl font-semibold">Company Details</h2>
        <p><strong>Company Name:</strong> {profile.companyName}</p>
        <p><strong>Website:</strong> <a href={profile.website} className="text-blue-500">{profile.website}</a></p>
        <p><strong>Location:</strong> {profile.location}</p>
        <p><strong>Industry:</strong> {profile.industry}</p>
        <p><strong>Description:</strong> {profile.description}</p>
        <p><strong>Founded:</strong> {new Date(profile.founded).toLocaleDateString()}</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-xl font-semibold">Contact Information</h2>
        <p><strong>Email:</strong> {profile.contactInfo.email}</p>
        <p><strong>Phone:</strong> {profile.contactInfo.phone}</p>
        <p><strong>Address:</strong> {profile.contactInfo.address}</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold">Job Postings</h2>
        <ul className="list-disc ml-6">
          {profile.jobPostings.map((posting, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{posting.title}</h3>
              <p><strong>Description:</strong> {posting.description}</p>
              <p><strong>Location:</strong> {posting.location}</p>
              <p><strong>Salary:</strong> {posting.salary}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployerDashBorad;
