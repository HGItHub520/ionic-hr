import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector:'[auto-fit-layout]'
})
export class AutoFitLayout{
    constructor(public element:ElementRef,public renderer:Renderer){
        renderer.setElementStyle(element.nativeElement,'width',`${(document.body.clientWidth - 20).toString()}px`);
    }
}