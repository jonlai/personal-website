define(['jquery', 'underscore', 'backbone', 'text!templates/error.tpl'], 
function($      ,  _          ,  Backbone ,  ErrorViewTemplate        ) {
    var ErrorView = Backbone.View.extend({ 
        el: '#content',

        render: function() {
            var compiledTemplate = _.template(ErrorViewTemplate);

            this.$el.empty();
            setActivePage('Error');
            this.$el.html(compiledTemplate);
        }
    });

    function setActivePage(name) {
        $('.navbar-tabs.nav li > a').removeClass('active');
        $('head title').html('Jon Lai | ' + name);
    }

    return ErrorView;
});