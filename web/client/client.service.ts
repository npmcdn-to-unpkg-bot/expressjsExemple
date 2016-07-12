import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';


//import { CLIENTS } from './client.mock';
import { Client } from './client';

@Injectable()
export class ClientService {
    // URL to web api
    private listeClientUrl = 'api/listeclient';
    private clientUrl = 'api/client';

    private http: Http;
    private headers: Headers;
    private options: RequestOptions;

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    public getClients(): Promise<any> {
        return this.http.get(this.listeClientUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    public getClient(id: number): Promise<Client> {
        return undefined;
    }

    public addClient(client: Client): Promise<Client> {
         return undefined;
    }

    public majClient(client: Client): Promise<Client> {
         return undefined;
    }

    public suppClient(id: number): Promise<boolean> {
         return undefined;
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
}