import { Component, OnInit, ViewChild } from '@angular/core';
import {ImageCropperComponent, CropperSettings} from 'ng2-img-cropper';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  data: any;
  cropperSettings: CropperSettings;

  @ViewChild('cropper', undefined) cropper:ImageCropperComponent;
  
  constructor() {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 100;
    this.cropperSettings.height = 100;
    this.cropperSettings.croppedWidth =100;
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.canvasWidth = 400;
    this.cropperSettings.canvasHeight = 300;

    this.data = {};
  }

  ngOnInit() {
  }
  


}
