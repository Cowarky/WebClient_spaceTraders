async function RetrieveData<T>(endpoint: string): Promise<T> {

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': import.meta.env.VITE_API_KEY
        }
    }
    let response = await fetch(import.meta.env.VITE_API_URL + endpoint, options)
    if (response.status === 401) {
        console.log("Enter your token in the console of the client");
    } else if (response.status !== 200) {
        console.log("Something went wrong, try again later");
    } else {

    }
    const resData = await response.json();
    console.log(resData.data)

    return resData.data
};

async function SendData(endpoint: string, urlParams: Object) {
    let finalUrl = import.meta.env.VITE_API_URL + endpoint;
    
    // Replace URL parameters like :userId, :postId etc.
    for (const [key, value] of Object.entries(urlParams)) {
        finalUrl = finalUrl.replace(`:${key}`, String(value));
    }
    const options = {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            // 'Content-Type': 'application/json',
            'Authorization': import.meta.env.VITE_API_KEY
        }
    }
    
    let response = await fetch(finalUrl, options)

    const resData = await response.json();
    console.log(resData.data)

};


export default { RetrieveData, SendData }