import { createSlice } from '@reduxjs/toolkit';
import plugContacts from './../contacts.json';
const slice = createSlice({
    name: 'contacts',
    initialState: {
        items: plugContacts,
    },
    reducers: {
        addContact: (state, action) => {
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        },
        deleteContact: (state, action) => {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        },
    },
});
export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
