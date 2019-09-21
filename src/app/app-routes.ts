import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'article',
    loadChildren: () => import('@modules/article/article.module').then(m => m.ArticleModule)
  }
];