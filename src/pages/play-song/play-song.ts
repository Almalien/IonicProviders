import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Song} from '../../models/songs/song.interface';
// import {Media} from '@ionic-native/media';


declare let Media: any;



@IonicPage()
@Component({
  selector: 'page-play-song',
  templateUrl: 'play-song.html',
})
export class PlaySongPage {

  media: any;
  song: Song;
  icon : String = "md-play";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewWillLoad() {
    this.song = this.navParams.get('song');  
    
    
  }


  loadSong(preview_url){
    this.media = new Media(preview_url);

  }

  playSong(){
      if(!this.media)
          this.loadSong(this.song.preview_url);
        
      this.media.play();

      if(this.icon == "md-play"){
            this.icon = "md-pause";
            
          
        } else {this.icon = "md-play";
                this.media.pause();}     

   } 

   ionViewWillLeave() {
    this.media.stop();
    this.media.release();
       
  }
  

}
