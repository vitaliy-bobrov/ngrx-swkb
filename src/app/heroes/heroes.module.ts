import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeroListComponent, HeroComponent]
})
export class HeroesModule { }
