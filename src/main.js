let html = document.querySelector("#demo");
let string2 = "";
let style = document.querySelector("#style");
let string = `/*你好，我叫小咸鱼
*接下来我演示一下我的前端功底首先我要准备一个div
**/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个太极
 * 注意看好了
 * 首先，把 div 变成一个圆
**/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 太极是阴阳形成的
 * 阴阳并济
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个风火轮 */
#div1::before{
    border-radius:50%;
    position:absolute;
    top:0px;
    left:50%;
    transform:translateX(-50%);
    background:white;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
#div1::after {
    border-radius:50%;
    position:absolute;
    bottom:0px;
    left:50%;
    transform:translateX(-50%);
    background:black;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
  }
`;

// string = string.replace(/\n/g, "</br>"); //正则表达式，将所有回车变成换行
let n = -1;

let set = () => {
  setTimeout(() => {
    n += 1;
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 1111111);
    html.scrollTo(0, 1111111);
    if (n >= string.length - 1) {
      return;
    }
    set();
  }, 50);
};
set();
