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
					<img
						src="https://www.cervezasalta.com.ar/img/logo-salta.png"
						className=" h-24 w-24"
						alt="Cerveza Salta Logo"
					/>
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
						<a
							className="border-gray-700 hover:bg-gray-100 hover:text-black text-white py-2 px-4 rounded-full"
							onClick={handleOnClick}
						>
							Salir
						</a>
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
