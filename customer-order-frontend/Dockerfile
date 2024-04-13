FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy application code
COPY . /app

# Install dependencies
RUN npm i

# Build the React.js application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the React.js development server
CMD ["npm", "start"]
