FlowRouter.route('/', {
  name: 'accueil',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "accueil"});
  }
});


FlowRouter.route('/test', {
  name: 'test',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "test"});
  }
});

FlowRouter.route('/inscription', {
  name: 'inscription',
  action(params, queryParams) {
    BlazeLayout.render('container', {content : "inscription"});
  }
});
