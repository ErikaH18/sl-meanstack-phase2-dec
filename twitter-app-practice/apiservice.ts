import { BaseModel } from "./basemodel";



export class ApiService<Xyz extends BaseModel>{

    add(record: Xyz){
        // call api to add
    }
}