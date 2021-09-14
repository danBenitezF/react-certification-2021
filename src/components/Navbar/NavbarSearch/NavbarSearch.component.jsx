import React, { useState, useContext } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { navStyles } from './NavbarSearch.style';
import { VideosContext } from '../../../providers/Videos/Videos.provider';

export const NavbarSearch = () => {
    const classes = navStyles();

    const { setSearch } = useContext(VideosContext);
    const [searchValue, setSearchValue] = useState('');

    const onSearchChange = ({target}) => {
        setSearchValue(target.value);
    };

    const onSearch = (e) => {
        e.preventDefault();
        if (!searchValue || searchValue === '') return;
        setSearch(searchValue);
    };
    return (
        <div className={classes.search}>
            <form type="submit" onSubmit={onSearch}>
                <div 
                    className={classes.searchIcon}
                    onClick={onSearch}
                >
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchValue}
                    onChange={onSearchChange}
                />
            </form>
        </div>
    )
}
