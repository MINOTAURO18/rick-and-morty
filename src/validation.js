const validation = (userData) => {
    let errors = {};

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)){
        errors.email = 'el email es invalido';
    }
    if(!userData.email){
        errors.email = 'este campo no puede estar vacio';
    }

    if(userData.email.length > 35){
        errors.email = 'el email no puede superar los 35 caracteres'
    }
    if(!userData.password.match(/\d/)){
        errors.password = 'la contraseña debe tener al menos un numero';
    }

    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'la contraseña debe contener entre 6 y 10m caracteres'
    }
    return errors;
}

export default validation;