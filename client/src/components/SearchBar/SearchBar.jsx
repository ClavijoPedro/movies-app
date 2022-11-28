import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { CgSearch } from 'react-icons/cg';
import styles from './searchBar.module.scss';

export const SearchBar = () => {
	const [searchKey, setSearchKey] = useState('');
	const [searchQuery, setSearchQuery] = useSearchParams();

	const {categoryId} = useParams()

	const setSearch = (e) => {
		setSearchKey(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchQuery(`search=${searchKey}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type={'text'} onChange={setSearch} value={searchKey} placeholder={`Buscar...`} />
			<button type='submit' className={styles.btn}>
				<CgSearch size={20} />
			</button>
		</form>
	);
};
