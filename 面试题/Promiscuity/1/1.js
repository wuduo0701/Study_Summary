var name = 'foo';
function showName() {
    console.log(name);
}
function changeName() {
    var name = 'BigBear';
    showName();   //运行showname函数，发现函数里并未有name变量，于是就会向外查找，找到全局变量name，
                  //changeName函数里的name变量并不会影响
}
changeName();   //foo