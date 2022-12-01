import React from 'react';
import Hero from '../components/Hero';
import NavLanding from '../components/NavLanding';

const features = () => {
	return (
		<div>
			<NavLanding />
			<Hero
				heading="Novedades"
				message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper interdum nulla eget dictum. Etiam finibus augue augue, tempus mattis neque gravida et. Aliquam pretium risus ac sem euismod, id ultricies ligula sollicitudin. Aenean tincidunt urna in diam ultricies, et laoreet metus convallis. Etiam eget semper sapien. Nulla rutrum feugiat efficitur. Mauris ex velit, accumsan non dolor sit amet, accumsan molestie nunc. Maecenas vitae posuere augue. Donec nunc lectus, tincidunt sit amet egestas et, eleifend tristique libero. Sed quis sagittis odio, eu lobortis felis. Mauris at faucibus dolor, ut lacinia dolor. Sed leo ligula, consectetur sit amet tincidunt nec, malesuada non lacus. Etiam pulvinar a orci eget ornare."
			/>
		</div>
	);
};

export default features;
