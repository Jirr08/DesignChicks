import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  toggleBurger() {
    let x = document.getElementById("myTopnav");

    if (x?.className != null){
      console.log(x.className)
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
toggleDropdown() {
  document.getElementById("myDropdown")?.classList.toggle("show");
}

}
