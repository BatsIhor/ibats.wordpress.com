App.MainView = function () {
	App.BaseView.call(this);
	this._el = this.render(this.getTemplate('contentTpl'));
	this.hide(this._el);

	document.body.appendChild(this._el);

	var that = this;

	App.Application.onEvent("register", function (){
		that.show(that._el);
	});

	App.Application.onEvent("login", function (){
		that.show(that._el);
	});
}

App.Helpers.inherits(App.MainView, App.BaseView);
