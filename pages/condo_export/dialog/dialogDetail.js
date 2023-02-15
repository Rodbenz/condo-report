import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from '@mui/material'
import React from 'react'

export default function DialogDetail(props) {
    // const current_url = new URL('' + window.location.href);
    // console.log(current_url,'current_urlcurrent_url');
    const url =  `${process.env.hostDetail}report_condo.php?condo_s_id=${props.condoSID}`;
    console.log(url,'urlurlurl');
    return (
        <div>
            <Dialog open={props.open} maxWidth={"xl"} fullWidth>
                <DialogTitle>ตัวอย่าง</DialogTitle>
                <DialogContent>
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container justifyContent={'center'}>
                                <Grid item xs={12} sx={{ height: "calc(100vh - 150px)", width: "100%", overflow: "hidden"}} >
                                    {
                                        <object id={"print"} data={url}  width="100%" height="100%" ></object>
                                    }
                                    {/* <iframe id='iframmap' scrolling="no" src={`${process.env.hostPdf}/pdf_api/?ur=alert_renew&data_r=` + encode} style={{ width: "100%", border: 'none', height: 'calc(100vh - 80px)' }} /> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained" color="error"
                        onClick={props.onclose}
                    >
                        ปิด
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
