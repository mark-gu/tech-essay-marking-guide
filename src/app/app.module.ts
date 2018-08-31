import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'ngx-moment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarkingSheetComponent } from './marking-sheet/marking-sheet.component';
import { SecPresentationComponent } from './sec-presentation/sec-presentation.component';

library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MarkingSheetComponent,
    SecPresentationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MomentModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
