define(['jquery', 'underscore', 'backbone', 'text!templates/home.tpl'], 
function($      ,  _          ,  Backbone ,  HomeViewTemplate        ) {
    var HomeView = Backbone.View.extend({ 
        el: '#content',

        render: function() {
            var compiledTemplate = _.template(HomeViewTemplate);
            
            this.$el.empty();
            setActivePage('Home');
            this.$el.html(compiledTemplate);

            $('.about-button').click(function() {
                $('.about-button').attr('data-splash', 'true');
            });
        }
    });

    function setActivePage(name) {
        $('.navbar-tabs.nav li > a').removeClass('active');
        $('head title').html('Jon Lai | ' + name);
    }

    return HomeView;
});