import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  static addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`adding article ${title.value} and link ${link.value}`);
    return false;
  }
}
