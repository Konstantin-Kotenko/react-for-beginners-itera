import './App.css';
import {Footer} from './Footer';

const user = {
  firstName: 'Kostya',
  secondName: 'Kotenko',
  shortBiorraphy: 'I`m 25 years old. Study at home with Front-end developer',
  publicContacts: {
    email: 'kostya.kotenko@gmail.com',
    phone: '0674259976',
  },
};

const App = () => (
  <div className='App'>
    <h1>Hello world </h1>
    <h2>
      My full name {user.firstName} {user.secondName}
    </h2>
    <h3>{user.shortBiorraphy}</h3>
    <p>My contacts :</p>
    <ul className='App-list'>
      <li>{user.publicContacts.email}</li>
      <li>{user.publicContacts.phone}</li>
    </ul>
    <Footer copyright='C' />
  </div>
);

export default App;
