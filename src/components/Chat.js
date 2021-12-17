import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicNoneIcon from "@material-ui/icons/MicNone";
import SendIcon from "@material-ui/icons/Send";
import database from "../firebase";

function Chat() {
	const [input, setInput] = useState("");
	const [display, setDisplay] = useState(false);
	const { userId } = useParams();
	const [userName, setUserName] = useState("");

	useEffect(() => {
		if (userId) {
			database
				.collection("users")
				.doc(userId)
				.onSnapshot((snapshot) => setUserName(snapshot.data().name));
		}
	}, [userId]);

	const sendMessage = (e) => {
		e.preventDefault();
		setInput(" ");
	};

	const displaySend = () => {
		setDisplay(true);
	};
	return (
		<div className="chat">
			<div className="chat__header">
				<div className="chat__headerLeft">
					<AccountCircleIcon fontSize="large" />
					<h3>{userName}</h3>
				</div>
				<div className="chat__headerRight">
					<IconButton>
						<SearchIcon />
					</IconButton>
					<IconButton>
						<ExpandMoreIcon />
					</IconButton>
				</div>
			</div>
			<div className="chat__body">
				<div>
					<p className={`chat__bodyMessage ${true && "chat__receiver"} `}>
						Hello <span>12:30 PM</span>
					</p>
				</div>
			</div>
			<div className="chat__footer">
				<div className="chat__footerLeft">
					<IconButton>
						<InsertEmoticonIcon />
					</IconButton>
					<IconButton>
						<AttachFileIcon />
					</IconButton>
				</div>
				<div className="chat__footerText">
					<input
						type="text"
						placeholder="Type a message"
						value={input}
						onKeyPress={displaySend}
						onChange={(e) => setInput(e.target.value)}
					></input>
				</div>
				<div className="chat__footerRight">
					{display ? (
						<IconButton>
							<SendIcon onClick={sendMessage} />
						</IconButton>
					) : (
						<IconButton>
							<MicNoneIcon />
						</IconButton>
					)}
				</div>
			</div>
		</div>
	);
}

export default Chat;
