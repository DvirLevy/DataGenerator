const readLine = require('readline')

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
        rl.question("How many persons data would you like to generate ? for exit type -1\n", (answer,err) =>{
            if(err)
                reject(err)
            else if(answer.trim() > 0){
                    rl.close()
                    resolve (answer)
            }
            else if(answer.trim() == -1){
                console.log("bye bye...")
                rl.close()
                process.exit()
            }

            else{
                rl.setPrompt("Please use only positive numbers bigger then 0,\n(for exit the program type -1)\n")
                rl.prompt()
                rl.on('line', answer =>{
                    if(answer.trim() > 0){
                        rl.close()
                        resolve(answer) 
                    }
                    else if(answer.trim() == -1){
                        console.log("bye bye...")
                        rl.close()
                        process.exit()
                    }
                    else if(answer.trim < -1 || isNaN(answer.trim)){
                        rl.setPrompt(`your input ${answer} is not valid, please try again...\n`)
                        rl.prompt()
                    }
                })
            }             
        }) 
    })                            
}