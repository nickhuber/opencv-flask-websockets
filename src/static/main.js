document.addEventListener("DOMContentLoaded", function(event) { 
    const socket = io.connect(`ws://${document.domain}:${location.port}/camera-feed`);
    socket.on('new-frame', message => {
        document.getElementById('camera-frame').setAttribute(
            'src', `data:image/jpeg;base64,${message.base64}`
        );
    });
    window.setInterval(() => {
        socket.emit('request-frame', {});
    }, 100);

});
