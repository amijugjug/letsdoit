# Todo Application README

This Todo application is a simple project built using React, showcasing the use of Redux Toolkit for state management and Tailwind CSS for styling.

## Features

- Add new todos
- Mark todos as completed
- Delete todos
- Edit todos
- Filter todos by status (All, Active, Completed) (TBI)
- Clear completed todos (TBI)
- Local storage persistence for todos (TBI)

## Technologies Used

- React
- Redux Toolkit
- Tailwind CSS

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Usage

- To add a new todo, click on Add a Todo button.
- Click on a todo to mark it as completed.
- Hover over a todo and click the delete icon to remove it.
- Use the filter buttons to filter todos by status (All, Active, Completed).
- Click the "Clear Completed" button to remove all completed todos.

## Folder Structure

```
letsdoit/
  ├── public/
  │   └── index.html
  ├── src/
  │   ├── components/
  │   │   ├── AddTodo.js
  │   │   ├── TodoApp.js
  │   │   ├── TodoCard.js
  │   │   └── TodoContainer.js
  │   ├── state/
  │   │   ├── selectors/
  │   │   │   └── todoSlice.selector.js
  │   │   ├── slices/
  │   │   │   └── todoSlice.js
  │   │   └── store/
  │   │       └── store.js
  │   ├── App.js
  │   └── index.js
  ├── .gitignore
  ├── package.json
  ├── README.md
  └── tailwind.config.js
```

## Acknowledgments

- This project was created following the guidance and documentation provided by the React, Redux Toolkit, and Tailwind CSS communities.
  
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README to include any additional information about your project or deployment instructions.