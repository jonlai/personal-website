define(['jquery', 'underscore', 'backbone', 'views/base', 'text!templates/projects.html'],
function($      ,  _          ,  Backbone ,  BaseView   ,  ProjectsViewTemplate        ) {
    var ProjectsView = BaseView.extend({
        el: '#content',

        render: function() {
            var compiledTemplate = _.template(ProjectsViewTemplate);

            this.$el.empty();
            this.setActivePage('Projects');
            this.$el.html(compiledTemplate);
        }
    });

    return ProjectsView;
});
