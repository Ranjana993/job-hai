/* eslint-disable react/prop-types */

const JobOpening = ({ logo, title, description }) => {
  return (
    <>
      <div className="w-[99%] bg-red-400 rounded overflow-hidden p-8 shadow-lg m-4">
        <img className="w-24" src={logo} alt={`${title} logo`} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-green-500 text-white px-3 py-1 rounded">View jobs</button>
        </div>
      </div>
    </>

  );
};

export default JobOpening;
