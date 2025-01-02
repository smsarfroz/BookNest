📚 BookNest - MERN Stack Application

A full-stack book management application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). The project demonstrates implementation of CRUD operations, REST API development, state management, and modern UI design.

🌐 Live Demo

Frontend: BookNest Live (https://book-nest-sigma.vercel.app)

Backend API: [API Endpoint](https://booknest-6065.onrender.com)

![image](https://github.com/user-attachments/assets/d529781d-79d1-47ca-a579-0c2102234de3)
![image](https://github.com/user-attachments/assets/f824d598-9d74-444e-bb7c-b66d0fa4044b)
![image](https://github.com/user-attachments/assets/f3b7d0a2-2439-4a92-a4d2-fc0f5e6de344)
![image](https://github.com/user-attachments/assets/195e342d-0df9-4ec2-aa39-553f0db51780)
![image](https://github.com/user-attachments/assets/6b001477-9ceb-46cd-a870-d00103745351)
![image](https://github.com/user-attachments/assets/21c30adb-bc36-4a58-9c46-7e4fd0619376)
![image](https://github.com/user-attachments/assets/df428668-48df-49bb-b52b-c5f545dbbb54)
![image](https://github.com/user-attachments/assets/98ce097c-1aa7-48ff-8985-9f408e4dffa3)
![image](https://github.com/user-attachments/assets/2a12e6af-73fd-4f36-911a-050826db408b)
![image](https://github.com/user-attachments/assets/6af3e009-db2d-4ad6-8534-b74f4ea49720)

⚙️ Technical Stack

Frontend:

- React.js with Vite
- Tailwind CSS for styling
- React Router v6 for navigation
- Axios for API requests
- Context API for state management

Backend:

- Node.js & Express.js
- MongoDB with Mongoose
- REST API architecture
- CORS implementation
- MVC pattern

🔋 Features

Book Management:

- Create new books with title, author, and description
- View all books in a responsive grid layout
- Update existing book information
- Delete books from the collection

API Implementation:

- RESTful API design
- CRUD operations
- Error handling
- Request validation

User Interface:

- Responsive design
- Modal-based forms
- Interactive alerts
- Card-based book display

📂 Project Structure

```
BookNest/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   └── package.json
└── backend/
    ├── models/
    ├── routes/
    ├── controllers/
    └── package.json
```

🛠️ API Endpoints

```
GET    /api/books     - Get all books
POST   /api/books     - Create a new book
PUT    /api/books/:id - Update a book
DELETE /api/books/:id - Delete a book
```

💻 Local Development

1. Clone the repository
```
git clone https://github.com/yourusername/BookNest.git
```

2. Backend Setup

```
cd backend
npm install
npm start
```

3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

4. Environment Variables
```
MONGODB_URI=your_mongodb_uri
PORT=5000
FRONTEND_URL=http://localhost:5173
```

🔍 Learning Outcomes

- Implemented full-stack CRUD functionality
- Designed and developed RESTful API
- Managed state with Context API
- Handled cross-origin requests with CORS
- Created responsive UI with Tailwind CSS
- Deployed frontend to Vercel and backend to Render

👤 Author

Sarfroz

GitHub: @smsarfroz
