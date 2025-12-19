# First stage: Build the application
FROM node:20.17.0-alpine3.20 AS build-stage

# Create app directory
WORKDIR /app

# Copy only package.json and package-lock.json first for caching
COPY package.json ./

# Install dependencies
RUN npm install

# Copy source code to image
COPY . .

RUN npm run build-storybook

# Second stage: Running the application
FROM node:20.17.0-alpine3.20
WORKDIR /app

# Copy built assets from the first stage
COPY --from=build-stage /app/storybook-static /app/storybook-static

# Install and configure `serve`
RUN npm install -g http-server

# Expose port for service
EXPOSE 6006

# Run Storybook using serve
CMD ["http-server", "/app/storybook-static", "-p", "6006"]
