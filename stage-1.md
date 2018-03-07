# Stage-1

List Api Methods

In this stage, we are going to work on the api
and create list endpoints for each domain.

This document will guide you through one domain,
your challenge is to complete the other 4 domains.

Our api, will consist of 5 endpoints.

* GET /colors
* GET /starwars
* GET /buzzwords
* GET /fotune-cookies
* GET /emojis

## Walkthrough

### Step 1 - Create a routes folder

Navigate a terminal window to the api directory of the five-in-one repo. Lets create a new directory called **routes**.

In the **routes** directory, we will create a new file called **colors.js**.

Open the **colors.js** file in a text editor and we want to create a route handler for the list of color names.

**api/routes/colors.js**

``` js
const csscolorsObj = require('css-color-names')
const { map, keys } = require('ramda')
const uuid = require('uuid')
// create color document
const createColor = k => ({id: uuid.v4(), name: k, value: prop(k, csscolorsObj)})

const colors = map(createColor, keys(csscolorsObj))

module.exports = app => {

  app.get('/colors', (req, res) => {
    res.send(colors)
  })
}
```

**api/server.js**

We need to add the routes to our server.

``` js
const colorRoutes = require('./routers/colors')

//.... after the app.use

colorRoutes(app)

//.... before the app.listen

```

## Verify

Now that we have implemented the colors list route, we want to test.

We can run the server and open a browser to the `/colors` router and hopefully see a list of color documents.

``` bash
cd api
yarn start
```

Use a browser to open http://localhost:5000/colors

## Challenge

> DON'T COPY AND PASTE CODE.

Now that we have walked through one of the list api routes, follow the same path to do the other four. You may run into interesting challenges with each list module, may have a different api, the goal is to create domain documents/json objects
with each and they should have an `id` node, a `name` node, and optionally a `value` node.

If you get stuck in any way, please post a question in slack so we can help.

You can use **the grind** channel to post a message.

Confirm each domain by doing a visual test in a browser.

## Commit Stage 1

``` bash
git add .
git commit -am "completed stage-1"
git push origin master
```

## Completed

Congrats - You have created a list endpoint for 5 domains.

[Proceed to Stage 2](stage-2.md)
