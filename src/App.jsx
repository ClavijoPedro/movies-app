import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PostersList } from './components/PostersList';
import { Home } from './pages/Home';
import { PosterDetail } from './pages/PosterDetail';
import { NoMatch } from './pages/NoMatch';

function App() {
	return (
		<>
		<Header />
		<Routes>
			<Route path='/' element={<Home />}/>
			<Route path='categoria/:categoryId' element={<PostersList />}/>
			<Route path='/detalle/:movieId' element={<PosterDetail />}/>
			<Route path='*' element={<NoMatch/>}/>
		</Routes>
		<Footer />
		</>
	);
}

export default App;
