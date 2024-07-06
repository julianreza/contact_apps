import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
    id: string
    firstName: string
    lastName: string
    age: number
    photo: string
}

interface ContactState {
    contact: Contact[] | [];
}

const initialState: ContactState = {
    contact: [],
};

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        setContact: (state, action: PayloadAction<Contact[]>) => {
            state.contact = action.payload;
        },
        clearContact: (state) => {
            state.contact = [];
        },
    },
});

export const { setContact, clearContact } = contactSlice.actions;

export default contactSlice.reducer;
