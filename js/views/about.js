define(['jquery', 'underscore', 'backbone', 'text!templates/about.tpl'], 
function($      ,  _          ,  Backbone ,  AboutViewTemplate        ) {
    var AboutView = Backbone.View.extend({ 
        el: '#content',

        render: function() {
            var compiledTemplate = _.template(AboutViewTemplate);

            
            emptyHTML();
            activePage('About');
            this.$el.append(compiledTemplate);
            $('.navbar-content').removeClass('animate expanded');
            _.delay(function() {
                $('.navbar-content').addClass('animate');
                $('#about-title').removeClass('hidden');
            }, 50);
        }
    });

    function emptyHTML() {
        if ($('.about-button').attr('data-splash') === 'true') {
            $('.splash-half').addClass('hidden');
            _.delay(function() {
                $('.splash-half').remove();
            }, 750);
        } else {
            $('#content').empty();
        }
    }

    function activePage(name) {
        var id = '#nav-' + name.toLowerCase();
        $('.navbar-tabs.nav li > a').removeClass('active');
        $(id).addClass('active');
        $('head title').html('Jon Lai | ' + name);
    }

    return AboutView;
});