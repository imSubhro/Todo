# Todo App

A modern, responsive Todo application built with React, Redux Toolkit, and Tailwind CSS. This project demonstrates state management with Redux Toolkit in a clean and intuitive user interface.

## ✨ Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ Beautiful gradient UI with Tailwind CSS
- ✅ State management with Redux Toolkit
- ✅ Fast development with Vite
- ✅ Responsive design

## 🛠️ Tech Stack

- **Frontend**: React 18
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: npm/yarn/pnpm


You can check your versions by running:
```bash
node --version
npm --version
git --version
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/yourusername/redux-toolkit-todo.git

# Or using SSH
git clone git@github.com:yourusername/redux-toolkit-todo.git

# Navigate to the project directory
cd redux-toolkit-todo
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

### 3. Start the Development Server

```bash
# Using npm
npm run dev

# Or using yarn
yarn dev

# Or using pnpm
pnpm dev
```

The application will start running on `http://localhost:5173` (default Vite port).

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
redux-toolkit-todo/
├── public/
│   └── vite.svg
├── src/
│   ├── app/
│   │   └── store.js          # Redux store configuration
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── AddTodo.jsx       # Add todo component
│   │   └── Todos.jsx         # Todo list component
│   ├── features/
│   │   └── todo/
│   │       └── todoSlice.js  # Todo slice with reducers
│   ├── App.jsx               # Main app component
│   ├── App.css               # App styles
│   ├── index.css             # Global styles with Tailwind
│   └── main.jsx              # App entry point
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```



## 📱 Usage

1. **Add a Todo**: Type your task in the input field and click "Add Todo" or press Enter
2. **Complete a Todo**: Click the checkbox or the todo text to mark it as complete
3. **Delete a Todo**: Click the delete button (🗑️) to remove a todo


## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).


---

Made with ❤️ by [**Subhro**](https://github.com/imSubhro)
