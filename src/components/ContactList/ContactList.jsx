import css from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts }) => (
  <div>
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;
