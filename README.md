# QuizMasterPro

QuizMasterPro is a dynamic quiz application that offers a wide variety of quizzes on topics like JavaScript, Python, and CSS. It features robust authentication and an interactive user interface designed to provide an engaging learning experience.

![Quizmokup](https://github.com/user-attachments/assets/43a0adbb-5507-4cc8-960b-38edeccff5ca)


## Features

### Backend Features

-   **Authentication System**:
    -   User login, signup, password reset, and logout.
    -   JWT-based authentication for secure API access.
-   **User Management**:
    -   Update profile details (name, password, profile image via Multer).
-   **Quiz Functionality**:
    -   CRUD operations for quizzes.
    -   Select and participate in quizzes of your choice.

### Frontend Features

-   **State Management**:
    -   State handling with Redux to track user progress, answers, and quiz navigation.
    -   Features like retry quizzes, finish quizzes, and handle timeouts.
-   **Data Fetching**:
    -   React Query for fetching and managing backend data with loading, success, and error states.
-   **Responsive Design**:
    -   Tailwind CSS for a clean, responsive UI.
-   **Routing**:
    -   React Router DOM for seamless page navigation.
-   **Local Storage**:
    -   Store and manage tokens securely for authentication.
-   **Context API**:
    -   Simplifies login and logout operations.

## Tech Stack

### Backend

-   **Node.js**
-   **Express.js**
-   **MongoDB**
-   **JWT**

### Frontend

-   **React.js**
-   **Redux**
-   **React Query**
-   **Tailwind CSS**
-   **React Router DOM**

## Installation

### Prerequisites

-   Node.js and npm installed.
-   MongoDB instance set up locally or in the cloud.

### Setup

1.  **Clone the Repository**
    
    bash
    
    Copy code
    
    `git clone https://github.com/Gadridev/Quiz-app-v3.git

    cd Quiz-app-v3
    
3.  **Backend Setup**
    
    bash
    
    Copy code
    
    `cd backend
     npm install`
    <br><br>
    `npm run start:dev`
    
5.  **Frontend Setup**
    
    bash
    
    Copy code
    
    `cd frontend
    npm  install`
    <br><br>
   `npm run dev` 
    
7.  **Environment Variables**  
    Create a `.env` file in the `backend` folder and configure the following:
    
    env
    
    Copy code
    
    `MONGO_URI=<your-mongo-uri>
    JWT_SECRET=<your-jwt-secret>` 
    

## How to Use

1.  **Register**: Create an account.
2.  **Login**: Access the dashboard to explore quizzes.
3.  **Take a Quiz**: Select a quiz, answer questions, and see your results.
4.  **Update Profile**: Change your details, including your password or profile image.

## Screenshots

> _Include relevant images or GIFs showcasing the app's features._

## License

This project is open-source and available under the [MIT License](LICENSE).
