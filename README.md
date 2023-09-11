
# JM-E-Commerce-Backend
### License Badge
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

As manager at an internet retail company, it's important to have a back end that uses the latest web technologies so that you can competently compete with other e-commerce companies.
To help achieve this, I have created an application that utilizes an express API configured to use sequelize to interact with a mysql database.

## Table of Contents

- [Title](#jm-e-commerce-backend)
- [License Badge](#license-badge)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contribution](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

Either: 

1. Clone the repo and open in VS Studio

2. Watch the video tutorial

## Usage

Run 'npm i' in the main directory to install all required package dependancies.

To initialize the database, users must login to the account currently registered on the device, by typing 'mysql -u root -p' in the CLI. Upon successful login, users must source the schema in the db directory by typing 'source db/schema.sql'. This will initialize the database that's in use for the project. Exit the mysql shell.

After initializing the db, the database must be seeded with information. Running 'node .\seeds\seed.js' in the main directory of the CLI will input tables with specified information from the json files in them. While starting the server without seeding will work, trying to access them via one of the url routes will display an empty array.

Just before initialization, users MUST create a .env file in the main directory, as the repo ignores the one provided. Once created, the main contents should look like such:
DB_NAME='ecommerce_db'
DB_USER='root'
DB_PASSWORD='your-username-here'

Once everything has been initialized, users must run 'npm start' in the main directory via the CLI, which will start the server. To access the routes, open Insomnia, create a new request, and use 'http://localhost:3001/api/' with a desired model after /api/. Currently, users can use GET, GET by id, POST, PUT by id, and DELETE by id requests on all 3 main models (/categories, /products, /tags), however, to add tags to specific products, users must edit the junction table through /product-tags, where only GET, GET by id, POST, and DELETE requests are permitted.

Video example:
https://watch.screencastify.com/v/DzGDe8J1suyxOHbWQv7C

Github Repo: 
https://github.com/jujusoi/JM-E-Commerce-Backend

## Features

- Able to connect to the database using Sequelize, through the .env.
- Entering source schema and seed commands will create and fill the database with test information.
- Invoking the application with npm start will sync the models to the MySQL database and run the server on localhost.
- Running GET routes on all models through the path will display all relevant table data in JSON.
- Testing POST, PUT and DELETE requests on all models through the path allows users to successfully create, update and delete data in the db.

## Contributing

N/A

## Tests

N/A

## Questions

N/A

GitHub user:
- jujusoi, https://www.github.com/jujusoi/

If further inquiry is necessary, reach out to me through my email address: 
- jalxmcdonald@hotmail.com

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  