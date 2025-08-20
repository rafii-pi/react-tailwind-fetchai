import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RoomChat from "./pages/RoomChat";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/chat" element={<RoomChat />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
