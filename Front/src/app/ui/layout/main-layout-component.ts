import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Router, RouterModule, RouterOutlet } from "@angular/router";

@Component({
    selector: "app-main-layout",
    standalone: true,
    imports: [RouterOutlet, CommonModule, RouterModule],
    templateUrl: "./main-layout.component.html",
    styleUrls: ["./main-layout.component.scss"]

})
export class MainLayoutComponent {
    private router = inject(Router);

  logout() {

    localStorage.removeItem('token');

    this.router.navigate(['/login']);
  }
}