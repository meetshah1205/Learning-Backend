require('dotenv').config();
const express = require("express");
const app = express();
const port = 4000; 

const dummyJsonData = {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Citlali",
        "last": "Gamboa"
      },
      "location": {
        "street": {
          "number": 5408,
          "name": "Boulevard Lesotho"
        },
        "city": "Etucuaro",
        "state": "San Luis Potosí",
        "country": "Mexico",
        "postcode": 58828,
        "coordinates": {
          "latitude": "29.0993",
          "longitude": "43.6875"
        },
        "timezone": {
          "offset": "+2:00",
          "description": "Kaliningrad, South Africa"
        }
      },
      "email": "citlali.gamboa@example.com",
      "login": {
        "uuid": "3598824b-81a9-49d5-8bdd-60abd1c6f5a3",
        "username": "ticklishgoose121",
        "password": "sprout",
        "salt": "fPLL3wqS",
        "md5": "9340f40a252851c84b7bf45c50983c6b",
        "sha1": "28cd4ecba5df57816485a1598daa8e928c933c46",
        "sha256": "21bbbda50a22a517954cb6df2cdb7c63658fe9b9ebf57ba69a06142e856a4074"
      },
      "dob": {
        "date": "1982-02-23T07:40:29.427Z",
        "age": 42
      },
      "registered": {
        "date": "2016-08-11T03:34:13.970Z",
        "age": 8
      },
      "phone": "(607) 493 6290",
      "cell": "(690) 453 4654",
      "id": {
        "name": "NSS",
        "value": "75 67 78 0918 1"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/82.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/82.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/82.jpg"
      },
      "nat": "MX"
    }
  ],
  "info": {
    "seed": "5f46c9d71c99f351",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}
// Randomly generated data by randomuser.me
app.get("/", function (req, res) {
  res.send("Hello World");
});

// Let's make more routes
app.get("/twitter", (req, res) => {
    res.send("Welcome to /twitter!");
});

app.get("/youtube", (req, res) => {
    res.send("<h1> Welcome to /youtube </h1.")
});

app.get("/github", (req, res) => {
    res.json(dummyJsonData);
})
app.listen(process.env.PORT, function () {
  console.log(`App listening on http://localhost:${port}`);
});
