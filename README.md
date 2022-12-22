# Backend FazzFullStack
##  Description
Backend application for job recruitment services at a particular company

## Built With
![Express](https://img.shields.io/badge/Express-v4.18.2-pink?style=flat)
![Cors](https://img.shields.io/badge/cors-v2.8.5-green?style=flat)
![Argon2](https://img.shields.io/badge/argon2-v0.30.2-blue?style=flat)
![Dotenv](https://img.shields.io/badge/dotenv-v16.0.3-orange?style=flat)
![Express Validator](https://img.shields.io/badge/expressvalidator-v6.14.2-red?style=flat)
![JWT](https://img.shields.io/badge/jwt-v8.5.1-navy?style=flat)
![Morgan](https://img.shields.io/badge/morgan-v1.10.0-cyan?style=flat)
![Multer](https://img.shields.io/badge/multer-v8.4.5-ray?style=flat)
![Nodemon](https://img.shields.io/badge/nodemon-v2.0.20-white?style=flat)
![pg](https://img.shields.io/badge/pg-v8.8.0-pink?style=flat)

## Table of Contents
- [Built With](#built-with)
- [Technologies](#technologies)
- [Run App](#run-app)
- [ENV Example](#env-example)
- [Main End Point](#main-end-point)


## Technologies
- [Node Js](https://nodejs.org/en/)
- [Express Js](https://expressjs.com/)
- [Postman](https://www.postman.com/)
- [Postgree SQL](https://www.postgresql.org/)
- [Supabase](https://supabase.com/)


## Run App
-   Requirement:

    -   Install [Node.js](https://nodejs.org)
    -   Recommended to use [NPM](https://www.npmjs.com/)

-   Clone the repo.

    ```bash
    git clone https://github.com/madiajijah11/ffs-backend.git
    ```

    ```bash
    cd ffs-backend
    ```

-   Install the dependencies.

    ```bash
    npm install
    ```

    ### Development
    Set up your ENV
    
     ```bash
    npm run dev
    ```
    
    Open Postman
    Run the development server and open [http://localhost:8888](http://localhost:8888)
   
   

## ENV Example
### Database URL for postgresql connection string
DB_URL =

### Secret key for json web token
SECRET_KEY =

### Port for the server to listen on
PORT =

## Main End Point
|url|method|desc|
|---|------|----|
|/auth/loginEmployee|POST|login user jobseeker|
|/auth/loginRecruiter|POST|login user recruiter|
|/auth/registerEmployee|POST|register new user jobseeker|
|/auth/regiterRecruiter|POST|register new user recruiter|
|/auth/forgotPassword|POST|if user forgot password / account recovery|
|/auth/resetPassword|POST|reset new password |
|/imployeeLists|GET|get all detail jobseeker at home|
|/users/:id|PATCH|update user data by id|
|/profileEmployee/:id|PATCH|update jobseeker data by id|
|/profileCompany/:id|PATCH|update company data by id|
|/portofolioEmployee|POST|add portofolio jobseeker|
|/skill|POST|add skill jobseeker|
|/workExperience|POST|add work experience jobseeker|


