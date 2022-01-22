import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import { uuid } from 'uuidv4';
import ContactList from './ContactList';
import AddContact from './AddContact';
function App() {
  const LOCAL_STORAGE_KEY='contacts';
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, {id:uuid(), ...contact}]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=>{
      return contact.id!==id;
    })
    setContacts(newContactList);
  };
  useEffect(()=>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setContacts(retrieveContacts);
  },[]);
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);
  return (
    <div className="App">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={ contacts } getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;