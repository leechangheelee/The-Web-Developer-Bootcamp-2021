// const lis = document.querySelectorAll('li');
// for(let li of lis) {
//     li.addEventListener('click', function() {
//         li.remove();
//     });
// }

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const userNameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(userNameInput.value, tweetInput.value);
    userNameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click', function (e) {
    // console.log("CLICK ON UL!");
    // console.log(e);
    e.target.nodeName === 'LI' && e.target.remove();
});