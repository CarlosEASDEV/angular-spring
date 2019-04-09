import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})

export class UsuarioListComponent implements OnInit {
  usuarios : Array<any>[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getAll().subscribe(data => {
      this.usuarios = data;
    });
  }
}