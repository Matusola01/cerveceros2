import NavImg from '../Images/navImg.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="bg-black/80 w-screen h-full sticky top-[100vh]">
			<div className="container px-4 py-2 mx-auto">
				<div className="lg:flex items-center px-6">
					<div className="w-24 h-22 mr-6">
						<Link href="/">
							<Image
								alt="Logo"
								src={NavImg}
								placeholder="blur"
								width={100}
								height={100}
								style={{
									maxWidth: '100%',
									height: 'auto',
								}}
							/>
						</Link>
					</div>
					<div className="w-full -mx-6 lg:w-2/5">
						<div className="px-6">
							<p className="max-w-md mt-2 text-gray-200 dark:text-gray-400">
								Sindicato cerveceros Salta.
							</p>
							<div className="flex mt-4 -mx-2">
								<Link
									href="https://www.facebook.com/CERVECEROSSALTA"
									className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
									aria-label="Facebook"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
									</svg>
								</Link>
							</div>
						</div>
					</div>

					<div className="mt-6 lg:mt-0 lg:flex-1">
						<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
							<div>
								<h3 className="text-gray-200 uppercase dark:text-white">Contacto:</h3>
								<span className="block mt-2 text-sm text-gray-200 dark:text-gray-400 ">
									Tel: (+54) 3874210120
								</span>
								<span className="block mt-2 text-sm text-gray-200 dark:text-gray-400 ">
									Email: acachagua@sindicatocervecerossalta.com.ar
								</span>
								<span className="block mt-2 text-sm text-gray-200 dark:text-gray-400 ">
									Dirección: Adolfo Güemes 1067. CP 4400. Salta, Argentina.
								</span>
							</div>
						</div>
					</div>
				</div>
				<hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />
			</div>
		</footer>
	);
}
