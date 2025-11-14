import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import CounterComponent from "./components/CounterComponent";
import LightSwitch from "./components/LightSwitch";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div style={{ minHeight: "100vh", padding: "20px" }}>
          <LoginForm />
          <CounterComponent />
          <LightSwitch />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
