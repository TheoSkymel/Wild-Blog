import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../app/components/HeaderComponents/header.component';
import { ArticleListComponent } from './article-list/article-list.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ArticleListComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bienvenue sur le Wild Blog de Theo !';
}

