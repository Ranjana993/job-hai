/* eslint-disable react/prop-types */


const EducationSection = ({ education }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold">Education</h2>
    {education.map((edu, index) => (
      <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h3 className="text-lg font-semibold">{edu.degree} in {edu.fieldOfStudy}</h3>
        <p className="text-gray-600">{edu.school}</p>
        <p className="text-gray-600">{new Date(edu.from).toLocaleDateString()} - {edu.current ? 'Present' : new Date(edu.to).toLocaleDateString()}</p>
        <p className="text-gray-700 mt-2">{edu.description}</p>
      </div>
    ))}
  </div>
);

export default EducationSection