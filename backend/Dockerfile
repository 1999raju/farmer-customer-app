# Use an official Node runtime as the parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose port 5000
EXPOSE 5000

# Define the command to run the app
CMD [ "node", "app.js" ]
