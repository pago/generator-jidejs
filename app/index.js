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
  }];

  this.prompt(prompts, function (props) {
    this.appName = props.appName;

    cb();
  }.bind(this));
};

JidejsGenerator.prototype.pickDepTool = function pickDepTool() {
  this.useBower = true;
  this.useNPM = false;
  // this.prompt({
  //   type: 'confirm',
  //   name: 'useAMD',
  //   message: 'Would you like to use Bower and require.js? If not, I will continue with npm and Browserify.',
  //   default: true
  // }, function (props) {
  //   this.useBower = props.useBower;
  //   this.useNPM = !this.useBower;

  //   cb();
  // }.bind(this));
};

JidejsGenerator.prototype.pickBuildTool = function pickDepTool() {
  this.useGulp = false;
  this.useGrunt = true;
  // this.prompt({
  //   type: 'confirm',
  //   name: 'useGulp',
  //   message: 'Would you like to use gulp.js? If not, I will continue with Grunt.js.',
  //   default: true
  // }, function (props) {
  //   this.useGulp = props.useGulp;
  //   this.useGrunt = !this.useGulp;

  //   cb();
  // }.bind(this));
};

JidejsGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/view');
  this.mkdir('app/page');
  this.mkdir('style');

  this.template('_package.json', 'package.json');
  if(this.useBower) {
    this.template('_bower.json', 'bower.json');
  }
  if(this.useGrunt) {
    this.template('_Gruntfile.js', 'Gruntfile.js');
  } else {
    this.template('_gulpfile.js', 'gulpfile.js');
  }

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
