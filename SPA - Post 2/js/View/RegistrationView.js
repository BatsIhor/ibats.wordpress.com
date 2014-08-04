App.RegistrationView = function () {
	App.BaseView.call(this);
	this._el = this.render(this.getTemplate('registrationTpl'));
	var that = this;
	this.hide(this._el);

	this._el.querySelector('form').addEventListener('submit',
	this.onSubmit.bind(this));

	document.body.appendChild(this._el);

	// App.Application.onEvent("registerclick", function (){
	// 	 that.show(that._el);
	// });

	App.Application.onEvent("registerclick",
	this.showRegisterView.bind(this));
}

App.Helpers.inherits(App.RegistrationView, App.BaseView);

App.RegistrationView.prototype.onSubmit = function (event) {
	var form, data;
    event.preventDefault();

    form = event.target;
    data =  {
        login: form.elements['login'].value,
        password: form.elements['password'].value
    };

		this.hide(this._el);
    App.Application.emitEvent('register', data);
}

App.RegistrationView.prototype.showRegisterView = function (){
	 this.show(this._el);
}
