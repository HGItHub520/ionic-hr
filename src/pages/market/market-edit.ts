import { Component } from '@angular/core';

import { ViewController, NavParams, ToastController, Toast, Loading, LoadingController } from 'ionic-angular';
import { Market } from "../../models/Market.model";
import { MarketService } from "../../services/MarketService";

import { Camera, CameraOptions } from '@ionic-native/camera';
import { File, FileEntry } from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker';

import { Observable } from 'rxjs/Observable';
import { ForkJoinObservable } from "rxjs/observable/ForkJoinObservable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { NgForm } from "@angular/forms";


@Component({
    selector: 'page-market-edit',
    templateUrl: 'market-edit.html',
    providers: [MarketService]
})
export class MarketEditPage {

    market: Market;
    toast: Toast;

    public error: string;
    private loading: Loading;

    private photoUris: string[]=[];

    public formData: FormData;

    constructor(private viewCtrl: ViewController, params: NavParams, private marketService: MarketService, private toastCtrl: ToastController, private loadingCtrl: LoadingController, private camera: Camera, private file: File, private imagePicker: ImagePicker) {
        let m = params.get('market');
        if (m == null) {
            this.market = new Market();
            this.market.type = params.get('marketType');
            this.market.subType = "s";
        } else
            this.market = m;

        this.toast = this.toastCtrl.create({
            message: '添加成功，等管理员审核通过后，将显示在列表中',
            showCloseButton: true,
            closeButtonText: '确定'
        });

    }

    save() {
        this.marketService.AddNewGoods(this.market).then((d) => { this.toast.present().then(() => this.viewCtrl.dismiss()) });
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    takePhoto() {
        this.camera.getPicture({
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.PNG,
            saveToPhotoAlbum: true
        }).then(imageData => {
            this.photoUris.push(imageData);
            //this.uploadPhoto(imageData);
        }, error => {
            this.error = JSON.stringify(error);
        });
    }

    selectPhoto(): void {
        this.imagePicker.getPictures({
            maximumImagesCount: 6,
            width: 800
        }).then((results) => {
            for (var i = 0; i < results.length; i++) {
                this.photoUris.push(results[i]);
                console.log('Image URI: ' + results[i]);
            }
        }, (err) => { });
        // this.camera.getPicture({
        //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        //     destinationType: this.camera.DestinationType.FILE_URI,
        //     quality: 100,
        //     encodingType: this.camera.EncodingType.PNG,
        // }).then(imageData => {
        //     this.myPhoto = imageData;
        //     this.photoUris.push(imageData);
        //     // this.uploadPhoto(imageData);
        // }, error => {
        //     this.error = JSON.stringify(error);
        // });
    }

    private upload(filePaths:Array<string>):Observable<any> {
        //每个文件上传任务创建一个信号
        var observables: Array<any> = [];
        filePaths.forEach((value:string, i, array) => {
            if (!value.startsWith('file://')) {
                value = 'file://' + value;
            }

            var observable = new Observable((sub:any) => {
                this.file.resolveLocalFilesystemUrl(value).then(entry => {
                    (<FileEntry>entry).file(file => {
                        // this.readFile(<Blob>file);
                        let blob: Blob = <any>file;
                        const reader = new FileReader();
                        reader.onloadend = () => {

                            const imgBlob = new Blob([reader.result], {type: blob.type});
                            this.formData.append('file', imgBlob, (<any>blob).name);
                            console.log('已经成功一半了........'+ + imgBlob);

                            sub.next(null);
                            sub.complete();
                        };
                        reader.readAsArrayBuffer(blob);
                    });
                })
                .catch(error => console.log('报错了----->' + JSON.stringify(error)));
            });

            observables.push(observable);
        });

        return ForkJoinObservable.create(observables);
    }


    uploadFile(host: string, params: Map<string, string>, filePaths:Array<string>, context: any, success: Function, fail: Function) {
        this.formData = new FormData();

        this.upload(filePaths).subscribe(data => {

            console.log('开始上传........');

            params.forEach((value, key) => {
                this.formData.append(key, value);
            });
            // this.http.post(host, this.formData).toPromise().then(res => {
            //     success.call(context, res);
            // }).catch(error => {
            //     fail.call(context, error);
            // });

            // .catch(e => this.handleError(e))
            // .map(response => response.text())
            // // .finally(() => console.log('完成了'))
            // .subscribe(ok => console.log('上传成功了'));

        }, error => {
            console.log('文件处理失败');
        });
    }

    private uploadPhoto(imageFileUri: any): void {
        this.error = null;
        this.loading = this.loadingCtrl.create({
            content: '上传中...'
        });

        this.loading.present();

        this.file.resolveLocalFilesystemUrl(imageFileUri)
            .then(entry => (<FileEntry>entry).file(file => this.readFile(file)))
            .catch(err => console.log(err));
    }

    private readFile(file: any) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const formData = new FormData();
            const imgBlob = new Blob([reader.result], { type: file.type });
            formData.append('file', imgBlob, file.name);
            this.postData(formData);
        };
        reader.readAsArrayBuffer(file);
    }

    private postData(formData: FormData) {
        // this.http.post("http://192.168.178.20:8080/upload", formData)
        //   .catch((e) => this.handleError(e))
        //   .map(response => response.text())
        //   .finally(() => this.loading.dismiss())
        //   .subscribe(ok => this.showToast(ok));
        this.marketService.TestPostMultipart('Hy4d4MY6l',formData);
        this.loading.dismiss();
    }

    // this.fileUpload.uploadFile(this.host, this.params, images, self, res => {
    //         console.log('真的可以了');
    //     }, error => {
    //         console.log('好像失败了');
    //     });

}
