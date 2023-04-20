import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import {MatTooltipModule} from '@angular/material/tooltip';



const materialComponent = [ MatButtonModule,
                            MatFormFieldModule,
                            MatInputModule,
                            MatToolbarModule,
                            MatSidenavModule,
                            MatListModule,
                            MatIconModule,
                            MatMenuModule,
                            NgxSpinnerModule,
                            ToastrModule.forRoot(),
                            MatTooltipModule,]
@NgModule({
  declarations: [],
  imports: [ materialComponent],
  exports:[materialComponent]
})
export class MaterialModule { }
