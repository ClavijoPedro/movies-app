import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CgSearch } from 'react-icons/cg';
import styles from './searchBar.module.scss';

export const SearchBar = () => {
	const [searchKey, setSearchKey] = useState('');
	// const navigate = useNavigate()
	const [searchQuery, setSearchQuery] = useSearchParams();

	const setSearch = (e) => {
		setSearchKey(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// navigate(`/?search=${searchKey}`)
		setSearchQuery(`search=${searchKey}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type={'text'} onChange={setSearch} value={searchKey} />
			<button type='submit' className={styles.btn}>
				<CgSearch size={20} />
			</button>
		</form>
	);
};
