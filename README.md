### Detailed `README.md`

# Campsite Management System

The **Campsite Management System** is a comprehensive solution for managing campsite operations. It is designed with two main components:

1. **Admin Section**: A backend interface that stores and manages data for reception use.
2. **Reception Section**: A front-end interface for client interactions, transactions, and operations.

---

## Project Structure

Here’s an overview of the main directories and files, along with their purposes:

## Directories
- CampProject: Contains core project files for campsite management logic.
-frontend: contain two different main page
    admin: Backend files for administrative operations, including data storage and management.
    reception: Frontend files for handling reception interactions, including UI components and client-side logic.
- camplogin: Handles authentication and login features for both admin and reception.
---
## Frontend Overview

The **frontend (reception)** is built using React and is designed to:

- Display an intuitive interface for managing bookings, check-ins, and check-outs.
- Handle user input and communicate with the backend via API calls.
- Provide real-time updates on campsite availability.

Key technologies: **React.js, HTML, CSS, JavaScript**
---

## Backend Overview

The **backend (admin)** handles:

- Storing and retrieving campsite data using a MySQL database.
- Managing campsite inventory, bookings, and reports.
- Providing APIs for the frontend to interact with the database.

Key technologies: **SpringBoot, Java, MySQL, Maven**
---
## Getting Started

## Prerequisites
Before running the project, ensure the following are installed:
- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/) (installed via Node.js)
- [MySQL](https://www.mysql.com/)
- [Maven](https://maven.apache.org/)
- [SpringBoot](https://start.spring.io)
---
## Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/aipat95/niasian.git
   ```
2. Navigate to the project directory:
   ```bash
   cd niasian-main
   ```
3. Install required dependencies:
   ```bash
   npm install
   ```
4. Set up the database:
   - Open MySQL and create a new database.
   - Import the provided SQL schema (if available in the `/admin` folder).
5. Start the application:
   ```bash
   npm start
   ```
---
## Running the Application

1. **Backend**: Ensure the MySQL database is running, and the backend service is properly connected.
2. **Frontend**: Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
---
## Contribution Guidelines

If you'd like to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request for review.

## Acknowledgments
Special thanks to everyone who contributed to this project.
## Contact
For questions or support, reach out via GitHub issues.
```
