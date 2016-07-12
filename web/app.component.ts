import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ClientDetailComponent } from './client/client.component';
import { ClientService } from './client/client.service';

@Component({
    selector: 'my-app',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [ ClientService],
    precompile : [ClientDetailComponent]

})

export class AppComponent  {
   
}