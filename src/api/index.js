class Api {

    constructor(url, headers)
    {
        this._url = url
        this._headers = headers
    }

    checkResponse(response)
    {
        return new Promise((resolve, reject) => 
        {
            if(response.status == 204)
            {
                return resolve(response)
            }
            const func = response.status < 400 ? resolve : reject
            response.json().then(data => func(data))
        })
    }

    searchService(value)
    {
        return fetch(this._url + 'get_services?query=' + value).then(this.checkResponse)
    }

    serviceDetails(id)
    {
        return fetch(this._url + 'get_details/' + id).then(this.checkResponse)
    }

}

export default new Api(process.env.REACT_APP_API_URL, { 'content-type': 'application/json' })