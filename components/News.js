import React from 'react';
import NavLanding from './NavLanding';

export default function News() {
	return (
		<div>
			<NavLanding />
			<div className="flex items-center justify-center h-screen mt-0 lg:mt-0 md:mt-0 min-[320px]:mt-20 mb-20 ">
				<div className="absolute top-0 left-0 right-0 bottom-0 z-[2]" />
				<div className="p-5 text-white text-center font-abc z-[2] ">
					<b className="mx-5 mb-10 mt-10 text-center text-white text-6xl opacity-85 font-totifont xl:text-5xl sm:text-3xl min-[320px]:text-2xl">
						BENEFICIOS
					</b>
					<div className="container px-5 py-4 bg-black/70 card bg-contain mt-10">
						<p className="py-5 text-justify text-2xl xl:text-xl sm:text-sm min-[320px]:text-[14px]">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu magna vel ligula
							sollicitudin varius. Maecenas laoreet a tortor quis facilisis. Duis a tincidunt nulla, eget
							accumsan massa. Suspendisse at ligula eu mauris ultrices feugiat. Vestibulum rhoncus elit
							quis dapibus placerat. Proin faucibus, neque a tincidunt vestibulum, sem nisl facilisis
							lectus, quis lobortis mauris mauris egestas velit. Donec nec dignissim mi. Phasellus eget
							rhoncus diam. Quisque odio ex, aliquet at leo a, fringilla pharetra eros. Etiam aliquam
							lacus eget sapien commodo rhoncus. Vestibulum mollis volutpat mattis. Sed sit amet euismod
							lorem.
							<br />
							Nullam faucibus libero sed sapien imperdiet fringilla. Proin mattis condimentum nulla, eget
							imperdiet sem posuere eget. Curabitur et ante scelerisque, cursus urna id, luctus nulla.
							Donec tincidunt nunc erat, eu ullamcorper enim facilisis eget. Integer nisl lacus, malesuada
							ac laoreet at, rutrum in diam. In semper elit urna. Nullam suscipit luctus nunc efficitur
							accumsan.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
