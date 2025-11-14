import { createSelector } from 'reselect';

// Selector cơ bản để lấy tất cả payments
const selectPayments = (state) => state.payments.payments;

// Selector sử dụng reselect để chỉ lấy các thanh toán có status: 'SUCCESS'
export const selectSuccessfulPayments = createSelector(
  [selectPayments],
  (payments) => payments.filter((payment) => payment.status === 'SUCCESS')
);

