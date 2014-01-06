define([
  'jidejs/base/Class',
  'jidejs/base/ObservableProperty',
  'jidejs/ui/Control',
  'jidejs/ui/Skin',

  'text!app/view/index.html'
], function(Class, ObservableProperty, Control, Skin, IndexTemplate) {
  function MultiPageApplication(config) {
    installer(this);
    Control.call(this, config);
    this.classList.add('app');
  }
  Class(MultiPageApplication).extends(Control);
  var installer = ObservableProperty.install(MultiPageApplication, 'activePage');

  MultiPageApplication.Skin = Skin.create(Skin, {
    template: IndexTemplate
  });
  return MultiPageApplication;
});