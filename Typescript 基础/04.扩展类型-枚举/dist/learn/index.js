var Level;
(function (Level) {
    Level[Level["level1"] = 1] = "level1";
    Level[Level["level2"] = 2] = "level2";
    Level[Level["level3"] = 3] = "level3";
})(Level || (Level = {}));
const level1 = Level.level1;
const level2 = Level.level2;
console.log(level1, level2);
