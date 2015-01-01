define([
    'views/home',
    'views/about',
    'views/projects',
    'views/resume',
    'views/error'], 
function(HomeView, AboutView, ProjectsView, ResumeView, ErrorView) {
    return {
        home: HomeView,
        about: AboutView,
        projects: ProjectsView,
        resume: ResumeView,
        error: ErrorView
    }
});