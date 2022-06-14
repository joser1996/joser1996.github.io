import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
		<div className='flex flex-col justify-center items-center w-full h-full'>
			<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
				<div className='sm:text-right pb-8 pl-4'>
					<p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
				</div>

				<div></div>
			</div>
			<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
				<div className='sm:text-right text-4xl font-bold'>
					<p>Hi, I'm Jose. Take a look around</p>
				</div>

				<div>
					<p>
						I graduated from the Univeristy of California, Davis. Got my B.S. in
						Computer Science and Engineering. I've worked on a variaty of projects that 
						include full-stack development, IOS application development, desktop applications, and
						even embedded systems. I enjoy learning new things and am always up for a challenge. 
						I aim to create apps that I find usefull and hopefully others find some utility in 
						them as well.
					</p>
				</div>
			</div>
		</div>
	</div>
  )
}
