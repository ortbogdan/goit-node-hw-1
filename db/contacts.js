const fs = require('fs').promises;
const path = require('path');
const { v4 } = require('uuid');
const contactsPath = path.join(__dirname, 'contacts.json');


async function listContacts() {
  // ...твой код
  try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    return JSON.parse(data)
  } catch (error) {
    console.log(error.message);
  }
    
}
async function getContactById(contactId) {
  // ...твой код
  const contacts = await listContacts();
  const findedContact = contacts.find(({id}) => id === contactId.toString());
   if (!findedContact) {
     return null;
   }
    console.log(findedContact);
    return findedContact;
 }

async function removeContact(contactId) {
  // ...твой код
  const contacts = await listContacts();
  const idx = contacts.findIndex(({id}) => id === contactId.toString());
  if (idx === -1) {
    return null;
  }
  const [removedContact] = contacts.splice(idx, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return removedContact;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const contact = { name, email, phone, id: v4() };
  contacts.push(contact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts), 'utf-8');
  return contact;
}

module.exports = {
    listContacts, getContactById, removeContact, addContact
}