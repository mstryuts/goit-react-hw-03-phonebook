import { Component } from 'react';

import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = newContact => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };
  s;
  render() {
    const { contacts } = this.state;
    console.log(this.state.contacts);
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm
            onSubmit={this.formSubmitHandler}
            name={this.state.name}
            contacts={this.state.contacts}
          />
          <h2>Contacts</h2>
          <Filter />
          <ContactList contacts={contacts} />
        </div>
      </>
    );
  }
}
