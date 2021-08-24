import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

export class CursosService {
  emitirCursoCriado = new EventEmitter<string>();
  static emitirCursoCriado2 = new EventEmitter<string>();
  private cursos: string[] = ["Angular", "Docker", "SpringBoot"];

  constructor() {
    console.log('CursosService');
  }

  getCursos() {
    return this.cursos;
  }

  addCursos(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.emitirCursoCriado2.emit(curso);
  }

}
