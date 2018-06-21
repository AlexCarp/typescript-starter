/** Realtime Gateway POC */
import * as WebSocket from 'ws';
import * as http from 'http';
import { clientFactory, serverBuilder } from 'rxjs-grpc/js';
import { join } from 'path';
import { of } from 'rxjs/Observable/of';

const server = http.createServer();
const socket = new WebSocket.Server({ server });
