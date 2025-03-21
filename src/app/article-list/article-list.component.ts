import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {Article} from '../models/articles.model'

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {

  article: Article = {
    title: 'Titre de l\'article',
    content: 'Intense mais rapide l\'article',
    image: 'https://placehold.co/150x150',
    createdAt: new Date(),
    isPublished: false,
    likeCount: 0,
    categoryName: 'Angular',
  };
}
