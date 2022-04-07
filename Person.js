/**
 * RGBImage class creates an image that hold a 2D array of pixel, each pixel created with RGBColor class
 *
 * @author: Dvir Levy
 */
class Person {
    /** @private */
    #email 

    /** @private */
    #firstName

    /** @private */
    #lastName

    /** @private */
    #city

    /** @private */
    #country

    /** @private */
    #id

    /**
     * Constructor for objects of class RGBImage create black image
     * 
     * @param email personal details
     * @param firstName a personal details
     * @param lastName a personal details
     * @param city a personal details
     * @param country a personal details
     * @param id a personal details
     */
    constructor(email,firstName, lastName, city, country, id){
        this.setEmail(email)
        this.setFirstName(firstName)
        this.setLastName(lastName)
        this.setCity(city)
        this.setCountry(country)
        this.setId(id)
    }

    /**
     * public method for setting the user's email
     * @param email personal data
     */
    setEmail(email){
        this.#validateEmail(email) ? this.#email = email : this.#email = 'not valid'
    }

    /**
     * public method for setting the user's first name
     * @param firstName personal data
     */
    setFirstName(firstName){
        this.#validName(firstName) ? this.#firstName = firstName : this.#firstName = 'not valid'
    }

    /**
     * public method for setting the user's last name
     * @param lastName personal data
     */
    setLastName(lastName){
        this.#validName(lastName) ? this.#lastName = lastName : this.#lastName = 'not valid'
    }

    /**
     * public method for setting the user's city name
     * @param city personal data
     */
    setCity(city){
        this.#validName(city) ? this.#city = city : this.#city = 'not valid'
    }

    /**
     * public method for setting the user's country name
     * @param country personal data
     */
    setCountry(country){
        this.#validName(country) ? this.#country = country : this.#country = 'not valid'
    }

    /**
     * public method for setting the user's id
     * @param id personal data
     */
    setId(id){
        this.#validId(id) ? this.#id = id : this.#id = 'not valid'
    }

    /**
     * public method for getting the user's first name
     * @param firstName personal data
     */
    getFirstName = () =>{
        return this.#firstName
    }

    /**
     * public method for getting the user's last name
     * @param lasttName personal data
     */
    getLastName = () =>{
        return this.#lastName
    }

    /**
     * public method for getting the user's city name
     * @param city personal data
     */
    getCity = () =>{
        return this.#city
    }

    /**
     * public method for getting the user's country name
     * @param country personal data
     */
    getCountry = () =>{
        return this.#country
    }

     /**
     * public method for getting the user's id
     * @param id personal data
     */
    getPersonId = () =>{
        return this.#id
    }

    /**
     * private method for validating the user's email
     * @param email personal data
     */
    #validateEmail(email){
        let mailFormat =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(mailFormat))
            return true
        else
            return false
    }

    /**
     * private method for validating the names (first name, city, etc)
     * @param name personal data (first name, city, etc)
     */
    #validName(name){
        if(name.length > 0)
            return true
        else
            return false
    }

    /**
     * private method for validating the user's id
     * @param id personal data
     */
    #validId(id){
        return id.length == 9
    }

    /**
     * public method for creating an object from the user's data
     */
    createObject(){
        return {
            email : this.#email,
            firstName : this.#firstName,
            lastName : this.#lastName,
            city : this.#city,
            country : this.#country,
            id : this.#id
        }
    }
}
module.exports = Person
