class Api {
  constructor(url, headers) {
    this._url = url
    this._headers = headers
  }

  checkResponse(response) {
    return new Promise((resolve, reject) => {
      if (response.status == 204) {
        return resolve(response)
      }
      const func = response.status < 400 ? resolve : reject;
      response.json().then((data) => func(data))
    })
  }

  getServices() {
    return fetch(this._url + "getServices").then(
      this.checkResponse
    )
  }

  getServiceDetails(id) {
    return fetch(this._url + "getServiceDetails/" + id).then(this.checkResponse)
  }

  getSelfClient(token) {
    return fetch(this._url + "getSelfClient", {
      headers: {
        ...this._headers,
        "Authorization": `Bearer ${token}`
      }
    }).then(this.checkResponse)
  }

  login(data) {
    return fetch(this._url + "login", {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(
      this.checkResponse
    )
  }

  register(data) {
    return fetch(this._url + "register", {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(
      this.checkResponse
    )
  }

}

export default new Api(process.env.REACT_APP_API_URL, {
  "content-type": "application/json"
});
