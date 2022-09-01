const ejecutar = async (link,datos,token) => {
    if (!token)
    {
        token='0'
    }
    let cuerpo = {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
    }
    if (datos!=='')
    {
        cuerpo={...cuerpo,body: JSON.stringify(datos)}
    }
    return await fetch(`/api/${link}`, {...cuerpo}).then(res => res.json())
      .catch(error => console.error('Error:', error))
}

module.exports = {
    tryLogin: async (datos) => {
        return await ejecutar('login', datos);
    },
    tryView: async (token) => {
        let datos = '';
        return await ejecutar('view', datos, token);
    },
    tryRegister: async (datos) => {
        return await ejecutar('register', datos);
    }
}