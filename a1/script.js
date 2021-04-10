"use strict";
var RandomPoems;
(function (RandomPoems) {
    // filling arrays
    var avalanche = ["Cloud ", "Tifa ", "Aerith ", "Barret ", "Red ", "Jessie ", "Biggs ", "Wedge "];
    var mission = ["searches for ", "battles ", "destroys ", "blows up ", "crushes ", "fights ", "sneaks by ", "kills "];
    var enemies = ["Sephiroth", "Shinra", "Don Corneo", "Zack ", "Rude ", "Hojo ", "Scarlet ", "Palmer "];
    var i;
    // for-loop connected to the function, loops through the random numbers
    for (i = avalanche.length; i > 0; i--) {
        var ranum = getVerse(avalanche, mission, enemies);
        console.log(ranum);
    }
    function getVerse(_avalanche, _mission, _enemies) {
        // generating random numbers from 0-7
        let ranum1 = Math.floor(Math.random() * avalanche.length);
        let ranum2 = Math.floor(Math.random() * mission.length);
        let ranum3 = Math.floor(Math.random() * enemies.length);
        // combining three random numbers to complete a verse
        let verse = _avalanche[ranum1] + _mission[ranum2] + _enemies[ranum3];
        // splicing to avoid doubles
        _avalanche.splice(ranum1, 1);
        _mission.splice(ranum2, 1);
        _enemies.splice(ranum3, 1);
        return verse;
    }
})(RandomPoems || (RandomPoems = {}));
//# sourceMappingURL=script.js.map