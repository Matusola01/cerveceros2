import React from 'react';

export default function Layout(props) {
	const { children } = props;
	return (
		<div className="flex flex-col min-h-screen relative bg-gray-100 text-white">
			<main className="flex-1 flex flex-col p-4">{children}</main>
		</div>
	);
}
