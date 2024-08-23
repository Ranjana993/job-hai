import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    name: "Shiwangi Singla",
    rating: 4.5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "https://justcamp-gatsby.netlify.app/static/content-1-img2-02ed4d234703e1b92a15d027ba0e6315.jpg"
  },
  {
    name: "Shiwangi Singla",
    rating: 4.5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    image: "https://cdn.pixabay.com/photo/2020/04/19/18/46/company-5064997_1280.jpg"
  },
  {
    name: "Shiwangi Singla",
    rating: 4.5,
    text: "Thanks Apna for helping me find a job without much hassle. If you are a fresher or a skilled person with expert knowledge in a specific field, you can easily find a job through the Apna app.",
    image: "https://pixlr.com/images/index/ai-image-generator-one.webp"
  },
  {
    name: "Shiwangi Singla",
    rating: 4.5,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    image: "https://apna.co/_next/image?url=https%3A%2F%2Fcdn.apna.co%2Fcloudinary%2FHomepageRevampAssets%2Fshiwangi-singla.png&w=1920&q=75"
  },
  {
    name: "Shiwangi Singla",
    rating: 4.5,
    text: "Thanks Apna for helping me find a job without much hassle. If you are a fresher or a skilled person with expert knowledge in a specific field, you can easily find a job through the Apna app.On the other hand. ",
    image: "https://cdn.pixabay.com/photo/2020/04/19/18/46/company-5064997_1280.jpg"
  },
  {
    name: "Jenil Ghevariya",
    rating: 4.5,
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
    image: "https://apna.co/_next/image?url=https%3A%2F%2Fcdn.apna.co%2Fcloudinary%2FHomepageRevampAssets%2Fshiwangi-singla.png&w=1920&q=75"
  }
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className="bg-green-800 p-6 sm:p-10 mt-4">
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

      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true} // Enable auto-play
        autoPlaySpeed={3000} // Adjust speed as needed
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {
          testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-4 h-72 mr-12 sm:p-6 mx-2 rounded-lg shadow-lg" // Adjusted mx-2 to give a consistent horizontal margin
            >
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
          ))
        }
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
