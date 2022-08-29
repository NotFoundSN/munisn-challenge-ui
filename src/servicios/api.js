const responder = async apiResponse => {
    const { data } = apiResponse;
    return data;
}
const ejecutar = async (link,datos) => {
    return await fetch(`/api/${link}`, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(datos), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(responder)
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    /*return await fetch(`/api/${link}`)
        .then(respuesta => respuesta.json())
        .then(responder)
        .catch(error => console.log(error))*/
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