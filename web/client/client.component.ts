import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Client }    from './client';
import { ClientService } from './client.service';

@Component({
    selector: 'client-form',
    templateUrl: 'web/client/client.component.html',
    providers: [ClientService]

})

export class ClientDetailComponent implements OnInit {
    private _listeClients: Client[];
    private _clientService: ClientService;
    private _indiceEnCours: number;
    private _router: Router;
    private error: any;

    constructor(clientService: ClientService, router: Router) {
        this._clientService = clientService;
        this._router = router;
    }

    @Input() enrClient: Client;
    titre = 'Saisie client';

    submitted = false;

    ngOnInit() {
        //this._listeClients = this._clientService.getClients();
        this._listeClients = [];
        
        this._clientService.getClients()
            .then(clients => {
                this._listeClients = clients;
                this.setEncours(0);
            })
            .catch(error => this.error = error);
    }

    onSubmit() {
        this.submitted = true;
        if (this.enrClient.id < 0)
            this._clientService.addClient(this.enrClient)
                .then(client => {
                    this.enrClient = client;
                    this._listeClients[this._indiceEnCours] = this.enrClient;
                });
        else
            this._clientService.majClient(this.enrClient)
                .then(client => {
                    this.enrClient = client;
                    this._listeClients[this._indiceEnCours] = this.enrClient;
                });
    }

    active = true;

    private ajouterClient() {
        this.enrClient = new Client(-1, -1, '', '', 0, 0);
        this.active = false;
        setTimeout(() => this.active = true, 0);
        this._indiceEnCours = this._listeClients.push(this.enrClient) - 1;
    }

    private supprimerClient() {
        if (this.enrClient.id >= 0)
            this._clientService.suppClient(this.enrClient.id);
        this._listeClients.splice(this._indiceEnCours, 1);
        if (this._indiceEnCours > 0)
            this._indiceEnCours--;
        this.setEncours(this._indiceEnCours);
    }

    private setEncours(ind: number): void {
        this.enrClient = this._listeClients[ind];
        this._indiceEnCours = ind;
    }

    private setSuivant() {
        if (this._indiceEnCours < this._listeClients.length - 1)
            this.setEncours(++this._indiceEnCours);
    }

    private setPrecedent() {
        if (this._indiceEnCours > 0)
            this.setEncours(--this._indiceEnCours);
    }

}
