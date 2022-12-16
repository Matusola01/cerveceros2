import React from 'react';

export default function Layout(props) {
	const { children } = props;
	return (
		<div className="flex flex-col min-h-screen relative bg-gray-100 text-white mb-12 custom-img-big md:custom-img-medium sm:custom-img-small min-[320px]:custom-img-phone">
			<main className="flex-1 flex flex-col p-4 z-[2]">{children}</main>
		</div>
	);
}
