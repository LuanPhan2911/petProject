import PI from './PI'
let youtubeUser = PI.youtubeUser;
let youtubeKey = PI.youtubeKey;
let url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,status&id=${youtubeUser}&key=${youtubeKey}`;
const getSubscriber = () => {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            let subCount = data['items'][0].statistics.subscriberCount;
            document.getElementById('subCount').innerHTML = subCount;
            //subCount.innerHTML = data["items"][3].statistics.subscriberCount;
        })
}
getSubscriber();