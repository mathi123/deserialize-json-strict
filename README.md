# Deserialize JSON to typscript object

Allows you to parse JSON throwing errors on *undefined* or *null* properties.

e.g. following typescript Todo class:

    export class Todo implements Deserializable{
        public id: number = 0;
        public description: string = "";
        public isDone: boolean = false;
    
        constructor(){
    
        }
    }
    
This class has default values, but if we parse it from JSON, values can still be null or undefined.
This a pain writing APIs in typescript.

To solve this, implement Deserializable using DeserializeUtil:

    import { Deserializable, DeserializeUtil } from "deserialize-json-strict";
    
    export class Todo implements Deserializable{
    
        ...
    
        public deserialize(values:any) {
            this.id = DeserializeUtil.StrictNumber(values.id);
            this.description = DeserializeUtil.StrictString(values.description);
            this.isDone = DeserializeUtil.StrictBoolean(values.isDone);
        }
    }

To create typescript class instance:

    export async function create(req: Request, resp: Response) {
        let data = req.body;
        let todo = new Todo();
    
        try{
            todo.deserialize(data);
        }catch(error){
            resp.sendStatus(400);
        }
    }
        
 This rejects *undefined* and *null* as API arguments, still allowing empty values.
