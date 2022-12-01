import React from 'react';

const Hero = ({ heading, message }) => {
	// function handleOnClick(e) {
	// 	e.preventDefault();
	// 	window.location.href = 'login';
	// }

	return (
		<div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
			{/* Overlay */}
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
			<div className="p-5 text-white z-[2] mt-[-10rem]">
				<h2 className="text-5xl font-bold">{heading}</h2>
				<p className="py-5 text-xl">{message}</p>
				{/* <button
					onClick={handleOnClick}
					className="ml-48 w-full max-w-[40ch] border border-white border-solid text-slate-100 uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900"
				>
					Ingresar
				</button> */}
			</div>
		</div>
	);
};

export default Hero;
