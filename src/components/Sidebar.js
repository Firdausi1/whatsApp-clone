import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import SidebarChat from "./SidebarChat";
import database from "../firebase";

function Sidebar() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const unsubscribe = database.collection("users").onSnapshot((snapshot) =>
			setUsers(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			)
		);
		return () => {
			unsubscribe();
		}
	}, []);
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<div className="sidebar__headerLeft">
					<AccountCircleIcon fontSize="large" />
				</div>
				<div className="sidebar__headerRight">
					<IconButton>
						<ChatBubbleOutlineIcon />
					</IconButton>
					<IconButton>
						<ExpandMoreIcon />
					</IconButton>
				</div>
			</div>
			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<IconButton>
						<SearchIcon />
					</IconButton>
					<input type="text" placeholder="Search or Start new chat"></input>
				</div>
			</div>
			<div className="sidebar__chat">
				{users.map((user) => (
					<SidebarChat key={user.id} id={user.id} name={user.data.name}/>
				))}
			</div>
		</div>
	);
}

export default Sidebar;
