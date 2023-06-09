import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { actionSheetController } from '@ionic/core';
import { Foto } from '../models/Foto.interface';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public fotoService: FotoService,public actionSheetController: ActionSheetController) {}
  async ngOnInit(){
    await this.fotoService.carregarFotosSalvas();
   }
  public async showActionSheet(foto: Foto, position: number ) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Fotos',
      buttons:[{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.fotoService.deletePicture(foto, position);
        }
      },{
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          //
        }      
      }]      
    });
    await actionSheet.present();
  }
  tirarFoto(){
    this.fotoService.tirarFoto();
  }
}
