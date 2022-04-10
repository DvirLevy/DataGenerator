const readLine = require('readline')
const {textSrv} = require('./textHandler')

/**
 * public method for getting the user's input and prompt directions for the user
 * @returns promise with the user's input 
 */
exports.getAnswer = () =>{
    let rl = readLine.createInterface({
        input : process.stdin,
        output : process.stdout
    })
    
    return new Promise((resolve, reject)=> {
    //     rl.question(textSrv(), (answer,err) =>{
    //         if(err)
    //             reject(err)
    //         else if(answer.trim() > 0){
    //                 rl.close()
    //                 resolve (answer)
    //         }
    //         else if(answer.trim() == -1){
    //             console.log(textSrv(answer.trim()))
    //             rl.close()
    //             process.exit()
    //         }

    //         else{
                rl.setPrompt(textSrv(1))
                rl.prompt()
                rl.on('line', answer =>{
                    if(answer.trim() > 0){
                        rl.close()
                        resolve(answer) 
                    }
                    else if(answer.trim() == -1){
                        console.log(textSrv(answer.trim()))
                        rl.close()
                        process.exit()
                    }
                    else if(answer.trim < -1 || isNaN(answer.trim)){
                        rl.setPrompt(textSrv(answer))
                        rl.prompt()
                    }
                })
            // }             
        // }) 
    })                            
}