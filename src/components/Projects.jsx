import React from 'react'
import Lango from '../assets/Lango.png'
import Algo from '../assets/Algo.jpeg'
import Anime from '../assets/Anime.jpeg'
import Timer from '../assets/QtStopwatch.png'
import AR from '../assets/AR.png'
import YS from '../assets/Y2S.png'

import { ProjectTile } from './ProjectTile'
export const Projects = () => {
 	return (
		<div name='projects' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
					<p className='py-6'>Here are some of my favorite projects</p>
				</div>

				{/* Container for projects */}
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
					<ProjectTile img={AR} title={"Augmented Reality Multiplayer Game"} repo={'https://github.com/joser1996/ECS193A-B'}/>
					<ProjectTile img={Algo} title={"Algorithm Visualizer: IOS App"} repo={'https://github.com/joser1996/algo-viewer-ios'}/>
					<ProjectTile img={Anime} title={"Anime Alarm: IOS App"} repo={'https://github.com/joser1996/AnimeAlarm'}/>
					<ProjectTile img={Lango} title={"Lango: React App"} repo={'https://github.com/joser1996/lango-client-deploy'} demo={'https://lango-client-deploy.vercel.app/#'}/>
					<ProjectTile img={Timer} title={"Time Logger: Qt Application"} repo={'https://github.com/joser1996/QtTimer'}/>
					<ProjectTile img={YS} title={"Playlist Synchronizer: Python"} repo={'https://github.com/joser1996/Y2SPlaylist'}/>

				</div>
			</div>
		</div>
	)
}
