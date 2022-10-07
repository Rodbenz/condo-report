import axios from 'axios';

export async function getCondoExportByProvince(dataset) {
    let url = `/api/condo/condoExportByProvinceId`;
    try {
        let res = await axios.post(url, dataset)
        let data = res.data
        return data
    } catch {
        return false
    }
}