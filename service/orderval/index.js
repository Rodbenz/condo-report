import axios from 'axios';

export async function insOrderVal(dataset) {
    let url = `/api/orderval/insOrderVal`;
    try {
        let res = await axios.post(url, dataset)
        let data = res.data
        return data
    } catch {
        return false
    }
}