import { BaseModel } from "./basemodel";
import { ApiService } from "./apiservice";


export class UserProfile extends BaseModel{
    userID: number;
    noOfTweets: number;
    noOfFollowers: number;
    noOfFollows: number;
    address: string;

    add(){
        new ApiService<UserProfile>().add(new UserProfile());
    }
}