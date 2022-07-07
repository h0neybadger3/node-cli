const operations = require('./contacts');
const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case 'list':
            const data = await operations.listContacts();
            console.table(data);
            break;

        case 'get':
            const contact = await operations.getContactById(id);
            console.log('getById', contact);
            break;

        case 'add':
            const addContact = await operations.addContact(name, email, phone);
            console.log('addContact', addContact);
            break;

        case 'remove':
            const removeContact = await operations.removeContact(id);
            console.log('removeContact', removeContact);
            break;

        default:
            console.warn('\x1B[31m Unknown action type!');
    }
}

invokeAction(argv);
