import React from 'react';
import BaseConsumer from 'BaseComponent/BaseConsumer'
import { withStyles, Grid, Container, TextField, Box } from '@material-ui/core'
import Button from 'components/CustomButtons/Button';
import SearchIcon from '@material-ui/icons/Search';

class Footer extends BaseConsumer {
    consumerContent() {
        const { classes } = this.props;
        return (
            <Box component="div" className={classes.root} >
                <Grid container spacing={0} >
                    <Box
                        component={Grid}
                        item
                        lg={3} md={3} sm={6} xs={12}
                        display={{ xs: 'none', sm: 'none', md: 'block' }}>
                        <a href='?' >
                            <img src="/dist/contents/images/FooterCorner.jpg" style={{ width: "100%", height: "100%" }} alt="Logo"></img>
                        </a>
                    </Box>
                    <Box
                        component={Grid}
                        item
                        sm={6}
                        display={{ xs: 'block', sm: 'block', md: 'none' }}
                        style={{ textAlign: "center", margin: "auto" }}>
                        <a href='?'>
                            <img src="/dist/contents/images/LogoCoop.png" alt="Logo">
                            </img>
                        </a>
                    </Box>
                    <Box
                        component={Grid}
                        item
                        sm={6}
                        display={{ xs: 'none', sm: 'block', md: 'none' }}>
                        <a href='?' >
                            <img src="/dist/contents/images/FooterCorner2.jpg" style={{ width: "100%", height: "100%" }} alt="Logo"></img>
                        </a>
                    </Box>
                    <Grid item lg={4} md={4} sm={6} xs={12}>
                        <Container>
                            <div className={classes.footerInfo}>
                                <h4>Hệ thống siêu thị Co.opmart <a href="?">(Xem thông tin liên hệ tại đây)</a></h4>
                                <ul>
                                    <li>Tổng đài CSKH: 1900.5555.68</li>
                                    <li><a>chamsockhachhang@coopmart.vn</a></li>
                                </ul>
                            </div>
                        </Container>
                        <Container>
                            <div className={classes.footerInfo}>
                                <h4><a>Hệ thống siêu thị Co.opmart (Xem thông tin liên hệ tại đây)</a></h4>
                                <ul>
                                    <li>Tổng đài CSKH: 1900.5555.68</li>
                                    <li><a>chamsockhachhang@coopmart.vn</a></li>
                                </ul>
                            </div>
                        </Container>
                    </Grid>
                    <Grid item lg={5} md={5} sm={6} xs={12}
                        style={{
                            position: "relative",
                        }}>
                        <Container>
                            <div className={classes.footerForm}>
                                <h4>Kiểm tra đơn hàng</h4>
                                <Box>
                                    <TextField
                                        className={classes.inputText}
                                        fullWidth={true}
                                        label="Email khách hàng"
                                        placeholder="Nhập email khách hàng"
                                        variant="outlined"
                                    />
                                </Box>
                                <Box>
                                    <TextField
                                        className={classes.inputText}
                                        fullWidth={true}
                                        label="Mã đơn hàng"
                                        placeholder="Nhập mã đơn hàng"
                                        variant="outlined"
                                    />
                                </Box>
                                <small style={{ color: "#999" }}>
                                    (Vui lòng nhập đầy đủ 02 thông tin trên)
                                    </small>
                                <Box
                                    style={{ display: "flex", justifyContent: "flex-end", }}
                                >
                                    <Button
                                        justIcon
                                        color="primary"
                                    >
                                        <SearchIcon style={{ fontSize: "30px", margin: "0" }} />
                                    </Button>
                                </Box>
                            </div>
                            <Box
                                display={{ xs: 'none', sm: 'none', md: 'block' }}
                                className={classes.ImageBottomConerRight}
                            >
                                <a href='?'>
                                    <img src="/dist/contents/images/FooterRightCorner.png" alt="Logo">
                                    </img>
                                </a>
                            </Box>
                        </Container>
                    </Grid>
                </Grid>

            </Box>
        );

    }
}
const styles = {
    root: {
        display: "flex",
        background: "#fff",
        marginTop: 50,
        flexGrow: 1,
        boxShadow: "none"
    },
    ImageBottomConerRight: {
        right: "45px",
        top: "200px",
        position: "absolute",
    },
    footerInfo: {
        color: "#133C8B",
        "& ul": {
            paddingLeft: "10px",

            listStyleType: "none"
        },
        "& li": {
            lineHeight: "28px",
            color: "#7c7c7c !important"
        },
        "& a": {
            color: "#999",
            cursor: "pointer",
            textDecoration: "none",
            "&:first-child": {
                color: "#133C8B",
                "&:hover": {
                    color: "#ED0677",
                }
            },
            "&:hover": {
                color: "#133C8B",
                paddingLeft: "10"
            }
        },

    },
    footerForm: {
        color: "#133C8B",
    },
    inputText: {
        display: 'block',
        marginTop: "10px",
    }
};

export default withStyles(styles)(Footer)