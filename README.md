# 📅 EventFlow - Event Registration & Management System

EventFlow is a full-stack Node.js application designed to streamline event sign-ups, attendee validation, and persistent data management.

## 🚀 Features
- **Instant Registration:** Users can sign up for events with real-time feedback.
- **Data Validation:** Client-side and server-side logic to ensure data integrity and valid email formats.
- **Asynchronous Processing:** Powered by the Fetch API for a seamless experience without page reloads.
- **Persistent Storage:** Local relational database integration for secure attendee record keeping.
- **Responsive Design:** Optimized with Bootstrap 5 for access on any device (Mobile, Tablet, Desktop).

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** SQLite3 (Relational Data Storage)
- **Middleware:** CORS, Body-Parser
- **Frontend:** HTML5, CSS3, JavaScript (ES6+), Bootstrap 5

## 📥 Installation
1. **Clone the repo:**
   git clone <your-repo-link>
2. Install the dependencies:
   npm install
3. Initialize the Server:
   node server.js

🖥️ How to Use

​Launch: Open your web browser and navigate to http://localhost:3000.
​Register: Enter your Name and Email Address in the registration form.
​Process: Upon clicking "Submit," the data is sent to the Node.js backend and stored in database.db.
​Data Audit: Access the hidden endpoint http://localhost:3000/users to view the registered attendee list in JSON format.
​📂 Project Structure
​public/: Contains static frontend assets (HTML, CSS, JS).
​server.js: The core Express server and database configuration.
​database.db: The local relational database file.
​package.json: Project dependencies and metadata.
