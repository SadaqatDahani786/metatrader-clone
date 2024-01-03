// WebSocketService.js
import React, { useEffect, useState } from 'react';

const WebSocketService = () => {
    const [socket, setSocket] = useState(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const newSocket = new WebSocket('ws://192.168.1.4:8080');

        newSocket.addEventListener('open', () => {
            console.log('WebSocket connection opened');
            setIsConnected(true);
        });

        newSocket.addEventListener('close', (event) => {
            console.error(`WebSocket closed: ${event.reason}`);
            setIsConnected(false);
        });

        newSocket.addEventListener('error', (error) => {
            console.error('WebSocket error:', error);
            setIsConnected(false);
        });

        newSocket.addEventListener('message', (event) => {
            console.log('Received response:', event.data);
        });

        setSocket(newSocket);

        return () => {
            // Cleanup when the component unmounts
            newSocket.close();
        };
    }, []);

    const send = (message) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(message);
        } else {
            console.error('WebSocket is not open. Unable to send message.');
            if (typeof window === 'undefined') {
                // For React Native
                alert('WebSocket is not open. Unable to send message.');
            } else {
                // For React web
                console.error('WebSocket is not open. Unable to send message.');
            }
        }
    };

    return { send, isConnected };
};

export default WebSocketService;
