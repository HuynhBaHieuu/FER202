# use-context-exercisesuseContext

This project demonstrates the use of React's Context API and Hooks, specifically the `useContext` and `useReducer` hooks, to manage state across components without prop drilling.

## Project Structure

```
use-context-exercisesuseContext
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── CounterComponent.jsx
│   │   ├── LightSwitch.jsx
│   │   └── LoginForm.jsx
│   ├── contexts
│   │   ├── ThemeContext.jsx
│   │   └── AuthContext.jsx
│   ├── App.js
│   ├── index.js
│   └── styles
│       └── app.css
├── package.json
├── .gitignore
└── README.md
```

## Features

- **Theme Management**: The application allows users to toggle between light and dark themes using the `ThemeContext`.
- **Counter Component**: A functional component that manages a counter state with increment, decrement, and reset functionalities.
- **Light Switch Component**: A functional component that simulates a light switch with toggle, turn on, and turn off functionalities.
- **Login Form**: A functional component that handles user authentication using mock data, allowing only admin users to log in.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd use-context-exercisesuseContext
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

## Usage

- The `CounterComponent` allows users to manipulate a counter and toggle the theme.
- The `LightSwitch` component provides controls to manage a light switch state and also toggle the theme.
- The `LoginForm` component enables user login with validation against predefined mock accounts.

## Technologies Used

- React
- React Hooks (useContext, useReducer)
- Bootstrap for styling

## License

This project is licensed under the MIT License.