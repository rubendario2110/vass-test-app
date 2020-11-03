import { HttpClient  , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private http:HttpClient , public token : RegisterService)  { }
  registerCiudad(ciudad: any): Observable<any> {
    const headers = new HttpHeaders();
    let token = this.token.getToken();
    console.log(token);
    headers.set('x-access-token',token);


    return this.http.post("http://localhost:3001/registerCiudad", ciudad,{headers:headers});
  }
}
