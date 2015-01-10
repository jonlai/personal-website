define(['jquery', 'underscore', 'backbone', 'text!templates/about.tpl'], 
function($      ,  _          ,  Backbone ,  AboutViewTemplate        ) {
    var AboutView = Backbone.View.extend({ 
        el: '#content',

        render: function() {
            var compiledTemplate = _.template(AboutViewTemplate);

            
            emptyHTML();
            setActivePage('About');
            this.$el.append(compiledTemplate);
            _.delay(function() {
                $('#about-title').removeClass('hidden');
            }, 50);
        }
    });

    function emptyHTML() {
        if ($('.about-button').attr('data-splash') === 'true') {
            $('.splash-half').addClass('hidden');
            $('.content').css('overflowY', 'hidden');
            _.delay(function() {
                $('.splash-half').remove();
                $('.content').removeAttr('style');
            }, 800);
        } else {
            $('#content').empty();
        }
    }

    function setActivePage(name) {
        var id = '#nav-' + name.toLowerCase();
        $('.navbar-tabs.nav li > a').removeClass('active');
        $(id).addClass('active');
        $('head title').html('Jon Lai | ' + name);
    }

    return AboutView;
});