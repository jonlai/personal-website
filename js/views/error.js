define(['jquery', 'underscore', 'backbone', 'text!templates/error.tpl'], 
function($      ,  _          ,  Backbone ,  ErrorViewTemplate        ) {
    var ErrorView = Backbone.View.extend({ 
        el: '#content',

        render: function() {
            this.$el.empty();

            var pageTitle = 'Jon Lai | Error';
            var compiledTemplate = _.template(ErrorViewTemplate);
            $('head title').html(pageTitle);
            this.$el.html(compiledTemplate);
        }
    });

    return ErrorView;
});