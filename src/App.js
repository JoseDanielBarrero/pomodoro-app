import './App.css';
import Clock from './components/Clock';
import Header from './components/Header';
import MediaButtons from './components/MediaButtons';

function App() {
  return (
    <div className="App">
      <Header/>
      <Clock/>
      <MediaButtons/>
    </div>
  );
}

export default App;
