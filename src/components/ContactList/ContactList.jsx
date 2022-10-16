import css from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  if (contacts.length === 0) return null;
  return (
    <>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            {name}: {number}
            <button
              className={css.btn}
              onClick={() => onDeleteContact(id, name)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
