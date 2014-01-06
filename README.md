# generator-jidejs [![Build Status](https://secure.travis-ci.org/pago/generator-jidejs.png?branch=master)](https://travis-ci.org/pago/generator-jidejs)

A generator for [Yeoman](http://yeoman.io) that helps you to get started with a [jide.js](http://js.jidesoft.com) application.


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-jidejs from npm, run:

```
$ npm install -g generator-jidejs
```

Finally, initiate the generator:

```
$ yo jidejs
```

Yeoman will ask you a couple of questions that'll help him to set up a nice sample project for you. Once he did that, you
can use the generated [Grunt](http://gruntjs.com) file to view or build the app.

To do that you need to first install grunt:

```
npm install -g grunt-cli
```

Now that you can use grunt, just run:

```
grunt serve
```

To start the sample application. You can edit any file of the application and it will livereload.

When the time comes and you want to build your app, run:

```
grunt build
```

In order to build an optimized version of your application or:

```
grunt preview
```

To build said version but also start a server at http://localhost:3000/ so you can test drive your optimized app.

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
