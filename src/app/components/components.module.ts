import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CardVideoComponent } from "./card-video/card-video.component";

@NgModule({
  declarations:[
    HeaderComponent,
    CardVideoComponent
  ],
  imports: [],
  exports: [
    HeaderComponent,
    CardVideoComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ComponentsModule{}
