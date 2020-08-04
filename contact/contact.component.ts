import { Component, OnInit } from '@angular/core';
import{Contact} from './contact';
import{ContactService} from './contact.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
public contact:Contact;
public contacts:Contact[];
public searchedcontacts:Contact[];
public sortedcont:Contact[];
public contactSearch:FormGroup;
public contactSearchFlag:boolean=false;
public show:boolean=false;
public buttonName:any='+ Add Contact';
  constructor(private contactser:ContactService) {
    this.contact=new Contact();
    this.contacts=this.contactser.getContact();
    this.contactSearch=new FormGroup(
      {
      search:new FormControl(null, Validators.required)
      });
   }

  ngOnInit(): void {
  }
  
  get search()
  {
  return this.contactSearch.get('search');
  }
  showContact(){
      this.contactser.addContact(this.contact);
  }
  sortcontact()
  {
      this.contacts.sort((a,b)=> a.FirstName.localeCompare(b.FirstName));
  }
  toggle(){
    this.show=!this.show;
    if (this.show) {
      this.buttonName="Cancel"
    } else {
      this.buttonName="+ Add Contact"
    }
  }
   searchcontact(){
   if(this.contactSearch.valid){
    this.searchedcontacts=[];
    for (let index = 0; index < this.contacts.length; index++) {
     if (this.search.value.toLocaleLowerCase()==this.contacts[index].LastName.toLocaleLowerCase()) {
       this.searchedcontacts.push(this.contacts[index]);
       this.contactSearchFlag=true;
     }
    }
    if(this.contactSearchFlag==false){
      alert("There exist no such contact");
    }
  }
}
  deletecontact(cont:Contact){
    for (let index = 0; index < this.contacts.length; index++) {
     if (this.contacts[index].FirstName==cont.FirstName) {
       this.contacts[index]=null;
     }  
    }
  }
}