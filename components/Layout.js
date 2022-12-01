import React from 'react';

export default function Layout(props) {
	const { children } = props;
	return (
		<div className="flex flex-col min-h-screen relative bg-gray-100 text-white h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
			<main className="flex-1 flex flex-col p-4 bg-black/50 z-[2]">{children}</main>
		</div>
	);
}
