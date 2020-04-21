import React from 'react'
import BaseConsumer from 'BaseComponent/BaseConsumer'
import { withStyles, Grid, Container, Button, Box, TextField } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';

import BillContent from '../Main/Cart/BillContent'
class CheckOrder extends BaseConsumer {
    constructor(props) {
        super(props);
        this.state = {
            orderId: 0,
            email: '',
            bill: null,
            errorFindBill: null
        }
    }
    _handleClickSearchOrder = () => {
        let data = {
            orderId: this.state.orderId,
            email: this.state.email
        }
        this.ajaxGet({
            url: '/api/order/SearchBill',
            data: data,
            success: (ack) => {
                this.setState({
                    bill: ack.Data,
                    errorFindBill: null
                })
            },
            unsuccess: (ack) => {
                this.setState({
                    bill: null,
                    errorFindBill: <Alert onClose={() => { this.setState({ errorFindBill: null }) }} variant="filled" severity="warning">
                        Không tìm thấy!!! Vui lòng kiểm tra lại thông tin
                                      </Alert>
                })
            }

        })
    }
    consumerContent() {
        let { classes } = this.props;
        let { bill, errorFindBill } = this.state;
        let eleBill = "";
        if (bill !== null && errorFindBill == null) {
            eleBill = <Container><BillContent bill={bill} index={1}></BillContent></Container>
        }
        else {
            eleBill = errorFindBill
        }

        return (
            <Container className={classes.container}>
                <Box>
                    <Grid container className={classes.formGroup}>
                        <Grid item lg={2} sm={3} xs={12} className="fieldText"><p> Mã đơn hàng:</p></Grid>
                        <Grid item lg={3} sm={8} xs={12}>
                            <TextField
                                variant="outlined"
                                color="primary"
                                type="number"
                                fullWidth
                                className={classes.inputText}
                                onBlur={(e) => { this.setState({ orderId: (event.target.value !== "") ? event.target.value : 0 }) }}
                            />
                            <p style={{ color: 'rgb(153, 153, 153)' }}>(Vui lòng nhập đầy đủ 02 thông tin trên)</p>
                        </Grid>
                        <Grid item lg={2} sm={3} xs={12} className="fieldText"> <p>Email khách đặt hàng:</p></Grid>
                        <Grid item lg={4} sm={8} xs={12}>
                            <TextField
                                variant="outlined"
                                color="primary"
                                className="fieldInput"
                                type="email"
                                onBlur={(e) => { this.setState({ email: event.target.value }) }}
                            />
                        </Grid>
                        {/* <Grid item lg={4} sm={12} xs={12} className={classes.formGroup}>
                            <Grid item sm={3} xs={12} className="fieldText"><p> Mã đơn hàng:</p></Grid>
                            <Grid item sm={9} xs={12}>
                                <TextField
                                    variant="outlined"
                                    color="primary"
                                    type="number"
                                    fullWidth
                                    className={classes.inputText}
                                    onBlur={(e) => { this.setState({ orderId: (event.target.value !== "") ? event.target.value : 0 }) }}
                                />
                                <i style={{ color: 'rgb(153, 153, 153)' }}>(Vui lòng nhập đầy đủ 02 thông tin trên)</i>
                            </Grid>
                        </Grid>
                        <Grid item lg={8} sm={12} xs={12} className={classes.formGroup}>
                            <Grid item sm={3} xs={12} className="fieldText"> <p>Email khách đặt hàng:</p></Grid>
                            <Grid item sm={9} xs={12}>
                                <TextField
                                    variant="outlined"
                                    color="primary"
                                    className="fieldInput"
                                    type="email"
                                    onBlur={(e) => { this.setState({ email: event.target.value }) }}
                                />
                            </Grid>
                        </Grid> */}
                    </Grid>
                </Box>
                <Button style={{ margin: 10, cursor: "pointer" }} variant="contained" color="primary" onClick={() => { this._handleClickSearchOrder() }}>KIỂM TRA ĐƠN HÀNG</Button>
                {eleBill}

            </Container>
        )
    }
}
const Styles = {
    container: {
        marginTop: 30,
        textAlign: "center"
    },
    formGroup: {
        maxWidth: '100%',
        display: "flex",
        margin: "10px 0px",
        '& > .fieldText': {
            alignItems: 'center',
            justifyContent: 'center',
            color: 'blue',
            fontSize: 'larger',
            margin: "0px 10px",
        },
        '& .fieldInput': {
            width: '100%'
        }
    },
    inputText: {
        margin: 0,
        padding: "0px",
        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: 0
        }
    },
}

export default withStyles(Styles)(CheckOrder)