var FrontendComponent = require('../lib/frontend-component');
var inherits = require('util').inherits;

function Text() {
    console.debug('Text');
    FrontendComponent.apply(this);
}

inherits(Text, FrontendComponent);

var proto = Text.prototype;

proto.bindEvents = function(socket) {
    console.debug('Text::bindEvents', socket);

    this.bindGenericEvents(socket);
};

proto.textChanged = function() {
    console.debug('Text::textChanged');

    this._eventEmitter.emit('event', this._getEventName('text'), {
        text: this.settings.text
    });
};

module.exports = Text;
