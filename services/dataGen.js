// import { Person } from '../Person'
const Person = require('../Person')
const { faker } = require('@faker-js/faker')

/**
 * public method creates the fake data
 * @param userInput number of identities to create
 * @returns array of objcet with identities 
 */
exports.getData = (userInput) =>{
    // let persons = []
    // let id = await faker.mersenne.rand(10e8).toString()
    parseInt(userInput)
    for(i = 0 ; i < userInput ; i++){
        const person = new Person(faker.internet.email(), faker.name.firstName(), faker.name.lastName(),
                                    faker.address.city(), faker.address.country(), faker.mersenne.rand(10e8).toString())
        person.printPerson()
    }
    
}