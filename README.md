# debug-nodejs-2021q2
CRUD Express + Postgre app for operating games DB. 
## Installation
Clone the app, go to its root directory and run `npm install`.
## Start 
Run `npm start`.
## Usage
With this app, you can sign up and sign in users, read, create, modify and delete games by making http requests. You can use Postman or anything else for this purpose. After staring the app and configuring your DB  (you can check [here](https://github.com/rolling-scopes-school/basic-nodejs-2021Q2/blob/master/descriptions/debug-nodejs.md) how to do it), you can make one of the following requests: 
1. POST request to http://localhost:4000/api/auth/signup to make a new user. Body should look like this: 
```
{
      "user": {
          "full_name": "user_full_name",
          "username": "user_username",
          "password": "user_password",
          "email": "user_email"
      }
  }
```
2. POST request to http://localhost:4000/api/auth/signin to sign in a user. Body should include a username and a password.
3. GET request to http://localhost:4000/api/game/all to get all games of a user. There must be `authorization` header with user's token.
4. POST request to http://localhost:4000/api/game/create to create a new game. There must be `authorization` header with user's token. Body should look like this: 
```
{
    "game": {
        "title": "testGame",
        "studio": "testStudio",
        "esrb_rating": "12345", // must be 5 characters' string
        "user_rating": "3", // must be a number from 1 to 5
        "have_played": false
    }
}
```
5. GET request to http://localhost:4000/api/game/:id to get a specified user's game. There must be `authorization` header with user's token.
6. PUT request to http://localhost:4000/api/game/update/:id to update a specified user's game. There must be `authorization` header with user's token. Body should be like when creating a new game. 
7. DELETE request to http://localhost:4000/api/game/remove/:id to delete a specified user's game. There must be `authorization` header with user's token.
