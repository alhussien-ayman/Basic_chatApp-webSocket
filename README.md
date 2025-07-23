# Real-Time Chat Application

A simple real-time chat application built with Node.js, Express, and Socket.IO that allows multiple users to communicate instantly with typing indicators.

## Features

- **Real-time messaging**: Messages are instantly delivered to all connected users
- **Typing indicators**: See when other users are typing
- **Clean UI**: Simple and responsive design
- **Multiple users**: Support for unlimited concurrent users
- **Connection status**: Console logging for user connections and disconnections

## Technologies Used

- **Backend**: Node.js, Express.js, Socket.IO
- **Frontend**: HTML5, CSS3, JavaScript
- **Real-time Communication**: WebSocket (via Socket.IO)

## Prerequisites

Before running this application, make sure you have:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone or download the project files
2. Navigate to the project directory
3. Install the required dependencies:

```bash
npm install express socket.io
```

## Project Structure

```
chat-app/
│
├── server.js          # Main server file
├── index.html         # Client-side HTML
└── package.json       # Project dependencies
```

## Usage

1. **Start the server**:
   ```bash
   node server.js
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

3. **Start chatting**:
   - Type your message in the input field
   - Press Enter or click "Send" to send the message
   - Your message will appear for all connected users
   - Typing indicators will show when other users are typing

## How It Works

### Server-side (server.js)
- Creates an Express server with Socket.IO integration
- Handles WebSocket connections on port 3000
- Listens for chat messages and broadcasts them to all connected users
- Manages typing indicators by broadcasting typing status to other users
- Logs user connections and disconnections

### Client-side (index.html)
- Connects to the Socket.IO server
- Sends messages when the form is submitted
- Listens for incoming messages and displays them
- Handles typing indicators with keydown/keyup events
- Auto-scrolls to show the latest messages

## Socket Events

| Event | Direction | Description |
|-------|-----------|-------------|
| `connection` | Server | New user connects |
| `chat message` | Client → Server | User sends a message |
| `send_messages_to_all_users` | Server → Client | Broadcast message to all users |
| `typing` | Client → Server | User starts typing |
| `show_typing_status` | Server → Client | Show typing indicator |
| `stop_typing` | Client → Server | User stops typing |
| `clear_typing_status` | Server → Client | Hide typing indicator |
| `disconnect` | Server | User disconnects |

### Real-time Messaging
Messages are instantly synchronized across all connected clients using WebSocket connections.

### Typing Indicators
- Triggered on `keydown` events
- Cleared on `keyup` events with a 2-second delay
- Only visible to other users (not the person typing)

### Port Configuration
Change the port number in `server.js`:
```javascript
server.listen(3000, ()=>{
    console.log('== listening to port 3000 ==')
})
```

