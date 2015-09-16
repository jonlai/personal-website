define(['jquery', 'underscore', 'backbone', 'views/base', 'text!templates/about.html'],
function($      ,  _          ,  Backbone ,  BaseView   ,  AboutViewTemplate        ) {
    var AboutView = BaseView.extend({
        el: '#content',

        render: function() {
            var compiledTemplate = _.template(AboutViewTemplate);


            emptyHTML();
            this.setActivePage('About');
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

    return AboutView;
});
