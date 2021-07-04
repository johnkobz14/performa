import './App.css';

import Dashboard from './components/Dashboard';
import { AppContextProvider } from './context/AppContextProvider';

// import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <AppContextProvider>
    <div>
     <h1>Hello, World</h1>
     <Dashboard />
    </div>
    </AppContextProvider>
  );
}

export default App;
