import SearchIcon from '@mui/icons-material/Search';

import { InputBase, IconButton } from '@mui/material';

const SearchBar = ({ placeholder, searchText, setSearchText, filter}) => {

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchText(value);
        filter(value)
    }
    return (
        <>
            <div className='flex items-center gap-1'>
                <InputBase
                    id='search'
                    className='bg-gray-200 rounded-full hover:outline hover:outline-1 hover:outline-slate-400'
                    sx={{ px: 2 }}
                    placeholder={placeholder}
                    size='large'
                    fullWidth
                    type='search'
                    autoFocus
                    value={searchText}
                    onChange={handleInputChange}
                />
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </div>
        </>
    );
}

export default SearchBar;