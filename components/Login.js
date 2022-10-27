import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const [isLoggingIn, setIsLoggingIn] = useState(true);

	const { login, signup } = useAuth();

	async function submitHandler() {
		if (!email || !password) {
			setError('Por favor introduce tu email y contraseña');
			return;
		}
		if (isLoggingIn) {
			try {
				await login(email, password);
			} catch (err) {
				setError('Verifique sus datos e intentelo de nuevo');
			}
			return;
		}
		await signup(email, password);
	}

	return (
		<div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
			<h1 className="font-extrabold select-none text-2xl sm:text-4xl uppercase">
				{isLoggingIn ? 'Login' : 'register'}
			</h1>
			{error && (
				<div className="w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2">
					{error}
				</div>
			)}
			<input
				type="text"
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder="Email"
				className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]"
			/>
			<input
				value={password}
				onChange={e => setPassword(e.target.value)}
				type="password"
				placeholder="Contraseña"
				className="outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300"
			/>
			<button
				onClick={submitHandler}
				className="w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900"
			>
				<h2 className="relative z-20">Entrar</h2>
			</button>
			<h2 className="duration-300 hover:scale-110 cursor-pointer" onClick={() => setIsLoggingIn(!isLoggingIn)}>
				{!isLoggingIn ? 'Login' : 'Registrate'}
			</h2>
		</div>
	);
}
