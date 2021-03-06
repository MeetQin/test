export const formatTime = (element:HTMLElement) => {
  let t: any = null;
  t = setTimeout(time, 1000);//開始运行
  function time() {
    clearTimeout(t);//清除定时器
    const dt:Date = new Date();
    const y = dt.getFullYear();
    const mt = dt.getMonth() + 1;
    const day = dt.getDate();
    const h = dt.getHours();//获取时
    const m = dt.getMinutes();//获取分
    const s = dt.getSeconds();//获取秒
    element.innerHTML = '当前时间：' + y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒"
    t = setTimeout(time, 1000); //设定定时器，循环运行
  }
}