import React, { useState } from 'react';
import app from '../firebase';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';

const db = getFirestore(app);
export default function Form() {
	const router = useRouter();
	const inicalVal = {
		name: '',
		email: '',
		genre: '',
		relationship: '',
		DNI: '',
	};
	const [data, setData] = useState(inicalVal);

	const handleOnChange = e => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	const handleOnSubmit = async e => {
		e.preventDefault();

		try {
			await addDoc(collection(db, 'users'), {
				...data,
			});
		} catch (error) {
			console.log(error);
		}
		setData({ ...inicalVal });

		//que esta funcion lo que hace es una redireccion
		router.push('/home');
	};
	return (
		<div className="flex flex-wrap justify-center mt-20">
			<div className="relative overflow-hidden flex rounded-r ">
				<form class="w-full max-w-lg">
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full px-3">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-password"
							>
								Nombre y apellido
							</label>
							<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-password"
								type="string"
								placeholder="Nombre y apellido"
								name="name"
								value={data.name}
								onChange={handleOnChange}
							/>
						</div>
					</div>
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full px-3">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-password"
							>
								Confirmar Email
							</label>
							<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-password"
								type="string"
								placeholder="Utilice el mismo email con el que inicio sesión"
								name="email"
								value={data.email}
								onChange={handleOnChange}
							/>
						</div>
					</div>
					<div class="flex flex-wrap -mx-3 mb-2">
						<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-state"
							>
								Genero
							</label>
							<div class="relative">
								<select
									class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-state"
									onChange={handleOnChange}
									name="genre"
									value={data.genre}
								>
									<option hidden>Seleccione</option>
									<option>Hombre</option>
									<option>Mujer</option>
								</select>
								<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
									<svg
										class="fill-current h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</div>
							</div>
						</div>
						<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-state"
							>
								Parentesco
							</label>
							<div class="relative">
								<select
									class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-state"
									onChange={handleOnChange}
									name="relationship"
									value={data.relationship}
								>
									<option hidden>Seleccione</option>
									<option>Titular</option>
									<option>Hijo/a</option>
									<option>Conyuge</option>
									<option>Concubino</option>
									<option>Adicional</option>
									<option>Hijo del conyuge</option>
									<option>Adherente</option>
									<option>Menor bajo guarda</option>
								</select>
								<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
									<svg
										class="fill-current h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</div>
							</div>
						</div>
						<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
							<label
								class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								for="grid-zip"
							>
								DNI
							</label>
							<input
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-zip"
								type="text"
								name="DNI"
								onChange={handleOnChange}
								value={data.DNI}
								placeholder="*442012*"
							/>
						</div>
					</div>
					<div class="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-10 text-center">
						<button
							class="border-gray-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full "
							onClick={handleOnSubmit}
							aria-current="page"
							type="submit"
						>
							Enviar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
