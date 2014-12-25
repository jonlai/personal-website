define(['jquery', 'underscore', 'backbone'], 
function($      ,  _          ,  Backbone ) {
    function initialize() {
        var appRouter = Backbone.Router.extend({
            routes: {
            }
        });
    }

    return {
        initialize: initialize
    };
});