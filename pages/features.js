import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavLanding from '../components/NavLanding';

const features = () => {
	return (
		<div>
			<NavLanding />
			<Hero
				heading="NOVEDADES"
				message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper interdum nulla eget dictum. Etiam finibus augue augue, tempus mattis neque gravida et. Aliquam pretium risus ac sem euismod, id ultricies ligula sollicitudin. Aenean tincidunt urna in diam ultricies, et laoreet metus convallis. Etiam eget semper sapien. Nulla rutrum feugiat efficitur. Mauris ex velit, accumsan non dolor sit amet, accumsan molestie nunc. Maecenas vitae posuere augue."
			/>
			<Footer />
		</div>
	);
};

export default features;
