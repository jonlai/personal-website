define(['jquery', 'underscore', 'backbone', 'views'], 
function($      ,  _          ,  Backbone ,  View  ) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showHome',
            'about': 'showAbout',
            'projects': 'showProjects',
            'resume': 'showResume',
            ':string': 'showError'
        },

        showHome: function() {
            var homeView = new View['home'];
            homeView.render();
        },

        showAbout: function() {
            var aboutView = new View['about'];
            aboutView.render();
        },

        showProjects: function() {
            var projectsView = new View['projects'];
            projectsView.render();
        },

        showResume: function() {
            var resumeView = new View['resume'];
            resumeView.render();
        },

        showError: function(string) {
            var errorView = new View['error'];
            errorView.render();
        }
    });

    function initialize() {
        $(document).on('click', 'a:not([data-bypass])', function(evt) {
            evt.preventDefault();
            var href = $(this).attr('href');
            Backbone.history.navigate(href, true);
        });

        $('#toggle-menu').click(function() {
            $('.navbar-content').toggleClass('expanded');
        });

        return new AppRouter;
    }

    return {
        initialize: initialize
    };
});