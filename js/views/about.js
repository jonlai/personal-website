define(['jquery', 'underscore', 'backbone', 'text!templates/about.tpl'], 
function($      ,  _          ,  Backbone ,  AboutViewTemplate        ) {
    var AboutView = Backbone.View.extend({ 
        el: '#content',

        render: function() {
            this.$el.empty();

            var pageTitle = 'Jon Lai | About';
            var compiledTemplate = _.template(AboutViewTemplate);
            $('head title').html(pageTitle);
            this.$el.html(compiledTemplate);
        }
    });

    return AboutView;
});