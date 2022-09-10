# Botika Socket HTTP Node Library

Node.js library for interacting with the Botika Socket HTTP API.

## Installation

You can get the Botika Socket PHP library via a npm package called `botika-socket`. See <https://www.npmjs.com/package/botika-socket>

```bash
npm i botika-socket
```

## Botika Socket constructor

Use the credentials from your Botika Socket application to create a new instance.

```javascript
import { Socket, Auth } from 'botika-socket';
const baseURL = 'https://socket.example.com';
const auth = new Auth('username', 'password');

// Initialize socket
const socket = new Socket(baseURL, auth);
```

## Logging configuration

```javascript
const logger = require('pino')()

socket.setLogger(logger);
```

## Publishing/Triggering events

To trigger an event on one or more channels use the `trigger` function.

### A single channel

```javascript
// Options get from https://axios-http.com/docs/req_config
const options = {};
socket.trigger('my-channel', 'my_event', 'hello world', options);
```

### Multiple channels

```javascript
// Options get from https://axios-http.com/docs/req_config
const options = {};
socket.trigger([ 'channel-1', 'channel-2' ], 'my_event', 'hello world', options);
```
