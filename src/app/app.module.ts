import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AppCardComponent } from './app-card/app-card.component';
import { CardComponent } from './card/card.component';
import { FruitsComponent } from './fruits/fruits.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { InputImgComponent } from './input-img/input-img.component';
import { NpStyleBallComponent } from './np-style-ball/np-style-ball.component';
import { InfoPersonComponent } from './info-person/info-person.component';
import { SecurataComponent } from './securata/securata.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { StudentListHeaderComponent } from './student-list/student-list-header/student-list-header.component';
import { NgForAvengersComponent } from './ng-for-avengers/ng-for-avengers.component';
import { NgforGalleryComponent } from './ngfor-gallery/ngfor-gallery.component';
import { NgforInputPersonComponent } from './ngfor-input-person/ngfor-input-person.component';
import { OutputButtonComponent } from './output-button/output-button.component';
import { ProMatchComponent } from './pro-match/pro-match.component';
import { ProMatchListComponent } from './pro-match-list/pro-match-list.component';
import { ProGalaxyComponent } from './pro-galaxy/pro-galaxy.component';
import { ProGalaxyListComponent } from './pro-galaxy-list/pro-galaxy-list.component';
import { FormsModule } from '@angular/forms';
import { ProToDoComponent } from './pro-to-do/pro-to-do.component';
import { ProToDoListComponent } from './pro-to-do-list/pro-to-do-list.component';
import { ProToDoFormComponent } from './pro-to-do-form/pro-to-do-form.component';
import { ProMatchFormComponent } from './pro-match-form/pro-match-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AppCardComponent,
    CardComponent,
    FruitsComponent,
    InputButtonComponent,
    InputImgComponent,
    NpStyleBallComponent,
    InfoPersonComponent,
    SecurataComponent,
    NgForComponent,
    StudentListHeaderComponent,
    NgForAvengersComponent,
    NgforGalleryComponent,
    NgforInputPersonComponent,
    OutputButtonComponent,
    ProMatchComponent,
    ProMatchListComponent,
    ProGalaxyComponent,
    ProGalaxyListComponent,
    ProToDoComponent,
    ProToDoListComponent,
    ProToDoFormComponent,
    ProMatchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
