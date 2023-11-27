import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ProxyService } from '../proxy-service/proxy.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  newItemEvent: boolean = true;
  visible: boolean = false;
  items: MenuItem[] | undefined;
  position: any = 'center';
  @Input()
  name!: string;
  image: string = "assets/image/profile-1.jpg";
  isSearchActive = false;
  sidebarVisible: any = false;
  constructor(private router: Router, private service: ProxyService) { }
  toggleSearch(): void {
    this.isSearchActive = !this.isSearchActive;
  }
  hideBar() {

    this.newItemEvent = !this.newItemEvent

    this.service.setRes(this.newItemEvent)
  }
  ngOnInit(): void {
  }
  showDialog(position: string) {
    this.position = position;
    this.visible = true;
  }
  logout() {
    localStorage.removeItem("name");
    this.router.navigate([""]);
  }
}
