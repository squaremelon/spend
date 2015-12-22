# **[Spend](http://squaremelon.ml/spend)** by [squaremelon](http://squaremelon.ml) 💸 #

**Latest version:** 0.0.0-pre [not yet mvp]

## Table of contents ##
- [About](#About)
- [Requirements](#Requirements)
  - [To use](#To use)
  - [To develop](#To develop)
- [Installation](#Installation)
- [Contributing](#Contributing)

***

### About ###
Spend is a web application developed by **[squaremelon](http://squaremelon.ml)** which helps manage and *plan earnings and expenditure* to make it easier for people to *save money* and decide where they can *cut back on spending*, and where they can float a little bit more of their disposable income.

***

### Requirements ###
#### To use ####
To use this application normally, all you need is a modern browser, currently the supported browsers are:

- IE > 11
- Chrome (latest)
- Firefox (latest)

#### To develop ####
To help develop the application, you will need to have node installed on your machine:

- [node.js](http://nodejs.org)

*For more information read* [contributing](#contributing)

***

### Installation ###
Assuming you want to run a development version, to install simply clone this repo with:

~~~
git clone https://github.com/squaremelon/spend.git
~~~

Open a terminal window in the spend directory, and run:

~~~
npm install && npm run go
~~~

This will automagically:
1. Install all the required packages.
2. Start a development server using browsersync on port 3000 (by default).
3. Open up the local instance of the application in your default browser.
4. Detect any changes to the assets and re-inject them as required (no refreshing needed).

To access the application, go to [localhost:3000](http://localhost.3000) on your machine to see the local version running.

***

### Contributing ###
We appreciate all efforts to help develop this application, and we will do the very best we can to *help you **help us** help you **help everyone.***

##### Stuff it helps to know #####
If you want to help there are a few things that it would be pretty handy for you to know.

- html / handlebars
- css / less
- javascript / typescript (particularly angular2)
- using command line tools

##### Adding new features #####
We highly encourage you to fork this project and then make a pull request with enhancements / improvements, **however** before doing this, it would be a good idea to [open a new issue](https://github.com/squaremelon/spend/issues/new) to discuss it first. This makes sure that the feature is considered useful, and also just to make sure that there isn't a specific reason for exactly not adding said feature.
