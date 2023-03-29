import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { db, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDocs, collection, doc } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';

function InputImg() {
	const { currentUser } = useAuth();

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
		});
	}, []);

	return (
		<div>
			<input type="file" id="file-input" />
		</div>
	);
}

export default InputImg;
