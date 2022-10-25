import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase';

export default function UserDashboard() {
	function handleOnClick(e) {
		e.preventDefault();
		signOut(auth);
	}
	return (
		<div>
			<h1>Todo Funciona ok</h1>
			<button onClick={handleOnClick}>Salir</button>
		</div>
	);
}
