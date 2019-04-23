/**
 * This file is used to store processing logic for the application. 
 * Hyron helps you focus on the processing part, on the most 
 * important things. With an extremely user-friendly interface, 
 * like a normal function
 */

module.exports = class {
    /**
     * This method tells hyron about the functions that will be registered as routers
     */
    static requestConfig() {
        return {
             // GET /say-hello?yourName=[]
            sayHello: "get",
             // GET /say-hello-json?yourName=[]
            sayHelloJson: "get"
        }
    }

    /**
     * return to client string of data
     */
    sayHello(yourName) {
        return "hello " + yourName;
    }

    /**
     * return to client json format of data
     */
    sayHelloJson(yourName) {
        return {
            status: "success",
            code: 200,
            data: "hello " + yourName
        }
    }
}