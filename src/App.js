import './App.css';
import Clock from './components/Clock';
import Header from './components/Header';
import MediaButtons from './components/MediaButtons';
import PeriodCounter from './components/PeriodCounter';

function App() {
  return (
    <div className="App">
      <Header/>
      <Clock/>
      <PeriodCounter/>
      <MediaButtons/>
    </div>
  );
}

export default App;
