import './App.css';
import Header from './Header'
import TinderCard from './TinderCard'
import SwipeButtons from './SwipeButtons'


function App() {
  return (
    <div className="app">
      <div className='app__body'>
      <Header />
      <TinderCard />
      <SwipeButtons />
      </div>
    </div>
  );
}

export default App;
