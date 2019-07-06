import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GestionCourrierSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GestionCourrierSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GestionCourrierSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestionCourrierSharedModule {
  static forRoot() {
    return {
      ngModule: GestionCourrierSharedModule
    };
  }
}
