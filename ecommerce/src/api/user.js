import {API_URL} from "../utils/constants"

export async function registerApi(formData){
    try {
        const url = `${API_URL}/auth/local/register`
        const params = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error)
    }
}

export async function loginApi(formData){
    try {
        const url = `${API_URL}/auth/local`
        const params = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error)
    }
}