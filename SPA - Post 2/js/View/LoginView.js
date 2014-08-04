App.LoginView = function () {
	App.BaseView.call(this);

	this._el = this.render(this.getTemplate('loginTpl'));

	this._el.querySelector('.register a').addEventListener('click', this.onRegisterClick.bind(this));
	this._el.querySelector('form').addEventListener('submit', this.onSubmit.bind(this));

	document.body.appendChild(this._el);
};

App.Helpers.inherits(App.LoginView, App.BaseView);

App.LoginView.prototype.onRegisterClick = function () {
	this.hide(this._el);
	App.Application.emitEvent('registerclick');
};

App.LoginView.prototype.onSubmit = function (event) {
	var form, data;
	event.preventDefault();

	form = event.target;
	data = {
        login: form.elements['login'].value,
        password: form.elements['password'].value
	};

	this.hide(this._el);

	App.Application.emitEvent('login', data);
};
