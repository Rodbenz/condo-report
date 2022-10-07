import axios from "axios"

export default async function handle(req, res) {
    let url = `${process.env.hostAPI}/MAS/province`
    try {
        let resdata = await axios.get(url)
        let data = resdata.data
        res.send(data)
    } catch (err) {
        res.status(403).send(err)
    }
}