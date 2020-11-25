

function reducer (user, {type, payload}) {
    switch (type) {
        case 'setName': return {...user, name: payload};
        case 'setSurname': return {...user, surname: payload};
        case 'setEmail': return {...user, email: payload};
        case 'setPassword': return {...user, password: payload};
        case 'setAdress': return {...user, adress: payload};
        case 'setPhone': 
            if (payload.length > 3 && payload.length < 7) return {...user, phone: payload, phone_error: "Muy corto"};
            return {...user, phone: payload, phone_error: undefined};
        case 'setPhonePrefix': 
            if (payload[0] !== "+") return {...user, phone_prefix: payload, phone_prefix_error: "Falta +"}
            return {...user, phone_prefix: payload, phone_prefix_error: undefined};
            
        default: return user;
    };
};

export default reducer;