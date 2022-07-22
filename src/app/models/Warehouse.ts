export class Warehouse {
    id :number;
    name :string;
    capacity :number;
    companyId :number;
    numOfEmployees :number;
    administratorId :number

    constructor(id :number, name :string, capacity :number, companyId :number, numOfEmployees :number, administratorId :number){
        this.id = id;
        this.name = name;
        this.capacity = capacity;
        this.companyId = companyId;
        this.numOfEmployees = numOfEmployees;
        this.administratorId = administratorId;
    }    
}
