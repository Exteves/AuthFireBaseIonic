import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroductionInfosPage } from './introduction-infos';

@NgModule({
  declarations: [
    IntroductionInfosPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroductionInfosPage),
  ],
})
export class IntroductionInfosPageModule {}
