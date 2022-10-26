import React from 'react';
import Form from './Form';
import Credential from './Credential';
import { useAuth } from '../context/AuthContext';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore';
import app from '../firebase';

const db = getFirestore(app);

export default function Validator({ users }) {
	const { currentUser } = useAuth();
	const raro = getServerSideProps();
	const raro2 = raro.then(res => res.props.users);
	const raro3 = raro2.then(res => res[0]);
	console.log(users);
	return <div>hola soy german </div>;
}

export const getServerSideProps = async context => {
	const querySnapshot = await getDocs(collection(db, 'users'));
	// console.log(querySnapshot);
	const user = [];
	querySnapshot.forEach(doc => {
		user.push({ ...doc.data(), id: doc.id });
	});
	console.log(user);
	return { props: { users: user } };
};
