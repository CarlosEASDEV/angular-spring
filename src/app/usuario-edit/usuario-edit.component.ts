import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  usuario: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.usuarioService.get(id).subscribe((usuario: any) => {
          if (usuario) {
            this.usuario = usuario;
            this.usuario.href = usuario._links.self.href;
            //this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
          } else {
            console.log(`Usuario with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/usuario-list']);
  }

  save(form: NgForm) {
    this.usuarioService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.usuarioService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
