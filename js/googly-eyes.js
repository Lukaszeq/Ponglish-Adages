<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style media="screen">
  @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

* {
box-sizing: border-box;
margin: 0;
padding: 0;
}

body {
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
font-family: "Bebas Neue", cursive;
background: #0c3b5a;  
 }

.container {
display: flex;
}

.container .eyes {
position: relative;
width: 100px;
height: 60px;
display: block;
background-color: #ffffff00;
margin: 0 20px;
}
.container .eyes::before {
content: "";
top: 50%;
left: 35px;
transform: translate(-50%, -50%);
width: 50px;
height: 50px;
border-radius: 50%;
background: #000;
position: absolute;
border: 10px solid skyblue;
box-sizing: border-box;
}

  </style>
</head>
<body>

      <div class="container">
        <div class="eyes"></div>
        <div class="eyes"></div>
      </div>

    <script type="text/javascript">
    document.querySelector("body").addEventListener("mousemove", eyeball);

    function eyeball() {
      const eye = document.querySelectorAll(".eyes");
      eye.forEach(function (eye) {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotate = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = "rotate(" + rotate + "deg)";
      });
    }

    </script>
</body>
</html>



