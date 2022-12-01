// import { signOut } from 'firebase/auth';
// import Link from 'next/link';
// import { auth } from '../firebase';

// export default function Navbar() {
// 	function handleOnClick(e) {
// 		e.preventDefault();
// 		signOut(auth);
// 	}

// 	return (
// 		<nav className="p-3 rounded border-gray-800 bg-gray-800">
// 			<div className="container flex flex-wrap justify-between items-center mx-auto">
// 				<div className="flex items-center">
// 					<img
// 						src="https://www.cervezasalta.com.ar/img/logo-salta.png"
// 						className="mr-3 h-full w-full h-10"
// 						alt="Cerveza Salta Logo"
// 					/>
// 					<span className="self-center text-xl font-semibold min-[320px]:text-xs md:text-lg whitespace-nowrap dark:text-white">
// 						Sindicato de Cerveceros de Salta
// 					</span>
// 				</div>

// 				<div className="hidden w-full min-[320px]:block min-[320px]:w-auto " id="navbar-solid-bg">
// 					<ul className="flex flex-col mt-4 bg-gray-50 rounded-lg min-[320px]:flex-row min-[320px]:space-x-8 min-[320px]:mt-0 min-[320px]:text-sm min-[320px]:font-medium min-[320px]:border-0 min-[320px]:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 ">
// 						{/* <li>
// 							<a
// 								href="https://cerveceros2-b8fp8nzhn-matusola01.vercel.app"
// 								className="border-gray-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full "
// 								aria-current="page"
// 							>
// 								Home
// 							</a>
// 						</li> */}
// 						<li>
// 							<a
// 								class="border-gray-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full"
// 								onClick={handleOnClick}
// 								aria-current="page"
// 							>
// 								Salir
// 							</a>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// }
// import { signOut } from 'firebase/auth';
// import { auth } from '../firebase';
// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// const Navbar = () => {
// 	const [nav, setNav] = useState(false);
// 	const [color, setColor] = useState('transparent');
// 	const [textColor, setTextColor] = useState('white');

// 	function handleOnClick(e) {
// 		e.preventDefault();
// 		signOut(auth);
// 	}

// 	const handleNav = () => {
// 		setNav(!nav);
// 	};

// 	useEffect(() => {
// 		const changeColor = () => {
// 			if (window.scrollY >= 90) {
// 				setColor('#ffffff');
// 				setTextColor('#000000');
// 			} else {
// 				setColor('transparent');
// 				setTextColor('#ffffff');
// 			}
// 		};
// 		window.addEventListener('scroll', changeColor);
// 	}, []);

// 	return (
// 		<div style={{ backgroundColor: `${color}` }} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
// 			<div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
// 				<Link>
// 					<h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
// 						Captur
// 					</h1>
// 				</Link>
// 				<ul style={{ color: `${textColor}` }} className="hidden sm:flex">
// 					<li className="p-4">
// 						<Link>Home</Link>
// 					</li>
// 					<li className="p-4">
// 						<Link>Gallery</Link>
// 					</li>
// 					<li className="p-4">
// 						<Link>Work</Link>
// 					</li>
// 					<li className="p-4">
// 						<Link onClick={handleOnClick}>Salir</Link>
// 					</li>
// 				</ul>

// 				{/* Mobile Button */}
// 				<div onClick={handleNav} className="block sm:hidden z-10">
// 					{nav ? (
// 						<AiOutlineClose size={20} style={{ color: `${textColor}` }} />
// 					) : (
// 						<AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
// 					)}
// 				</div>
// 				{/* Mobile Menu */}
// 				<div
// 					className={
// 						nav
// 							? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
// 							: 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
// 					}
// 				>
// 					<ul>
// 						<li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
// 							<Link>Home</Link>
// 						</li>
// 						<li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
// 							<Link>Gallery</Link>
// 						</li>
// 						<li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
// 							<Link>Work</Link>
// 						</li>
// 						<li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
// 							<Link>Contact</Link>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Navbar;

import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [color, setColor] = useState('transparent');
	const [textColor, setTextColor] = useState('white');

	const handleNav = () => {
		setNav(!nav);
	};

	function handleOnClick(e) {
		e.preventDefault();
		signOut(auth);
	}

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 90) {
				setColor('#ffffff');
				setTextColor('#000000');
			} else {
				setColor('transparent');
				setTextColor('#ffffff');
			}
		};
		window.addEventListener('scroll', changeColor);
	}, []);

	return (
		<div style={{ backgroundColor: `${color}` }} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
			<div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
				<Link href="/">
					<h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
						Sindicato de Cerveceros de Salta
					</h1>
				</Link>
				<ul style={{ color: `${textColor}` }} className="hidden sm:flex">
					<li className="p-4">
						<Link href="/#">Home</Link>
					</li>
					<li className="p-4">
						<Link href="/#about">Quienes Somos</Link>
					</li>
					<li className="p-4">
						<Link href="/#work">Novedades</Link>
					</li>
					<li className="p-4">
						<Link href="/#contact">Credenciales</Link>
					</li>
					<li className="p-4">
						<a onClick={handleOnClick}>Salir</a>
					</li>
				</ul>

				{/* Mobile Button */}
				<div onClick={handleNav} className="block sm:hidden z-10">
					{nav ? (
						<AiOutlineClose size={20} style={{ color: `${textColor}` }} />
					) : (
						<AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
					)}
				</div>
				{/* Mobile Menu */}
				<div
					className={
						nav
							? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
							: 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
					}
				>
					<ul>
						<li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
							<Link href="/">Home</Link>
						</li>
						<li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
							<Link href="/#gallery">Gallery</Link>
						</li>
						<li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
							<Link href="/work">Work</Link>
						</li>
						<li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
