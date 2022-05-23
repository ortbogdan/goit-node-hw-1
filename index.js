
const { listContacts, getContactById, removeContact, addContact } = require("./db/contacts.js");
const argv = require('yargs').argv;

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      // ...
          const list = await listContacts();
          console.table(list);
      break;

    case 'get':
      // ... id
          const contact = await getContactById(id);
          if (!contact) {
            console.log("No contact in the list");
          }
      break;

    case 'add':
      // ... name email phone
        const addedContact = await addContact(name, email, phone);
        console.log(addedContact);
      break;

    case 'remove':
      // ... id
        const removedContact = await removeContact(id);
        console.log(removedContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);