import { ApiService } from "./apiservice";
import { BaseModel } from "./basemodel";




export class Tweet extends BaseModel{
    tweeterID: number;
    body: string;
    hearts: number;
    replies: Tweet[];
    noOfRetweets: number;
    timeStamp: Date;

    add(){
        new ApiService<Tweet>().add(new Tweet());
    }
}