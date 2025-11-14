import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk để lấy danh sách người dùng
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Initial state
const initialState = {
  users: [],
  loading: false,
  error: null,
};

// Users slice
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Reducer đồng bộ để toggle admin status
    toggleAdminStatus: (state, action) => {
      const userId = action.payload;
      const user = state.users.find((u) => u.id === userId);
      if (user) {
        user.isAdmin = !user.isAdmin;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Xử lý trạng thái pending
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Xử lý trạng thái fulfilled
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = null;
      })
      // Xử lý trạng thái rejected
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch users';
      });
  },
});

// Export actions
export const { toggleAdminStatus } = usersSlice.actions;

// Export reducer
export default usersSlice.reducer;

