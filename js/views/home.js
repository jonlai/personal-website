define(['jquery', 'underscore', 'backbone', 'text!templates/home.tpl'], 
function($      ,  _          ,  Backbone ,  HomeViewTemplate        ) {
    var HomeView = Backbone.View.extend({ 
        el: '#content',

        render: function() {
            this.$el.empty();

            var pageTitle = 'Jon Lai | Home';
            var compiledTemplate = _.template(HomeViewTemplate);
            $('head title').html(pageTitle);
            this.$el.html(compiledTemplate);
        }
    });

    return HomeView;
});