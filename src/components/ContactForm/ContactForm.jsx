import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  // loginInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onSubmit } = this.props;

    onSubmit({ id: nanoid(), name, number });
    this.reset();
  };

  reset = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={css.label}>
          phone number
          <input
            className={css.input}
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={css.btn} type="submit">
          send
        </button>
      </form>
    );
  }
}
export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
