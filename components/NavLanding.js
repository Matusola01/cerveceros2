import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavLanding = () => {
	const [nav, setNav] = useState(false);
	const [color, setColor] = useState('transparent');
	const [textColor, setTextColor] = useState('white');

	const handleNav = () => {
		setNav(!nav);
	};

	function handleOnClick(e) {
		e.preventDefault();
		window.location.href = 'login';
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
						<Link href="/">Inicio</Link>
					</li>
					<li className="p-4">
						<Link href="/about">Quienes Somos</Link>
					</li>
					<li className="p-4">
						<Link href="/features">Novedades</Link>
					</li>
					<button
						onClick={handleOnClick}
						className="border-gray-700 hover:bg-gray-100 hover:text-black text-white py-2 px-4 rounded-full"
					>
						Ingresar
					</button>
				</ul>
			</div>
		</div>
	);
};

export default NavLanding;
