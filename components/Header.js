import { signOut } from 'firebase/auth';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';

export default function Header() {
	return (
		<>
			<div className="sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white">
				<h1 className="text-3xl select-none sm:text-6xl">Cerveceros App</h1>
			</div>
		</>
	);
}
