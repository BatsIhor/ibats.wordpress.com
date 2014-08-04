window.App.Application = (function(){
  var app = new App.EventEmitter();

window.document.addEventListener('DOMContentLoaded', function () {
		new App.HeaderView();
		new App.LoginView();
		new App.RegistrationView();
		new App.MainView();
	});

  return app;
}());
