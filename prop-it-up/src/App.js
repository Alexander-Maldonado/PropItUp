import './App.css';
import Person from './components/person';

function App() {
  return (
    <div className="App">
      <Person 
      name={'Doe, Jane'}
      age={'45'}
      hairColor={'Black'}
      />
      <Person 
      name={'Smith, John'}
      age={'88'}
      hairColor={'Brown'}
      />
      <Person 
      name={'Fillmore, Millard'}
      age={'50'}
      hairColor={'Brown'}
      />
      <Person 
      name={'Smith, Maria'}
      age={'62'}
      hairColor={'Brown'}
      />
    </div>
  );
}

export default App;
