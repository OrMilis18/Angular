import Person from "../Person";

export default class Resident extends Person {
    private address:string;
    private startYear:number;
    private status: string;

    constructor(id:number,name:string,age:number,gender:boolean,img:string,address:string,stYear:number,status:string){
        super(id,name,age,gender,"ראש העין",img);
        this.address=address;
        this.startYear=stYear;
        this.status=status;
    }

    
    public get Address() : string {
        return this.address;
    }

    
    public set Address(address : string) {
        this.address = address;
    }
    

    
    public get StartYear() : number {
        return this.startYear;
    }

    
    public set StartYear(start : number) {
        (start>1900&&start<2022) ? this.startYear = start: this.startYear;
    }
    

    
    public get Status() : string {
        return this.status;
    }
    
    
    public set Status(status : string) {
        (status>='A'&& status<='D')? this.status = status : this.status;
    }
    
    
    

}