import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';

function App() {
  return (
    <main className='app'>
      <h1>CV Application</h1>

      <GeneralInfo />
      <Education />
    </main>
  );
}

export default App;