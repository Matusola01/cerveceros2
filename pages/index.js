import React from 'react';
import Credential from '../components/Credential';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import Head from 'next/head';
import Form from '../components/Form';
import NavLanding from '../components/NavLanding';
import app from '../firebase';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore';
import Landing from '../components/Landing';

const db = getFirestore(app);

export default function Home({ users }) {
	const { currentUser } = useAuth();
	const familia = [];
	const userLoged = users?.find(user => user.email === currentUser?.email);
	// const userrrr = users.map(us => {
	// 	if (us.idCard === userLoged?.DNI) {
	// 		const arr = [];
	// 		arr.push(us);
	// 		return arr;
	// 	}
	// });
	// console.log(userrrr);
	const afiliados = users?.filter(user => user.idCard === userLoged?.DNI);
	console.log(afiliados);
	const hola = familia.push(userLoged);
	const hola2 = familia.push(afiliados);
	if (currentUser) {
		return (
			<div>
				<div>
					<Head>
						<title>Bienvenido!</title>
						<meta name="description" content="Generated by create next app" />
						<link rel="icon" href="https://www.cervezasalta.com.ar/img/logo-salta.png" />
					</Head>
					<Navbar />
					<div>
						{userLoged && <Credential props={familia} />}
						{!userLoged && <Form />}
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<Head>
					<title>Bienvenido!</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="https://www.cervezasalta.com.ar/img/logo-salta.png" />
				</Head>

				<NavLanding />
				<Landing />
			</div>
		);
	}
}

export const getServerSideProps = async context => {
	const querySnapshot = await getDocs(collection(db, 'users'));
	const docs = [];
	querySnapshot.forEach(doc => {
		docs.push({ ...doc.data(), id: doc.id });
	});

	return {
		props: {
			users: docs,
		},
	};
};
