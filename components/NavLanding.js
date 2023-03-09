import Image from 'next/image';
import Link from 'next/link';
import NavImg from '../Images/navImg.png';
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
			if (window.scrollY >= 150) {
				setColor('#00000090');
				setTextColor('#ffffff');
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
				<div>
					<Image
						alt="Sindicato Cerveceros Salta"
						src={NavImg}
						placeholder="blur"
						width={65}
						height={65}
						style={{
							maxWidth: '100%',
							height: 'auto',
						}}
					/>
				</div>

				<ul style={{ color: `${textColor}` }} className="hidden sm:flex">
					<li className="p-4">
						<Link href="/">Inicio</Link>
					</li>
					<li className="p-4">
						<Link href="/about">Quienes Somos</Link>
					</li>
					<li className="p-4">
						<Link href="/features">Beneficios</Link>
					</li>
					<button
						onClick={handleOnClick}
						className="border-gray-700 hover:bg-white/30 text-white py-0.5 px-4 rounded-lg"
					>
						Ingresar
					</button>
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
							<Link href="/">Inicio</Link>
						</li>
						<li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
							<Link href="/about">Quienes Somos</Link>
						</li>
						<li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
							<Link href="/features">Novedades</Link>
						</li>
						<li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
							<button
								onClick={handleOnClick}
								className="border-gray-700 hover:bg-white/30 text-white py-0.5 px-4 rounded-lg"
							>
								Ingresar
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NavLanding;
