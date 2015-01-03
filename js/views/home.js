define(['jquery', 'underscore', 'backbone', 'text!templates/home.tpl'], 
function($      ,  _          ,  Backbone ,  HomeViewTemplate        ) {
    var HomeView = Backbone.View.extend({ 
        el: '#content',

        render: function() {
            var compiledTemplate = _.template(HomeViewTemplate);
            
            this.$el.empty();
            activePage('Home');
            this.$el.html(compiledTemplate);
            $('.navbar-content').removeClass('animate expanded');
            _.delay(function() {
                $('.navbar-content').addClass('animate');
            }, 50);

            $('.about-button').click(function() {
                $('.about-button').attr('data-splash', 'true');
            });
        }
    });

    function activePage(name) {
        $('.navbar-tabs.nav li > a').removeClass('active');
        $('head title').html('Jon Lai | ' + name);
    }

    return HomeView;
});