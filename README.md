# Table of Contents
- [InvManagement](#invmanagement)
- [Site URL](#site-url)
- [Overview](#overview)
- [Installation & Setup](#installation--setup)
- [Running Locally](#running-locally)
- [Additional Resources](#additional-resources)


# InvManagement

InvManagement is a full-stack Inventory Management system to manage products, categories, and stock levels in a central database.


## Site url
https://main.d2f4cbhcksnc6r.amplifyapp.com/dashboard

## Overview

- Next.js as the frontend framework, taking advantage of its server-side rendering (SSR) capabilities and file-based routing.
- Node.js / Express on the backend for an API layer and core server functionality.
- PostgreSQL for persistent data storage.
- AWS services for deployment:
- API Gateway to handle incoming HTTP requests.
- EC2 to host the Node/Express backend.
- AWS Amplify for hosting and continuous deployment of the Next.js frontend (optional, but possible).
- RDS (Relational Database Service) for managing the database.

## Installation & Setup
**Clone the repository** </br>

`git clone https://github.com/ChrisV001/InvManagement.git` </br>

`cd InvManagement`

**Install dependencies for both front-end and back-end** </br>

`cd client` </br>

`npm install`</br>

`cd ../server`</br>

`npm install`</br>

## Running Locally

Start the Backend from the server directory:

`cd server`

`npm run dev`

Start the Frontend from the client directory:

`cd client`

`npm run dev`

## Additional Resources

- Next.js Documentation: https://nextjs.org/docs
- Express.js Documentation: https://expressjs.com/
- AWS Amplify: https://aws.amazon.com/amplify/
- AWS EC2: https://aws.amazon.com/ec2/
- AWS API Gateway: https://aws.amazon.com/api-gateway/
- AWS RDS: https://aws.amazon.com/rds/
