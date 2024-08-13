import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Shiwangi Singla",
    rating: 4.5,
    text: "Thanks Apna for helping me find a job without much hassle. If you are a fresher or a skilled person with expert knowledge in a specific field, you can easily find a job through the Apna app.",
    image: "https://apna.co/_next/image?url=https%3A%2F%2Fcdn.apna.co%2Fcloudinary%2FHomepageRevampAssets%2Fshiwangi-singla.png&w=1920&q=75"
  },
  {
    name: "Jenil Ghevariya",
    rating: 4.5,
    text: "This app is very helpful if you are looking for a job and the team is also very supportive and friendly. They guided me through every stage. It is very easy to find a job on Apna because there are a lot of job options here for everyone. I got a job interview call very quickly after applying.",
    image: "https://apna.co/_next/image?url=https%3A%2F%2Fcdn.apna.co%2Fcloudinary%2FHomepageRevampAssets%2Fshiwangi-singla.png&w=1920&q=75"
  }
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="bg-violet-600/80 p-6 sm:p-10 mt-4">
      <div className="text-white mb-6">
        <div className="flex items-center space-x-2">
          <img src="https://storage.googleapis.com/mumbai_apnatime_prod/apna-home/inverted-quote.png" alt="" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mt-4">
          Join the community of 5 crore satisfied job seekers...
        </h1>
        <div className="flex lg:flex-row flex-col mt-4">
          <p className="w-full">Play Store Ratings</p> <br />
          <div className="flex  text-yellow-400">
            <span className="material-icons">⭐</span>
            <span className="material-icons">⭐</span>
            <span className="material-icons">⭐</span>
            <span className="material-icons">⭐</span>
            <span className="material-icons">⭐</span>
          </div>
        </div>
      </div>

      <Slider {...settings} className="mt-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.image}
                alt="User profile"
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
              />
              <div>
                <h3 className="text-md sm:text-lg lg:text-xl font-bold">
                  {testimonial.name}
                </h3>
                <div className="flex items-center text-yellow-400">
                  {Array.from({ length: Math.floor(testimonial.rating) }, (_, i) => (
                    <span key={i} className="material-icons">⭐</span>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <span className="material-icons">⭐</span>
                  )}
                </div>
              </div>
            </div>
            <p className="mt-4 text-gray-700 text-sm sm:text-base lg:text-lg">
              {testimonial.text}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
