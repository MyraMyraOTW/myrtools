var enclaveArchetypes = [
	{name: 'Elite Trooper', weight: 1.8 },
    {name: 'Trooper', weight: 1.5 },
    {name: 'Recruit', weight: 1.7 },
    {name: 'Guard', weight: 8 }
];

var enclaveAttributes = {
	St: 'D10',
    Ag: 'D6',
    Vi: 'D8',
    Sm: 'D6',
    Sp: 'D6'
};

var enclaveSkills = {
	Fighting: 'D8',
    Shooting: 'D10',
    Repair: 'D10',
    Intimidate: 'D10',
	Taunt: 'D8',
    Notice: 'D6'
};

var enclavedDerived = {
	Pace: 6,
    Toughness: 10,
    Parry: 6
};

var enclaveEdges = {};

var enclaveWeightedWeapons = [
	{name: 'Pulse Rifle', weight: 1},
	{name: 'Plasma Rifle', weight: 20},
	{name: 'Minigun', weight: 4},
	{name: 'M60', weight: 6},
	{name: 'Flamer', weight: 2},
	{name: 'Rocket Launcher', weight: 2}
];

var guardWeightedArmour = [{name: 'Combat Armour(+4)',weight: 1}];

var recruitWeightedArmour = [{name: 'T-51b Power Armour(+5/+6)',weight: 1}];

var trooperWeightedArmour = [{name: 'APA(+7/+8)',weight: 1}];

var eliteWeightedArmour = [{name: 'APA MkII(+8)',weight: 1}];

function enclaveSoldier() {
	'use script';
	var enemy = null,
		aType = '',
		recruitDerived = null,
		trooperDerived = null,
		eliteDerived = null;
    var aType = enclaveArchetypes[getRandom(enclaveArchetypes)].name;
    switch (aType) {
    case 'Guard':
        enemy = weightedSelect(aType, enclaveAttributes, enclavedDerived, enclaveSkills, enclaveEdges, enclaveWeightedWeapons, guardWeightedArmour);
        break;
    case 'Recruit':
        recruitDerived = clone(enclavedDerived);
        recruitDerived.Toughness = 12;
		enemy = weightedSelect(aType, enclaveAttributes, recruitDerived, enclaveSkills, enclaveEdges, enclaveWeightedWeapons, recruitWeightedArmour);
        break;
    case 'Trooper':
        trooperDerived = clone(enclavedDerived);
        trooperDerived.Toughness = 13;
		enemy = weightedSelect(aType, enclaveAttributes, trooperDerived, enclaveSkills, enclaveEdges, enclaveWeightedWeapons, trooperWeightedArmour);
        break;
    case 'Elite Trooper':
        eliteDerived = clone(enclavedDerived);
        eliteDerived.Toughness = 14;
		eliteSkills = clone(enclaveSkills);
		eliteSkills.Shooting = 'D12';
		enemy = weightedSelect(aType, enclaveAttributes, eliteDerived, eliteSkills, enclaveEdges, enclaveWeightedWeapons, eliteWeightedArmour);
        break;
    }
	return(enemy);
}