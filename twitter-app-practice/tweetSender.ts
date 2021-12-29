import { ITweet } from "./ITweet";



export class TweetSender implements ITweet{

    postTweet(){
        console.log("Tweet is posted");
    }
}