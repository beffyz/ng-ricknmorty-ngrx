import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { charactersReducer } from './store/characters/characters.reducer';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './pages/characters/characters.component';

@NgModule({
  declarations: [AppComponent, CharactersComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      characters: charactersReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
