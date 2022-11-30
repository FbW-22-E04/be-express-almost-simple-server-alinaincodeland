// Setting up a server

import express from "express";

const app = express();

const server = app.listen(3001, () => {
  console.log("The server is listening... 🐒");
});

// setting up endpoints

// Task 3

app.get("/hello", (request, response) => {
  console.log("hello from hello");
  response.send("hello from time");
});

// Task 4

const date = new Date();

app.get("/time", (request, response) => {
  console.log("hello from time");
  response.send(date.toISOString());
});

// Task 5

// random number should be converted to a string

const randomNumber = Math.random().toString();

app.get("/random", (request, response) => {
  console.log("hello from randomNumber");
  response.send(randomNumber);
});

// Task 6

// Add a GET request to '/isNumber'

app.get("/isNumber/:id", (request, response) => {
  const { value } = request.params;

  if (isNaN(Number(value))) {
    response.send("This is not a number");
  } else {
    response.send("This is a number");
  }
});
