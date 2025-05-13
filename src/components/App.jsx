//App.jsx

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";

import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/Searchbox";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact } from "../redux/contactsSlice";
import { changeFilter } from "../redux/filtersSlice";

const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onSearch={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
};
export default App;
