import axios from 'axios';

export async function masProvince() {
    let url = `/api/mas/province/masProvince`
    try {
        let res = await axios.get(url)
        let data = res.data
        return data
    } catch {
        return false
    }
}