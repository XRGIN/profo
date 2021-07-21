function changeColor() {
    var value1 = document.getElementById("range1").value;
    var value2 = document.getElementById("range2").value;
    var value3 = document.getElementById("range3").value;
    var color = "rgb(" + value1 + "," + value2 + "," + value3 + ")";
    document.body.style.backgroundColor = color;
}

window.onload = changeColor;
/*版权声明：本文为CSDN博主「xtingjie」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/xtingjie/article/details/114376099*/