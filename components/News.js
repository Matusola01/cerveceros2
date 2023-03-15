import React from 'react';
import Image from 'next/image';
import NavLanding from './NavLanding';
import sale from '../Images/sale.gif';
import glass from '../Images/glass.gif';
import farm from '../Images/farm.gif';

export default function News() {
	return (
		<div>
			<NavLanding />
			<div className="flex items-center justify-center h-screen mt-0 lg:mt-0 md:mt-0 min-[320px]:mt-20 mb-20 ">
				<div className="absolute top-0 left-0 right-0 bottom-0 z-[2]" />
				<div className="p-5 text-white text-center font-abc z-[2] ">
					<b className="mx-5 mb-10 mt-10 text-center text-white text-6xl opacity-85 font-totifont xl:text-5xl sm:text-3xl min-[320px]:text-2xl">
						BENEFICIOS
					</b>
					<div className="container card bg-contain mt-10">
						<div class="w-full text-gray-900 bg-black/70 border border-gray-200 rounded-lg">
							<button
								type="button"
								class="relative inline-flex items-center w-full  px-4 py-2 text-2xl xl:text-xl sm:text-sm min-[320px]:text-[12px] text-white font-medium border-b border-gray-200 rounded-t-lg hover:bg-white/80 hover:text-black focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
							>
								<div class="bg-primary mb-8 flex h-[50px] w-[50px] items-center justify-center rounded-2xl mt-5 mr-5">
									<Image src={sale} />
								</div>

								<b>10% de descuento en Carnicerías Bermejo</b>
							</button>
							<button
								type="button"
								class="relative inline-flex items-center w-full  px-4 py-2 text-2xl xl:text-xl sm:text-sm min-[320px]:text-[12px] text-white font-medium border-b border-gray-200 rounded-t-lg hover:bg-white/80 hover:text-black focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
							>
								<div class="bg-primary mb-8 flex h-[50px] w-[50px] items-center justify-center rounded-2xl mt-5 mr-5">
									<Image src={farm} />
								</div>

								<b>Cuenta corriente en Farmacia Avenida</b>
							</button>
							<button
								type="button"
								class="relative inline-flex items-center w-full  px-4 py-2 text-2xl xl:text-xl sm:text-sm min-[320px]:text-[12px] text-white font-medium border-b border-gray-200 rounded-t-lg hover:bg-white/80 hover:text-black focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
							>
								<div class="bg-primary mb-8 flex h-[50px] w-[50px] items-center justify-center rounded-2xl mt-5 mr-5">
									<Image src={sale} />
								</div>

								<b>10% de descuento en Libreria M y M</b>
							</button>
							<button
								type="button"
								class="relative inline-flex items-center w-full  px-4 py-2 text-2xl xl:text-xl sm:text-sm min-[320px]:text-[12px] text-white font-medium border-b border-gray-200 rounded-t-lg hover:bg-white/80 hover:text-black focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 "
							>
								<div class="bg-primary mb-8 flex h-[50px] w-[50px] items-center justify-center rounded-2xl mt-5 mr-5">
									<Image src={glass} />
								</div>

								<b>Reintegro de $9.000 en anteojos(Ópticas MEDIFE)</b>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
