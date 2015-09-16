define(['jquery', 'underscore', 'backbone', 'views/base', 'text!templates/home.html'],
function($      ,  _          ,  Backbone ,  BaseView   ,  HomeViewTemplate        ) {
    var HomeView = BaseView.extend({
        el: '#content',

        render: function() {
            var compiledTemplate = _.template(HomeViewTemplate);

            this.$el.empty();
            this.setActivePage('Home');
            this.$el.html(compiledTemplate);

            $('.about-button').click(function() {
                $('.about-button').attr('data-splash', 'true');
            });
        }
    });

    return HomeView;
});
