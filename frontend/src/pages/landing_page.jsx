import React from 'react' 
import Header from '../components/header'
import Footer from '../components/footer'
import CardList from '../components/card'


const Landingpage = () => {
  return (
    <div>
      <Header />

      <section className="relative py-12 bg-white sm:py-16 lg:py-20">
      <div className="absolute inset-0">
            <img className="object-cover object-right w-full h-full lg:object-center" src="./hero-unigh.jpeg" alt="" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-40">
            <div className="text-left">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Higher education <br></br> at your doorstep</h2>
              <p className="mt-3 max-w  mx-auto text-lg text-white sm:mt-4">Explore your future with us now. No more waiting</p>
            </div>

            <button type="button" className="text-white bg-purple hover:bg-purple-700 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-12 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button>     
        </div>
      </section>

      <section>
        <div className='justify-center'>
        <h2 className="text-3xl font-bold text-center mt-10 px-4 sm:text-4xl">Find the <a className="underline decoration-[#FFC107]">university</a> of your <a className="underline decoration-[#FF3D00]">dreams</a></h2>
        <CardList />
        </div>
       
      </section>

      <section className='bg-[#051F60C4] sm:mt-6 lg:mt-8 mt-12 max-w-full px-4 sm:px-6 lg:px-8'>
        <div className='justify-center my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row'>
            <div className='sm:text-center lg:text-left'>
            <h2 className="text-3xl tracking-tight font-bold mt-10 sm:text-4xl text-white">Get Funded Now</h2>
            <p className='mt-3 text-base text-white sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0'>
            Your path to tertiary education is clearer <br /> than ever.  Explore scholarships the <br />numerous scholarships available now.
            </p>

            <button type="button" className="text-[#051F60C4] bg-white hover:bg-gray-200 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-8">See More</button>


            </div>
            <div className='lg:inset-y-0 lg:right-0 lg:w-1/2 my-4 sm:ml-0 md:ml-0 lg:ml-28'>
                <img className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-72 rounded-md' src="./student.jpeg" alt="" />
            </div>

        </div>
      </section>


      <section className='sm:mt-6 lg:mt-8 mt-12 max-w-full px-4 sm:px-6 lg:px-8'>
        {/* <div className='my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row'> */}
            <div className='text-center'>
            <h2 className="text-3xl tracking-tight font-bold mt-10 sm:text-4xl">Excited about University?</h2>

            <button type="button" className="text-white bg-purple hover:bg-purple-hover focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-8">Join our community</button>


            {/* </div> */}
            
            {/* <div className='z-20 lg:inset-y-0 lg:right-0 lg:w-1/2 my-4'>
                <img className='h-56 w-full object-cover sm:h-72 md:h-96 sm:hidden lg:block rounded-md' src="./student.jpeg" alt="" />
            </div> */}  

        </div>
      </section>
     


      <Footer />
    </div>
  )
}

export default Landingpage
