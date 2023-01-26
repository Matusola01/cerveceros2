import React from 'react';

const Hero = ({ heading, message }) => {
	return (
		<div className="flex items-center justify-center h-screen mb-12 ">
			{/* Overlay */}
			<div className="absolute top-0 left-0 right-0 bottom-0  z-[2]" />
			<div className="p-5 text-white z-[2] mt-[-10rem]">
				<h2 className="mx-5 mb-10 text-center text-white text-6xl opacity-85 font-totifont xl:text-5xl sm:text-3xl">
					{heading}
				</h2>
				<p className="py-5 text-justify text-xl">{message}</p>
			</div>
		</div>
	);
};

export default Hero;
