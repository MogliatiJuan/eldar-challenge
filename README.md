# ELDAR FrontEnd Semi-Senior Challenge

This repository contains a user login application developed as part of the ELDAR FrontEnd Semi-Senior challenge. The aim of this challenge is to implement a robust login system, showcasing proficiency in modern frontend development practices such as state management, routing, API integration and validaitions.

## Challenge Description

The objective of this challenge is to develop a web application with advanced authentication, role management, and an architecture optimized for scalable projects. The "user" role will have read-only access to data fetched from an API, while the "admin" role will be able to create and edit data.

## Features

- **User Authentication**: Implements a login form with validation to authenticate users against an API
- **Protected Routes**: Certain routes are protected and can only be accessed by authenticated users
- **API Integration**: Seamlessly integrated with a fake backend API for authentication and fetching data
- **Form Validation**: Ensures proper user input handling with client-side validation.
- **Error Handling**: Displays informative error messages to the user in case of invalid credentials or page navigation errors (e.g., 404 Not Found)

## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```
    git clone https://github.com/MogliatiJuan/eldar-challenge.git
    cd eldar-challenge
   ```

2. **Install dependencies**:
   ```
    npm install
   ```

3. **Run the development server**:
   ```
    npm run dev
   ```
    #### The app will be accessible at http://localhost:5173

4. **Build for production**:
   ```
    npm run build
   ```
    This command will create a production-ready build of the app.

5. **Preview the production build**:
   ```
    npm run preview
   ```
    #### The app will be accessible at http://localhost:4173

## Credentials for Testing

You can use the following credentials to test the login functionality:

- ADMIN:
  - **Username**: admin
  - **Password**: admin123
- USER:
  - **Username**: user
  - **Password**: user1234

These credentials are part of the fake-backend API used for development purposes.


## Tech Stack

- **React 18**: For building dynamic and responsive user interfaces.
- **React Router**: For client-side routing and managing protected routes.
- **TypeScript**: Ensures type safety and reduces runtime errors.
- **Vite**: Fast bundling and development server with SWC.
- **Zustand**: Lightweight state management for handling user session and global state.
- **Axios**: For making HTTP requests to a fake-backend API.
- **Material UI**: For providing modern and responsive UI components.

## Deployment
The app is deployed on Vercel. You can view the live version [here](https://eldar-challenge-rl9vgpmqo-mogliatijuans-projects.vercel.app).


## Folder Structure

## 📦 `src/`
This is the root directory of the application’s source code. It contains all the essential files for the frontend.

---

### 📂 `assets/`
Contains static resources, such as images and logos, used in the application.

---

### 📂 `components/`
Reusable user interface components.

- **Header.tsx**: Component for the application's header, usually includes the navigation bar.
- **index.ts**: Central export file to facilitate importing all components.
- **InputField.tsx**: Custom component for input fields in forms.
- **Layout.tsx**: Layout component that manages the global structure of the application.
- **Loader.tsx**: Component that displays a loading indicator while waiting for API responses.
- **NotFound.tsx**: Component shown when a route is not found (404 error).

---

### 📂 `constants/`
Stores constant values used throughout the application.

- **dashboardTexts.ts**: Contains specific texts for the Dashboard.
- **expirationTime.ts**: Defines expiration times used for things like tokens or stored data.
- **index.ts**: Central export file for constants.
- **validationMessages.ts**: Contains validation messages used in forms.

---

### 📂 `guards/`
Contains files for protecting routes based on user authentication.

- **AuthGuard.tsx**: Protects specific routes that require user authentication.
- **index.ts**: Central export for the guards.

---

### 📂 `hooks/`
Contains custom React hooks.

- **index.ts**: Central export file for hooks.
- **usePosts.ts**: Hook that manages the logic for fetching and managing posts.

---

### 📂 `interceptors/`
Configures Axios interceptors for handling HTTP requests.

- **axiosInstance.ts**: Base configuration for Axios to make HTTP requests.
- **axiosInterceptor.ts**: Axios interceptors for handling authentication or error responses.
- **index.ts**: Exports Axios configurations.

---

### 📂 `mocks/`
Contains mock data for testing purposes.

- **users.json**: JSON file containing mock user data for testing and development.

---

### 📂 `models/`
Defines types and models used throughout the application.

- **auth.ts**: Defines types related to authentication.
- **formLogin.ts**: Defines the structure for the login form.
- **index.ts**: Central export file for models.
- **jwt.ts**: Defines the structure for the simulated JSON Web Token (JWT).
- **keysLS.ts**: Defines keys for storing and retrieving data from localStorage.
- **loader.ts**: Defines the state for the loader.
- **roles.ts**: Defines the different user roles in the application.
- **routes.ts**: Defines the application's routes.
- **typeWithKey.ts**: Types that include dynamic keys.
- **user.ts**: Model that defines the structure of a user.

---

### 📂 `pages/`
Contains the application’s main pages.

- **Dashboard/**
  - **Dashboard.tsx**: Main component for the Dashboard.
  - **index.ts**: Exports the Dashboard component.
  - **PostCard.tsx**: Card component used to display each post in the Dashboard.
  - **PostChip.tsx**: Chip component for creating new posts.
  - **PostModal.tsx**: Modal component used to create or edit posts.

- **Login/**
  - **index.ts**: Exports the Login component.
  - **Login.tsx**: Component for the login page.

---

### 📂 `services/`
Services that interact with the fake API.

- **index.ts**: Central export file for services.
- **postService.ts**: Contains functions for performing CRUD (Create, Read, Update, but not Delete) operations on posts.

---

### 📂 `store/`
Manages the global state of the application using Zustand.

- **authStore.ts**: Manages the user authentication state, including login and logout functionalities.
- **index.ts**: Central export file for stores.
- **loaderStore.ts**: Manages the loader (loading indicator) state in the application.

---

### 📂 `theme/`
Configuration for the Material UI theme.

- **index.ts**: Defines and exports the custom Material UI theme for the application.

---

### 📂 `utilities/`
Helper functions and utilities used throughout the application.

- **createFakeJWT.ts**: Function that simulates the creation of a fake JWT for testing.
- **getValidations.ts**: Contains reusable validation functions.
- **helpers.ts**: Helper functions used in various parts of the application.
- **index.ts**: Central export file for utilities.
- **resourceFromLS.ts**: Function for handling resources stored in localStorage.
- **validateUser.ts**: Function for validating user credentials.

---

### 📜 `App.tsx`
Main component of the application. It is the entry point where routes and the overall structure are set up.

### 📜 `main.tsx`
Entry point where the application is initialized and rendered in the DOM.

### 📜 `vite-env.d.ts`
Type definitions for Vite, used for providing autocompletion and type checking in the development environment.


## License

This project is licensed under the MIT License.
