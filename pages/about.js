import React from 'react';
import Hero from '../components/Hero';
import NavLanding from '../components/NavLanding';
import About from '../components/About';
import Footer from '../components/Footer';

const about = () => {
	function handleOnClick(e) {
		e.preventDefault();
		window.location.href = 'members';
	}

	return (
		<div>
			<NavLanding />
			<div className="flex items-center justify-center h-screen mt-0 min-[320px]:mt-36 ">
				<div className="absolute top-0 left-0 right-0 bottom-0 z-[2]" />
				<div className="p-5 text-white text-center font-abc z-[2] ">
					<b
						className="mx-5 mb-10 mt-10 text-center text-white text-6xl opacity-85 font-totifont xl:text-5xl 
					sm:text-3xl min-[320px]:text-2xl"
					>
						¿QUIENES SOMOS?
					</b>
					<div className="container px-5 py-4">
						<p className="py-5 text-justify text-2xl xl:text-xl sm:text-sm min-[320px]:text-[14px]">
							El Sindicato Cerveceros Salta, tiene sus orígenes en la fecha 04/01/1962, por aquel entonces
							y gracias a Jorge Lavadenz Secretario General, se pudo dar inicio a la conformación de
							nuestro sindicato, el mismo con un exponencial crecimiento y vigencia al día de hoy.
							<br />
							Nació como una necesitada de dar asistencia y protección a todos los compañeros y compañeras
							que aglutina esta entidad. Siempre respetando los convenios y sobre todo los valores.
							<br />
							Trabajar para la familia Cervecera en lo social, gremial y beneficios para nuestros
							afiliados.
							<br />
							Tener un Canal de acceso a la información para todos los afiliados al Sindicato. Tratando de
							llegar más rápido y de mejor manera a los compañeros. Es necesario mencionar, que nuestro
							sindicato fundado el 24 de septiembre del año 1962. Es un componente integrado formalmente a
							la CGT
							<br />
							Actualmente está siendo dirigido y administrado, por el Secretario General y por la
							siguiente comisión directiva, la cual se expone a continuación...
						</p>
						<div class="flex space-x-2 justify-center">
							<div>
								<button
									onClick={handleOnClick}
									type="button"
									class="inline-block px-6 py-2 mb-10 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-60 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
								>
									Siguiente
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default about;
