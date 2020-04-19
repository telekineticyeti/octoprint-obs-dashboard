import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {environment} from '../../environments/environment';
import {reducers, metaReducers} from './reducers';
import {PrinterEffects} from './printer/printer.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([PrinterEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class CoreDataModule {}
