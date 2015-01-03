define(['jquery', 'underscore', 'backbone', 'text!templates/error.tpl'], 
function($      ,  _          ,  Backbone ,  ErrorViewTemplate        ) {
    var ErrorView = Backbone.View.extend({ 
        el: '#content',

        render: function() {
            var compiledTemplate = _.template(ErrorViewTemplate);

            this.$el.empty();
            activePage('Error');
            this.$el.html(compiledTemplate);
            $('.navbar-content').removeClass('animate expanded');
            _.delay(function() {
                $('.navbar-content').addClass('animate');
            }, 50);
        }
    });

    function activePage(name) {
        $('.navbar-tabs.nav li > a').removeClass('active');
        $('head title').html('Jon Lai | ' + name);
    }

    return ErrorView;
});