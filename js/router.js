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
        var appRouter = new AppRouter;

        $('#toggle-menu').click(function() {
            $('.navbar-content').toggleClass('expanded');
        });

        $(document).on('click', 'a', function(evt) {
            if (this.host == location.host) {
                evt.preventDefault();
                var href = $(this).attr('href');
                $('.navbar-content').removeClass('animate expanded');
                Backbone.history.navigate(href, { trigger: true });
                _.delay(function() {
                    $('.navbar-content').addClass('animate');
                }, 50);
            }
        });

        return appRouter;
    }

    return {
        initialize: initialize
    };
});