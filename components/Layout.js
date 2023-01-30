import React from 'react';
import Footer from './Footer';

export default function Layout(props) {
	const { children } = props;
	return (
		<div className="flex flex-col min-h-screen relative bg-gray-100 text-white custom-img-big ">
			<main className="flex-1 flex flex-col p-4 z-[2]">{children}</main>
			<Footer />
		</div>
	);
}
