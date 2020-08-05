function ForEach(item, callback) {
    for (let n = 0; n < item.length; n++) {
        callback.call(item[n], n)
    }
}
var weapons = [
    { type: 'Mohsin' },
    { type: 'Ali' },
    { type: 'Soomro' },
]

ForEach(weapons, function (index) {
    if (this === weapons[index]) {
        console.log(weapons[index].type)
    }
})