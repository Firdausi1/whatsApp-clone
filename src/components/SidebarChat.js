import React from "react";
import {Link} from "react-router-dom";
import "./SidebarChat.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function SidebarChat({ id, name }) {
	return (
		<Link to={`/users/${id}`}>
			<div className="sidebarChat">
				<AccountCircleIcon fontSize="large" />
				<div className="sidebarChat__details">
					<div className="sidebarChat__name">
						<h3>{name}</h3>
						<p>message</p>
					</div>
					<div className="sidebarChat__time">
						<p>time</p>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default SidebarChat;
