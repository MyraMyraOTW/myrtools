var raiderArchetypes = [
	{ name: 'Leader', weight: 1.8},
    { name: 'Scout', weight: 1.5},
    { name: 'Tough', weight: 1.7},
    { name: 'Normal', weight: 20}
];

var raiderAttributes = {
	St: 'D6',
    Ag: 'D6',
    Vi: 'D6',
    Sm: 'D6',
    Sp: 'D6'
};

var raiderSkills = {
	Fighting: 'D6',
    Shooting: 'D6',
    Repair: 'D4',
    Intimidate: 'D6',
    Taunt: 'D6',
    Notice: 'D6'
};

var raiderDerived = {
	Pace: 6,
    Toughness: 5,
    Parry: 5
};

var raiderEdges = {};

var raiderWeightedWeapons = [
	{name: 'Crowbar', weight: 8},
	{name: 'Combat Knife', weight: 8},
	{name: '10mm Pistol', weight: 8},
	{name: '.223 Pistol', weight: 8},
	{name: 'Hunting Rifle', weight: 4},
	{name: 'MP9 10mm SMG', weight: 4},
	{name: 'Assault Rifle', weight: 2},
	{name: 'Double Barrel', weight: 2},
	{name: 'Flamer', weight: 0.2}
];

var scoutWeightedWeapons = [
    {name: 'Hunting Rifle', weight: 10},
	{name: 'MP9 10mm SMG', weight: 5},
	{name: 'Assault Rifle', weight: 2},
	{name: 'DKS-501 Sniper rifle', weight: 0.7}
];

var leaderWeightedWeapons = [
    {name: '10mm Pistol', weight: 15},
	{name: '.223 Pistol', weight: 10},
	{name: 'Assault Rifle', weight: 2},
	{name: 'MP9 10mm SMG', weight: 2},
	{name: 'Laser Rifle', weight: 1}
];

var toughWeightedWeapons = [
    {name: 'SledgeHammer', weight: 10},
	{name: 'Light Support Weapon', weight: 1},
	{name: 'Super Sledge', weight: 1},
	{name: 'Power Fist', weight: 1}
];

var raiderWeightedArmour = [
	{name: 'No Armour', weight: 8},
	{name: 'Leather Jacket(+1F)', weight: 4},
	{name: 'Leather Armour(+1)', weight: 3},
	{name: 'Metal Armour(+2/+3)', weight: 1}
];

function raiderSlaverCguardTguard() {
	'use strict';
	// Get archetype
	var enemy = null,
		aType = '',
		leaderAttr = null,
		leaderEdges = null,
		scoutSkills = null,
		toughAttr = null,
		toughEdges = null,
		toughDerived = null;
	aType = raiderArchetypes[getRandom(raiderArchetypes)].name;
	switch (aType) {
	case 'Normal':
		enemy = weightedSelect(aType, raiderAttributes, raiderDerived, raiderSkills, raiderEdges, raiderWeightedWeapons, raiderWeightedArmour);
		break;
	case 'Leader':
		leaderAttr = clone(raiderAttributes);
		leaderEdges = clone(raiderEdges);
		leaderAttr.Sm = 'D8';
		leaderEdges.Command = '+1 to ally Sp roll';
		enemy = weightedSelect(aType, leaderAttr, raiderDerived, raiderSkills, leaderEdges, leaderWeightedWeapons, raiderWeightedArmour);
		break;
	case 'Scout':
		scoutSkills = clone(raiderSkills);
		scoutSkills.SmallGuns = 'D8';
		enemy = weightedSelect(aType, raiderAttributes, raiderDerived, scoutSkills, raiderEdges, scoutWeightedWeapons, raiderWeightedArmour);
		break;
	case 'Tough':
		toughAttr = clone(raiderAttributes);
		toughAttr.St = 'D8';
		toughEdges = clone(raiderEdges);
		toughEdges.Brawny = '+1 Toughness';
		toughDerived = clone(raiderDerived);
		toughDerived.Toughness = '6';
		enemy = weightedSelect(aType, toughAttr, toughDerived, raiderSkills, toughEdges, toughWeightedWeapons, raiderWeightedArmour);
		break;
	}
	return (enemy);
}