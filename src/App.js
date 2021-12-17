import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
// import SearchIcon from '@material-ui/icons/Search';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import AttachFileIcon from '@material-ui/icons/AttachFile';
// import MicNoneIcon from '@material-ui/icons/MicNone';
// import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
// import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
// import SendIcon from '@material-ui/icons/Send';

function App() {
	return (
		<div className="app">
			<div className="app__body">
				<Router>
						<Sidebar />
					<Switch>
						<Route path="/users/:userId">
							<Chat />
						</Route>
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
