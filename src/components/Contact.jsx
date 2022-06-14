import React from 'react'

export const Contact = () => {
	return (
		<div name='contact' className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>
			<form 
			className='flex flex-col max-w-[600px] w-full' 
			action="https://getform.io/f/9c57ea08-8e29-40d7-bf00-aca85c9b1952"
			method="POST">
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
						Contact
					</p>
					<p className='text-gray-300 py-4'>Submit the form below or send me an email - josertrs@gmail.com</p>
				</div>
				<input type="text" placeholder='Name' name='name' className='bg-[#ccd6f6] p-2'/>
				<input type="text" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]'/>
				<textarea name="message" rows="10" className='p-2 bg-[#ccd6f6]' placeholder='Message'></textarea>
			
				<button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
			</form>
		</div>
	)
}
