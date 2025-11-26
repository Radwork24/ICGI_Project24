# Server Setup Guide

## Overview
This guide will help you set up the backend server for the ICGI project, which connects your React frontend to MongoDB.

## Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (you already have the connection string)

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   Create a `.env` file in the root directory with the following content:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # MongoDB Configuration
   # Replace <db_password> with your actual MongoDB password
   MONGODB_URI=mongodb+srv://rank1ltdpvt:<db_password>@thisorthat.cxuijje.mongodb.net/?retryWrites=true&w=majority&appName=ThisorThat

   # Database Name (optional)
   DB_NAME=icgi_database
   ```

## Running the Server

### Development Mode
```bash
npm run dev:server
```
*Note: This requires nodemon to be installed globally or as a dev dependency*

### Production Mode
```bash
npm run server
```

## API Endpoints

### Health Check
- **GET** `/api/health`
  - Returns server status and timestamp

### Test Endpoint
- **GET** `/api/test`
  - Returns a test message to verify API is working

### Data Endpoint
- **POST** `/api/data`
  - Accepts JSON data with `name` and `email` fields
  - Returns confirmation message

## Frontend Integration

The server is configured with CORS to accept requests from:
- `http://localhost:3000` (React default)
- `http://localhost:5173` (Vite dev server)

### Example Frontend API Call
```javascript
// Fetch from API
fetch('http://localhost:5000/api/health')
  .then(response => response.json())
  .then(data => console.log(data));

// POST data to API
fetch('http://localhost:5000/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## Database Connection

The server automatically connects to your MongoDB Atlas database using the provided connection string. Make sure to:

1. Replace `<db_password>` in the connection string with your actual password
2. Ensure your MongoDB Atlas cluster allows connections from your IP address
3. Check that the database user has appropriate permissions

## Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   - Verify the connection string is correct
   - Check if your IP is whitelisted in MongoDB Atlas
   - Ensure the database password is correct

2. **CORS Errors**
   - Make sure your frontend is running on one of the allowed origins
   - Check if the server is running on the correct port

3. **Port Already in Use**
   - Change the PORT in your `.env` file
   - Or kill the process using the port

### Logs
The server provides detailed console logs for:
- MongoDB connection status
- Server startup
- API requests
- Errors

## Next Steps

1. **Install nodemon** for development:
   ```bash
   npm install --save-dev nodemon
   ```

2. **Create MongoDB Models** - Define your database schemas in a `models/` directory

3. **Add Authentication** - Implement user authentication if needed

4. **Add More API Routes** - Create routes specific to your application needs

5. **Add Validation** - Implement request validation middleware

6. **Add Error Handling** - Enhance error handling for better user experience
