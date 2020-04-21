import React from 'react';
import BaseConsumer from 'BaseComponent/BaseConsumer'
import {
    withStyles,
    Grid,
    Tabs,
    Box,
    Tab,
    IconButton,
    Backdrop,
    Menu,
    MenuItem
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';

import Cart from '../Main/Cart/Cart'

import { NavLink } from 'react-router-dom'
class Header extends BaseConsumer {
    constructor(props) {
        super(props);
        this.state = {
            value: 3,
            open: false,
            anchorEl: null
        }
    }
    isActive = (match) => {
        console.log("path", match)
        return (match === this.props.hist.location.pathname);
    }
    componentDidMount() {
        let path = this.props.hist.location.pathname;
        if (path == "/huong-dan-mua-hang") {
            this.setState({ value: 0 });
        }
        else if (path == "/chinh-sach-giao-hang") {
            this.setState({ value: 1 });
        }
        else if (path == "/kiem-tra-don-hang") {
            this.setState({ value: 2 });
        }
        else {
            this.setState({ value: 3 })
        }
    }
    handleOpenMenu = (e) => {
        this.setState({
            open: !this.state.open,
            anchorEl: e.currentTarget,
        });
    }
    handleCloseMenu = () => {
        this.setState({
            anchorEl: null,
            open: !this.state.open
        })
    }
    consumerContent() {
        const { classes, cartInform } = this.props;
        const { value, open, anchorEl } = this.state;
        console.log("value", value)
        return (
            <Box style={{ display: "flex", boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)" }} >
                {/* Mobile Style */}
                <Box
                    component={IconButton}
                    xs={1} edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    display={{ xs: 'block', sm: 'block', md: 'block', lg: 'none' }}
                    onClick={(e) => this.handleOpenMenu(e)}
                >
                    <MenuIcon className={classes.menuIcon} />
                </Box>
                <Backdrop
                    className={classes.backdrop}
                    open={open}
                >
                </Backdrop>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    getContentAnchorEl={null}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    onClose={() => this.handleCloseMenu()}
                >
                    <MenuItem
                        onClick={
                            () => {
                                this.setState({ value: 0 });
                                this.goTo("/huong-dan-mua-hang");
                                this.handleCloseMenu()
                            }}
                    >
                        Hướng dẫn mua hàng
                            </MenuItem>
                    <MenuItem
                        onClick={
                            () => {
                                this.setState({ value: 1 });
                                this.goTo("/chinh-sach-giao-hang");
                                this.handleCloseMenu()
                            }}
                    >
                        Chính sách giao hàng
                                    </MenuItem>
                    <MenuItem
                        onClick={
                            () => {
                                this.setState({ value: 2 });
                                this.goTo("/kiem-tra-don-hang");
                                this.handleCloseMenu();
                            }}
                    >
                        Kiểm tra đơn hàng
                                </MenuItem>
                </Menu>

                <Box
                    component={Grid}
                    item
                    lg={1}
                    style={{ maxWidth: 80 }}
                    display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}>
                    <img src="/dist/contents/images/LeftCorner.png" alt=""></img>
                </Box>

                <Grid item lg={2} xs={10} style={{ textAlign: "center" }}>
                    <a
                        style={{ cursor: "pointer" }}
                        onClick={() => { this.setState({ value: 3 }); this.goTo("/") }}
                    >
                        <img src="/dist/contents/images/LogoCoop.png" alt="Logo">
                        </img>
                    </a>
                </Grid>

                <Box component={Grid} item lg={8} className={classes.middleHeader} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}>
                    <Box component={Grid} item lg={12} className={classes.gridNavLink}>
                        <Box component={Tabs} value={value}>
                            <Box component={Tab}
                                label="Hướng dẫn mua hàng"
                                // style={this.isActive('/huong-dan-mua-hang') ? { color: "#133C8B", borderBottom: "3px solid red" } : {}}
                                className={classes.divNavLink}
                                display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}
                                onClick={() => { this.setState({ value: 0 }); this.goTo("/huong-dan-mua-hang") }}
                            ></Box>
                            <Box component={Tab}
                                label="Chính sách giao hàng"
                                className={classes.divNavLink}
                                // style={this.isActive('/chinh-sach-giao-hang') ? { color: "#133C8B", borderBottom: "3px solid red" } : {}}
                                display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}
                                onClick={() => { this.setState({ value: 1 }); this.goTo("/chinh-sach-giao-hang") }}
                            ></Box>
                            <Box component={Tab}
                                label="Kiểm tra đơn hàng"
                                className={classes.divNavLink}
                                // style={this.isActive('/kiem-tra-don-hang') ? { color: "#133C8B", borderBottom: "3px solid red" } : {}}
                                display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}
                                onClick={() => { this.setState({ value: 2 }); this.goTo("/kiem-tra-don-hang") }}
                            ></Box>
                            <Box component={Tab} display="none"></Box>
                        </Box>
                    </Box>
                </Box>

                <Grid item lg={1} xs={2} className={classes.cartBox}>
                    <Cart cartInform={cartInform}></Cart>
                    <PersonIcon color="action" className={classes.iconLogin} ></PersonIcon>
                </Grid>

                <Box
                    component={Grid}
                    item
                    lg={1}
                    style={{ maxWidth: 80 }}
                    display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }} >
                    <img src="/dist/contents/images/RightCorner.png" alt="Logo"></img>
                </Box>
            </Box>
        );

    }
}
const styles = {
    menuButton: {
        margin: "20px",
    },
    menuIcon: {
        border: "2px solid #1f1717",
        padding: 5
    },

    gridNavLink: {
        display: "flex",
        justifyContent: "flex-end",
        maxHeight: 55,
        marginTop: 17,
    },
    divNavLink: {
        fontFamily: "Roboto,sans-serif",
        fontSize: 17,
        lineHeight: "30px",
        fontWeight: 600,
        padding: "10px 18px",
        textTransform: "uppercase",
        textDecoration: "none",
        color: "#607cb3",
        textAlign: 'center',
        cursor: "pointer",
        "& .Mui-selected": {
            color: "red"
        }
    },
    iconLogin: {
        padding: "10px 0px 5px",
        position: "absolute",
        fontSize: "2rem",
        '&:hover': {
            color: "black"
        }
    },
    cartBox: {
        maxHeight: 55,
        margin: "25px 0 10px",
        maxWidth: 80
    },
    middleHeader: {
        background: "url('/dist/Contents/images/MiddleHeader.png')",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "flex-end",
        height: 100,
    },
    backdrop: {
        zIndex: 99,
        color: '#fff',
    },
};

export default withStyles(styles)(Header)