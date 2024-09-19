import React from 'react'

// sample data
const cardData = [
    {
      title: "Academic City University",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      image: "./academic-city.jpeg",
      population: 1300,
      acceptanceRate: 23,
      populationPercentage: 85,
      acceptanceRatePercentage: 23,
      link: "#"
    },
    {
      title: "University of Ghana",
      description: "Discover the latest updates and insights from the University of Ghana.",
      image: "./ug.jpeg",
      population: 2000,
      acceptanceRate: 45,
      populationPercentage: 95,
      acceptanceRatePercentage: 45,
      link: "#"
    },
    {
      title: "Kwame Nkurumah University of Science and Technology",
      description: "Explore the academic and social life at Kwame Nkurumah University of Science and Technology.",
      image: "./knust.jpeg",
      population: 800,
      acceptanceRate: 30,
      populationPercentage: 70,
      acceptanceRatePercentage: 30,
      link: "#"
    },
    {
      title: "Academic City University",
      description: "Get to know about the innovative programs at Academic City University.",
      image: "./academic-city.jpeg",
      population: 1500,
      acceptanceRate: 20,
      populationPercentage: 80,
      acceptanceRatePercentage: 20,
      link: "#"
    }
  ];

  const SearchCard = ({ title, description, image, population, acceptanceRate, populationPercentage, acceptanceRatePercentage, link }) => (
    <div className='p-4 min-w-lg'>
      <div className="max-w-sm bg-white border h-[32rem] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105 delay-150 duration-300 ease-in-out">
        <a href={link}>
          <img className="rounded-t-lg h-48 w-full object-cover" src={image} alt={title} />
        </a>
        <div className='p-5'>
          <a href={link}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">{title}</h5>
          </a>
          <p className="text-sm mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden text-ellipsis line-clamp-2">{description}</p>
  
          <div className='flex justify-between text-gray-500 text-sm mb-1'>
            <p>Population</p>
            <p>{population}</p>
          </div>
  
          <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
            <div className='h-2.5 bg-[#9F4942] rounded-full' style={{ width: `${populationPercentage}%` }}></div>
          </div>
  
          <div className='flex justify-between text-gray-500 text-sm mb-1 mt-7'>
            <p>Accp Rate</p>
            <p>{acceptanceRate}%</p>
          </div>
  
          <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
            <div className='h-2.5 bg-blue rounded-full' style={{ width: `${acceptanceRatePercentage}%` }}></div>
          </div>
  
          <button type="button" className="mt-7 w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Read More</button>
        </div>
      </div>
    </div>
  );

    const SearchCardList = () => (
        <div className='px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
            {cardData.map((card, index) => (
            <SearchCard key={index} title={card.title} description={card.description} image={card.image} population={card.population} acceptanceRate={card.acceptanceRate} populationPercentage={card.populationPercentage} acceptanceRatePercentage={card.acceptanceRatePercentage} link={card.link} />
            ))}
        </div>
        );
  

export default SearchCardList
