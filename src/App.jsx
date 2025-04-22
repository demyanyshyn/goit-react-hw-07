import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
    return (
        <section className="app">
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </section>
    );
};
export default App;
