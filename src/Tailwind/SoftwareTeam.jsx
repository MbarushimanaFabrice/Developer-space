import React from 'react'

import './tailwind.min.css'
// import { AOS } from 'aos'
// import { useEffect } from 'react'
// import 'aos/dist/aos.css'

function SoftwareTeam() {
	// useEffect(() => {
	// 	AOS.init({ duration: 2000 });
	// },[]);

	return (
		<>
			{/* navigation */}
			<nav className="relative container mx-auto p-6">
				<div className="flex items-center justify-between">
					<div className="logo pt-1 w-40">
						<img src="images/logo.svg" alt="" />
					</div>
					{/* menu items */}
					<div className="hidden md:flex space-x-5 bg-orange-200">
						<a href="" className='hover:text-green-400'>Product</a>
						<a href="" className='hover:text-green-400'>Teams</a>
						<a href="" className='hover:text-green-400'>Perteners</a>
						<a href="" className='hover:text-green-400'>About</a>
						<a href="" className='hover:text-green-400'>Contact</a>
						<a href="" className='hover:text-green-400'>Pricing</a>
					</div>
					<a href="" className="hidden md:block p-2 bg-green-400 px-6 text-white rounded-2xl hover:bg-green-800">Get start</a>
				</div>
			</nav>
			{/* section2 */}
			{/* left side */}
			<div className="container flex flex-col-reverse md:flex-row items-center py-6  mt-10 mb-10 mx-auto md:space-y-0">
				<div className="flex flex-col mb-32 space-y-12 md:w-1/2">
					<h1 className='mx-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
						All developer together we achive more</h1>
					<p className='max-w-sm text-center text-black md:text-left'>To day we can develop amazing and
						coll thing by use modern technologie as we wark to gether we can achive more.</p>
					<div className="flex justify-center md:justify-start">
						<a href="" className="p-2 bg-green-400 px-6 text-white rounded-2xl hover:bg-green-800">Get start</a>

					</div>
					{/* image */}
				</div>
				<div className="md:w-1/2">
					<img className=' mb-1 md:ml-10' src="images/12.gif" alt="" />
				</div>
			</div>
			{/* features */}
			<section id="feature">
				{/* parent */}
				<div className="container flex flex-col px-2 mx-auto space-y-12 md:space-y-0 md:flex-row">
					{/* div1 */}
					<div className='flex flex-col spacey-y-12 md:w-1/2 md:text-center' >
						<h2 className=' max-w-md text-4xl font-bold text-center md:text-left'>
							What are categories of developers?</h2>

						<p className='md:text-left max-w-lg text-center text-green-950 mt-7 bg-slate-400  p-10 rounded-lg shadow-lg text-xl' >Became Font-end mast developer in few weeks by meet with skilled instituters and be
							able to solve all possible challenges and build your profile and also you can develop your skills by learning advanced concept like backend languages like PHP Node.js/Express.js Python with Django Ruby and mach more in order to make modern and project in short time and gain more don't miss you are at right place. </p>
						<img className=' w-1/2 ml-64' src="images/4.png" alt="" />
					</div>
					{/* div2 */}
					{/* number list */}
					<div>
						{/* item1 */}
						<div className="flex flex-col space-y-8 md:w-1/2">


							<div className="flex flex-col space-y-3   md:space-y-0 md:space-x-6 md:flex-row md:ml-1 max-w-lg  ">
								<div className=" rounded-full bg-green-300 md:bg-transparent">
									<div className="flex items-center space-x-2 ">
										<div className="px-4 py-2 rounded-full text-white  md:py-1 bg-green-600">
											01
										</div>
										<h3 className='md:hidden text-base font-bold  md:mb-4'>Start as Front-End Developer</h3>
									</div>
								</div>
								<div>
									<h3 className=' absolute hidden font-bold md:block'>Start as Front-End Developer</h3><br />
									<p className=' md:text-left w-96 mt-3  bg-green-100 p-7 rounded-sm shadow-lg'>Start with concepts  HTML Now you can learn html and css inorder to get  basic found mental of web development aft that you
										can just to javascript inorder to ademostrate your strength </p>
								</div>
							</div>


							<div className="flex flex-col space-y-3   md:space-y-0 md:space-x-6 md:flex-row md:ml-1 max-w-lg  ">
								<div className=" rounded-full bg-green-300 md:bg-transparent">
									<div className="flex items-center space-x-2 ">
										<div className="px-4 py-2 rounded-full text-white  md:py-1 bg-green-600">
											02
										</div>
										<h3 className='md:hidden text-base font-bold  md:mb-4'>Became Back-End Developer</h3>
									</div>
								</div>
								<div>
									<h3 className=' absolute hidden font-bold md:block'>Became Back-End Developer</h3><br />
									<p className='md:text-left w-96 mt-3 bg-green-100 p-7 rounded-sm shadow-lg'>Now  you Start with concepts  Php learn html and css inorder to get  basic found mental of web development aft that you
										can just to javascript inorder to ademostrate your strength </p>
								</div>
							</div>



							<div className="flex flex-col space-y-3   md:space-y-0 md:space-x-6 md:flex-row md:ml-1 max-w-lg  ">
								<div className=" rounded-full bg-green-300 md:bg-transparent">
									<div className="flex items-center space-x-2 ">
										<div className="px-4 py-2 rounded-full text-white  md:py-1 bg-green-600">
											03
										</div>
										<h3 className='md:hidden text-base font-bold  md:mb-4'>Became Full-Stack Developer</h3>
									</div>
								</div>
								<div>
									<h3 className=' absolute hidden font-bold md:block'>Became Full-Stack Developer</h3><br />
									<p className='md:text-left w-96 mt-3 bg-green-100 p-7 rounded-sm shadow-lg'>Now  you Start with concepts  Php learn html and css inorder to get  basic found mental of web development aft that you
										can just to javascript inorder to ademostrate your strength </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* athers */}
			<div id="testmonial">
				<div className=" max-w-6xl px-5 mx-auto mt-20 text-center">
					<h2 className=' text-2xl font-bold text-center'>What are ather developer say!</h2>
					{/* testmonnoals container */}


					<div className='flex flex-col mt-11 md:flex-row md:space-x-6 mb-10'>
						{/* One */}
						<div className='flex flex-col items-center p-6 space-y-6  bg-green-100 rounded-lg shadow-2xl md:w-1/3'>
							<img className='w-16  -mt-14 rounded-full' src="user/2.png" alt="" />
							<h5 className='text-xl font-bold'>Fabrice MB</h5>
							<p>Hello 👋👋 I am interested to be here on this platform becouse i gain and gain more skills of solving different challenges i face with.</p>
						</div>
						<div className=' hidden md:flex flex-col items-center p-6 space-y-6  bg-green-100 rounded-lg shadow-2xl md:w-1/3'>
							<img className='w-16  -mt-14 rounded-full' src="user/1.jpg" alt="" />
							<h5 className='text-xl font-bold'>Fabrice MB</h5>
							<p>Hello 👋👋 I am interested to be here on this platform becouse i gain and gain more skills of solving different challenges i face with.</p>
						</div>
						<div className=' hidden md:flex flex-col items-center p-6 space-y-6  bg-green-100 rounded-lg shadow-2xl md:w-1/3'>
							<img className='w-16  h-12 -mt-14 rounded-full' src="user/3.jpg" alt="" />
							<h5 className='text-xl font-bold'>Fabrice MB</h5>
							<p>Hello 👋👋 I am interested to be here on this platform becouse i gain and gain more skills of solving different challenges i face with.</p>
						</div>
						{/* button */}

					</div>
					<div className="my-6 shadow-2xl">
						<a href="" className="p-2 bg-green-400 px-6 text-white rounded-2xl hover:bg-green-800">View all</a>
					</div>
				</div>
			</div>

			<section id="more" className='bg-green-400'>
				<div className="container  flex flex-col items-center justify-between px-6 py-12 mx-auto space-y-12 md:py-12 md:flex-row  md:space-y-0">
					<div>
						<h2 className=' text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left'>Improve your team performance to day</h2>

					</div>
					<div>
						<a href="" className="p-2 bg-green-900 px-6 text-white rounded-2xl hover:bg-green-800">Stat naw</a>

					</div>
				</div>
      </section>
      
      <section id='footer' className='bg-green-900'>
        <div className=" space-y-2 items-start flex flex-col mx-auto  p-12 md:flex-row md:justify-between text-white  md:h-1/3">
         
          <div className='-mt-14'>
            <img className='w-1/3 mt-0 ' src="images/logo.svg" alt="" />
            <div className=" items-start space-y-5 flex flex-col m-5 ml-10 md:space-x-8 md:flex-row">
              <img className=' w-6' src="icons/fb.png" alt="" />
              <img className=' w-6' src="icons/ig.png" alt="" />
              <img className=' w-6' src="icons/lk.png" alt="" />
              <img className=' w-6' src="icons/tw.png" alt="" />
            </div>
          </div>
         
          <div className=' -mt-10'>
            <h1 className=' font-bold text-2xl'>Perteners</h1>
            <div className="perteners  text-start ml-0 md:ml-0 md:text-start ">
              <li className=' list-none'>Github</li>
              <li className=' list-none'>Vercel</li>
              <li className=' list-none'>Git</li>
            </div>
          </div>

          <div className=' -mt-10'>
            <h1 className="contact font-bold text-2xl mb-5">Contact</h1>
            
            <div className="flex space-x-2">
              <input type="text" placeholder='Write message' />
              <a href="" className="p-2 bg-green-400 px-6 text-white rounded-2xl hover:bg-green-800">Stat naw</a>
            </div>

          </div>
        </div>
      </section>
		</>
	)
}
export default SoftwareTeam