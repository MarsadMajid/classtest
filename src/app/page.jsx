import React from 'react';
import Bigcard from './(components)/bigcard';
import Navbar from './(components)/Navbar';

const App = () => {
  return (
    <>
      <div className="font-sans">
   
        <main>
          <Navbar/>
            <Bigcard/>
          <section className="bg-gray-100">
            <div className="container mx-auto py-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-semibold mb-4">Our services</h3>
                <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
                <p className="text-gray-500 mt-4">We provide you the best choices for you. Adjust it to your health needs and make sure you undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Service Item 1 */}
                <div className="bg-white p-6 rounded-md shadow-md">
                  <div className="mb-4">
                    <img src="/service-icon-1.png" alt="service icon" className="w-12 h-12" />
                  </div>
                  <h5 className="text-lg font-semibold mb-2">Search doctor</h5>
                  <p className="text-gray-500">Choose your doctor from thousands of specialist, general and trusted hospitals.</p>
                </div>

                {/* Service Item 2 */}
                <div className="bg-white p-6 rounded-md shadow-md">
                  <div className="mb-4">
                    <img src="/service-icon-2.png" alt="service icon" className="w-12 h-12" />
                  </div>
                  <h5 className="text-lg font-semibold mb-2">Online pharmacy</h5>
                  <p className="text-gray-500">Buy your medicines with our mobile application with a simple delivery system.</p>
                </div>

                {/* Service Item 3 */}
                <div className="bg-white p-6 rounded-md shadow-md">
                  <div className="mb-4">
                    <img src="/service-icon-3.png" alt="service icon" className="w-12 h-12" />
                  </div>
                  <h5 className="text-lg font-semibold mb-2">Consultation</h5>
                  <p className="text-gray-500">Free consultation with our trusted doctors and get the best recommendations.</p>
                </div>

                {/* Add more service items as needed */}
              </div>

              <div className="flex justify-center mt-8">
                <button type="button" className="btn btn-primary-outline">Learn more</button>
              </div>
            </div>
          </section>

          <section className="bg-gray-800 text-white">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
                <div className="mb-8">
                  <img src="/health-care-img.png" alt="Healthcare Providers" className="w-full rounded-md shadow-md" />
                </div>
                <div>
                  <div className="mb-4">
                    <h3 className="text-3xl font-semibold">Leading healthcare providers</h3>
                    <div className="w-16 h-1 bg-blue-500"></div>
                  </div>
                  <p className="text-gray-300">Medimoor provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver</p>
                  <button type="button" className="btn btn-white-outline mt-4">Learn more</button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-100">
            <div className="container mx-auto py-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-semibold mb-4">Download our mobile apps</h3>
                <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
                <p className="text-gray-500 mt-4">Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely</p>
              </div>

              <div className="flex justify-center">
                <button type="button" className="btn btn-primary-outline">
                  Download
                  <img src="/arrow-down.svg" alt="Download Arrow" className="ml-2" />
                </button>
              </div>
            </div>
          </section>

          {/* Continue with the remaining sections */}
          {/* ... (more sections) */}
        </main>

        <footer className="bg-gray-800 text-white">
          <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Footer Logo and Text */}
            <div className="mb-8">
              <a href="#" className="text-lg font-semibold flex items-center">
                <span>M</span>
                <span>Medimoor</span>
              </a>
              <p className="text-gray-300">Medimoor provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
              <p className="text-gray-300">&copy; Medimoor PTY LTD 2023. All rights reserved.</p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="footer-links">
                <li><a href="#">About</a></li>
                <li><a href="#">Find a doctor</a></li>
                <li><a href="#">Apps</a></li>
              </ul>
            </div>

            {/* Region Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Region</h3>
              <ul className="footer-links">
                <li><a href="#">Indonesia</a></li>
                <li><a href="#">Singapore</a></li>
                <li><a href="#">Hongkong</a></li>
                <li><a href="#">Canada</a></li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="footer-links">
                <li><a href="#">Help center</a></li>
                <li><a href="#">Contact support</a></li>
                <li><a href="#">Instructions</a></li>
                <li><a href="#">How it works</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
