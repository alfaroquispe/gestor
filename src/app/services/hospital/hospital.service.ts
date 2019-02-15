import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { UsuarioService } from '../usuario/usuario.service';
import { Hospital } from '../../models/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  totalHospitales = 0;

  constructor( public httpClient: HttpClient,
                public usuarioService: UsuarioService) { }

  cargarHospitales() {

    const url = URL_SERVICIOS + '/hospital';
    return this.httpClient.get( url )
                .pipe(map( (resp: any) => {
                  this.totalHospitales = resp.total;
                  return resp.hospitales;

                }));

  }

  obtenerHospital( id: string ) {
    const url = URL_SERVICIOS + '/hospital/' + id;
    return this.httpClient.get( url )
                .pipe( map( (resp: any) => resp.hospital ));
  }

  borrarHospital( id: string ) {
    let url = URL_SERVICIOS + '/hospital/' + id;
    url += '?token=' + this.usuarioService.token;

    return this.httpClient.delete( url )
                .pipe(map( resp => swal('Hospital Borrado', 'Eliminado correctamente', 'success')));
  }

  crearHospital( nombre: string ) {
    let url = URL_SERVICIOS + '/hospital';
    url += '?token=' + this.usuarioService.token;

    return this.httpClient.post( url, { nombre: nombre })
                .pipe(map( (resp: any) => resp.hospital));
  }

  buscarHospital( termino: string ) {
    const url = URL_SERVICIOS + '/busqueda/coleccion/hospitales/' + termino;
    return this.httpClient.get( url )
                .pipe(map( (resp: any) => resp.hospitales ));
  }

  actualizarHospital( hospital: Hospital ) {
    let url = URL_SERVICIOS + '/hospital/' + hospital._id;
    url += '?token=' + this.usuarioService.token;

    return this.httpClient.put( url, hospital )
                .pipe(map( (resp: any) => {
                  swal('Hospital Actualizado', hospital.nombre, 'success');
                  return resp.hospital;
                  }));
  }
}
