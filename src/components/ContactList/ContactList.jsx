import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({}) => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.name);

    const filteredContactList = () => {
        return contacts.filter(contact =>
            Object.values(contact).some(
                value =>
                    typeof value === 'string' &&
                    value.toLowerCase().includes(filter.toLowerCase())
            )
        );
    };

    return (
        <div className={s.container}>
            <h2 className={s.title}>Phonebook</h2>
            <ul className={s.ContactList}>
                {filteredContactList().map(item => (
                    <Contact key={item.id} data={item} />
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
