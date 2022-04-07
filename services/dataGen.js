// import { Person } from '../Person'
const Person = require('../Person')
const { faker } = require('@faker-js/faker')

/**
 * public method creates the fake data
 * @param userInput number of identities to create
 * @returns array of objcet with identities 
 */
exports.getData = (userInput) =>{
    let persons = []
    // let id = await faker.mersenne.rand(10e8).toString()

    for(i = 0 ; i < userInput ; i++){
        persons[i] = new Person(faker.internet.email(), faker.name.firstName(), faker.name.lastName(),
                                    faker.address.city(), faker.address.country(), faker.mersenne.rand(10e8).toString()).createObject()
    }
    return persons
}