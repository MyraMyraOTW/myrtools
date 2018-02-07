var ncrArchetypes = [
    {
        name: 'Captain',
        weight: 1
    },
    {
        name: 'Veteran Ranger',
        weight: 3
    },
    {
        name: 'Ranger',
        weight: 4
    },
    {
        name: 'Lieutenant',
        weight: 5
    },
    {
        name: 'Sergeant',
        weight: 6
    },
    {
        name: 'Corporal',
        weight: 7
    },
    {
        name: 'Private',
        weight: 50
    }
];
var ncrStatsSkills = {
    Strength: 'D6',
    Agility: 'D6',
    Vigor: 'D6',
    Smarts: 'D4',
    Spirit: 'D6',
    Fighting: 'D6',
    SmallGuns: 'D6',
    BigGuns: 'D6',
    Explosives: 'D6',
    Intimidate: 'D6',
    Taunt: 'D6',
    Pace: 6,
    Toughness: 8,
    Parry: 6
};
var raiderWeightedWeapons = [{
    name: 'Brass Knuckles',
    weight: 8
}, {
    name: 'Spiked Knuckles',
    weight: 8
}, {
    name: 'Crowbar',
    weight: 8
}, {
    name: 'Combat Knife',
    weight: 6
}, {
    name: '10mm Pistol',
    weight: 7
}, {
    name: '.223 Pistol',
    weight: 5
}, {
    name: 'Hunting Rifle',
    weight: 4
}, {
    name: 'MP9 10mm SMG',
    weight: 3
}, {
    name: 'Assault Rifle',
    weight: 2
}, {
    name: 'Double Barrel',
    weight: 1
}, {
    name: 'Flamer',
    weight: 0.5
}];
var scoutWeightedWeapons = [
    {
        name: 'Hunting Rifle',
        weight: 30
}, {
        name: 'MP9 10mm SMG',
        weight: 20
}, {
        name: 'Assault Rifle',
        weight: 8
}, {
        name: 'DKS-501 Sniper rifle',
        weight: 1
}];
var leaderWeightedWeapons = [
    {
        name: '10mm Pistol',
        weight: 15
}, {
        name: '.223 Pistol',
        weight: 10
}, {
        name: 'Assault Rifle',
        weight: 2
}, {
        name: 'MP9 10mm SMG',
        weight: 2
}, {
        name: 'Laser Rifle',
        weight: 1
}];
var toughWeightedWeapons = [
    {
        name: 'SledgeHammer',
        weight: 30
}, {
        name: 'Light Support Weapon',
        weight: 1
}, {
        name: 'Super Sledge',
        weight: 1
}, {
        name: 'Power Fist',
        weight: 1
}];
var raiderWeightedArmour = [{
    name: 'No Armour',
    weight: 8
}, {
    name: 'Leather Jacket',
    weight: 4
}, {

    name: 'Leather Armour',
    weight: 3
}, {
    name: 'Metal Armour',
    weight: 1
}];
function raiderSlaverCguardTguard() {
    // Get archetype
    var aType = raiderArchetypes[getRandom(raiderArchetypes)].name;
    switch (aType) {
    case 'Normal':
        weightedSelect(raiderStatsSkills, raiderWeightedWeapons, raiderWeightedArmour, aType);
        break;
    case 'Leader':
        var leaderSkills = clone(raiderStatsSkills);
        leaderSkills.Smarts = 'D8';
        leaderSkills.edges = 'Command';
        weightedSelect(leaderSkills, leaderWeightedWeapons, raiderWeightedArmour, aType);
        break;
    case 'Scout':
        var scoutSkills = clone(raiderStatsSkills);
        scoutSkills.SmallGuns = 'D8';
        weightedSelect(scoutSkills, scoutWeightedWeapons, raiderWeightedArmour, aType);
        break;
    case 'Tough':
        var toughSkills = clone(raiderStatsSkills);
        toughSkills.Strength = 'D8';
        toughSkills.edges = 'Brawny';
        weightedSelect(toughSkills, toughWeightedWeapons, raiderWeightedArmour, aType);
        break;
    }
}