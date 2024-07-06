var arr = [
  {
    dp: "https://images.unsplash.com/photo-1719427947920-5eb759c381b8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img: "https://images.unsplash.com/photo-1719425061857-8194ff16ee14?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    dp: "https://images.unsplash.com/photo-1605829009919-2afbd62d6495?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img: "https://images.unsplash.com/photo-1718899904984-bd1fc08416e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1698614848938-801bcf765590?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img: "https://images.unsplash.com/photo-1719066373323-c3712474b2a4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1719856382550-4ed1defa6054?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img: "https://plus.unsplash.com/premium_photo-1682206451378-cc9e8340b8f2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1719432932892-13f5581b448e?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img: "https://plus.unsplash.com/premium_photo-1670349271007-b1f514a4eff4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
var nav = document.querySelector(".nav");
var c = "";
arr.forEach(function (e, idx) {
  c += `<div  class=" img">
    <img id="${idx}" src="${e.dp} alt=""></div>`;
});
nav.innerHTML = c;

nav.addEventListener("click", function (dets) {
  document.querySelector(".full").style.display = "block";
  document.querySelector(".full").style.backgroundImage = `url(${
    arr[dets.target.id].img
  })`;
  console.log(arr[dets]);

  setTimeout(() => {
    document.querySelector(".full").style.display = "none";
  }, 2000);

});
