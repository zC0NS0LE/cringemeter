const cringeLevel = {
    level1Words: [
        "lol", "bruh", "lmao", "kek", "cringe", "lfmao", "lmaoo", "lfmaoo", "xd",
    ],
    level1: [
        "๐", "๐", "๐", "๐", "๐", "๐", "๐",
    ],
    level2Words: [
        "kpop", "xdd", "xddd", "xdddd", "xddddd", "xdddddd", "stfu", "su", "x)", "8)", "8d", "milk", "yo", "-_-", ";-;",
    ],
    level2: [
        "๐ฅฑ", "๐ด", "๐", "๐", "๐", "๐ฅต",
    ],
    level3Words: [
        "ratio", "uwu", "owo", "uou", "ouo", "naruto", "poopy", "poop", "pp", "asked", "o.o", ";.;", "( อกยฐ อส อกยฐ)", "ยฏ\_(ใ)_/ยฏ", "ใ",
    ],
    level3: [
        "๐คฃ", "๐", "๐", "๐", "๐", "๐คฉ", "๐ฅฐ", "๐", "๐น", "๐บ", "๐", "๐ฟ", "๐ป", "๐ฝ", "๐พ", "๐ค", "๐ฉ", "๐บ", "๐ธ", "๐น", "๐ป", "๐ผ", "๐ฝ", "๐", "๐ฟ", "๐พ", "๐", "๐", "๐", "๐ซ", "๐ญ", "๐จ", "๐ฑ", "๐ฐ", "๐ก", "๐คฌ", "๐ฅถ",
    ]
}

function Cringemeter(text) {

    if(typeof text != "string") throw new Error("The argument of Cringemeter must be a string.");

    text = text.toLowerCase();
    let textArr1 = [...text];
    let textArr2 = text.split(" ");

    let lvl1Count = (textArr1.filter(char => cringeLevel.level1.includes(char))).length + (textArr2.filter(char => cringeLevel.level1Words.includes(char))).length;
    let lvl2Count = (textArr1.filter(char => cringeLevel.level2.includes(char))).length + (textArr2.filter(char => cringeLevel.level2Words.includes(char))).length;
    let lvl3Count = (textArr1.filter(char => cringeLevel.level3.includes(char))).length + (textArr2.filter(char => cringeLevel.level3Words.includes(char))).length;

    let parameter1 = text.length;
    if(parameter1 < 10) parameter1 = 10;
    if(parameter1 > 30) parameter1 = 30;

    let parameter2 = parameter1 / 10;

    let cringeIndicator = parseFloat(( ( (lvl1Count*(1.25*parameter2)) + (lvl2Count*(1.5*parameter2)) + (lvl3Count*(1.75*parameter2)) ) / parameter1 ).toFixed(2));
    if(cringeIndicator > 1) cringeIndicator = 1.0;

    return cringeIndicator;

}

module.exports = {
    Cringemeter
 }