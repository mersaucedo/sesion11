'use-strict'
class Empleado {
    
    constructor({
        name,
        lastname,
        email,
        charge
    }) {
        this.name = name
        this.lastname = lastname
        this.email = email
        this.charge = charge
        this.salaryBruto = this.getSalaryBruto(this.charge)
        this.salaryNeto = this.getSalaryNeto(this.salaryBruto)
    }
    
    getSalaryBruto () {
        const sueldos = {
            'jefe': 5000,
            'analista': 4000,
            'programador': 3000,
            'soporte': 2000,
            'asistente': 1500,
        }
        const salaryBase = sueldos[this.charge]
        return salaryBase
    }

    getSalaryNeto (bruto) {
        return bruto * 0.8 
    }

}

class ListaEmpleado {
    constructor() {
        this.list = [
            {
                code: 300,
                name: 'Sergio',
                lastname: 'Alvarez',
                email: 'mail@f.com',
                salaryBruto: 1500,
                salaryNeto: 1400,
                detalle: 'mas detalles'
            },
            {
                code: 305,
                name: 'Ana',
                lastname: 'Aliaga',
                email: 'mail2@f.com',
                salaryBruto: 2500,
                salaryNeto: 2400,
                detalle: 'mas detalles'
            },
            {
                code: 3001,
                name: 'Sergio',
                lastname: 'Alvarez',
                email: 'mail3@f.com',
                salaryBruto: 3500,
                salaryNeto: 1400,
                detalle: 'mas detalles'
            },
            {
                code: 3210,
                name: 'Renato',
                lastname: 'Gonzales',
                email: 'mail4@f.com',
                salaryBruto: 1500,
                salaryNeto: 1400,
                detalle: 'mas detalles'
            },
            {
                code: 310,
                name: 'Mariano',
                lastname: 'Ordones',
                email: 'mail5@f.com',
                salaryBruto: 1500,
                salaryNeto: 1400,
                detalle: 'mas detalles'
            },
            {
                code: 320,
                name: 'Gilberto',
                lastname: 'Gonzales',
                email: 'mail6@f.com',
                salaryBruto: 5500,
                salaryNeto: 3400,
                detalle: 'mas detalles'
            },
        ]
        this.code =  0
    }

    addNew(employee) {
        this.code = this.code + 1
        this.list = [...this.list, {
            code: this.code,
            ...employee
        }]
    }

    getItems() {
        return this.list
    }

    
    orderBy(property, order) {
        const arrProperties = Object.keys(this.list[0])
        if (arrProperties.includes(property) ) {
            if (property === 'code' || property === 'salaryBruto' || property === 'salaryNeto') {
                if (order === 'asc') {
                    return this.list.sort((a,b) => a[property] - b[property])

                } else {
                    return this.list.sort((a,b) => b[property] - a[property])
                }
            } else {
                if (order === 'asc') {
                    return this.list.sort((a,b) => a[property].localeCompare(b[property]))

                } else {
                    return this.list.sort((a,b) => b[property].localeCompare(a[property]))
                }
            }
        } else {
            return `Propiedades permitidas: ${JSON.stringify(arrProperties)}`
        }
    }

    getItemDetail(code) {
        return this.list.filter((item) => item.code === code)[0]
    }
}