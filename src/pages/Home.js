import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };
    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img
                    className="homePageLogo"
                    src="/Logo.png.png"
                    alt="CodeSphere Logo"
                />
                <h2 className="mainLabel">Welcome to CodeSphere</h2>
                <p>Collabarate and code together in real time</p>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="Enter Workspace ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="Enter Your Name"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                    />
                    <button className="btn joinBtn" onClick={joinRoom}>
                        Join Workspace
                    </button>
                    <span className="createInfo">
                        Don't have a workspace? &nbsp;
                        <a
                            onClick={createNewRoom}
                            href=""
                            className="createNewBtn"
                        >
                            Create Workspace
                        </a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>
                    2026 CodeSphere | Developed by Ashish Badra 💛 &nbsp; 
                    <a href="https://github.com/codersgyan"></a>
                </h4>
            </footer>
        </div>
    );
};

export default Home;
