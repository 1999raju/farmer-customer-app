# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy backend code
COPY . .

# Expose port
EXPOSE 5000

# Start backend
CMD ["node", "app.js"]
