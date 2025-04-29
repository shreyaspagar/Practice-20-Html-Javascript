let num = 287152;
count = 0;

copy = num;

while (copy > 0) {
    count++;
    copy=Math.floor(copy/10);
}

console.log(count);






