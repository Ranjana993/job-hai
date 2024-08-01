/* eslint-disable react/prop-types */

const JobOpening = ({ logo, title, description }) => {
  return (
    <>
      <div className="w-[90%] border hover:border-red-500 rounded-2xl h-72 bg-white pr-6 shadow-xl  overflow-hidden p-8  m-6">
        <img className="w-24" src={logo} alt={"logo"}  />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-[#1F8268] text-white px-6 py-2 hover:bg-[#04966f] hover:font-bold rounded">View jobs</button>
        </div>
      </div>
    </>

  );
};

export default JobOpening;
