# Expense Tracker

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Context API Overview](#context-api-overview)
- [Contributing](#contributing)
- [Available Scripts](#available-scripts)

## Introduction

The Expense Tracker is a web application built with React that helps users manage their expenses effectively. Utilizing the Context API for state management, this application allows users to add, edit, and delete expenses while tracking their financial habits.

## Features

- **Add Expenses:** Input details for new expenses including amount, description, and category.
- **Edit/Delete Expenses:** Modify or remove any expense entry easily.
- **Expense Summary:** View total expenses.
- **Context API:** Centralized state management for better scalability and performance.
- **Responsive Design:** Works seamlessly on both desktop and mobile devices.

## Technologies Used

- React
- Context API
- HTML
- CSS
- JavaScript

## Installation

To set up the Expense Tracker, follow these steps:

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/expense-tracker.git
```
2. **Navigate to the project directory:**

```bash
cd expense-tracker
```
3. **Install the dependencies:**

```bash
npm install
```

4. **Start the development server:**

```bash
npm start
```

5. **Open your browser and go to http://localhost:3000 to see the app in action!**












# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Context API Overview

This application uses the Context API to manage the state of expenses globally. The ExpenseContext provides access to the expense data and functions to modify it across the application, eliminating the need for prop drilling.


## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Make your changes and commit them (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Open a pull request.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
