define(['jquery', 'underscore', 'backbone', 'text!templates/resume.tpl'], 
function($      ,  _          ,  Backbone ,  ResumeViewTemplate        ) {
    var ResumeView = Backbone.View.extend({ 
        el: '#content',

        render: function() {
            var compiledTemplate = _.template(ResumeViewTemplate);

            this.$el.empty();
            setActivePage('Resume');
            this.$el.html(compiledTemplate);
        }
    });

    function setActivePage(name) {
        var id = '#nav-' + name.toLowerCase();
        $('.navbar-tabs.nav li > a').removeClass('active');
        $(id).addClass('active');
        $('head title').html('Jon Lai | ' + name);
    }

    return ResumeView;
});