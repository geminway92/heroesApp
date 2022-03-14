import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from './interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [`
     img{
       width: 100%;
       border-radius: 5px;
     }
  `
  ]
})
export class HeroesComponent implements OnInit {
  heroe!: Heroe;
  constructor(
    private activedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroePorId(id))
    )
    .subscribe( heroe => this.heroe = heroe)
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }
}
