// THIS IS ONLY TO VERIFY YOU CAN ACCESS SimpleServer ENDPOINT
var xhReq = new XMLHttpRequest();

xhReq.open("GET", "http://localhost:3000/gift/");
xhReq.responseType = 'json';

xhReq.onload = function() {
  if(this.status == 200) {
    console.log(this.response, "\n--------------\nData has been returned!\n--------------");
  }
};

xhReq.send();
