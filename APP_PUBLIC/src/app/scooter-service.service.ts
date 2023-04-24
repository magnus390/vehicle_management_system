import { Injectable } from '@angular/core';
import { Scooter } from './scooter'; 
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScooterServiceService {
  private scootersUrl = 'http://localhost:3000/api/scooters';

  constructor(private http: HttpClient) { }

  getScooters(): Promise<void | Scooter[]> {
    return this.http.get(this.scootersUrl)
               .toPromise()
               .then(response => response as Scooter[])
               .catch(this.handleError);
  }
  
  //service to getSingleScooter
  getSingleScooter(scooterId: string): Promise<void | Scooter> {
    return this.http.get(this.scootersUrl + '/' + scooterId)
                .toPromise()
                .then(response => response as Scooter)
                .catch(this.handleError);
  }

  //service to createScooter
  createScooter(newScooter: Scooter): Promise<void | Scooter> {
    return this.http.post(this.scootersUrl, newScooter)
                .toPromise()
                .then(response => response as Scooter)
                .catch(this.handleError);
  }
  
  //service to updateScooter
  updateScooter(scooterId: string, scooter: Scooter): Observable<any> {
    return this.http.put(this.scootersUrl+'/'+scooterId, scooter);
  }
  
  //service to deleteScooter
  deleteScooter(scooterId: string): Observable<any> {
    return this.http.delete(this.scootersUrl + '/' + scooterId);
  }

  
  private handleError (error: any){
    console.log("error");
  }

}
