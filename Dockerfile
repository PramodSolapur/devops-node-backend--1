# Builder stage

FROM node:24-alpine3.23 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev --ignore-scripts

# Run stage

FROM node:24-alpine3.23

ENV NODE_ENV=production

WORKDIR /app

# Create non-root user and add him/her to specific group
RUN addgroup -S nodegroup && adduser -S nodeuser -G nodegroup

# Copy only required files from the build stage to reduce image size
COPY --from=builder /app/node_modules ./node_modules
COPY --chown=nodeuser:nodegroup . .

# Select created user
USER nodeuser

EXPOSE 5000

CMD [ "node", "src/server.js"]