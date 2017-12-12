import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './hero.service';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HeroRoutingModule,
  ],
  declarations: [
    HeroDetailComponent,
    HeroListComponent
  ],
  providers: [
    HeroService
  ],
})

export class HeroModule {
}
