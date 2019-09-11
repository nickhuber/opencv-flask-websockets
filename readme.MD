Requirements
=============
- python3-opencv
- python3-flask
- python3-eventlet
- python3-flask-socketio

Get them from your package manager or from pip, on Fedora 30 I got everythign except flask-socketio from `dnf`

I ran this on a Raspberry Pi 2 with the camera module V2.

To run as a limtited user just make sure to put your user in the `video` group so it can access the camera.
