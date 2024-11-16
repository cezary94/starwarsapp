import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { gameFeatureKey, gameReducer } from './features/store/game.reducer';
import * as GameEffects from './features/store/game.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ [gameFeatureKey]: gameReducer}),
    provideState({name: 'game', reducer: gameReducer}),
    provideEffects([GameEffects]),
    provideAnimationsAsync(),
    provideHttpClient()
  ]
};
