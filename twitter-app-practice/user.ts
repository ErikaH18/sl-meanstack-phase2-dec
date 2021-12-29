import { BaseModel } from "./basemodel";
import { ITweet } from "./ITweet";
import { UserProfile } from "./profile";
import { Tweet } from "./tweet";
import { UserService } from "./userservice";


export class User extends BaseModel{
    name: string;
    profilePic: string;
    handle: string;
    profile: UserProfile;
    tweetsender: ITweet;

    add(){
        new UserService().add(new User());
    }

    tweet(){
        var tweet = new Tweet();
        tweet.body = "This is my tweet";
        this.tweetsender.postTweet();
    }
}