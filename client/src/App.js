import './App.css';

import Dashboard from './components/Dashboard';

import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
    <div>
     <h1>Hello, World</h1>
     <Dashboard />
    </div>
    </GlobalProvider>
  );
}

export default App;
