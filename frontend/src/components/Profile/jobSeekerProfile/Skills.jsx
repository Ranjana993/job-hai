/* eslint-disable react/prop-types */



const SkillsSection = ({ skills }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold">Skills</h2>
    <ul className="flex flex-wrap mt-2">
      {skills.map((skill, index) => (
        <li key={index} className="bg-gray-200 text-gray-700 px-4 py-2 m-2 rounded-full">
          {skill}
        </li>
      ))}
    </ul>
  </div>
);
export default SkillsSection