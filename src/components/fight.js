import { useEffect, useState } from "react";
import io from "socket.io-client";

let socket;

export default function Fight() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket = io();

        // 监听来自服务器的消息
        socket.on('message', (msg) => {
            setMessages(prev => [...prev, msg]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        socket.emit('message', message); // 向服务器发送消息
        setMessages(prev => [...prev, message]); // 将你的消息添加到聊天记录中
        setMessage(""); // 清空输入框
    };

    return (
        <div>
            <h1>游戏对战</h1>
            {/* 实时对战情况 */}
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            {/* 双方队伍 */}
            <div className="teamBox flex justify-between">
                <div >
                    <button onClick={sendMessage}>左</button>
                </div>
                <div >
                    <button onClick={sendMessage}>右</button>
                </div>
            </div>

            <button onClick={sendMessage}>发送</button>
        </div>
    );
}
