/* eslint-disable react/prop-types */



const ProfileSection = ({ title, content }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-gray-700 mt-2">{content}</p>
  </div>
);
export default ProfileSection