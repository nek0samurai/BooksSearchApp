import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

import { Route, Routes } from 'react-router-dom';
import BookDetail from './pages/BookDetail/BookDetail';

function App() {
	return (
		<>
			<Header></Header>
			<Routes>
				<Route index element={<Home />}></Route>
				<Route path="/:code" element={<BookDetail />}></Route>
			</Routes>
		</>
	);
}

export default App;
