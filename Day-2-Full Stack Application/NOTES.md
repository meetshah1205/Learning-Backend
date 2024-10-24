# Backend

## Difference between

```js
const express = require("express");
```

and

```js
import express from 'express';
```

<br> <br> <br>
The `import` statement by default will give the following error:

```sh
import express from 'express';
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at wrapSafe (node:internal/modules/cjs/loader:1378:20)
    at Module._compile (node:internal/modules/cjs/loader:1428:41)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Module._load (node:internal/modules/cjs/loader:1104:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49
```

It can be solved by putting this into `package.json`:

```json
"type": "module"
```

# Frontend

<div
style="
background-color: black;
color: #ffffff;
border-radius: 10px;
padding: 10px;
"
>
<p 
style="
color: red;
font-weight: bold;
text-decoration: underline;
font-size: 14px;
margin-bottom: -5px;
"
>
Before getting started
</p>
I have no experience with React or any frontend JS library so this is all just the notes I made from the video.
</div>
<hr>

Run the following command to create a vite app:

```sh
npm create vite@latest .
```

I used `.` to create the roject in the main directory.

Choose the frameworks.

Then the following command:

```bash
npm i
```

and

```bash
npm run dev
```

## Getting the jokes from the backend

We will use `axios` to get the jokes from the backend.

<p 
style="
color: red;
font-weight: bold;
text-decoration: underline;
font-size: 14px;
margin-bottom: -5px;
"
>
NOTE
</p>

We can use `fetch()` here as well but we won't because `axios` provides us over the top functionalities. Like what to do when the request is loading?, stop the request and do something to it, do something if it fails, do something if it takes much longer than expected etc.

<hr>

### Errors

If we just this code then it will give an error message:

```js
import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes: ", error);
      });
  });

  return (
    <>
      <h1>Don't forget the coffee! </h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
```

This code will give the following error message:

```bash
Access to XMLHttpRequest at 'http://localhost:3000/jokes' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

**That is called a `CORS` error**.

### Basic explaining of what is `CORS`

Imagine someone comes to your house.
![GIF](https://media.giphy.com/media/k3ysanIoI6Yx2/giphy.gif)

Would you let anyone in?
You would let your mom, dad, brother, sister, relative etc. in, but would let a random salesman in?

And that is `CORS`, short for **Cross-origin resource sharing**.

And on a server you would not want any one to just come and get the data. Because that will drastically increase your server cost, everything on a server comes at a certain cost, this many amount of requests would skyrocket you costs.
<img src="https://imgs.search.brave.com/8FPXnJmuDRsfq-XaHTt6tCu8sbiAKB5KtN0fY6ExsxM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmlu/c2lkZXIuY29tLzYw/MTQ0ODU2NmRmYmUx/MDAxOGUwMGM1ZD93/aWR0aD03MDA">

#### Solving the `CORS` error

<ul>
<li>
One way is to install the <a href="https://www.npmjs.com/package/cors?activeTab=readme" target="_blank">cors npm package</a>.

But this has drawkacks, here we are working with localhost but in production we will probably not be able to whitelist all the urls. Because in production we are not at all sure that our **_backend will running on port 3000 or our frontend will be running on port 5173_** because remember the `process.env.PORT`.<br> <br>
![GIF](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTVnZG5hYmVyZW45YTNybjdtZGYybWs1OHlrNHU4eG45Mmpwb3EwYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BmmfETghGOPrW/giphy.gif)

</li>
</ul>

### Proxy
Proxies are used so that we don't have to type ```http://localhost:3000``` over and over and over and over and over and over and over.

Every major JS library has a proxy, we used Vite so we will do this:
<ul>
<li>

Open the ```vite.config.js``` file
</li>
<li>

Add the following code:
```js
// .... code before this
export default defineConfig({
server = {
    proxy: {
        'api': 'http://localhost:3000'
    },
// .... rest of the code
})
```
This will make the server think:
"I am on localhost:3000, this request is coming from localhost:3000 so that means I have to answer it."

This is advantageous because if I deploy it, all I have to do is change tje url and then its ready.


# A bad practice
Some people and even companies do this:
<ul>
<li>

Use
 ```sh
npm run build
```
and then publish the ```dist``` folder into production.
Because they think, at the end of the day, services like AWS, Varcel, Digital Ocean are also running it. So they do that and push it into production with the backend. But where is the issue here? If we change the backend, the service will most likely automatically detect them from GitHub and then push it into production, but if we change the frontend, the service will not automatically do that, because we pushed the frontend into production with the backend. And you will have to rebuild the frontend with the command and then push it into production with the backend.
