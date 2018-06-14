import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Hero } from '../models/hero';

@Component({
  selector: 'swkb-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  @Input() hero: Hero;
}
