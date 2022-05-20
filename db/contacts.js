const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, 'contacts.json');


function listContacts() {
  // ...твой код
    fs.readFile(contactsPath, 'utf-8')
        .then(data => {
            
            // console.log(JSON.parse(data));
            return JSON.parse(data);
        })
        .catch(err => console.log(err.message))
}

 function getContactById(contactId) {
  // ...твой код
    const contacts = listContacts();
    console.log(contacts);
    // const findedContact = contacts.find(contact => contact.id === contactId)
    // console.log(findedContact);
    // return findedContact;
  return;
 }

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
    listContacts, getContactById
}