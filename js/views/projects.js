define(['jquery', 'underscore', 'backbone', 'text!templates/projects.tpl'], 
function($      ,  _          ,  Backbone ,  ProjectsViewTemplate        ) {
    var ProjectsView = Backbone.View.extend({ 
        el: '#content',

        render: function() {
            var compiledTemplate = _.template(ProjectsViewTemplate);

            this.$el.empty();
            activePage('Projects');
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

    return ProjectsView;
});