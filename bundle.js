(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
var dt7 = require("dt7");
var data = new dt7;

data.save("money","hello world")
console.log("hello world")
},{"dt7":3}],3:[function(require,module,exports){
class dt7{
    constructor(){}
    save(DataName,data){
        const fs = require('fs')
        if(!"./" + DataName + ".dt7"){
            fs.appendFile(DataName + ".dt7", data, function(err) {
                if(err) console.log(err)
            })
        }else{
            fs.writeFile("./" + DataName + ".dt7", "\n" + data, function(err){
                if(err) console.log(err)
            })
        }
    }
    update(DataName,data){
        const fs = require('fs')
        fs.truncate("./" + DataName + ".dt7", 0, function(err){
            if(err) console.log(err)
            fs.writeFile(`./${DataName}.dt7`, data + "\n", function(err){
                if(err) console.log(err)
            })
        })
    }
    clear(DataName){
        const fs = require('fs')
        fs.truncate("./" + DataName + ".dt7", 0, function(err){
            if(err) console.log(err)
        })
    }
    get(DataName){
        const fs = require('fs')
        return fs.readFileSync("./" + DataName + ".dt7",'utf8')
    }
    remove(DataName,toRemove){
        const fs = require('fs')
        const newC = fs.readFileSync("./" + DataName + ".dt7",'utf8').replaceAll(toRemove,"")
        fs.truncate("./" + DataName + ".dt7", 0, function(err){
            if(err) console.log(err)
            fs.writeFile("./" + DataName + ".dt7", newC, function(err){
                if(err) console.log(err)
            })
        })
    }
} 

module.exports = dt7
},{"fs":1}]},{},[2]);
