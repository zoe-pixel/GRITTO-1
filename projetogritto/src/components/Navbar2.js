import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import MobilLeftMenuSlider from "@material-ui/core/Drawer";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        padding: 15,
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    menuSliderContainer: {
        width: 250,
        background: "whitesmoke",
        height: "100%"
    },
    listItem: {
        color: "black"
    }
}));

const menuItens = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Component1",
        listPath: "/component1"
    },
    {
        listIcon: <Apps />,
        listText: "Component2",
        listPath: "/component2"
    },
    {
        listIcon: <ContactMail />,
        listText: "Component3",
        listPath: "/component3"
    }
]


export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
            <Link className='component3' to='component3'style={{ color: "black", textDecoration: "none" }}>Perfil</Link>
            </MenuItem>

            <MenuItem onClick={handleMenuClose}>Minha conta</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Mensagens</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notificações</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>                
            </MenuItem>
        </Menu>
    );

    const [state, setState] = useState({
        left: false
    });

    const toggleSlider = ((slider, open) => () => {
        setState({ ...state, [slider]: open });
    });

    const sideList = slider => (

        <Box className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider(slider, false)}
        >
            <Divider />
            <List>
                {menuItens.map((lisItem, key) => (
                    <ListItem button key={key} component={Link} link="true" to={lisItem.listPath} >
                        <ListItemIcon className={classes.listItem}>
                            {lisItem.listIcon}
                        </ListItemIcon>
                        <ListItemText
                            className={classes.listItem}
                            primary={lisItem.listText}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <div className={classes.grow}>
            <AppBar /*position="static"*/ style={{ background: "#3f51b5" }}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("left", true)}>
                        <MenuIcon style={{ color: "white"}} />
                    </IconButton>
                    <Typography variant="h5" >
                        <Link className='logo' to='/' style={{ color: "white", textDecoration: "none" }}>
                            GRITTO
                        </Link>
                    </Typography>
                    <MobilLeftMenuSlider
                        anchor="left"
                        open={state.left}
                        onClose={toggleSlider("left", false)}
                    >
                        {sideList("left")}
                    </MobilLeftMenuSlider>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={8} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}