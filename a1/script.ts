namespace RandomPoems {

  // filling arrays
  var avalanche: string[] = ["Cloud ", "Tifa ", "Aerith ", "Barret ", "Red ", "Jessie ", "Biggs ", "Wedge "];
  var mission: string[] = ["searches for ", "battles ", "destroys ", "blows up ", "crushes ", "fights ", "sneaks by ", "kills "];
  var enemies: string[] = ["Sephiroth", "Shinra", "Don Corneo", "Zack ", "Rude ", "Hojo ", "Scarlet ", "Palmer "];
  var i: number;

  // for-loop connected to the function, loops through the random numbers
  for (i = avalanche.length; i > 0; i--) {
    var ranum: string = getVerse(avalanche, mission, enemies);
    console.log(ranum);
  }

  function getVerse(_avalanche: string[], _mission: string[], _enemies: string[]): string {

    // generating random numbers from 0-7
    let ranum1: number = Math.floor(Math.random() * avalanche.length);
    let ranum2: number = Math.floor(Math.random() * mission.length);
    let ranum3: number = Math.floor(Math.random() * enemies.length);

    // combining three random numbers to complete a verse
    let verse: string = _avalanche[ranum1] + _mission[ranum2] + _enemies[ranum3];

    // splicing to avoid doubles
    _avalanche.splice(ranum1, 1);
    _mission.splice(ranum2, 1);
    _enemies.splice(ranum3, 1);

    return verse;
  }
}