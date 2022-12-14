import Image from 'next/image';
import CredH from '../Images/cred-H.jpeg';
import CredM from '../Images/cred-M.jpeg';
// import carnet from '../Images/carnet.jpg';
export default function Credential({ props }) {
	if (props?.genre === 'Masculino') {
		return (
			<div className="flex flex-wrap justify-center mt-36">
				<div className="relative overflow-hidden flex w-2/3 h-2/3 rounded-r ">
					<figure className="relative overflow-hidden flex justify-center items-center w-full h-full">
						<Image src={CredH} className="h-full" />
						<span className="absolute items-center self-start p-2 text-neutral-900 leading-none font-semibold ml-16 2xl:mt-14 xl:mt-12 lg:mt-8 md:mt-6 sm:mt-3 min-[320px]:mt-2">
							{/* <div className="float-right 2xl:ml-14 xl:ml-10 lg:ml-5 md:ml-4 sm:ml-3 min-[320px]:ml-3">
								<img
									className="2xl:h-36 xl:h-32 lg:h-28 md:h-24 sm:h-20 min-[320px]:h-10"
									src="https://fotomanias.com.ar/wp-content/uploads/2019/03/foto-carnet-fondo-celeste.jpg"
									alt="Foto de credencial 4x4"
								/>
							</div> */}
							<div className="float-left break-normal 2xl:ml-28 xl:ml-20 lg:ml-16 md:ml-12 sm:ml-10 min-[320px]:ml-1">
								<div className="2xl:pl-72 xl:pl-56 lg:pl-44 md:pl-20 sm:pl-16 min-[320px]:pl-4">
									<h2 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg min-[320px]:text-[10px]">
										◾{props?.name.toUpperCase()}
									</h2>
								</div>
								<div className="2xl:pl-72 xl:pl-56 lg:pl-44 md:pl-20 sm:pl-16 min-[320px]:pl-4">
									<h2 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg min-[320px]:text-[10px]">
										◾{props?.DNI}
									</h2>
								</div>
								<div className="2xl:pl-72 xl:pl-56 lg:pl-44 md:pl-20 sm:pl-16 min-[320px]:pl-4">
									<h2 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg min-[320px]:text-[10px]">
										◾{props?.relationship.toUpperCase()}
									</h2>
								</div>
							</div>
						</span>
					</figure>
				</div>
			</div>
		);
	} else {
		return (
			<div className="flex flex-wrap justify-center mt-20">
				<div className="relative overflow-hidden flex w-2/3 h-2/3 rounded-r ">
					<figure className="relative overflow-hidden flex justify-center items-center w-full h-full">
						<Image src={CredM} className="h-full" />
						<span className="absolute items-center self-start p-2 text-neutral-900 leading-none font-semibold ml-16 2xl:mt-14 xl:mt-12 lg:mt-8 md:mt-6 sm:mt-3 min-[320px]:mt-2">
							{/* <div className="float-right 2xl:ml-14 xl:ml-10 lg:ml-5 md:ml-4 sm:ml-3 min-[320px]:ml-3">
								<img
									className="2xl:h-36 xl:h-32 lg:h-28 md:h-24 sm:h-20 min-[320px]:h-10"
									src="https://fotomanias.com.ar/wp-content/uploads/2019/03/foto-carnet-fondo-celeste.jpg"
									alt="Foto de credencial 4x4"
								/>
							</div> */}
							<div className="float-left break-normal 2xl:ml-28 xl:ml-20 lg:ml-16 md:ml-12 sm:ml-10 min-[320px]:ml-1">
								<div className="2xl:pl-72 xl:pl-56 lg:pl-44 md:pl-20 sm:pl-16 min-[320px]:pl-4">
									<h2 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg min-[320px]:text-[10px]">
										◾{props?.name.toUpperCase()}
									</h2>
								</div>
								<div className="2xl:pl-72 xl:pl-56 lg:pl-44 md:pl-20 sm:pl-16 min-[320px]:pl-4">
									<h2 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg min-[320px]:text-[10px]">
										◾{props?.DNI}
									</h2>
								</div>
								<div className="2xl:pl-72 xl:pl-56 lg:pl-44 md:pl-20 sm:pl-16 min-[320px]:pl-4">
									<h2 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg min-[320px]:text-[10px]">
										◾{props?.relationship.toUpperCase()}
									</h2>
								</div>
							</div>
						</span>
					</figure>
				</div>
			</div>
		);
	}
}
