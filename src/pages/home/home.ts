import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SongProvider} from '../../providers/songs/song';
import {SONGS_LIST} from '../../mocks/songs/song.mock';
import {Song} from '../../models/songs/song.interface';
import {LoadingProvider} from '../../providers/loading/loading';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  songs : Song[];

  constructor(public navCtrl: NavController, private SongProvider: SongProvider, private LoadingProvider: LoadingProvider) {

    this.LoadingProvider.showLoad();

    this.SongProvider.getSongs().subscribe((data: Song[]) => {
      this.songs = data;
    })

     this.LoadingProvider.hideLoad();

  }

}
