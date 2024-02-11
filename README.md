# Data Stream Challenge

This project demonstrates a full-stack application that displays a list of Data Posts for a specific project in a reverse chronological list. 

## Getting Started

These instructions will guide you through setting up and running the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (https://nodejs.org/)
- npm (comes with Node.js)
- Docker


### Installing

A step-by-step series of examples that tell you how to get a development environment running.

#### Setting up the Client

Navigate to the client directory:

```bash
cd client
npm install
npm start
```

This should launch your client application in the default web browser at http://localhost:3000.

####  Setting up the Server

Instructions for setting up the server side 

```bash
cd server
npm install
docker-compose up
. ./.env.local
npm run init-db
npm run dev
```
