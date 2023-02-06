function renderInput (response) {
    return  `    

    ${response[0].name}
    ${response[0].id}
    ${response[0].email}
    ${response[0].github}
    ${response[0].onumber}
    ${response[0].school}
    
    `
};

module.exports = renderInput;