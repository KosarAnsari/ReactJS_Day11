import Clock from './Clock';
import User from './User';
import{useState} from 'react';

function App() {

  const[color,setColor] = useState('green');
  const userData = [
    {
      name: 'Peter',
      age: 29,
      email: 'peter@test.com',
      id: 1,
    },
    {
      name: 'Bruce',
      age: 28,
      email: 'Bruce@test.com',
      id: 2,
    },
    {
      name: 'Bhaskar',
      age: 27,
      email: 'bhaskar@test.com',
      id: 3,
    },
  ];
  return (
    <>
      <h1>Reuse Components</h1>
      {userData.map((user) => (
        <div key={user.data}>
          <User Data={user} />
        </div>
      ))}

      <h2>Digital Clock</h2>
      <select onChange = {(event)=>setColor(event.target.value)}>
        <option value="">--Select Color--</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
      </select>
      <Clock color = {color}/>
    </>
  );
}
export default App;
