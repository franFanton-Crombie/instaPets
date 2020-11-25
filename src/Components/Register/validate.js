function validate(user) {
    if (!user.name) return false;
    if (!user.surname) return false;
    if (!user.email) return false;
    if (!user.password) return false;
    if (!user.adress) return false;
    
    return true;
};

export default validate;