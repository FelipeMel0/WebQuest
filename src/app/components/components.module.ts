import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations:[
    HeaderComponent
  ],
  imports: [],
  exports: [
    HeaderComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ComponentsModule{}
