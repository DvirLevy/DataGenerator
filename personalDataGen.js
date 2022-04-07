const getInput = require('./services/getInput')
const dataGen = require('./services/dataGen')

/**
 * public main method resposible for running and managing the other services
 */
const main= async () =>{
    try{
        let userInput = await getInput.getAnswer()
        
        console.log(dataGen.getData(userInput))
        // .then(data => console.log(data)).catch(err => console.log(err))
    }
    catch(error){
        console.error(error)
    }
}
main()
