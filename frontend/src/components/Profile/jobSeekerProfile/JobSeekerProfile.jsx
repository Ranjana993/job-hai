import React, { useState, useEffect } from 'react';
import ProfileSection from './ProfileSection';
import ResumeSection from './ResumeSection';
import EducationSection from './Education';
import ExperienceSection from './Experience';
import SkillsSection from "./Skills";

const JobSeekerProfile = () => {
  const [profile, setProfile] = useState({
    bio: '',
    skills: [],
    experience: [],
    education: [],
    resume: ''
  });

  useEffect(() => {
    // Mock profile data for testing the UI
    const mockProfileData = {
      bio: 'A passionate software engineer with experience in building web applications using modern technologies.',
      skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'CSS', 'HTML'],
      experience: [
        {
          title: 'Frontend Developer',
          company: 'Tech Solutions Inc.',
          location: 'New York, NY',
          from: '2021-06-01',
          to: '2023-08-31',
          current: false,
          description: 'Developed and maintained the front-end of various web applications using React.js and TailwindCSS.'
        },
        {
          title: 'Junior Software Engineer',
          company: 'WebWorks',
          location: 'San Francisco, CA',
          from: '2019-08-01',
          to: '2021-05-31',
          current: false,
          description: 'Assisted in the development of backend services and APIs using Node.js and Express.'
        }
      ],
      education: [
        {
          school: 'University of California, Berkeley',
          degree: 'Bachelor of Science in Computer Science',
          fieldOfStudy: 'Computer Science',
          from: '2015-09-01',
          to: '2019-06-30',
          current: false,
          description: 'Graduated with honors, focusing on software engineering and full-stack web development.'
        }
      ],
      resume: 'https://example.com/my-resume.pdf'
    };

    setProfile(mockProfileData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Job Seeker Profile</h1>
      <ProfileSection title="Bio" content={profile.bio} />
      <SkillsSection skills={profile.skills} />
      <ExperienceSection experience={profile.experience} />
      <EducationSection education={profile.education} />
      <ResumeSection resume={profile.resume} />
    </div>
  );
};

export default JobSeekerProfile;
