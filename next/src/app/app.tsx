import '../styles/global.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <header className="header">
            </header>
            <main className="main-content">
                <Component {...pageProps} />
            </main>
        </div>
    );
}

export default MyApp; 
