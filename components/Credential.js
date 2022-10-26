import Image from 'next/image';
import { useAuth } from '../context/AuthContext';
import CredH from '../Images/cred-H.jpeg';
import CredM from '../Images/cred-M.jpeg';

export default function Credential() {
	const { currentUser } = useAuth();

	// if (currentUser === 'Hombre') {
	return (
		<div className="flex flex-wrap justify-center mt-20">
			<div className="relative overflow-hidden flex w-2/3 h-2/3 rounded-r ">
				<figure className="relative overflow-hidden flex justify-center items-center w-full h-full">
					<Image src={CredH} className="h-full" />
					<span className="absolute self-start p-2 text-neutral-900 text-4xl leading-none font-semibold mt-16">
						<h2>{currentUser.email}</h2>
						{/* <h2>{data.dni}</h2>
						<h2>{data.relation}</h2>
						<h2>{data.etc}</h2> */}
						hola
					</span>
				</figure>
			</div>
		</div>
	);
	// } else {
	// 	return (
	// 		<div className="flex flex-wrap justify-center mt-20">
	// 			<div className="relative overflow-hidden flex w-2/3 h-2/3 rounded-r ">
	// 				<figure className="relative overflow-hidden flex justify-center items-center w-full h-full">
	// 					<Image src={CredM} className="h-full" />
	// 					<span className="absolute self-start p-2 text-neutral-900 text-4xl leading-none font-semibold mt-16">
	// 						<h2>{currentUser.email}</h2>
	// 						{/* <h2>{data.dni}</h2>
	// 					<h2>{data.relation}</h2>
	// 					<h2>{data.etc}</h2> */}
	// 						hola
	// 					</span>
	// 				</figure>
	// 			</div>
	// 		</div>
	// 	);
	// }
	// return <div>hola</div>;
}
