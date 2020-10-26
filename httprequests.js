class httpRequests{
    async get(url){
        // Make an HTTP GET Request
        const response = await fetch(url);
        const response_data = response.json();
        return response_data
    }

    // Make an HTTP POST Request
    async post(url, data){
        const response = await fetch(url,{
            method: this.post,
            headers:{
                'Content-type': 'application/json'
            },
             body: JSON.stringify(data)
        });

        const response_data = response.json();
        return response_data;


    }






}