Setup and Run Instructions:

Backend:

1. Create a new file named .env in the backend folder with the following parameters:
    - SERVER_PORT=1337
    - SERVER_HOSTNAME=localhost
    - MONGO_URI= your mongo uri
2. Run npm install in the backend folder
3. Run nodemon src/server.ts to start the backend server

Frontend:

1. Create a new file named .env in the frontend folder with the following parameter:
    - VITE_APP_API_ENDPOINT=http://localhost:1337/api/token/
2. Run npm install in the frontend folder
3. Run npm run dev to start the frontend development server

