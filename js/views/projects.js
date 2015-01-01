define(['jquery', 'underscore', 'backbone', 'text!templates/projects.tpl'], 
function($      ,  _          ,  Backbone ,  ProjectsViewTemplate        ) {
    var ProjectsView = Backbone.View.extend({ 
        el: '#content',

        render: function() {
            this.$el.empty();
            $('.navbar-content').removeClass('expanded');

            var pageTitle = 'Jon Lai | Projects';
            var compiledTemplate = _.template(ProjectsViewTemplate);
            $('head title').html(pageTitle);
            this.$el.html(compiledTemplate);
        }
    });

    return ProjectsView;
});