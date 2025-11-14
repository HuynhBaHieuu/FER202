// AuthContext.jsx
import React, { createContext, useReducer, useContext } from "react";

// 1️⃣ Mock data (giả lập dữ liệu tài khoản)
const mockAccounts = [
  { id: 1, username: 'admin', email: 'admin@example.com', password: '123456', role: 'admin', status: 'active' },
  { id: 2, username: 'user1', email: 'user1@example.com', password: '123456', role: 'user', status: 'active' },
  { id: 3, username: 'user2', email: 'user2@example.com', password: '123456', role: 'user', status: 'locked' }
];

// 2️⃣ Khởi tạo Context
export const AuthContext = createContext();

// 3️⃣ Định nghĩa trạng thái ban đầu
const initialState = {
  user: null, // người dùng hiện tại
  isAuthenticated: false,
  error: null,
};

// 4️⃣ Định nghĩa reducer cho AuthContext
function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, isAuthenticated: true, error: null };
    case "LOGIN_FAIL":
      return { ...state, user: null, isAuthenticated: false, error: action.payload };
    case "LOGOUT":
      return { ...state, user: null, isAuthenticated: false, error: null };
    default:
      return state;
  }
}

// 5️⃣ Tạo Provider
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // 🧩 Hàm đăng nhập: kiểm tra từ mock data
  const login = (username, password) => {
    const foundUser = mockAccounts.find(
      (acc) => acc.username === username && acc.password === password
    );

    if (!foundUser) {
      dispatch({ type: "LOGIN_FAIL", payload: "Sai tên đăng nhập hoặc mật khẩu" });
      return;
    }

    if (foundUser.role !== "admin") {
      dispatch({ type: "LOGIN_FAIL", payload: "Chỉ admin mới được phép đăng nhập" });
      return;
    }

    if (foundUser.status !== "active") {
      dispatch({ type: "LOGIN_FAIL", payload: "Tài khoản đang bị khóa" });
      return;
    }

    dispatch({ type: "LOGIN_SUCCESS", payload: foundUser });
  };

  // 🧩 Hàm đăng xuất
  const logout = () => dispatch({ type: "LOGOUT" });

  // 🧩 Giá trị context
  const contextValue = {
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    error: state.error,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// 6️⃣ Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
