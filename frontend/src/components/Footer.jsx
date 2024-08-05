import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className='text-start text-white font-poppins'>
      <div className='pt-16 pb-12 text-sm border-t border-slate-200 bg-[#1D292E] font-poppins '>
        <div className='sm:container px-3 mx-auto'>
          <div className='grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12'>
            <div className='col-span-4 md:col-span-8 lg:col-span-4' aria-labelledby='footer-header' >
              <Link
                id='WindUI-5-logo'
                aria-label='WindUI logo'
                aria-current='page'
                className='flex items-center gap-2 mb-3 text-base font-medium leading-6 whitespace-nowrap focus:outline-none text-white hover:text-white'
                to='#'
              >
                <img src={"Inspiration_APP"} className='h-12 sm:h-16 transform hover:rotate-180 transition duration-200 ease-in-out rounded-full bg-[#f7f7f7]' alt='' />
                <p className='font-poppins font-extrabold text-xl'> Job hai APP </p>
              </Link>
              <p className='text-left'>Get Job at your preference . </p>
            </div>
            <nav className='col-span-2 md:col-span-4 lg:col-span-2 bg-transparent'>
              <h3 className='mb-6 text-base font-medium text-white' id='footer-product-5-logo'>Product  </h3>
              <ul>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white ' >
                    Features
                  </Link>
                </li>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white ' >
                    Customers
                  </Link>
                </li>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white '>
                    Why us?
                  </Link>
                </li>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white '>
                    Pricing
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className='col-span-2 md:col-span-4 lg:col-span-2'>
              <h3 className='mb-6 text-base font-medium text-white' id='footer-docs-5-logo'> Docs & Help  </h3>
              <ul>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white ' >
                    Documentation
                  </Link>
                </li>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white ' >
                    Training
                  </Link>
                </li>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white ' >
                    System status
                  </Link>
                </li>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white '>
                    FAQ&apos;s
                  </Link>
                </li>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white '>
                    Help Center
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className='col-span-2 md:col-span-4 lg:col-span-2'>
              <h3 className='mb-6 text-base font-medium text-white' id='footer-about-5-logo'> About us</h3>
              <ul>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white'>
                    About us
                  </Link>
                </li>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white'>Careers </Link>
                </li>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white' > Leadership</Link>
                </li>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white ' >Blog</Link>
                </li>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white ' >Events</Link>
                </li>
              </ul>
            </nav>
            <nav className='col-span-2 md:col-span-4 lg:col-span-2'>
              <h3 className='mb-6 text-base font-medium text-white'>Get in touch </h3>
              <ul>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white ' > Contact</Link>
                </li>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white '>Support </Link>
                </li>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white '>Partners</Link>
                </li>
                <li className='mb-2 leading-6'>
                  <Link to='#' className='transition-colors duration-300 hover:text-white ' >Join research </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
