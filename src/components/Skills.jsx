import React from 'react'
import NodeJS from '../assets/node.png'
import CPP from '../assets/c-logo.png'
import Swift from '../assets/swift.png'
import Python from '../assets/python.png'
import Qt from '../assets/qt.png'
import ReactIcon from '../assets/react.png'
export const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
		{/* Container */}
		<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
			<div>
				<p className='font-bold inline border-b-4 border-pink-600 text-4xl '>Skills</p>
				<p className='py-4'>Here are some technologies I've worked with.</p>
			</div>

			<div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
				<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<img className='w-20 mx-auto' src={CPP} alt="CPP Icon"/>
					<p className='my-4'>C++</p>
				</div>
				<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<img className='w-20 mx-auto' src={Swift} alt="Swift Icon"/>
					<p className='my-4'>Swift</p>
				</div>
				<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<img className='w-20 mx-auto' src={Python} alt="Python Icon"/>
					<p className='my-4'>Python</p>
				</div>
				<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<img className='w-20 mx-auto' src={NodeJS} alt="NodeJS"/>
					<p className='my-4'>NodeJS</p>
				</div>
				<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<img className='w-20 mx-auto' src={Qt} alt="Qt Icon"/>
					<p className='my-4'>Qt</p>
				</div>
				<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
					<img className='w-20 mx-auto' src={ReactIcon} alt="React Icon"/>
					<p className='my-4'>React</p>
				</div>
			</div>
		</div>
	</div>
  )
}
