import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero/hero.component';
import { SwapiService } from './swapi.service';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffects } from './heroes.effects';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    EffectsModule.forFeature([HeroesEffects])
  ],
  declarations: [
    HeroListComponent,
    HeroComponent
  ],
  providers: [
    SwapiService
  ],
  exports: [
    HeroListComponent
  ]
})
export class HeroesModule {}
