require.config({
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone'
    }
});

require(['jquery', 'underscore', 'backbone', 'router'],
function( $      ,  _          ,  Backbone ,  Router ) {
    var appRouter = Router.initialize();
    Backbone.history.start({ pushState: true });
});
