define(['jquery', 'underscore', 'backbone', 'text!templates/projects.tpl'], 
function($      ,  _          ,  Backbone ,  ProjectsViewTemplate        ) {
    var ProjectsView = Backbone.View.extend({ 
        el: '#content',

        render: function() {
            var compiledTemplate = _.template(ProjectsViewTemplate);

            this.$el.empty();
            setActivePage('Projects');
            this.$el.html(compiledTemplate);
        }
    });

    function setActivePage(name) {
        var id = '#nav-' + name.toLowerCase();
        $('.navbar-tabs.nav li > a').removeClass('active');
        $(id).addClass('active');
        $('head title').html('Jon Lai | ' + name);
    }

    return ProjectsView;
});