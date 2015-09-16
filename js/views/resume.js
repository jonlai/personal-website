define(['jquery', 'underscore', 'backbone', 'views/base', 'text!templates/resume.html'],
function($      ,  _          ,  Backbone ,  BaseView   ,  ResumeViewTemplate        ) {
    var ResumeView = BaseView.extend({
        el: '#content',

        render: function() {
            var compiledTemplate = _.template(ResumeViewTemplate);

            this.$el.empty();
            this.setActivePage('Resume');
            this.$el.html(compiledTemplate);
        }
    });

    return ResumeView;
});
