/* eslint-disable react/prop-types */



const ResumeSection = ({ resume }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold">Resume</h2>
    {resume ? (
      <a href={resume} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        View Resume
      </a>
    ) : (
      <p className="text-gray-700">No resume uploaded.</p>
    )}
  </div>
);


export default ResumeSection