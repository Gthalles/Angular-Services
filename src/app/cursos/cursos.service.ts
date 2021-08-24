import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()

export class CursosService {
  emitirCursoCriado = new EventEmitter<string>();
  static emitirCursoCriado2 = new EventEmitter<string>();
  private cursos: string[] = ["Angular", "Docker", "SpringBoot"];

  constructor(private _logService: LogService) {
    console.log('CursosService');
  }

  getCursos() {
    this._logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  addCursos(curso: string) {
    this._logService.consoleLog(`Curso cadastrado: ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.emitirCursoCriado2.emit(curso);
  }

}
