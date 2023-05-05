import SearchIcon from '@mui/icons-material/Search';

import { InputBase, IconButton } from '@mui/material';

const SearchBar = ({placeholder}) => {
    return (
        <>
            <div className='flex items-center gap-3'>
                <InputBase
                    id='search'
                    className='bg-gray-200 rounded-full hover:outline hover:outline-1 hover:outline-slate-400'
                    sx={{ px: 2, py: 1 }}
                    placeholder={placeholder}
                    size='small'
                    fullWidth
                    type='search'
                    autoFocus
                />
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </div>
        </>
    );
}

export default SearchBar;