import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import { ConnectionState } from './ChatComponents/ConnectionState';
import { ConnectionManager } from './ChatComponents/ConnectionManager';
import { MyForm } from './ChatComponents/MyForm';
import { Events } from './ChatComponents/Event';

function Chat() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const onFooEvent = ({ value }: any) => {
      setFooEvents((previous) => [...previous, value]);
    };

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);

  return (
    <div className="Chat">
      <ConnectionState isConnected={isConnected} />
      <Events events={fooEvents} />
      <ConnectionManager />
      <MyForm />
    </div>
  );
}

export default Chat;
