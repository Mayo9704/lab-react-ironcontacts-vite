import { useState } from 'react';
import contacts from "./contacts.json";
import "./App.css";

function App() {
  // desplegar 5 contactos
  const [contactsList, setContactsList] = useState(contacts.slice(0, 5));

  // RandomButton
  function addRandomContact() {
    const remainingContacts = contacts.filter(contact => !contactsList.find(c => c.id === contact.id));
    if (remainingContacts.length > 0) {
      const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
      setContactsList([...contactsList, randomContact]);
    }
  }
  
  function sortByName() {
    const sorted = [...contactsList].sort((a, b) => a.name.localeCompare(b.name));
    setContactsList(sorted);
  }
  
  function sortByPopularity() {
    const sorted = [...contactsList].sort((a, b) => b.popularity - a.popularity);
    setContactsList(sorted);
  }

  function deleteContact(contactId) {
    const filteredContacts = contactsList.filter(contact => contact.id !== contactId);
    setContactsList(filteredContacts);
  }
  
  // const sortByName = [...contactsList].sort((a, b) => a.name.localeCompare(b.name));
  // setContactsList(sortByName);

  // const sortByPopularity = [...contactsList].sort((a, b) => b.popularity - a.popularity);
  // setContactsList(sortByPopularity);

  // const deleteContact = (id) => {
  //   // To delete an item on a state array we should clone it:
  //   const clonedContacts = JSON.parse(JSON.stringify(contactsList))
  //   // And then find and delete the item:
  //   let indexToDelete = clonedContacts.findIndex(el => el.id === id)
  //   clonedContacts.splice(indexToDelete, 1)
  //   setContactsList(clonedContacts)

  return (
    <div className="App">
      <div className='btn-container'>
        <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="button" onClick={addRandomContact}>Add Random Contact</button>
        <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="button" onClick={sortByName}>Sort by Name</button>
        <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="button" onClick={sortByPopularity}>Sort by Popularity</button>
      </div>
      
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contactsList.map((contact) => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt={contact.name} style={{width: "50px"}}/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  }

export default App;
