# Todo App

This is a comprehensive Todo application built with React. It not only allows you to manage a list of tasks, but also provides features like pagination, sorting, and user-specific tasks management.

## Features

- Add new todo items
- Toggle completion status of todo items
- Delete todo items
- Pagination support for easy navigation through tasks
- Customize app settings, including items to display per page
- User-specific tasks: Each user can only see and manage their own tasks
- Authentication: Protected routes and functions

## Technologies Used

- React
- React Router
- Mantine UI Library
- React Context API
- UUID for generating unique identifiers

## Installation

1. Clone the repository: `git clone https://github.com/your-username/todo-app.git`
2. Navigate to the project directory: `cd todo-app`
3. Install the dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open your browser and visit `http://localhost:3000` to access the Todo App.

## Project Structure

- `src/Components/Header.jsx`: Header component for the app.
- `src/Components/Footer.jsx`: Footer component for the app.
- `src/Components/Todo.jsx`: Todo component that manages the list of tasks, with pagination.
- `src/Components/Pagination.jsx`: Pagination component that handles the navigation through tasks.
- `src/Components/Settings.jsx`: Settings component for customizing app settings.
- `src/Context/theme.js`: Theme provider for the app.
- `src/Context/Settings.js`: Settings provider for managing app settings.
- `src/Context/auth.js`: Authentication provider for managing user authentication and data.
- `src/Context/auth/Auth.jsx`: Component for managing user permissions and capabilities.
- `src/App.jsx`: Main entry point of the application.

## UML Diagram

![UML](./public/todoUML.png)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
