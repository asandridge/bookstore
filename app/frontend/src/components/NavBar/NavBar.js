import { useState } from 'react';
import { Link } from "react-router-dom";

import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Menu, MenuItem, Fade } from '@material-ui/core';

const NavBar = () => {
    const [menuAnchor, setMenuAnchor] = useState(null);

    const handleMenuOpen = event => {  
        setMenuAnchor(event.currentTarget);  
    };

    const handleMenuClose = () => {
        setMenuAnchor(null);
        // navigate to page
    }; 

    return <>
        <div style={{ width: '100%', height: '10vmin', display: 'flex', backgroundColor: '#343a40'}}>
            <Link to="/" style={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'green' }}>
                <MenuBookIcon fontSize="large" />
            </Link>
            <div style={{ width: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button style={{ width: '10%', height: '100%' }}>
                    <Link to="/search">
                        <SearchIcon fontSize="large" style={{ color: 'green' }} />
                    </Link>
                </Button>
                <input placeholder="Search for titles" style={{ width: '90%', height: '70%', borderRadius: '10px', paddingLeft: '2vmin', fontSize: '2.5vmin' }} />
            </div>
            <Button style={{ width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={ handleMenuOpen }>
                <PersonIcon fontSize="large" style={{ color: 'green' }} />
            </Button>
            <Menu
                anchorEl={menuAnchor}
                keepMounted
                open={Boolean(menuAnchor)}
                onClose={handleMenuClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleMenuClose} value='orders'>Orders</MenuItem>
                <MenuItem onClick={handleMenuClose} value='account'>My Account</MenuItem>
                <MenuItem onClick={handleMenuClose} value='logout'>Logout</MenuItem>
            </Menu>
            <Button style={{ width: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link to="/cart">
                    <ShoppingCartIcon fontSize="large" style={{ color: 'green' }} />
                </Link>
            </Button>
        </div>
        <div style={{ width: '100%', paddingTop: '2vmin', paddingBottom: '2vmin', display: 'flex', justifyContent: 'space-around', backgroundColor: '#707579' }}>
            <div>Genre</div>
            <div>Author</div>
            <div>Published</div>
        </div>
    </>
}

export default NavBar;