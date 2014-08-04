App.EventEmitter = function () {
    this._events = {};
}

App.EventEmitter.prototype.onEvent = function (event, fn, ctx) {
  if (typeof this._events[event] === 'undefined'){
    this._events[event] = [];
  }
  this._events[event].push(
    {
      fn: fn,
      ctx: ctx || window
    }
  )
};

App.EventEmitter.prototype.emitEvent = function (event, data) {
  if (typeof this._events[event] !== 'undefined')
    {
      this._events[event].forEach(function (listener){
        listener.fn.call(listener.ctx, data);

      })
    }
};
