import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AddBook from "./pages/AddBook";
import EditBookPage from "./pages/EditBookPage";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/add-book" element={<AddBook />}></Route>
					<Route path="/edit-book/:bookId" element={<EditBookPage />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
