function getNowFormatDate() {
    const date = new Date();
    // 获取当前的时间
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDay();
    //如果月份小于9，就必须变为09的形式
    if(month >= 1 && month <= 9) {
      month = "0" +month
    }
    if(day >= 1 && day <= 9) {
      day = "0" +day
    }
    return year+"-"+month+"-"+day;
}

console.log(getNowFormatDate())