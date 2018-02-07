var bosArchetypes = [
	{ name: 'Scribe', weight: 1},
    { name: 'Knight', weight: 8},
    { name: 'Paladin', weight: 0.5}
];

var bosAttributes = {
	St: 'D10',
    Ag: 'D6',
    Vi: 'D8',
    Sm: 'D6',
    Sp: 'D6'
};

var bosSkills = {
	Fighting: 'D8',
    Shooting: 'D10',
    Repair: 'D8',
    Intimidate: 'D8',
    Taunt: 'D8',
    Notice: 'D6'
};

var bosDerived = {
	Pace: 6,
    Toughness: 10,
    Parry: 6
};

var bosEdges = {};

var bosWeightedWeapons = [
	{name: 'Pulse Rifle', weight: 1},
	{name: 'Laser Rifle', weight: 20},
	{name: 'Minigun', weight: 1},
	{name: 'M60', weight: 3},
	{name: 'Flamer', weight: 1},
	{name: 'Rocket Launcher', weight: 1}
];

var scribeWeightedWeapons = [{name: 'Laser Pistol', weight: 1}];

var scribeWeightedArmour = [{name: 'Scribe Robes(+1)', weight: 1}];

var knightWeightedArmour = [{name: 'Combat Armour(+4)', weight: 1}];

var paladinWeightedArmour = [{name: 'T-51b Power Armour(+5/+6)', weight: 1}];

function bosSoldier() {
	var enemy = null,
		aType = '',
		scribeAttr = null,
		scribeDerived = null,
		scribeSkills = null,
		paladinDerived = null,
		paladinEdges = null;
    aType = bosArchetypes[getRandom(bosArchetypes)].name;
    switch (aType) {
    case 'Scribe':
        scribeSkills = clone(bosSkills);
		scribeSkills.SmallGuns = 'D6';
        scribeSkills.Fighting = 'D6';
        scribeSkills.Shooting = 'D6';
        scribeSkills.Repair = 'D4';
        scribeSkills.Medicine = 'D8';
        scribeSkills.Taunt = 'D4';
        scribeSkills.Intimidate = 'D4';
        scribeSkills.Notice = 'D8';
		scribeAttr = clone(bosAttributes);
		scribeAttr.St = 'D6';
        scribeAttr.Sm = 'D10';
        scribeAttr.Vi = 'D6';
		scribeDerived = clone(bosDerived);
		scribeSkills.Toughness = 6;
        enemy = weightedSelect(aType, scribeAttr, scribeDerived, scribeSkills, bosEdges, scribeWeightedWeapons, scribeWeightedArmour);
        break;
    case 'Knight':
        enemy = weightedSelect(aType, bosAttributes, bosDerived, bosSkills, bosEdges, bosWeightedWeapons, knightWeightedArmour);
        break;
    case 'Paladin':
        paladinDerived = clone(bosDerived);
        paladinDerived.Toughness = 12;
        paladinDerived.Pace = 5;
		paladinEdges = clone(bosEdges);
		paladinEdges.Command = '+1 to ally Sp roll';
        enemy = weightedSelect(aType, bosAttributes, paladinDerived, bosSkills, paladinEdges, bosWeightedWeapons, paladinWeightedArmour);
        break;
    }
	return(enemy);
}

