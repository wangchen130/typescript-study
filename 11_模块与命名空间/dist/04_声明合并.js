"use strict";
var Gender;
(function (Gender) {
    Gender.money = 18;
})(Gender || (Gender = {}));
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender);
