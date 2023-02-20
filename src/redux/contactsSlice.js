import axios from 'axios';
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';

import { selectContacts } from './selectors';

axios.defaults.baseURL = 'https://63e53f554474903105fc94dd.mockapi.io/api/v1/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }) => {
    try {
      const { data } = await axios.post('/contacts', { name, phone });
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      thunkAPI.dispatch(fetchContacts());
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const selectContactsCount = createSelector(
  [selectContacts],
  contacts => {
    const count = contacts.filter(Boolean).length;
    return count;
  }
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addContact.pending, state => {
      state.isLoading = false;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteContact.pending, state => {
      state.isLoading = false;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== action.payload);
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export { contactsSlice };
