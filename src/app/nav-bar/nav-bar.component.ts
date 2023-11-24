import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  visible: boolean = false;
  items: MenuItem[] | undefined;
  position: any = 'center';
  @Input()
  name!: string;
  image: string = "assets/image/profile-1.jpg";
  isSearchActive = false;
  constructor(private router: Router) { }
  toggleSearch(): void {
    this.isSearchActive = !this.isSearchActive;
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
