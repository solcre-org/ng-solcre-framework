import { EventEmitter } from "@angular/core";
import { DialogModel } from "./dialog.model";

export class DialogService{
	public onOpen: EventEmitter<DialogModel> = new EventEmitter();

    constructor(){}
    
	public open(model: DialogModel){
		this.onOpen.emit(model);
	}
}