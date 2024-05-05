# NASA Explorer : Explore the Cosmos with NASA's APIs

## Description

NASA Explorer is a web application that allows users to explore the cosmos by fetching and displaying captivating space imagery from NASA's public APIs. Users can view the Astronomy Picture of the Day, browse through Mars Rover photos, and explore Earth imagery captured by NASA's satellites. The web application provides a user-friendly interface that allows users to easily navigate through the different sections and view the latest space imagery.

## Technologies

- **Frontend**: React.js, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **APIs**: NASA APIs (APOD, Mars Rover Photos, Earth Imagery)

## Hosted Web Application

[NASA Explorer](https://nasaexplorer-3f2oz1bdi-chamikaras-projects-94a7be8c.vercel.app)

## Setup Instructions

1. _Clone the repository:_

bash
git clone https://github.com/sliitcsse/se3040-assignment02-IT21219498.git

2. _Install dependencies:_

- Navigate to the backend folder:

bash
cd backend

- Install dependencies:

bash
npm install

- Navigate to the frontend folder:

bash
cd frontend

- Install dependencies:

bash
npm install

3. _Set up environment variables:_

- Create a .env file based on .env.example.
- Modify the .env file to include your MongoDB connection string, JWT secret key, and any other necessary configurations.

4. _Start the server:_

- Inside the backend folder:

bash
npm start

5. _Start the frontend application:_

- Inside the frontend folder:

bash
npm run dev

## Additional Notes

- Ensure MongoDB is running before starting the server.
