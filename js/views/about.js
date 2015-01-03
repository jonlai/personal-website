define(['jquery', 'underscore', 'backbone', 'text!templates/about.tpl'], 
function($      ,  _          ,  Backbone ,  AboutViewTemplate        ) {
    var AboutView = Backbone.View.extend({ 
        el: '#content',

        render: function() {
            this.$el.empty();
            $('.navbar-content').removeClass('expanded');
            $('.navbar-tabs.nav li > a').removeClass('active');
            $('#nav-about').addClass('active');

            var pageTitle = 'Jon Lai | About';
            var compiledTemplate = _.template(AboutViewTemplate);
            $('head title').html(pageTitle);
            this.$el.html(compiledTemplate);
            _.delay(function() {
                $('#about-title').removeClass('hidden');
            }, 50);
            
        }
    });

    return AboutView;
});