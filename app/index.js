'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var JidejsGenerator = module.exports = function JidejsGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(JidejsGenerator, yeoman.generators.Base);

JidejsGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'input',
    name: 'appName',
    message: 'What name would you like to give your application?',
    default: 'myapp'
  },
  {
    type: 'confirm',
    name: 'useEventBus',
    message: 'Would you like to use an event bus to centralize application events?',
    default: false
  }];

  this.prompt(prompts, function (props) {
    this.appName = props.appName;
    this.useEventBus = props.useEventBus;

    cb();
  }.bind(this));
};

JidejsGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/view');
  this.mkdir('app/page');
  this.mkdir('style');

  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.template('_Gruntfile.js', 'Gruntfile.js');

  this.template('_index.html', 'index.html');
  this.template('app/main.js', 'app/main.js');
  this.template('app/view/index.html', 'app/view/index.html');
  this.template('style/app.less', 'style/app.less');
  if(this.useEventBus) {
    this.mkdir('app/event');
    this.template('app/event/bus.js', 'app/event/bus.js');
  }
  this.template('app/MultiPageApplication.js', 'app/MultiPageApplication.js');
  this.template('app/page/IndexPage.js', 'app/page/IndexPage.js');
  this.template('app/view/indexPage.html', 'app/view/indexPage.html');
};

JidejsGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
