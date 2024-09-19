import React from 'react'
import Header from '../components/header'
import SearchCardList from '../components/search_card'
import Footer from '../components/footer'

const UniversitySearch = () => {
    return (
        <div>
            <Header />

            <section className="relative py-12 bg-white sm:py-16 lg:py-20">
                <div className="absolute inset-0">
                    <img className="object-cover object-right w-full h-full lg:object-center" src="./uni-search-hero.jpeg" alt="" />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">University Search</h2>
                        <form className='max-w-md mx-auto'>
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full mt-4 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:border-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search Universities..." required />
                                {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                            </div>

                        </form>
                    </div>

                    {/* <button type="button" className="text-white bg-[#5A076F] hover:bg-purple-700 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-12 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button> */}
                </div>
            </section>


            <SearchCardList />

            <Footer />

        </div>
    )
}

export default UniversitySearch
