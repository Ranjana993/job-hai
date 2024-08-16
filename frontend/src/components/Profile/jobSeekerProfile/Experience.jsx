/* eslint-disable react/prop-types */



const ExperienceSection = ({ experience }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold">Experience</h2>
    {experience.map((exp, index) => (
      <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h3 className="text-lg font-semibold">{exp.title} at {exp.company}</h3>
        <p className="text-gray-600">{exp.location}</p>
        <p className="text-gray-600">{new Date(exp.from).toLocaleDateString()} - {exp.current ? 'Present' : new Date(exp.to).toLocaleDateString()}</p>
        <p className="text-gray-700 mt-2">{exp.description}</p>
      </div>
    ))}
  </div>
);
export default ExperienceSection