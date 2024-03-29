import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-video',
  templateUrl: './card-video.component.html',
  styleUrls: ['./card-video.component.scss'],
})
export class CardVideoComponent  implements OnInit {

  @Input() urlVideo: string = '';
  @Input() titulo: string = '';
  @Input() descricao: string = '';

  public videoId: string | null = '';

  constructor() { }

  ngOnInit() {
    this.videoId = new URLSearchParams(new URL(this.urlVideo).search).get('v');
  }

}
