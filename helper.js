
'use strict';
 
class Helper{
 
    getGUID() {
        return ((((1+Math.random())*0x10000)|0).toString(16).substring(1) + (((1+Math.random())*0x10000)|0).toString(16).substring(1) + "-" + (((1+Math.random())*0x10000)|0).toString(16).substring(1) + "-4" + (((1+Math.random())*0x10000)|0).toString(16).substring(1).substr(0,3) + "-" + (((1+Math.random())*0x10000)|0).toString(16).substring(1) + "-" + (((1+Math.random())*0x10000)|0).toString(16).substring(1) + (((1+Math.random())*0x10000)|0).toString(16).substring(1) + (((1+Math.random())*0x10000)|0).toString(16).substring(1)).toLowerCase();
    }

    randomPrice() {  
        var price =  Math.random() * (143.99 - 143.00) + 143.00; 
        return price.toFixed(2); 
    }
    
    randomQuantity() {
        var size = Math.random() * (50000 - 5) + 5;
        return size.toFixed(0);
    }
}
module.exports = new Helper();