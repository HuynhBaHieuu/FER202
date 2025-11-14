// LoginForm.jsx
import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

function LoginForm() {
  const { login, user, isAuthenticated, error, logout } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });

  // Xử lý thay đổi input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      alert("Vui lòng nhập đủ thông tin!");
      return;
    }
    login(form.username, form.password);
  };

  return (
    <Card style={{ width: "400px", margin: "40px auto", padding: "20px" }}>
      <h3 className="text-center mb-3">Đăng Nhập</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      {isAuthenticated ? (
        <div className="text-center">
          <h5>Xin chào, {user.username}!</h5>
          <p>Vai trò: {user.role}</p>
          <Button variant="secondary" onClick={logout}>
            Đăng xuất
          </Button>
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Tên đăng nhập</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Nhập username"
              value={form.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Nhập mật khẩu"
              value={form.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">
            Đăng nhập
          </Button>
        </Form>
      )}
    </Card>
  );
}

export default LoginForm;
