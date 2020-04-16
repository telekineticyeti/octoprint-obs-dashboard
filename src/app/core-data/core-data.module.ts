import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
// import {EffectsModule} from '@ngrx/effects';
import {environment} from '../../environments/environment';
import {reducers, metaReducers} from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // EffectsModule.forRoot([]),
  ],
})
export class CoreDataModule {}
