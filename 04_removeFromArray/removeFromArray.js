const removeFromArray = function(array, ...removeArray) {
    for (item of removeArray) {
        let itemIndex = array.indexOf(item);
        
        if (itemIndex !== -1) array.splice(itemIndex, 1);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
