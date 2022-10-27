import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import Image from 'next/image';

export default function Navbar() {
	function handleOnClick(e) {
		e.preventDefault();
		signOut(auth);
	}

	return (
		<nav className="p-3 bg-gray-50 rounded border-gray-200 dark:bg-gray-800 dark:border-gray-700">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<a href="http://localhost:3000/" className="flex items-center">
					<Image
						src="https://www.cervezasalta.com.ar/img/logo-salta.png"
						className="mr-3 h-6 sm:h-10"
						alt="Cerveza Salta Logo"
					/>
					<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
						Sindicato de Cerveceros de Salta
					</span>
				</a>

				<div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
					<ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
						<li>
							<a
								href="http://localhost:3000/"
								className="border-gray-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full "
								aria-current="page"
							>
								Home
							</a>
						</li>
						<li>
							<a
								class="border-gray-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full"
								onClick={handleOnClick}
								aria-current="page"
							>
								Salir
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
