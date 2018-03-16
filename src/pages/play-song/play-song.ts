import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
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
  timer:any;
  time: number = 0;
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform:Platform) {
    platform.ready().then(() => {
      this.platform.pause.subscribe(() => {
        if(this.icon=="md-pause"){
          this.media.pause();
          this.icon == "md-play";

        }


      })
    })

    
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

          this.timer = setInterval(() => {
            if(this.icon == "md-pause" ){
              if(this.time >= 30){
                this.time = 0;
                this.playSong();
              }else{
                this.time++;
              }
            }               
          }, 1000)
                       

      if(this.icon == "md-play"){
            this.icon = "md-pause";
            this.media.play();            
          
        } else {this.icon = "md-play";
                this.media.pause();}     

   } 

   ionViewWillLeave() {
    this.media.stop();
    this.media.release();
       
  }
  

}
