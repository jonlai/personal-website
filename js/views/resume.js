define(['jquery', 'underscore', 'backbone', 'text!templates/resume.tpl'], 
function($      ,  _          ,  Backbone ,  ResumeViewTemplate        ) {
    var ResumeView = Backbone.View.extend({ 
        el: '#content',

        render: function() {
            var compiledTemplate = _.template(ResumeViewTemplate);

            this.$el.empty();
            activePage('Resume');
            this.$el.html(compiledTemplate);
            $('.navbar-content').removeClass('animate expanded');
            _.delay(function() {
                $('.navbar-content').addClass('animate');
            }, 50);
        }
    });

    function activePage(name) {
        var id = '#nav-' + name.toLowerCase();
        $('.navbar-tabs.nav li > a').removeClass('active');
        $(id).addClass('active');
        $('head title').html('Jon Lai | ' + name);
    }

    return ResumeView;
});