import React from 'react';
import { navStyles } from './NavbarSearch.style';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

export const NavbarSearch = () => {
    const classes = navStyles();
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
import { navStyles } from './NavbarSearch.style';
import { VideosContext } from '../../../providers/Videos/Videos.provider';
import { useHistory } from "react-router-dom";

export const NavbarSearch = () => {
    const classes = navStyles();
    const history = useHistory();
    const { search, setSearch } = useContext(VideosContext);
    const [searchValue, setSearchValue] = useState(search);

    const onSearchChange = ({target}) => {
        setSearchValue(target.value);
    };

    const onSearch = (e) => {
        e.preventDefault();
        if (!searchValue) return;
        setSearch(searchValue);
        history.push('/')
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
