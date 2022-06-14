import React from 'react'

export const ProjectTile = (props) => {

	let style = {
		backgroundImage: `url(${props.img})`,
		backgroundSize: 'contain'
	};

  return (
	<div style={style} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
		{/* Hover effects */}
		<div className='opacity-0 group-hover:opacity-100 flex flex-col items-center'>
			<span className='text-2xl font-bold text-white tracking-wider mx-auto text-center'>
				{props.title}
			</span>
			<div className='pt-8 text-center'>
				{}
				<a className={props.demo ? '' : 'hidden'} href={props.demo}>
					<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
				</a>
				<a href={props.repo}>
					<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
				</a>
			</div>
		
		</div>
	</div>
  )
}
