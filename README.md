# Shippy Node Example

## Prerequisites

1.) Flyweb-enabled Firefox Developer Edition version. I am using 50.0a2 (2016-08-28):
https://download-origin.cdn.mozilla.net/pub/firefox/nightly/2016/
=> 2016-08-28-00-40-09-mozilla-aurora

2.) Shippy addon installed. Upload as file in Firefox: shippy-addon/shippy-addon.xpi

## Run the example

`cd shippy-node-example`

`npm install`

`npm start`

Open the Firefox console and go to http://localhost:3000. Enter your name in the prompt. After some time a
Flyweb server will be published. Its IP address will be shown in the command line in a message like this:

`Current Flyweb Service: {"serviceUrl":"206.12.64.224:62247","serviceName":"app"}`

The first tab where the server was started will now also become a client. Whenever a client is connected the colored
box will become green. Otherwise it will be red.

Take the IP:PORT pair and open it in a new tab. They will connect to each other and share the state (the queue and
the successor list).

Repeat this for a few tabs and names. Then close the first tab with the localhost:3000 address. The "next server"
will become the new server and the other tabs will connect to it after some time. If you want to open new tabs and
connect them to the new server, take the new address from the command line again as above.