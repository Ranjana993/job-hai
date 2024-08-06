/* eslint-disable react/prop-types */

const JobSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-white overflow-hidden py-8 gap-6">
      {/* Image Section */}
      <div className="w-full md:w-[30%] lg:w-[50%] px-2">
        <img
          className="object-cover"
          src="https://justcamp-gatsby.netlify.app/static/content-1-img2-02ed4d234703e1b92a15d027ba0e6315.jpg"
          alt="logo"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full md:w-[70%]  lg:w-[]60% flex flex-col justify-start mt-4 md:mt-0 items-start px-4 md:px-8">
        <div className="font-bold text-4xl md:text-6xl mb-4">
          Help you to get the best job that fits you
        </div>
        <p className="text-gray-700 text-lg md:text-xl mt-4">
          Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approach.
        </p>
        <div className="mt-8">
          <ul className="text-base md:text-lg leading-9">
            <li>✅ Bring to the table win-win survival</li>
            <li>✅ Capitalize on low hanging fruit to identify</li>
            <li>✅ But I must explain to you how all this</li>
            <li>✅ Bring to the table win-win survival</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobSection;
