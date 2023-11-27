import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  data: any ;

  ngOnInit(): void {
    if(this.data = "undefined"){
      this.data = localStorage.getItem("name")
      }
  }
  toggleSidebar: any;

  onDataUpdated(isOpen:any){
 
        this.toggleSidebar = isOpen
    
      }
}
