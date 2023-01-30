import React from 'react';
import NavLanding from './NavLanding';

export default function Landing() {
	return (
		<div>
			<NavLanding />
			<div className="flex items-center justify-center h-screen ">
				{/* Overlay */}
				<div className="absolute top-0 left-0 right-0 bottom-0 z-[2]" />
				<div className="p-5 text-white text-center font-abc z-[2] ">
					<b className="mx-5 mb-10 mt-10 text-center text-white text-6xl opacity-85 font-totifont xl:text-5xl sm:text-3xl min-[320px]:text-4xl">
						SINDICATO CERVECEROS SALTA
					</b>
				</div>
			</div>
		</div>
	);
}
