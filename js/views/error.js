define(['jquery', 'underscore', 'backbone', 'views/base', 'text!templates/error.tpl'],
function($      ,  _          ,  Backbone ,  BaseView   ,  ErrorViewTemplate        ) {
    var ErrorView = BaseView.extend({
        el: '#content',

        render: function() {
            var compiledTemplate = _.template(ErrorViewTemplate);

            this.$el.empty();
            this.setActivePage('Error');
            this.$el.html(compiledTemplate);
        }
    });

    return ErrorView;
});
