# To-Do List App

A simple and intuitive To-Do List app that allows users to manage their tasks. Users can add, edit, and delete tasks, with options for setting priority and tracking the progress of each task. Tasks are organized into two categories: "School/Work" and "Personal." This app uses local storage to persist tasks, so they remain even after the page is refreshed.

## Live link : https://a-minimal-todo-using-vanilla-js.netlify.app/

## Features

- **Add New Tasks:** Users can add new tasks with a title, category ("School/Work" or "Personal"), priority (High, Medium, Low), and initial status (Not Started).
- **Edit Tasks:** Tasks can be edited to update their content, priority, or status (Not Started, In Progress, Done).
- **Delete Tasks:** Users can delete tasks that are no longer needed.
- **Organize by Category:** Tasks are displayed in two separate sections: "Work / School Tasks" and "Personal Tasks."
- **Local Storage Persistence:** Tasks are saved in the browser's local storage to persist across sessions.

## Demo Video
![Demo Video](demo_video/demo.mp4)

## Technologies Used

- **HTML:** The structure of the app.
- **CSS:** Styling for the app.
- **JavaScript:** Functionality for task management (adding, editing, deleting) and local storage handling.
- **Font Awesome:** Icons used for buttons.

## Getting Started

### Prerequisites

To run this project, you will need a modern web browser that supports local storage.

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   ```

2. Open the project directory:
   ```bash
   cd todo-list-app
   ```

3. Open the `index.html` file in your browser:
   ```bash
   open index.html
   ```

### Usage

1. Click the "Add a Todo" button to open the modal and add a new task.
2. Fill in the task details, including the title, category, and priority, then click "Add."
3. Tasks will appear in the "Work / School Tasks" or "Personal Tasks" section based on the selected category.
4. Click the edit (pencil) icon to modify a task, or the delete (trash can) icon to remove it.
5. The app will save your tasks in the browser's local storage, so they will still be there if you refresh the page.

## Code Structure

- `index.html`: The main HTML file that contains the app's layout and structure.
- `styles.css`: The CSS file for styling the app, including layout, buttons, and task appearance.
- `script.js`: The JavaScript file for handling app functionality such as task management, local storage, and modal display.

## Future Enhancements

Potential improvements to this project:
- **Add Due Dates:** Allow users to set due dates for tasks.
- **Search and Filter:** Enable task searching and filtering by priority, status, or category.
- **Drag and Drop:** Implement drag-and-drop functionality to rearrange tasks.
- **User Authentication:** Add user accounts to support multiple users with individual task lists.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue to improve the app.

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

