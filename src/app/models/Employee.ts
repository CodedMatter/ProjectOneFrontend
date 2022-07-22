export class Employee {
    id :number;
    firstName :string;
    lastName :string;
    warehouseId :number;

    constructor(id :number, firstName :string, lastName :string, warehouseId :number){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.warehouseId = warehouseId;
    }
}