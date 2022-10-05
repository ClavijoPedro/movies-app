import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchBar = () => {
	const [searchKey, setSearchKey] = useState('');
    // const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useSearchParams()

	const setSearch = (e) => {
		setSearchKey(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
        // navigate(`/?search=${searchKey}`)
        setSearchQuery(`search=${searchKey}`)
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type={'text'} onChange={setSearch} value={searchKey} />
			<button type='submit'> buscar </button>
		</form>
	);
};
