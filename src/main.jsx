import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/organisms/Navbar/Navbar';
import './index.css';
import AppWrapper from './providers/AppWrapper';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppWrapper>
			<App />
		</AppWrapper>
	</React.StrictMode>
);
