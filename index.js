console.log("I am here")

const { listContacts, getContactById } = require("./db/contacts.js");


listContacts()
getContactById(10)