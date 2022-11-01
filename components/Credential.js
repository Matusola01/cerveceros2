import Image from 'next/image';
import CredH from '../Images/cred-H.jpeg';
import CredM from '../Images/cred-M.jpeg';

export default function Credential({ props }) {
	if (props?.genre === 'Hombre') {
		return (
			<div className="flex flex-wrap justify-center mt-20">
				<div className="relative overflow-hidden flex w-2/3 h-2/3 rounded-r ">
					<figure className="relative overflow-hidden flex justify-center items-center w-full h-full">
						<Image src={CredH} className="h-full" />
						<span className="absolute items-center self-start p-2 text-neutral-900 leading-none font-semibold 2xl:mt-14 xl:mt-10 lg:mt-5 md:mt-4 sm:mt-3">
							<h2 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg">
								{props?.name}
							</h2>
							<h2 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg">{props?.DNI}</h2>
							<h2 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg">
								{props?.relationship}
							</h2>
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
						<span className="absolute items-center self-start p-2 text-neutral-900 leading-none font-semibold 2xl:mt-14 xl:mt-10 lg:mt-5 md:mt-4 sm:mt-3">
							<h2 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg">
								{props?.name}
							</h2>
							<h2 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg">{props?.DNI}</h2>
							<h2 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg">
								{props?.relationship}
							</h2>
						</span>
					</figure>
				</div>
			</div>
		);
	}
}
