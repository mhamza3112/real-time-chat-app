const mongoose = require("mongoose");
const Message = require("../models/Message");

const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("join", (userId) => {
      if (!userId) return;

      socket.join(userId);
    });

    socket.on("send_message", async (data) => {
      try {
        console.log("Incoming Message:", data);

        if (mongoose.connection.readyState !== 1) {
          console.log("Database not connected");
          return;
        }

        const { sender, receiver, message } = data;

        if (!sender || !receiver || !message) {
          console.log("Missing required fields");
          return;
        }

        const newMessage = new Message({
          sender,
          receiver,
          message
        });

        const savedMessage = await newMessage.save();

        io.to(receiver).emit("receive_message", savedMessage);
        io.to(sender).emit("receive_message", savedMessage);

        console.log("Message saved successfully");

      } catch (error) {
        console.error("Message send error:", error);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};

module.exports = socketHandler;