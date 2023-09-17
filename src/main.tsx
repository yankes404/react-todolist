import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

import ModalProvider from './providers/ModalProvider';
import ToastProvider from './providers/ToastProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div>
    <ToastProvider />
    <ModalProvider />
    <App />
  </div>
)
