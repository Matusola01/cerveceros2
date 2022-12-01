import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCIaTPLTqC2Gooes_1hjDaahYSBmeAbtYA',
	authDomain: 'cerveceros-c4a9b.firebaseapp.com',
	projectId: 'cerveceros-c4a9b',
	storageBucket: 'cerveceros-c4a9b.appspot.com',
	messagingSenderId: '90508430738',
	appId: '1:90508430738:web:fbcbb308387b273cfa054b',
	measurementId: 'G-X2KH1X7NBH',
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
