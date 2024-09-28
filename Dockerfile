# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

RUN npm run build 
# Expose the port the app runs on (adjust if your app runs on a different port)
EXPOSE 3000

# Define the command to run your app using npm start
CMD ["npm", "start"]
