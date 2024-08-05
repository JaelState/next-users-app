

## User Management System

A full-stack web application built with Next.js, React, and MongoDB that provides functionality for managing users. The application allows users to view, add, update, and delete user information. 

### Features

- **User List**: View a list of all users.
- **Add User**: Form to add a new user to the database.
- **CRUD Operations**: 
  - **Create**: Add new users.
  - **Read**: Retrieve and display users.
  - **Update**: Update user details.
  - **Delete**: Remove users from the database.

### Tech Stack

- **Frontend**: 
  - **Next.js**: Server-side rendering and API routes.
  - **React**: Component-based UI.
  - **Tailwind CSS**: Styling.
- **Backend**:
  - **MongoDB**: Database for storing user data.
  - **Node.js**: Server runtime.
- **Logging**:
  - **Winston**: Logging errors and important events.

### Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/repository-name.git
   cd repository-name
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   - Create a `.env.local` file in the root directory.
   - Add your MongoDB URI:
     ```env
     MONGODB_URI=your_mongodb_uri_here
     ```

4. **Run the Application**
   ```bash
   npm run dev
   ```

5. **Open Your Browser**
   - Navigate to `http://localhost:3000` to view the application.

### Folder Structure

- **`/app`**: Contains the main pages and API routes.
  - **`page.js`**: Main page component for listing and adding users.
  - **`apii/users/route.js`**: API routes for CRUD operations.
- **`/components`**: Reusable React components.
  - **`AddUserForm.js`**: Form component for adding new users.
  - **`UserList.js`**: Component for displaying a list of users.
  - **`UserDetail.js`**: Component for displaying user details (optional).
- **`/lib`**: Utilities and helpers.
  - **`logger.js`**: Logger configuration.
  - **`mongodb.js`**: MongoDB client setup.

### Contributing

- Fork the repository and create a new branch for your changes.
- Submit a pull request with a detailed description of your changes.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Winston](https://github.com/winstonjs/winston)


