# Chattr 💬

A real-time chat application built with the **MERN stack** and **Socket.IO**, featuring a sleek deep violet glassmorphism UI.

![Tech Stack](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Tech Stack](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![Tech Stack](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Tech Stack](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Tech Stack](https://img.shields.io/badge/Socket.IO-010101?style=flat&logo=socket.io&logoColor=white)

## ✨ Features

- 🔐 **JWT Authentication** — Secure login/signup with HTTP-only cookies
- 💬 **Real-time Messaging** — Instant messaging powered by Socket.IO
- 🟢 **Online Users** — See who's currently active in real time
- ⌨️ **Typing Indicators** — Know when someone is typing
- 👥 **User Avatars** — Unique avatars generated via DiceBear API
- 🔔 **Toast Notifications** — Elegant alerts for errors and events
- 📱 **Responsive Design** — Works beautifully on all screen sizes
- 🎨 **Glassmorphism UI** — Deep violet theme with frosted glass effects

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API server |
| MongoDB + Mongoose | Database & ODM |
| Socket.IO | Real-time WebSocket communication |
| JWT + bcryptjs | Authentication & password hashing |
| cookie-parser | HTTP-only cookie management |

### Frontend
| Technology | Purpose |
|---|---|
| React 18 + Vite | UI framework & build tool |
| Tailwind CSS + DaisyUI | Styling |
| Zustand | Global state management |
| Socket.IO Client | Real-time communication |
| React Router v6 | Client-side routing |

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB instance (local or Atlas)

### 1. Clone & Install
```bash
git clone https://github.com/YOUR_USERNAME/chattr-mern.git
cd chattr-mern

# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend && npm install && cd ..
```

### 2. Environment Variables
Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_DB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/chattr
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development
```

### 3. Run Development Servers
```bash
# Terminal 1 — Backend (from root)
npm run server

# Terminal 2 — Frontend (from frontend/)
cd frontend && npm run dev
```

App runs at `http://localhost:5173` (frontend) and `http://localhost:5000` (API).

## 📁 Project Structure

```
chattr/
├── backend/
│   ├── controllers/    # Route handler logic
│   ├── middleware/     # JWT auth middleware
│   ├── models/         # Mongoose schemas (User, Message, Conversation)
│   ├── routes/         # Express route definitions
│   ├── socket/         # Socket.IO server & event handlers
│   └── server.js       # Entry point
└── frontend/
    └── src/
        ├── components/ # Sidebar, Messages, MessageInput
        ├── context/    # Auth context
        ├── hooks/      # Custom hooks (useLogin, useSignup, useMessages...)
        ├── pages/      # Home, Login, Signup
        └── zustand/    # Global state store
```

## 🏗️ Architecture

```
Client (React)  ──HTTP──▶  Express API  ──▶  MongoDB
     │                                         ▲
     └────────WebSocket (Socket.IO)────────────┘
              (real-time messages)
```

## 🔑 Key Implementation Details

- **Auth Flow**: JWT stored in HTTP-only cookie → protected routes via `protectRoute` middleware
- **Real-time**: Socket.IO maintains a persistent connection; online user status broadcast to all clients
- **Message Storage**: All messages persisted to MongoDB; conversation model groups messages between 2 users
- **State Management**: Zustand handles selected conversation, messages list, and online users globally

## 📄 License

MIT © [Your Name]
