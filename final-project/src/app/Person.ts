export default class Person{
    private id: number=0;
    private name: string ="";
    private age:number=0;
    private gender:boolean=true;
    private city:string ="ראש העין";
    private img:string="";

    constructor(id:number,name:string,age:number,gender:boolean,city:string,img:string){
        this.id=id;
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.city=city;
        this.img=img;
    }
    
    public get Id() : number {
        return this.id;
    }

    
    public set Id(id: number) {
        if(id>=10000000&&id<1000000000){this.id=id};
    }
    
    // public set Id(id : string) {
    //     let flag:boolean =true;
    //     if(id.length==8 || id.length==9){
    //         for (let index = 0; index < id.length; index++) {
    //             if(id.charAt(index)<'0'||id.charAt(index)>'9'){flag=false};       
    //         }
    //         if(flag==true){this.id = id};
    //     }
        
    // }
    

    
    public get Name() : string {
        return this.name;
    }

    
    public set Name(name : string) {
        let flag:boolean= true;
        for (let index = 0; index < name.length; index++) {
            if((name.charAt(index)<'a' || name.charAt(index)>'Z')||(name.charAt(index)<'א' || name.charAt(index)>'ת')){flag=false}
        }
        if(flag=true){this.name = name};
    }
    

    
    public get Age() : number {
        return this.age;
    }
    
    public set Age(age : number) {
        if(age>0&&age<120){this.age = age};
    }
    
    
    
    public get Gender() : boolean {
        return this.gender;
    }
    
    public set Gender(gender : boolean) {
        this.gender = gender;
    }
    

    
    public get City() : string {
        return this.city;
    }
    
    public set City(city : string) {
        let flag:boolean= true;
        for (let index = 0; index < city.length; index++) {
            if((city.charAt(index)<'a' || city.charAt(index)>'Z')||(city.charAt(index)<'א' || city.charAt(index)>'ת')){flag=false}
        }
        if(flag=true){this.city = city};
    }
    

    
    public get Img() : string {
        return this.img;
    }
    
    
    
    
    
        
}