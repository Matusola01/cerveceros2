import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { auth } from '../firebase';

export default function Navbar() {
	function handleOnClick(e) {
		e.preventDefault();
		signOut(auth);
	}

	return (
		<nav className="p-3 rounded border-gray-800 bg-gray-800">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<div className="flex items-center">
					<img
						src="https://www.cervezasalta.com.ar/img/logo-salta.png"
						className="mr-3 h-full w-full h-10"
						alt="Cerveza Salta Logo"
					/>
					<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
						Sindicato de Cerveceros de Salta
					</span>
				</div>

				<div className="hidden w-full min-[320px]:block min-[320px]:w-auto " id="navbar-solid-bg">
					<ul className="flex flex-col mt-4 bg-gray-50 rounded-lg min-[320px]:flex-row min-[320px]:space-x-8 min-[320px]:mt-0 min-[320px]:text-sm min-[320px]:font-medium min-[320px]:border-0 min-[320px]:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 ">
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
