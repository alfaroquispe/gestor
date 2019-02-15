import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { tokenKey } from '@angular/core/src/view';
import { UsuarioService } from '../usuario/usuario.service';

// import swal from 'sweetalert';
import { Medico } from '../../models/medico.model';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  totalMedicos = 0;

  constructor( public httpClient: HttpClient,
                public usuarioService: UsuarioService ) { }

  cargarMedicos() {
    const url = URL_SERVICIOS + '/medico';

    return this.httpClient.get( url )
                .pipe(map( (resp: any) => {
                  console.log(resp);
                  this.totalMedicos = resp.total;
                  return resp.body;
                }));
  }

  cargarMedico( id: string) {

    const url = URL_SERVICIOS + '/medico/' + id;
    return this.httpClient.get( url )
                .pipe(map( (resp: any ) => resp.medico));

  }

  buscarMedicos( termino: string ) {
    const url = URL_SERVICIOS + '/busqueda/coleccion/medicos/' + termino;
    return this.httpClient.get( url )
                .pipe(map( (resp: any) => resp.medicos ));

  }

  borrarMedico( id: string ) {
    let url = URL_SERVICIOS + '/medico/' + id;
    url += '?token=' + this.usuarioService.token;

    return this.httpClient.delete( url )
                .pipe(map( resp => {
                  swal( 'Medico Borrado', 'Medico borrado correctamente', 'success' );
                  return resp;
                }));
  }

  guardarMedico( medico: Medico ) {
    let url = URL_SERVICIOS + '/medico';

    if ( medico._id ) {
      // actualizando
      url += '/' + medico._id;
      url += '?token=' + this.usuarioService.token;

      return this.httpClient.put( url, medico )
              .pipe(map( (resp: any) => {
                swal('Medico Actualizado', medico.nombre, 'success' );
                  return resp.medico;
              }));
    } else {
      // creando
      url += '?token=' + this.usuarioService.token;
      return this.httpClient.post( url, medico )
      .pipe(map( (resp: any) => {
        swal('Medico Creado', medico.nombre, 'success' );
        return resp.medico;
      }));
    }




  }

}
