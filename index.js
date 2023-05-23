const express = require('express');
const axios = require('axios');
const app = express();

import { Client } from 'node-osc';

'use strict';
const { Client, Message } = require('node-osc');

const client = new Client('127.0.0.1', 3333);

const message = new Message('/address');
message.append('testing');
message.append('testing');
message.append(123);

client.send(message, (err) => {
  if (err) {
    console.error(new Error(err));
  }
  client.close();
});