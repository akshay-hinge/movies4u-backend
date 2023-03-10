import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import {CarouselModule} from 'primeng/carousel';
import { PipeModule } from 'src/app/pipe/pipe.module';
import { SkeletonModule } from 'src/app/shared/skeleton/skeleton.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { GenreListModule } from '../genre-list/genre-list.module';
import { SearchModule } from '../search/search.module';


@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    PipeModule,
    CarouselModule,
    SkeletonModule,
    ScrollingModule,
    MatPaginatorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    GenreListModule,
    SearchModule
    
  ],
  declarations: [
    MoviesComponent,
  ],
  exports :[
    MoviesComponent
  ]
})
export class MoviesModule {}
