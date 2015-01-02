define(['jquery', 'underscore', 'backbone', 'text!templates/resume.tpl'], 
function($      ,  _          ,  Backbone ,  ResumeViewTemplate        ) {
    var ResumeView = Backbone.View.extend({ 
        el: '#content',

        render: function() {
            this.$el.empty();
            $('.navbar-content').removeClass('expanded');
            $('.navbar-tabs.nav li > a').removeClass('active');
            $('#nav-resume').addClass('active');

            var pageTitle = 'Jon Lai | Resume';
            var compiledTemplate = _.template(ResumeViewTemplate);
            $('head title').html(pageTitle);
            this.$el.html(compiledTemplate);
        }
    });

    return ResumeView;
});