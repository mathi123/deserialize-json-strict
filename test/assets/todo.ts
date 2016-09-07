import { Deserializable } from "../../deserializable";
import { DeserializeUtil } from "../../deserialize-util";

export class Todo implements Deserializable{
    public id: number = 0;
    public description: string = "";
    public isDone: boolean = false;

    constructor(){

    }

    public deserialize(obj:any) {
        this.id = DeserializeUtil.StrictNumber(obj.id);
        this.description = DeserializeUtil.StrictString(obj.description);
        this.isDone = DeserializeUtil.StrictBoolean(obj.isDone);
    }
}
