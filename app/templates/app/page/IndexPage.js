define([
    'jidejs/base/Class',
    'jidejs/ui/Control',
    'jidejs/ui/Skin',

    'text!app/view/indexPage.html'
], function(
    Class, Control, Skin,
    IndexPageTemplate
) {
    function IndexPage(config) {
        Control.call(this, config);
        this.classList.add('page');
        this.classList.add('index');
    }
    Class(IndexPage).extends(Control);

    IndexPage.Skin = Skin.create(Skin, {
        template: IndexPageTemplate,

        sayHello: function() {
            this.queryComponent('x-name').then(function(nameField) {
                this.queryComponent('x-output').then(function(outputLabel) {
                    outputLabel.text = 'Hello, '+nameField.text+'!';
                });
            }.bind(this));
        }
    });
    return IndexPage;
});