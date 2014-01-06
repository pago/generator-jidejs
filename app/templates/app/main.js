//region configure requirejs to load jide.js library
require.config({
    "baseUrl": '.',
    "packages": [{
        name: 'jidejs',
        location: './bower_components/jidejs/jidejs'
    }, {
        name: 'app',
        location: './app'
    }],
    paths: {
        text: './bower_components/requirejs-text/text'
    }
});
//endregion

require([
  'app/MultiPageApplication',
  'app/page/IndexPage'
], function(MultiPageApplication, IndexPage) {
  var app = new MultiPageApplication({
      activePage: new IndexPage({})
  });
  document.body.appendChild(app.element);
});