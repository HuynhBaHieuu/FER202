import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk để tạo thanh toán mới
export const createPayment = createAsyncThunk(
  'payments/createPayment',
  async (paymentData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      // Xử lý lỗi tùy chỉnh cho status code 402
      if (response.status === 402) {
        return rejectWithValue('Tài khoản không đủ tiền');
      }

      if (!response.ok) {
        throw new Error('Failed to create payment');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // Nếu error đã được xử lý bởi rejectWithValue, trả về giá trị đó
      if (error.message === 'Tài khoản không đủ tiền') {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(error.message || 'Failed to create payment');
    }
  }
);

// Initial state
const initialState = {
  payments: [],
  loading: false,
  error: null,
};

// Payments slice
const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Xử lý trạng thái pending
      .addCase(createPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Xử lý trạng thái fulfilled - thêm thanh toán mới vào mảng
      .addCase(createPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.payments.push(action.payload);
        state.error = null;
      })
      // Xử lý trạng thái rejected với thông báo lỗi tùy chỉnh
      .addCase(createPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to create payment';
      });
  },
});

// Export reducer
export default paymentsSlice.reducer;

