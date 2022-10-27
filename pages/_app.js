import Layout from '../components/Layout';
import { AuthProvider } from '../context/AuthContext';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</Layout>
	);
}

export default MyApp;
