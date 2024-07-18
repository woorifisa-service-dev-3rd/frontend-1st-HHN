import { baseUrl } from "../env.js";

export class Fet {
    static async post(url, data){
        const response = await fetch(
            `${baseUrl}/${url}`,
            {
                headers: {
                    "Content-type": "application/json"
                },
                method: "POST",
                body: data,
                credentials: "include",
            }
        );

        const result = response.json();
        return result;
    }
}

// http://localhost:3000/auth/singnup
// const response = await Fet.post('auth/signup', data);