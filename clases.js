'use-strict'
class Empleado {
    constructor({
        name,
        lastname,
        email,
        charge
    }) {
        this.code = this.generateCode()
        this.name = name
        this.lastname = lastname
        this.email = email
        this.charge = charge
        this.code = 0
    }

    generateCode() {
        return this.code = this.code + 1
    }
}