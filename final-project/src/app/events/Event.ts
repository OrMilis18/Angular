import Person from "../Person";

export default class Event{
    id:number;
    name:string;
    address:string;
    participants:number;
    manager:Person;
    constructor(id:number,name:string,address:string,participants:number,manager:Person){
            this.name=name;
            this.id=id;
            this.address=address;
            this.participants=participants;
            this.manager=manager;
        }
}