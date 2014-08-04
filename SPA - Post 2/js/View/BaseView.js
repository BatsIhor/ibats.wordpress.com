App.BaseView = function () {
};

App.BaseView.prototype.getTemplate = function (templateId) {
	var templ = document.getElementById(templateId);
	if (!templ) {
		throw new Error('No template found! ' + templateId);
	}
	return templ.innerHTML;
};

App.BaseView.prototype.render = function (html, callback) {
	var el = document.createElement('div');
	el.innerHTML = html;
	return el.firstElementChild;
};

App.BaseView.prototype.hide = function (element) {
	element.classList.add('hidden');
};

App.BaseView.prototype.show = function (element) {
	element.classList.remove('hidden');
};
