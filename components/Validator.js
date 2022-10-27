import React, { useEffect } from 'react';
import Form from './Form';
import Credential from './Credential';
import { useAuth } from '../context/AuthContext';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore';
import app from '../firebase';

const db = getFirestore(app);

export default function Validator() {
	const { currentUser } = useAuth();
	const user = getUser();
	const userrrr = otrafuncion();
	console.log(userrrr[0]);
	// console.log(user);
	const userFind = user.then(e => e);
	// console.log(userFind);
	// const arr = [];
	// const raro = await getUser().then(
	// 	e => {
	// 		return e.filter(e => e.email === currentUser.email);
	// 	}
	// 	// e.forEach(e => {
	// 	// 	if (e.email === currentUser.email) {
	// 	// 		// console.log(e);
	// 	// 		return arr.push(e);
	// 	// 	}
	// 	// })
	// );

	// const arrMap = arr;
	// console.log(raro);
}

export const getUser = async () => {
	try {
		const { currentUser } = useAuth();
		const querySnapshot = await getDocs(collection(db, 'users'));
		// console.log(querySnapshot);
		const user = [];
		querySnapshot.forEach(doc => {
			user.push({ ...doc.data(), id: doc.id });
		});
		const maping = user.filter(e => e.email === currentUser.email);
		// console.log(maping);

		return maping;
	} catch (error) {
		console.log(error);
	}
};

const otrafuncion = async () => {
	const user = setTimeout(await getUser(), 4000);
	console.log(user);
	return user;
};
