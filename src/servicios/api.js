const responder = async apiResponse => {
    const { data } = apiResponse;
    return data;
}
const ejecutar = async (link,datos,token) => {
    if (!token)
    {
        token='0'
    }
    return await fetch(`/api/${link}`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(datos), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(responder)
}

module.exports = {
    tryLogin: async (datos) => {
        return await ejecutar('login', datos);
    },
    tryView: async (datos) => {
        return await ejecutar('view', datos);
    },
    tryRegister: async (datos) => {
        return await ejecutar('register', datos);
    }
}