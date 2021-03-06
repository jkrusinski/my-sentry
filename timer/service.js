const ipc = require('node-ipc');
const { populateTimers, endEvent, cancelEvent } = require('./helpers/util');

require('./helpers/worker').start();

ipc.config.id = 'timer';
ipc.config.port = 6060;
ipc.config.repeat = 1500;

ipc.serve(() => {

  ipc.server.on('create', (data, socket) => {
    var event = JSON.parse(data);
    populateTimers(event.id, event.end).then(ids => {
      console.log('Created timers: ', ids);
    });
  });

  ipc.server.on('safe', (data, socket) => {
    var eventId = JSON.parse(data);
    // second argument is safe boolean
    endEvent(eventId, true);
  });

  ipc.server.on('danger', (data, socket) => {
    var eventId = JSON.parse(data);
    // second argument is safe boolean
    endEvent(eventId, false);
  });

  ipc.server.on('end', (data, socket) => {
    var eventId = JSON.parse(data);
    cancelEvent(eventId);
  });
});

ipc.server.start();
