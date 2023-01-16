import NavImg from '../Images/navImg.png';
import Image from 'next/image';

export default function Footer() {
	return (
		<footer className="bg-gray-800 shadow bottom-0">
			<div className="container px-6 py-4 mx-auto">
				<div className="lg:flex items-center px-6">
					<div className="w-24 h-24 mr-6">
						<a href="/home">
							<Image
								alt="Logo"
								src={NavImg}
								placeholder="blur"
								width={125}
								height={125}
								style={{
									maxWidth: '100%',
									height: 'auto',
								}}
							/>
						</a>
					</div>
					<div className="w-full -mx-6 lg:w-2/5">
						<div className="px-6">
							<p className="max-w-md mt-2 text-gray-200 dark:text-gray-400">
								Sindicato de cerveceros de Salta.
							</p>
							<div className="flex mt-4 -mx-2">
								<a
									href="#"
									className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
									aria-label="Facebook"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
									</svg>
								</a>

								<a
									href="#"
									className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
									aria-label="Twitter"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
									</svg>
								</a>
							</div>
						</div>
					</div>

					<div className="mt-6 lg:mt-0 lg:flex-1">
						<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
							<div>
								<h3 className="text-gray-200 uppercase dark:text-white">Contacto:</h3>
								<span className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline">
									Tel: 4210120
								</span>
								<span className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline">
									Email: acachagua@sindicatocervecerossalta.com.ar
								</span>
								<span className="block mt-2 text-sm text-gray-200 dark:text-gray-400 hover:underline">
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
