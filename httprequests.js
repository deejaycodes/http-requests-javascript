class httpRequests{
    async get(url){
        // Make an HTTP GET Request
        const response = await fetch(url);
        const response_data = await response.json();
        return response_data
    }

    // Make an HTTP POST Request
    async post(url, data){
        const response = await fetch(url,{
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
             body: JSON.stringify(data)
        });

        const response_data = await response.json();
        return response_data;


    }

    // Make an HTTP PUT Request
    async put(url,data){
        const response = await fetch(url,{
        method: 'PUT',
        headers:{
            'Content-type':'application/json'
        },
             body: JSON.stringify(data)
        });
        const response_data = await response.json();
        return response_data;
        
    }

    async delete(url){
        const response = await fetch(url, {
            method: 'DELETE',
        });

        const response_data = await 'Resource Deleted...';
        return response_data;
    }

}