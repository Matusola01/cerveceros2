import React from 'react';

const Hero = ({ heading, message }) => {

	return (
		<div className="flex items-center justify-center h-screen mb-12 ">
			{/* Overlay */}
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
			<div className="p-5 text-white z-[2] mt-[-10rem]">
				<h2 className="font-fb xl:text-6xl sm:text-4xl">{heading}</h2>
				<p className="py-5 text-xl">{message}</p>
			</div>
		</div>
	);
};

export default Hero;
