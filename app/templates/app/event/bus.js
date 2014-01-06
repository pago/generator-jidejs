/**
 * The central event bus for the application.
 *
 * You can subscribe to an event topic using
 *
 * ```javascript
 * require('app/event/bus').on('user:created', function(user) {
 *     alert('You created the user '+user.name);
 * });
 * ```
 *
 * and send events using
 * ```javascript
 * require('app/event/bus').emit('user:created', { name: 'jide.js' });
 * ```
 */
define(['jidejs/base/EventEmitter'], function(EventEmitter) {
    return new EventEmitter();
});