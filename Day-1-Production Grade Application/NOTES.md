# How does a server work?
A ```request``` goes form our computer to the server (we do that with the help of Express). Server will process the request and give us a ```response```.

## Types of ```requests```
```get``` is the most common type of request. Like the name suggests, it is used to get some data from the server.

There are many types of requests but we'll cover them later.

## What are ```routes```?
If we go to <a href="https://google.com">google.com</a>, we see that the brower will automatically add a ```/``` at the end of the url.

```/``` is known as the default or root route (also known as home route).

There can be many different types of routes, like ```/```, ```/login```, ```/videos```, ```/projects```. etc.

# Start coding!!!
## Creating a new empty node application.
To create a new node application, open terminal in a folder and type in the following command:
```sh
npm init
```

Then do the details of the new node application.<br>This will create a ```package.json``` file.

I know how to make a start command in ```package.json```. If you are a beginner following this, figure that out yourself 💀.

## Install express
```sh
npm install express
```
Source: <a href="https://www.npmjs.com/package/express" target="_blank">
express.js documentation
</a>

## Explanation of code in ```index.js```
There are 65,535 virtual ports in our computer. We are using the 3000th port for this app. You can use any but 3000 is the most common.