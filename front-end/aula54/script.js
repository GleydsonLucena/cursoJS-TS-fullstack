function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num)
}

function f1(callback) {
    setTimeout(() => {
        console.log('f1');
        if (callback) callback();
    }, rand())
}
function f2(callback) {
    setTimeout(() => {
        console.log('f2');
        if(callback) callback();
    }, 1000)
}

function f3(callback) {
    setTimeout(() => {
        console.log('f3');
        if(callback) callback();
    }, 800)
}

f1(()=> {
    f2(()=> {
        f3(()=> {
            console.log('Olá mundo');
        })
    })
});
