import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {NavbarComponent} from './common/navbar/navbar.component';
import {LoggerService} from './blocks/logger.service';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from '../../node_modules/ng2-material';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html',
    directives: [NavbarComponent, MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS, ROUTER_DIRECTIVES]
})
@Routes(APP_ROUTES)
export class AppComponent {
    public appRoutes: any[];
    private logger: LoggerService;

    constructor(logger: LoggerService) {
        this.logger = logger;
        this.appRoutes = APP_ROUTES;
    }
}
