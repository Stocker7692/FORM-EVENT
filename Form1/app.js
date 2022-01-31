const form = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#list");
form.addEventListener("submit",function(e){
    e.preventDefault();
    // const userInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = form.elements.username;
    const tweetInput = form.elements.tweet;
    addTweet(usernameInput.value,tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';

    

});

const addTweet = (username,tweet) =>{
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`_${tweet}`);
    console.log(newTweet);
    list.append(newTweet);
    

}