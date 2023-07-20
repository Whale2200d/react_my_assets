import { Server } from 'socket.io';

// 1. use when sending and broadcasting events
interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}
// 2. use when receiving events
interface ClientToServerEvents {
  hello: () => void;
}
// 3. use when for inter-server communication (added in socket.io@4.1.0)
interface InterServerEvents {
  ping: () => void;
}
// 4. use to type the socket.data attribute (added in socket.io@4.4.0)
interface SocketData {
  name: string;
  age: number;
}

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>();

// 1. use when sending and broadcasting events
io.on('connection', ({ socket }: any) => {
  socket.emit('noArg');
  socket.emit('basicEmit', 1, '2', Buffer.from([3]));
  socket.emit('withAck', '4', ({ e }: any) => {
    // e is inferred as number
  });

  // works when broadcast to all
  io.emit('noArg');

  // works when broadcasting to a room
  io.to('room1').emit('basicEmit', 1, '2', Buffer.from([3]));
});

// 2. use when receiving events
io.on('connection', ({ socket }: any) => {
  socket.on('hello', () => {
    // ...
  });
});

// 3. use when for inter-server communication (added in socket.io@4.1.0)
io.serverSideEmit('ping');

io.on('ping', () => {
  // ...
});

// 4. use to type the socket.data attribute (added in socket.io@4.4.0)
io.on('connection', (socket) => {
  socket.data.name = 'john';
  socket.data.age = 42;
});
