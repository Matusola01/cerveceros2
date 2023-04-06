import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { db, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDocs, collection, doc } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';

function InputImg() {
	const { currentUser } = useAuth();
	const router = useRouter();

	useEffect(() => {
		const inputElement = document.getElementById('file-input');
		inputElement.addEventListener('change', async e => {
			const file = e.target.files[0];
			const storageRef = ref(storage, `${file.name}`); //almacena en la storage de firebase
			await uploadBytes(storageRef, file); // Sube la imagen a la storage
			const imageUrl = await getDownloadURL(storageRef, `${file.name}`); //descarga url de la imagen de la storage
			const querySnapshot = await getDocs(collection(db, 'users'));
			const docs = [];
			querySnapshot.forEach(doc => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			let usuario = docs.find(user => user.email === currentUser.email);
			const docRef = doc(db, 'users', `${usuario.id}`); // crea una referencia hacia que documento tiene que actualizar
			await updateDoc(docRef, {
				photoURL: imageUrl, // actualiza el usuario
			});
			router.push('/');
		});
	}, []);

	return (
		<div>
			<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file-input">
				Actualizar imágen de credencial (usuario conectado)
			</label>
			<input
				class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
				type="file"
				id="file-input"
			/>
		</div>
	);
}

export default InputImg;
