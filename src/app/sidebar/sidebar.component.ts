import { Component, OnInit } from '@angular/core';
import { ProxyService } from '../proxy-service/proxy.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  show: boolean = true
  constructor(private service: ProxyService){}
  ngOnInit(): void {
    this.service.curretRes.subscribe((res:any)=>{
      this.show= res
    })
    
  }
}
