# Real-Time Chat Application with Node.js and Socket.IO

This project demonstrates how to build a real-time chat application using Node.js, Express.js, Socket.IO, and MongoDB. It enables users to connect instantly, join chat rooms, and exchange messages in real time while storing chat data securely in MongoDB using Mongoose. The project focuses on backend real-time communication concepts and database integration for chat-based applications.

## Features
- Real-time messaging using Socket.IO  
- User-based private chat rooms  
- MongoDB database integration  
- Message storage using Mongoose  
- Express.js backend server  
- Environment variable configuration with dotenv  
- Lightweight and scalable backend structure  
- Error handling and validation for messages  

## Tech Stack
- Node.js  
- Express.js  
- Socket.IO  
- MongoDB Atlas  
- Mongoose  
- dotenv  
- CORS  

## How to Run
Install dependencies using npm install, then create a `.env` file in the project root directory and add your MongoDB connection string and port number. Start the server using node server.js. After running the server, you will see Server running on http://localhost:5000 and MongoDB Connected in the terminal.

## How to Test
Open your browser and go to http://localhost:5000. Connect multiple users and send messages in real time using Socket.IO. Messages will instantly appear for both sender and receiver and will also be stored in MongoDB.

## How It Works
Each user connects to the server using Socket.IO and joins a unique room using their user ID. When a message is sent, it is validated, saved into MongoDB using Mongoose, and then instantly emitted to both sender and receiver in real time.

## Purpose
This project is built for learning:
- Real-time communication  
- WebSocket integration using Socket.IO  
- Backend development with Express.js  
- MongoDB database operations  
- Building scalable chat application architecture  

## Author
Muhammad Hamza  
LinkedIn: https://www.linkedin.com/in/mhamza-se
LinkedIn Post:
https://www.linkedin.com/posts/mhamza-se_real-node-mongodb-ugcPost-7458484177542270979-lnsP?utm_source=share&utm_medium=member_android&rcm=ACoAAFC1dRwBJw9Hjdk96lKLzScF6CQdWMYwQpo
