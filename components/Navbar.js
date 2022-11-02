import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { auth } from '../firebase';

export default function Navbar() {
	function handleOnClick(e) {
		e.preventDefault();
		signOut(auth);
	}

	return (
		<nav className="p-3 bg-gray-50 rounded border-gray-800 dark:bg-gray-800 dark:border-gray-700">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<Link href="/" className="flex items-center">
					<img
						src="https://www.cervezasalta.com.ar/img/logo-salta.png"
						className="mr-3 h-full w-full sm:h-10"
						alt="Cerveza Salta Logo"
					/>
					<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
						Sindicato de Cerveceros de Salta
					</span>
				</Link>

				<div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
					<ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
						{/* <li>
							<a
								href="https://cerveceros2-b8fp8nzhn-matusola01.vercel.app"
								className="border-gray-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full "
								aria-current="page"
							>
								Home
							</a>
						</li> */}
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
