import { Autocomplete, Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import * as ServiceProvince from '../../service/mas/province'
import * as ServiceCondo from '../../service/condo'
import * as ServiceOrderval from '../../service/orderval'
import DataTable from '../components/datatable/dataTable'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import thDate from "dayjs/locale/th";
import dayjs from "dayjs"
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers'
import DialogDetail from './dialog/dialogDetail'
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// import { ColorAlerts } from '../../src/snackbar'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios'

const Menu1 = {
  marginLeft: 10,
  marginRight: 10,
  borderRadius: '6px',
  boxShadow: '4px 5px 18px rgba(0, 0, 0, 0.25)',
  mt: '3%',
  maxwidth: '1200px'
}
const Menu2 = {
  marginLeft: 60,
  marginRight: 60,
  borderRadius: '6px',
  boxShadow: '4px 5px 18px rgba(0, 0, 0, 0.25)',
  mt: '3%',
  maxwidth: '1200px'
}
const Tab = {
  bgcolor: '#006E61',
  padding: '1%',
  color: 'white',
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px',
}


export default function CondoReportSearch() {
  const [dataList, setDatalist] = React.useState([]);
  const [province, setProvince] = React.useState([]);
  const [valueprovince, setValueprovince] = React.useState(null);
  const [dateTimeStart, setDateTimeStart] = React.useState(null);
  const [announcementDate, setAnnouncementDate] = React.useState(null);
  const [condoSID, setCondoSID] = React.useState(null);
  const [valueOnselect, setValueOnselect] = React.useState([]);
  const [errorSeach, setErrorSeach] = React.useState(false);
  const [errorApprove, setErrorApprove] = React.useState(false);
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));


  const _resMasProvince = async () => {
    try {
      let res = await ServiceProvince.masProvince();
      console.log(res, '_resMasProvince');
      await setProvince(res);
    } catch (e) {
      console.log(e);
    }
    // try {
    //   const res = await fetch(`${process.env.hostAPI}/MAS/province`);
    //   const data = await res.json();
    //   // console.log(data);
    //   await setProvince(data);
    // } catch (err) {
    //   console.log(err);
    // }
  }

  const handleMasProvince = (event, value) => {
    console.log(value);
    setValueprovince(value);
    setErrorSeach(false)
  }

  const handleChangeStartDate = (value) => {
    setDateTimeStart(value)
    setErrorApprove(false)
    // console.log(dayjs(value).format("-MM-DD"), value.$y);

  }

  const handleChangeAnnouncementDate = (value) => {
    setAnnouncementDate(value)
    setErrorApprove(false)
  }


  const sel_condoExportByProvinceId = async (el) => {
    let url = `${process.env.hostCondo}/condo/condoExportByProvinceId`
    try {
      // let res = await ServiceCondo.getCondoExportByProvince(el)
      // console.log(res, 'sel_condoExportByProvinceId');
      let resdata = await axios.post(url, el)
      let data = resdata.data

      console.log(data,'sel_condoExportByProvinceId');
      let newData = []
      for (const i in data) {
        let dataitems = data[i]
        // dataitems.action = ""
        dataitems.STATUS_VAL = ""
        if (dataitems.ORDER_STATUS == '4') {
          dataitems.STATUS_VAL = "รอลงนาม"
        }
        if (dataitems.ORDER_STATUS == '2') {
          dataitems.STATUS_VAL = "อยู่ระห่วางลงนาม"
        }
        if (dataitems.ORDER_STATUS == '1') {
          dataitems.STATUS_VAL = "ลงนามเรียบร้อยแล้ว"
        }

        let action = (
          <ButtonActions
            handleDownLoad={() => handleDownLoad(dataitems)}
            data={dataitems}
          />
        )
        let detail = (
          <ActionsDetail condo_s_id={() => handleOnDetail(dataitems.CONDO_S_ID)} />
        )
        // if (dataitems.EXPORT_STATUS == "1") {
        dataitems['action'] = action
        // }

        dataitems['DETAIL'] = detail

        newData.push(dataitems)
      }
      await setDatalist(newData)
    } catch (e) {
      console.log(e);
    }
  }

  const onHandleSubmit = () => {
    let data = new Object()
    if (valueprovince != null) {
      data.PROVINCE_ID = valueprovince.PROVINCE_ID
    } else {
      data.PROVINCE_ID = null
      setErrorSeach(true)
      // ColorAlerts()
      return
    }

    sel_condoExportByProvinceId(data)
  }

  const handleOnSelect = (el) => {
    console.log(el, 'handleOnSelect');
    setValueOnselect(el)
  }

  const handleOnDetail = (condo_s_id) => {
    setCondoSID(condo_s_id)
  }
  const handleCloseDetail = () => {
    setCondoSID(null)
  }
  const onSubmitApprove = () => {
    if (dateTimeStart == null) {
      setErrorApprove(true)
      return false
    }
    req_insOrderVal()
  }
  const handleDownLoad = (el) => {
    console.log(el);
    if (el != null) {
      let fileName = el.EXPORT_ADDRESS + el.EXPORT_NAME
      var path = 'http://reportassessprice.treasury.go.th/' + fileName.replace(/\\/g, "/");
      console.log(path);
      window.open(path)
    }
  }

  const req_insOrderVal = async () => {
    for (var i in valueOnselect) {
      let dataset = {
        CHANGWAT_CODE: valueprovince.PROVINCE_ID,
        BRANCH_CODE: valueOnselect[i].BRANCH,
        PERIODS_ID: "7",
        CONDO_S_ID: valueOnselect[i].CONDO_S_ID,
        REGIST_NO: valueOnselect[i].REGIST_NO,
        CONDO_NAME: valueOnselect[i].CONDO_NAME,
        ORDER_TYPE: "1",
        ORDER_STATUS: "4",
        CREATE_BY: "1111111111",
        PUBLIC_DATE: dayjs(dateTimeStart).format("YYYY-MM-DD")
      }
      try {
        let url = `${process.env.hostCondo}/condo/insOrderVal`
        // let req = await ServiceOrderval.insOrderVal(data)
        let res = await axios.post(url, dataset)
        let data = res.data
        console.log(data, 'req_insOrderVal');
        sel_condoExportByProvinceId()
      } catch (e) {
        console.log(e);
      }

    }

  }

  let colum = [
    {
      name: 'ตัวอย่าง',
      listname: 'DETAIL',
    },
    {
      name: 'ชื่อคอนโด',
      listname: 'CONDO_NAME',
    },
    // {
    //   name: 'สถานะ',
    //   listname: 'CONDO_NAME',
    // }
  ];

  React.useEffect(() => {
    _resMasProvince()
  }, [])

  return (
    <div>
      {condoSID && (
        <DialogDetail
          condoSID={condoSID}
          open={condoSID !== null}
          onclose={handleCloseDetail}
        />
      )}

      <Box>
        <Grid container>
          <Grid item xs={12} sx={Menu1}>
            <Grid container sx={Tab}>
              <Typography variant="text" sx={{ ml: '2%' }}>กรุณาระบุรายละเอียดเพื่อค้นหา</Typography>
            </Grid>
            <Grid container sx={{ pt: '2%' }}  >
              <Grid item xs={12}>
                <Stack direction={'row'} justifyContent={'center'} py={2} spacing={2}>
                  <Autocomplete
                    id="Province"
                    options={province}
                    onChange={handleMasProvince}
                    getOptionLabel={(option) => option.PROVINCE_NAME_TH}
                    value={valueprovince}
                    sx={{ width: '50%' }}
                    renderInput={(params) => <TextField {...params}
                      label={
                        <div>
                          <Typography variant="text" >จังหวัด</Typography>
                          <Typography variant="text" color="#d50000"> *</Typography>
                        </div>}
                      size="small"
                      error={errorSeach}
                    />}
                  />
                  <Button onClick={onHandleSubmit} variant='contained' size='small'>
                    <SearchIcon />
                    ค้นหา
                  </Button>
                  <Button variant='contained' color='error' size='small'>
                    <HighlightOffIcon />
                    ล้างค่า
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={12} sx={Menu2}>
            <Grid container sx={Tab}>
              <CalendarMonthIcon /> {'บันทึกวันที่ (ถ้ายังไม่ได้กำหนด หรือต้องการแก้ไข)'}
            </Grid>
            <Grid container >
              <Grid item xs={12} py={2} px={3}>
                <Stack direction={'row'} justifyContent={'center'} spacing={5}>
                  <LocalizationProvider dateAdapter={AdapterDayjs} locale={thDate}>
                    <MobileDatePicker
                      openTo="year"
                      inputFormat="DD MMMM YYYY"
                      disableMaskedInput={true}
                      views={["year", "month", "day"]}
                      label="เมื่อวันที่"
                      value={dateTimeStart}
                      error={dateTimeStart == null}
                      onChange={handleChangeStartDate}
                      renderInput={(params) =>
                        <TextField {...params}
                          id="bootstrap-input"
                          {...params}
                          size="small"
                          fullWidth
                          error={errorApprove}
                        />}
                    />
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDayjs} locale={thDate}>
                    <MobileDatePicker
                      openTo="year"
                      inputFormat="DD MMMM YYYY"
                      disableMaskedInput={true}
                      views={["year", "month", "day"]}
                      label="ทั้งนี้ตั้งแต่วันที่"
                      value={announcementDate}
                      error={announcementDate == null}
                      onChange={handleChangeAnnouncementDate}
                      renderInput={(params) =>
                        <TextField {...params}
                          id="bootstrap-input"
                          {...params}
                          size="small"
                          fullWidth
                          error={errorApprove}
                        />}
                    />
                  </LocalizationProvider>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ padding: 5 }}>
          <Grid item xs={12}>
            <DataTable
              data={dataList}
              colum={colum}
              onSelect={handleOnSelect}
              add={onSubmitApprove}
              addname={"อนุมัติลงนามเล่มที่เลือก"}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

function ButtonActions(props) {
  const data = props.data
  return (
    <Grid container>
      <Grid item xs={12}>
        <Stack direction={'row'} justifyContent={'center'}>
          <Typography>{props.data.STATUS_VAL}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        {props.data.ORDER_STATUS == '1' && (
          <Stack direction={'row'} justifyContent={'center'}>
            <IconButton onClick={props.handleDownLoad}>
              <PictureAsPdfIcon color='error' />
            </IconButton>
          </Stack>
        )}
      </Grid>
    </Grid>
  )
}
function ActionsDetail(props) {
  return (
    <Grid container >
      <IconButton onClick={props.condo_s_id}>
        <ArticleIcon color='success' />
      </IconButton>
    </Grid>
  )
}