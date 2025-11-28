const reels = [
  {
    ismuted:true,
    username: "travel_with_amy",
    likeCount: 1250,
    isLiked: false,
    commentCount: 45,
    caption: "Sunset vibes at Bali 🌅✨",
    video: "./video5.mp4.mp4",
    userProfile: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-2065200.jpg&fm=jpg",
    shareCount: 120,
    remixCount: 8,
    isFollowed: true
  },
  {
    ismuted:true,
    username: "tech_guru",
    likeCount: 3400,
    isLiked: true,
    commentCount: 89,
    caption: "Unboxing the latest gadget 🔥📦",
    video: "./video2.mp4.mp4",
    userProfile: "https://cdn.managerfashion.com/hr/assets/c945/t273/book/Nikola_P._30_pyz2qf.jpg",
    shareCount: 240,
    remixCount: 22,
    isFollowed: false
  },
  {
    ismuted:true,
    username: "foodie_john",
    likeCount: 890,
    isLiked: false,
    commentCount: 12,
    caption: "Best homemade pasta recipe 🍝",
    video: "./video3.mp4.mp4",
    userProfile: "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?cs=srgb&dl=pexels-ali-pazani-2836486.jpg&fm=jpg",
    shareCount: 34,
    remixCount: 3,
    isFollowed: true
  },
  {
    ismuted:true,
    username: "fitness_kate",
    likeCount: 5600,
    isLiked: true,
    commentCount: 310,
    caption: "Full body workout routine 💪🔥",
    video: "./video4.mp4.mp4",
    userProfile: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-2065200.jpg&fm=jpg",
    shareCount: 510,
    remixCount: 40,
    isFollowed: false
  },
  {
    ismuted:false,
    username: "funny_vibes",
    likeCount: 7800,
    isLiked: false,
    commentCount: 420,
    caption: "POV: your friend tries to be serious 😂",
    video: "./video1.mp4.mp4",
    userProfile: "https://cdn.managerfashion.com/hr/assets/c945/t273/book/Nikola_P._30_pyz2qf.jpg",
    shareCount: 620,
    remixCount: 55,
    isFollowed: true
  },
  {
    ismuted:true,
    username: "music_by_ari",
    likeCount: 2100,
    isLiked: true,
    commentCount: 96,
    caption: "New cover song out now! 🎤🎶",
    video: "./video4.mp4.mp4",
    userProfile: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-2065200.jpg&fm=jpg",
    shareCount: 130,
    remixCount: 11,
    isFollowed: false
  },
  {
    username: "daily_dogs",
    likeCount: 9800,
    isLiked: true,
    commentCount: 650,
    caption: "Just dogs being dogs 🐶❤️",
    video: "./video2.mp4.mp4",
    userProfile: "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?cs=srgb&dl=pexels-ali-pazani-2836486.jpg&fm=jpg",
    shareCount: 890,
    remixCount: 70,
    isFollowed: true
  },
  {
    ismuted:false,
    username: "art_by_mila",
    likeCount: 4400,
    isLiked: false,
    commentCount: 150,
    caption: "Watercolor practice 🎨✨",
    video: "./video3.mp4.mp4",
    userProfile: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-2065200.jpg&fm=jpg",
    shareCount: 260,
    remixCount: 18,
    isFollowed: false
  },
  {
    ismuted:true,
    username: "carreviews_max",
    likeCount: 3200,
    isLiked: false,
    commentCount: 230,
    caption: "This new model is insane! 🚗🔥",
    video: "./video4.mp4.mp4",
    userProfile: "https://cdn.managerfashion.com/hr/assets/c945/t273/book/Nikola_P._30_pyz2qf.jpg",
    shareCount: 410,
    remixCount: 35,
    isFollowed: true
  },
  {
    ismuted:false,
    username: "dance_with_lina",
    likeCount: 15000,
    isLiked: true,
    commentCount: 980,
    caption: "Trying the trending dance challenge 💃🔥",
    video: "./video5.mp4.mp4",
    userProfile: "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?cs=srgb&dl=pexels-ali-pazani-2836486.jpg&fm=jpg",
    shareCount: 1200,
    remixCount: 95,
    isFollowed: false
  }
];


var Allreels=document.querySelector('.allreels');
function addData(){
  var sum =''
reels.forEach(function (elem,idx){
    sum = sum + `<div class="reel">
                         <video  autoplay loop ${elem.ismuted?'muted':''} src="${elem.video}"></video>
                         <div id=${idx} class="mute">
                         ${elem.ismuted?'<i class="ri-volume-up-line"></i>':'<i class="ri-volume-mute-line">'}</div>
                         <div class="bottom">
                            <div class="id">
                                <div class="profile">
                                <img src="${elem.userProfile}"></div>
                            <h4>${elem.username}</h4>
                            <button  id=${idx}  class="follow">${elem.isFollowed?'UnFollow':'Follow'}</button>
                        </div>
                            <div class="title"><p>${elem.caption}</p></div>
                         </div>

                         <div class="right">
                      <div id=${idx} class="like">
                        <h4 class="like-icon" > ${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"> </i>'}</h4>
                    <h6>${elem.likeCount}</h6></div>   

                      <div id=${idx} class="comment">
                        <h4 class="comment-icon"><i class="ri-chat-1-line"></i> </h4>
                    <h6>${elem.commentCount}</h6></div>

                      <div id=${idx} class="share">
                        <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                    <h6>${elem.shareCount}</h6></div>

                      <div id=${idx} class="remix"> 
                      <h4 class="remix-icon">
                        <i class="ri-remix-line"></i></h4>
                    <h6>${elem.remixCount}</h6></div>
                    
                      <div class="menu">
                      <h4 class="menu-icon">
                         <i class="ri-more-2-fill"></i></h4></div>
                    </div>
                     </div>`

    
})



Allreels.innerHTML=sum;

}
addData()


Allreels.addEventListener('click',function(dets){



  if(dets.target.className=='like'){
  if(!reels[dets.target.id].isLiked){
 reels[dets.target.id].likeCount++;
 reels[dets.target.id].isLiked=true;
  }
  else{
     reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked=false;
  }
  addData();
}
if(dets.target.className=='follow'){
  if(!reels[dets.target.id].isFollowed){
    reels[dets.target.id].isFollowed=true;
  }
  else{
  reels[dets.target.id].isFollowed=false;
  }
  addData();
}


if(dets.target.className=='comment'){
  reels[dets.target.id].commentCount++;
  addData();
}

if(dets.target.className=='share'){
  reels[dets.target.id].shareCount++;
  addData();
}


if(dets.target.className=='remix'){
  reels[dets.target.id].remixCount++;
  addData();
}







if(dets.target.className=='mute'){
  if(!reels[dets.target.id].ismuted){
    reels[dets.target.id].ismuted=true;
  }
  else{
  reels[dets.target.id].ismuted=false;
  }
  addData()
}
 
})






