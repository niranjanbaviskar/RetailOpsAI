import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image01 from '../../data/frontPageImage.png';
// import Image02 from '../data/scm-overview.png';
// import Image03 from '../data/diagram-of-supply-chain-management-vector-41707175.jpg';
// import Image04 from '../data/guarantee-100-percent-label-sign-for-banner-vector-40973993.jpg';



function Home() {
  const [top, setTop] = useState(true);

  // Detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.pageYOffset <= 10);
    };

    window.addEventListener("scroll", scrollHandler);
    
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="home font-roboto">
        <section class="w-full px-8 text-gray-700 bg-white">
            <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                <div class="relative flex flex-col md:flex-row items-center">
                    <a href="#_" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" fill='#00000'>
                            <path d="M36,4H14C8.477,4,4,8.477,4,14v22c0,5.523,4.477,10,10,10h22c5.523,0,10-4.477,10-10V14C46,8.477,41.523,4,36,4z M14.869,39.252c-0.84-0.587-6.333-4.256-6.333-4.256l4.116-5.04l2.559,1.827c0.951,1.536,2.298,3.699,2.931,4.649 c0.632,0.948,0.931,2.78,0.985,3.346l0.073,0.759C17.964,40.778,16.399,40.312,14.869,39.252z M24.664,35.752L20.8,39.616 c0,0-0.252-2.605-1.26-4.116c-1.008-1.511-3.948-6.3-3.948-6.3c-1.26-2.016-1.428-4.032-0.42-5.04l3.36-3.36 c0,0,0.756,1.848,1.764,3.528c1.092,1.764,3.948,6.384,3.948,6.384C25.504,32.728,25.672,34.744,24.664,35.752z M25.927,28.78 c0,0-0.569-0.307-1.357-0.736c-0.925-1.496-2.196-3.552-2.846-4.601c-0.914-1.524-1.63-3.263-1.638-3.28l-0.148-0.36 c1.026-0.236,2.423,0.327,3.972,1.295c0.03,0,0.54,0.283,1.242,0.685c0.953,1.541,2.34,3.768,2.985,4.737 c0.854,1.353,1.473,3.258,1.478,3.277l0.07,0.218C28.621,30.104,27.258,29.668,25.927,28.78z M34.66,25.84l-3.444,3.444 c0,0-0.673-2.1-1.68-3.695c-1.008-1.512-3.948-6.3-3.948-6.3c-1.26-2.016-1.428-4.032-0.42-5.04l3.864-3.864 c0,0,0.252,2.352,1.26,4.032C31.384,16.18,34.24,20.8,34.24,20.8C35.5,22.816,35.668,24.832,34.66,25.84z M37.516,19.96 l-3.213-2.252l-2.583-4.176c-0.65-1.085-0.957-2.773-1.018-3.33l-0.114-1.029c1.244-0.44,2.973-0.004,4.656,1.291 c0.84,0.589,6.388,4.456,6.388,4.456L37.516,19.96z"></path>
                        </svg>   
                    </a>
                    
                    <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200 no-underline">
                        <a href="#_" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 no-underline">Home</a>
                        <a href="/shop" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 no-underline">Shop</a>
                        <a href="/contact" class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 no-underline">Contact Us</a>
                    </nav>
                </div>

                <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end mt-14 mb-4"> {/* reduced mb-10 to mb-4 */}
                    <a href="/login" class="no-underline inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        Login
                    </a>
                </div>
            </div>
        </section>

        <section class="px-2 py-6 bg-white md:px-0"> {/* reduced py-32 to py-24 */}
            <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                <div class="flex flex-wrap items-center sm:-mx-3">
                    <div class="w-full md:w-1/2 md:px-3">
                        <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                            <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                <span class="block xl:inline">We make your work</span>
                                <span class="block text-indigo-600 xl:inline"> Easier And Faster.</span>
                            </h1>
                            <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">We finetune your supply chain processes and provide support where needed.</p>
                            <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                                <a href="#_" class=" no-underline flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                                    Try It Free
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </a>
                                <a href="#_" class=" no-underline flex items-center w-full px-6 py-3 mb-3 text-lg text-black rounded-md sm:mb-0 sm:w-auto hover:bg-gray-200 hover:text-gray-600">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 mb-10">
                        <div class="w-full h-auto overflow-hidden rounded-md sm:rounded-xl" style={{ marginBottom: '-10px', marginTop: '0px' }}>
                            <img src={Image01} alt="Image01" /> 
                        </div>  
                    </div>
                </div>
            </div>
        </section>



        <section class="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
            <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

            
                <div class="box-border relative w-full max-w-md px-4 mt-3 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                    <img src="https://img.freepik.com/free-vector/worldwide-shipping-service-international-distribution-collaborative-logistics-supply-chain-partners-freight-cost-optimization-concept-pinkish-coral-bluevector-isolated-illustration_335657-1757.jpg?t=st=1730230571~exp=1730234171~hmac=b70bd4e3e6f4e04ca1f8a2b1ac6e621373a9d5a6a848fccb0edc4b7b37596eda&w=2000" class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "/>
                </div>

                <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                    <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl mb-2">
                        What We Do
                    </h2>
                    {/* <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                        Increase the productivity in your organization and your company culture.
                    </p> */}
                    <div class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                        Our creative and product development teams have the capability to create and deliver virtually anything that could be used to communicate with your employees.
                    </div>
                    <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl mt-4 mb-2">
                        Our Focus
                    </h2>
                    <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
                        <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-indigo-500 rounded-full"><span class="text-sm font-bold">✓</span></span> Process optimization.
                        </li>
                        <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-indigo-500 rounded-full"><span class="text-sm font-bold">✓</span></span> Production.
                        </li>
                        <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-indigo-500 rounded-full"><span class="text-sm font-bold">✓</span></span> Inventory.
                        </li>
                        <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-indigo-500 rounded-full"><span class="text-sm font-bold">✓</span></span> Planning.
                        </li>
                        {/* <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span class="text-sm font-bold">✓</span></span> Speed past your competition
                        </li>
                        <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span class="text-sm font-bold">✓</span></span> Learn the top techniques
                        </li> */}
                    </ul>
                </div>
            </div>
            <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

                <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32 mt-40">
                    <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                    Digital Transformation
                    </h2>
                    <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                    Speeding digitalisation lowers costs and streamlines operations
                    </p>
                    <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
                        <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-pink-600 rounded-full"><span class="text-sm font-bold">✓</span></span> Automated task management workflow
                        </li>
                        <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-pink-600 rounded-full"><span class="text-sm font-bold">✓</span></span> Detailed analytics for your data
                        </li>
                        <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-pink-600 rounded-full"><span class="text-sm font-bold">✓</span></span> Enhanced transparency
                        </li>
                    </ul>
                </div>


                <div class="box-border relative w-full max-w-md px-4 mt-20 mb-2 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2" style={{ marginTop: '100px' }}>
                    <img src="https://img.freepik.com/free-vector/handling-order-processing-illustration_335657-517.jpg?t=st=1730231386~exp=1730234986~hmac=f2baa7fa819f891d7062986961e544bb338bcf14ab2b89ddbdcf21c7d3908b2e&w=1380" class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"/>
                </div>
            </div>
        </section>


        <section class="py-20 bg-gray-10">
            <div class="container items-center max-w-6xl px-4  mx-auto sm:px-20 md:px-32 lg:px-16">
                <div class="flex flex-wrap items-center -mx-3">
                    <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                        <div class="w-full lg:max-w-md">
                            <h2 class="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">100% Customer Satisfaction</h2>
                                <p class="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">More benefits for you from our service with:</p>
                                <ul>
                                    <li class="flex items-center py-2 space-x-4 xl:py-3">
                                    <svg class="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                                    <span class="font-medium text-gray-500">Faster Processing and Delivery</span>
                                    </li>
                                    <li class="flex items-center py-2 space-x-4 xl:py-3">
                                    <svg class="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                                    <span class="font-medium text-gray-500">Order Tracking and Monitoring</span>
                                    </li>
                                    <li class="flex items-center py-2 space-x-4 xl:py-3">
                                    <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    <span class="font-medium text-gray-500">100% Protection and Security for Your orders</span>
                                    </li>
                                </ul>
                        </div>
                    </div>
                
                    <div class="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
                        <img class="mx-auto sm:max-w-sm lg:max-w-full" src="https://img.freepik.com/free-vector/logistics-industry-freight-profit-analyzing-supply-chain-analytics-transportation-providers-data-transportation-costs-optimization-concept-pinkish-coral-bluevector-isolated-illustration_335657-1759.jpg?t=st=1730203786~exp=1730207386~hmac=c3e09225552c1e0b4ed24bf3d965c5820c7ccce7cbe314aba7354f732ed59e03&w=2000" alt="Image04"/>
                    </div>
                </div>
            </div>
        </section>

        {/* about page of guests */}
        {/* <section class="flex items-center justify-center py-20 bg-white min-w-screen">
            <div class="px-16 bg-white">
                <div class="container flex flex-col items-start mx-auto lg:items-center">
                    <p class="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">Don't just take our word for it</p>


                    <h2 class="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block" viewBox="0 0 975.036 975.036">
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                        </path>
                    </svg>
                        See what others are saying</h2>
                        <div class="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

                    <div class="items-center justify-center w-full mt-12 mb-4 lg:flex">
                        <div class="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                            <div class="flex items-center justify-center">
                                <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                    <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80" class="object-cover w-full h-full"/>
                                </div>
                                <div class="flex flex-col items-start justify-center">
                                    <h4 class="font-bold text-gray-800">John Doe</h4>
                                    <p class="text-gray-600">CEO of Something</p>
                                </div>
                            </div>
                            <blockquote class="mt-8 text-lg text-gray-500">"This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!"</blockquote>
                        </div>
                        <div class="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                            <div class="flex items-center justify-center">
                                <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                    <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2547&amp;q=80" class="object-cover w-full h-full"/>
                                </div>
                                <div class="flex flex-col items-start justify-center">
                                    <h4 class="font-bold text-gray-800">Jane Doe</h4>
                                    <p class="text-gray-600">CTO of Business</p>
                                </div>
                            </div>
                            <blockquote class="mt-8 text-lg text-gray-500">"Thanks for creating this service. My life is so much
                                easier.
                                Thanks for making such a great product."</blockquote>
                        </div>
                        <div class="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                            <div class="flex items-center justify-center">
                                <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                                    <img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80" class="object-cover w-full h-full"/>
                                </div>
                                <div class="flex flex-col items-start justify-center">
                                    <h4 class="font-bold text-gray-800">John Smith</h4>
                                    <p class="text-gray-600">Creator of Stuff</p>
                                </div>
                            </div>
                            <blockquote class="mt-8 text-lg text-gray-500">"Packed with awesome content and exactly what I was
                                looking
                                for. I would highly recommend this to anyone."</blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
{/* 
        <section class="box-border py-8 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid sm:py-12 md:py-16 lg:py-24">
            <div class="box-border max-w-6xl px-4 pb-12 mx-auto border-solid sm:px-6 md:px-6 lg:px-4">
                <div class="flex flex-col items-center leading-7 text-center text-gray-900">
                    <h2 class="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                        Pricing Options
                    </h2>
                    <p class="box-border mt-4 text-2xl leading-normal text-gray-900 border-solid">
                        We've got a plan for companies of any size
                    </p>
                </div>
                <div class="grid max-w-md mx-auto mt-6 overflow-hidden leading-7 text-gray-900 border border-b-4 border-gray-300  rounded-xl md:max-w-lg lg:max-w-none sm:mt-10 lg:grid-cols-3">
                    <div class="box-border px-4 py-8 mb-6 text-center bg-white border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                        <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                            Basic
                        </h3>
                        <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">
                            The basic plan is a good fit for smaller teams and startups
                        </p>
                        <div class="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                            <p class="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                                $19
                            </p>
                            <p class="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                                per user <span class="block">per month</span>
                            </p>
                        </div>

                        <button class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded-md cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg">
                            Select Plan
                        </button>
                    </div>
                    <div class="box-border px-4 py-8 mb-6 text-center bg-gray-100 border border-gray-300 border-solid lg:mb-0 sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                        <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                            Plus
                        </h3>
                        <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">
                            The plus plan is a good fit for medium-size to larger companies
                        </p>
                        <div class="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                            <p class="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                                $39
                            </p>
                            <p class="box-border my-0 ml-4 mr-0 text-xs text-left border-0 border-gray-200">
                                per user <span class="block">per month</span>
                            </p>
                        </div>
                        <button class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border-b-4 border-blue-700 rounded cursor-pointer hover:text-white sm:text-base sm:mt-8 md:text-lg">
                            Select Plan
                        </button>
                    </div>
                    <div class="box-border px-4 py-8 text-center bg-white border-solid sm:px-4 sm:py-8 md:px-8 md:py-12 lg:px-10">
                        <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-solid sm:text-3xl md:text-4xl">
                            Pro
                        </h3>
                        <p class="mt-3 leading-7 text-gray-900 border-0 border-solid">
                            The pro plan is a good fit for larger and enterprise companies.
                        </p>
                        <div class="flex items-center justify-center mt-6 leading-7 text-gray-900 border-0 border-solid sm:mt-8">
                            <p class="box-border m-0 text-6xl font-semibold leading-normal text-center border-0 border-gray-200">
                                $59
                            </p>
                            <p class="box-border my-0 ml-4 mr-0 text-xs text-center border-0 border-gray-200">
                                per user <span class="block">per month</span>
                            </p>
                        </div>
                        <button class="inline-flex items-center justify-center w-full py-3 mt-6 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-b-2 border-blue-600 rounded cursor-pointer hover:bg-blue-600 hover:border-blue-600 hover:text-white sm:text-base sm:mt-8 md:text-lg">
                            Select Plan
                        </button>
                    </div>
                </div>
            </div>
        </section> */}

        <section class="bg-white">
            <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav class="flex flex-wrap justify-center -mx-5 -my-2">
                    <div class="px-5 py-2">
                        <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            About
                        </a>
                    </div>
                    <div class="px-5 py-2">
                        <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Blog
                        </a>
                    </div>
                    <div class="px-5 py-2">
                        <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Team
                        </a>
                    </div>
                    <div class="px-5 py-2">
                        <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Pricing
                        </a>
                    </div>
                    <div class="px-5 py-2">
                        <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Contact
                        </a>
                    </div>
                    <div class="px-5 py-2">
                        <a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Terms
                        </a>
                    </div>
                </nav>
                <div class="flex justify-center mt-8 space-x-6">
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Facebook</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Instagram</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Twitter</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">GitHub</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Dribbble</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
                <p class="mt-8 text-base leading-6 text-center text-gray-400">
                    © 2025 RetailOpsAI(niranjan baviskar), Inc. All rights reserved.
                </p>
            </div>
        </section>




        </div>
    );

}

export default Home;
