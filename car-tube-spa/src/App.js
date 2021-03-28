import './App.css';
import './style/site.css';

import Navigation from './components/common/Navigation/Navigation';
import AppRouter from './AppRouter';
import Footer from './components/common/Footer';
import Notification from './components/common/Notification/Notification';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Notification />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
