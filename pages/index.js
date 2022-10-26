import Head from 'next/head'
import {BsFillMoonFill} from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Image from 'next/image'
import devdel from '../public/abel-oua.jpeg'
import design from '../public/1.png'
import code from '../public/2.png'
import consulting from '../public/3.png'
import { useState } from 'react'
import web1 from "../public/nft2.jpg";
import web2 from "../public/movies.png";
import web3 from "../public/explore.png";
import web5 from "../public/nft3.png";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>D3vD3l Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/devdelLogoBlack.png" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-20 py-4 md:py-4 lg:py-4 dark:bg-gray-900  border-4 border-teal-400'>

        <section className="min-h-screen">
          <nav className='py-6 mb-12 flex justify-between'>
            <a href="#"><h1 className='text-xl text-gray-700 font-Changa font-semibold dark:text-gray-100'>D3vD3l</h1></a>
            <ul className='flex items-center'>
              <li><BsFillMoonFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl text-gray-800 dark:text-white' /></li>
              <li><a href='https://drive.google.com/file/d/1x1ZvFSkvvXo5rsv8DcYo4JtNiO4lh-GH/view?usp=sharing' target="_blank"><button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-4 py-2 ml-6 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Resume</button></a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className=' md:text-5xl text-3xl py-2 text-teal-600 font-medium'>Abdelhadi El Ouaraguli</h2>
            <h3 className='md:text-xl text:md py-1 dark:text-white'>Full Stack Web3 Developer</h3>
            <p className='md:text-md text-sm py-3 leading-5 text-gray-600 dark:text-gray-300'> I’m looking to collaborate on startups which wanna change the life of our society with the help of web3 tech.</p>


            <div className='relative mt-10 w-40 h-40 lg:w-40 lg:h-40 mx-auto'>
              <Image className='rounded-full' src={devdel} />
            </div>

            <div className='text-xl flex justify-center gap-4 py-6 text-gray-700'>
              <a href='https://twitter.com/aelouragli' target='_blank'><AiFillTwitterCircle className='text-2xl cursor-pointer hover:text-teal-500 dark:text-white dark:hover:text-teal-300' /></a>
              <a href='https://github.com/devdelX' target='_blank'><AiFillGithub className='text-2xl cursor-pointer hover:text-teal-500 dark:text-white dark:hover:text-teal-300' /></a>
              <a href='https://linkedin.com/in/abdelprod/' target='_blank'><AiFillLinkedin className='text-2xl cursor-pointer hover:text-teal-500 dark:text-white dark:hover:text-teal-300' /></a>
            </div>


          </div>
        </section>

        <section>
          <div className='text-center'>
            <h3 className='text-4xl pt-10 py-2 text-teal-600 font-medium'>Services I offer</h3>
            {/* <p className='text-md py-2 leading-5 text-gray-700 dark:text-white'>test test test test test test tets tets tets tets tets test etst tet tets tets tet</p> */}
          </div>

          <div className='lg:flex gap-10 py-10'>
            <div className='text-center shadow-lg dark:shadow-md p-10 rounded-xl my-10 hover:bg-teal-500 hover:text-white dark:shadow-slate-700 '>
              <Image src={design} width={100} height={100} />
              <h3 className='text-lg text-medium pt-6 pb-2 dark:text-white'>Design & UI/UX</h3>
              <p className='py-2 dark:text-gray-300'>Modern UI UX website design or psd website mockup</p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="py-1 dark:text-gray-300">Photoshop</p>
              <p className="py-1 dark:text-gray-300">Illustrator</p>
              <p className="py-1 dark:text-gray-300">Figma</p>
            </div>
            <div className='text-center shadow-lg dark:shadow-md p-10 rounded-xl my-10 hover:bg-teal-500 hover:text-white dark:shadow-slate-700'>
              <Image src={code} width={100} height={100} />
              <h3 className='text-lg text-medium pt-6 pb-2 dark:text-white'>Web Development</h3>
              <p className='py-2 dark:text-gray-300'>Web development in React js, Javascript and Node.js</p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="py-1 dark:text-gray-300">Next/React, Node.Js</p>
              <p className="py-1 dark:text-gray-300">Bootstrap, TailwindCSS</p>
              <p className="py-1 dark:text-gray-300">MongoDB, PostgreSQL</p>
            </div>
            <div className='text-center shadow-lg dark:shadow-md p-10 rounded-xl my-10 hover:bg-teal-500 hover:text-white dark:shadow-slate-700'>
              <Image src={consulting} width={100} height={100} />
              <h3 className='text-lg text-medium pt-6 pb-2 dark:text-white'>Smart Contract Dev</h3>
              <p className='py-2 dark:text-gray-300'>NFT minting website, smart contract and web3 integration</p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="py-1 dark:text-gray-300">HTML, CSS, JavaScript</p>
              <p className="py-1 dark:text-gray-300">React, NodeJS</p>
              <p className="py-1 dark:text-gray-300">Solidity, Web3.js</p>
            </div>
          </div>
        </section>


        <section className="py-10">
          <div className='text-center'>
          <h3 className='text-4xl py-2 text-teal-600 font-medium text-center'>Portfolio</h3><p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance web3
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-fill"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-fill"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-fill"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-fill"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
          </div>
        </section>

        <section className='py-10'>
          <div className='text-center pb-10 lg:px-20'>
            <h1 className='text-3xl text-teal-500 py-3'>Get in touch</h1>
            <div className='border-2 rounded-lg py-6  border-teal-500 dark:border-teal-300 mt-5'>
              <h3 className='text-lg text-gray-600 dark:text-gray-200'>Want to work together or have any questions?</h3>
              <a href="mailto:abdelhadielouaraguli@gmail.com"><button class="relative inline-flex items-center justify-center py-3 px-5 my-6 mb-2 mr-2 overflow-hidden text-md font-medium text-white rounded-lg group bg-gradient-to-br from-green-400 to-blue-500 group-hover:from-green-400 group-hover:to-blue-600 hover:text-gray-800 dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 dark:hover:text-gray-800">Say Hey 👋</button></a>
            </div>    
            <ul className='flex justify-center dark:text-gray-200 gap-4 pt-4'>
                <li className='cursor-pointer hover:underline'><a href='https://abdelhadielouragli.medium.com/' target="_blank">Blog</a></li>
                <li className='cursor-pointer hover:underline'><a href='https://drive.google.com/file/d/1x1ZvFSkvvXo5rsv8DcYo4JtNiO4lh-GH/view' target="_blank">Resume</a></li>
                <li className='cursor-pointer hover:underline'><a href='https://github.com/devdelX' target="_blank">Github</a></li>
              </ul>  
          </div>
        </section>

        <section className='py-1'>
        <footer>
          <h3 className='text-center text-sm dark:text-white'>Made with ❤️ by <span className='dark:text-teal-400 dark:hover:text-teal-300 cursor-pointer hover:text-teal-500 text-teal-600'><a href='https://twitter.com/aelouragli'>D3vD3l</a></span></h3>
        </footer>
        </section>

      </main>
    </div>
  );
}
