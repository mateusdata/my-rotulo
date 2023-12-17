# Use an official Node.js runtime as a parent image
FROM node:20.0

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install any needed packages
RUN npm install --silent

# Copy the rest of the application into the working directory
COPY . .

# Build the application
RUN npm run build

# Use nginx to serve the application
FROM nginx:1.22-alpine

COPY --from=0 /app/build /usr/share/nginx/html
COPY conf.d /etc/nginx/conf.d

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
