
import{ Contact } from './contact'

export class ContactService {
    contacts:Contact[];
    constructor() {
        this.contacts=[];
        var c1,c2,c3,c4;
        c1=new Contact();
        c1.FirstName="Anisha";
        c1.LastName="Gera";
        c1.PhoneNum=99998888233;
        c2=new Contact();
        c2.FirstName="Virat";
        c2.LastName="Kohli";
        c2.PhoneNum=77765548233;
        c3=new Contact();
        c3.FirstName="Ahana";
        c3.LastName="Roy";
        c3.PhoneNum=33245828775;
        c4=new Contact();
        c4.FirstName="Niya";
        c4.LastName="Khanna";
        c4.PhoneNum=1114534825;
        this.contacts.push(c1);
        this.contacts.push(c2);
        this.contacts.push(c3);
        this.contacts.push(c4);
    }
    getContact(){
        return this.contacts;
    }
    addContact(cont:Contact){
        this.contacts.push(cont);
        return this.contacts;
    }
}