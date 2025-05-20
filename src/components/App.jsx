//App.jsx

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";

import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/Searchbox";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import { changeFilter } from "../redux/filtersSlice";

const App = () => {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleFilterChange = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onSearch={handleFilterChange} />
      <ContactList />
    </div>
  );
};
export default App;
