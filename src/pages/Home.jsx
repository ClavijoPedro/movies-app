import { MoviesList } from '../components/MoviesList';
import { SearchBar } from '../components/SearchBar';

export const Home = () => {
	return (
		<div className='App'>
			<SearchBar />
			<MoviesList />
		</div>
	);
};
