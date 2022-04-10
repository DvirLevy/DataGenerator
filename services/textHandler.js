exports.textSrv = (answer) =>{
    let textStr;
    let textDef = parseInt(answer)
    
    if(textDef < -1 || isNaN(textDef))
        textDef = 0
    

    switch (textDef) {
        case 0:
            textStr = `\nyour input \"${answer}\" is not valid,\nPlease use only positive numbers bigger then 0,\n(for exit the program type -1)\n`
            break
        case -1:
            textStr = "\nbye bye..."
            break
        case 1:
            textStr = "\nHow many persons data would you like to generate ? for exit type -1\n"
            break
        
        default:
            textStr = `\nyour input \"${answer}\" is not valid,\nPlease use only positive numbers bigger then 0,\n(for exit the program type -1)\n`
            break
    }       

    return textStr
}
