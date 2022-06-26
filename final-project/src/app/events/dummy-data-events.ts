import Person from "../Person";
import Event from "./Event";

export const EVENTS : Event[] =[
    new Event(1,'הופעה-אייל גולן','אמפי תיאטרון',10000,new Person(123488889,"יעקב שלום", 32,true,"רחובות", "https://i.pinimg.com/564x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg")),
    new Event(2,'הקרנת המונדיאל','בית קפה',90,new Person(123456789,"אדם לוי", 28,true,"ראש העין", "https://i.pinimg.com/564x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg")),
    new Event(3,'סטנדאפ-שחר חסון','מתנס',400,new Person(765397545,"ענת לוי", 37,false,"ראש העין", "")),
    new Event(4,'פרס יקיר העיר','עירייה',25,new Person(111222333,"שלום בן-משה", 62,true,"ראש העין", "https://i.pinimg.com/564x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg")),
    new Event(5,'ערב שירה','מתנס',80,new Person(765397545,"ענת לוי", 37,false,"ראש העין", "")),
    new Event(6,'הפנינג ילדים','פארק',150,new Person(123456789,"אדם לוי", 28,true,"ראש העין", "https://i.pinimg.com/564x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg")),
    new Event(7,'הופעה-עדן חסון','אמפי תיאטרון',3000,new Person(777888999,"משה כהן", 41,true,"הרצליה", "https://i.pinimg.com/564x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg")),
    new Event(8,'הופעה - הפילהרמונית','קוסרבטוריון',300,new Person(115566999,"מיכל פרץ", 35,false,"ראש העין", ""))

]