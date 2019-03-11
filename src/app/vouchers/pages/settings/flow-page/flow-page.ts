import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SettingsFlowService } from '../../../../services/invoiceflow/settingsflow.service';
import { SettingsModel } from '../../../../models/settings.model';
@Component({
    selector: 'flow-page',
    templateUrl: './flow-page.html',
    styleUrls: ['./flow-page.scss'],
})
export class FlowPage {
    apiUrl: string;
    query: string;

    constructor(public navCtrl: NavController,
        public settingsFlowService: SettingsFlowService,
        public settingsModel: SettingsModel) {
        this.apiUrl = this.settingsModel.apiUrl
    }

    ionViewWillEnter() {
        this.updateAPI()
        this.updateQuery()
    }

    ionViewWillLeave() {
        this.setAPI()
        this.setQuery()
        this.updateAPI()
        this.updateQuery()
    }  

    updateAPI(){
        this.settingsFlowService.getData('apiURL').then((data) => {
            if(data == undefined || data == null){
                this.apiUrl = 'http://msaflow.microsolutions.dk/Api/WorkFlow/GraphOverview?months=12'
            }
            else {
                this.settingsModel.apiUrl = data
                this.apiUrl = this.settingsModel.apiUrl
            }
        })
    }

    setAPI(){
        this.settingsFlowService.setData('apiURL', this.apiUrl)
    }

    updateQuery(){
        this.settingsFlowService.getData('query').then((data) => {
            if(data == undefined || data == null){
                this.query = '12'
            }
            else {
                this.settingsModel.query = data;
                this.query = this.settingsModel.query
    
                this.apiUrl = this.settingsModel.apiUrl
                .replace('6', this.query)
                .replace('12',this.query)
                .replace('18',this.query)
                .replace('24',this.query)
    
                this.settingsModel.apiUrl = this.apiUrl
                this.setAPI();
            }
        })
    }

    setQuery(){
        this.settingsFlowService.setData('query', this.query)
    }
}