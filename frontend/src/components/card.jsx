import React from 'react'


// sample data
const cardData = [
    {
        title: "Academic City University",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        image: "./academic-city.jpeg",
        link: "#"
    },
    {
        title: "University of Ghana",
        description: "Discover the latest updates and insights from the University of Ghana.",
        image: "./ug.jpeg",
        link: "#"
    },
    {
        title: "Kwame Nkurumah University of Science and Technology",
        description: "Explore the academic and social life at Ashesi University.",
        image: "./knust.jpeg",
        link: "#"
    },
    {
        title: "Academic City University",
        description: "Get to know about the innovative programs at Academic City University.",
        image: "./academic-city.jpeg",
        link: "#"
    }
];

const Card = ({ title, description, image, link }) => (

            <div className='p-4 min-w-lg'>
                <div className="max-w-sm bg-white border h-96 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105 delay-150 duration-300 ease-in-out">
                    <a href={link}>
                        <img className="rounded-t-lg w-full h-48 object-cover" src={image} alt={title} />
                    </a>
                    <div className='p-5'>
                        <a href={link}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">{title}</h5>
                        </a>
                        <p className="text-sm font-normal text-gray-700 dark:text-gray-400 overflow-hidden text-ellipsis">{description}</p>
                        <a href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>


            
    
    );

    const CardList = () => (
        <div className='px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
          {cardData.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} image={card.image} link={card.link} />
          ))}
        </div>
      );


export default CardList
