import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRoutes, RouterModule } from '@angular/router';
import { PokemonDetailComponent } from './app/components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './app/components/pokemon-list/pokemon-list.component';

bootstrapApplication(AppComponent, appConfig)

  .catch((err) => console.error(err));

