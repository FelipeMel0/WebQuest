import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor(
        private navController: NavController
    ) { }

    public async navigateForward(pagina: string, queryParams: object = {}, animacao: boolean = true): Promise<void> {
        await this.navController.navigateForward(pagina, { animated: animacao, queryParams });
    }

    public navigateRoot(pagina: string, queryParams: object = {}, animacao: boolean = true): void {
        this.navController.navigateRoot(pagina, { animated: animacao, queryParams, replaceUrl: true });
    }

    public navigateBack(pagina: string, queryParams: object = {}, animacao: boolean = true): void {
        this.navController.navigateBack(pagina, { animated: animacao, queryParams });
    }
}
