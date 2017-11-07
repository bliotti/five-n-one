# Five in One

Five in One is an exercise in which you will create basically 5 applications in one app. This will give you a way to get some repetitions of each moving part of a react/redux application.

The practice application is divided up into stages.

* [Stage 0 - Setup and Routing](stage-0.md)
* [Stage 1 - List Api Methods](stage-1.md)
* [Stage 2 - Lists Components](stage-2.md)
* [Stage 3 - List Action Creators](stage-3.md)
* [Stage 4 - List Reducers/Store/Connect](stage-4.md)
* [Stage 5 - Form Components](stage-5.md)
* [Stage 6 - Show Components](stage-6.md)
* [Stage 7 - Remove Button](stage-7.md)
* [Stage 8 - Edit Components](stage-8.md)

## Five Mini Apps

* csscolors - require('css-color-names')
* buzzwords - require('buzzwords')
* starwars-names - require('starwars-names')
* fortunecookie - require('fortune-cookie')
* emojis - require('emojis-list')

## How the tutorial works

The tutorial will provide you an example of each stage for one of the given five domains and you are responsible for completing the stage with all five domains. The tutorial will not be perfect, and you should run into errors and create bugs, that you will need to troubleshoot.

Practice your troubleshooting skills, by trying to define the problem you are having by writing it down. Then trying to ask your neighbor via slack with the written down description, then ask your instructor, then ask google.

## Pull Requests are welcome

The purpose of this tutorial is to provide repetitions in creating a react/redux apps, and so many things change over time, if you are working on this tutorial and find a bug or even want to clean up the documentation, please submit a pull request.

## Getting started

Ok, lets get started, the first stage is just setting up our project. It will consist of two project folders underneath one repository.

* app
* api

The app will be where the react app resides and the api is where the api server will reside. The api server will be a simple in memory api server.

## Stages

- [Stage-0](stage-0.md)
- [Stage-1](stage-1.md)
- [Stage-2](stage-2.md)
- [Stage-3](stage-3.md)
- [Stage-4](stage-4.md)
- [Stage-5](stage-5.md)
- [Stage-6](stage-6.md)
- [Stage-7](stage-7.md)
- [Stage-8](stage-8.md)

## Bonus

> Use tachyons and animate.css to get creative with your look and feel for each app.

To add both `tachyons` and `animate.css` to your project

In the `app` folder run

    yarn add tachyons animate.css

In `app/src/index.js` add the following import statements

``` js
import 'tachyons'
import 'animate.css'
```
