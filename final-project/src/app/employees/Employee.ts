import Person from "../Person";

export default class Employee extends Person {
    job:string;
    hours: number;
    salary: number;

    constructor(id:number,name:string,age:number,gender:boolean,city:string,img:string,job:string,hours:number,salary:number){
        super(id,name,age,gender,city,img);
        this.job=job;
        this.hours=hours;
        this.salary=salary;
    }


}