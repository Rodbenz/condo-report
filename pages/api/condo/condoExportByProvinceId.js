import axios from "axios"

export default async function handle(req, res) {
    let url = `${process.env.hostTest}/condo/condoExportByProvinceId`
    try {
        let resdata = await axios.post(url, req.body)
        let data = resdata.data
        res.send(data)
    } catch (err) {
        res.status(403).send(err)
    }
}