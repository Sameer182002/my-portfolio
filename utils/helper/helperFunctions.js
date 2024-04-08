function isCharactersOnly(str=''){
    if(!str) return true;
    const lettersRegex = /^[A-Za-z\s]+$/;
    return lettersRegex.test(str)
}

function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function scrollToSection(path=''){
    const targetSection = document.querySelector(path);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

export {isCharactersOnly,isValidEmail,scrollToSection}