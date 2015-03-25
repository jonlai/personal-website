define(['jquery', 'underscore', 'backbone'],
function($      ,  _          ,  Backbone ) {
    var BaseView = Backbone.View.extend({
        setActivePage: function(name) {
            $('.navbar-tabs.nav li > a').removeClass('active');
            $('head title').html('Jon Lai | ' + name);
            var id = '#nav-' + name.toLowerCase();
            if ($(id) != []) $(id).addClass('active');
        }
    });

    return BaseView;
});
