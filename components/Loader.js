import Image from 'next/image';
import React from 'react';

export default function Loader() {
	return (
		<div>
			<Image src="https://www.cervezasalta.com.ar/img/loader.gif" alt="Cargando..." className={'w-50 mx-auto'} />
		</div>
	);
}
