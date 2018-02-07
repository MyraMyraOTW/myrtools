function getRandom(array) {
	'use strict';
	var sum = 0,
		weight = [],
		i = 0,
		rand = Math.random(),
		prev = 0;
	for (i = 0; i < array.length; i += 1) {
		sum += array[i].weight;
		weight[i] = sum;
	}
	for (i = 0; i < array.length; i += 1) {
		weight[i] = weight[i] / sum;
	}
	for (i = 0; i < array.length; i += 1) {
		if ((prev < rand) && (weight[i] > rand)) {
			return i;
		}
		prev = weight[i];
	}
}

function clone(obj) {
	'use strict';
	var attr, copy;
	if (null === obj || "object" !== typeof obj) {
		return obj;
	}
	copy = obj.constructor();
	for (attr in obj) {
		if (obj.hasOwnProperty(attr)) {
			copy[attr] = obj[attr];
		}
	}
	return copy;
}

function weightedSelect(at, a, d, s, e, w, ar) {
	'use strict';
	var enemy = {
		archeType: at,
		attributes: a,
		derivedStats: d,
		skills: s,
		edges: e,
		weapon: w[getRandom(w)].name,
		armour: ar[getRandom(ar)].name
	};
	console.log(enemy);
	return (enemy);
}

function getRandomInt(min, max) {
	'use strict';
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function parseInput(t) {
	'use strict';
	var enemy;
	switch (t) {
	case 'Raider':
		enemy = raiderSlaverCguardTguard();
		break;
	case 'Slaver':
		enemy = raiderSlaverCguardTguard();
		break;
	case 'Caravan Guard':
		enemy = raiderSlaverCguardTguard();
		break;
	case 'Town Guard':
		enemy = raiderSlaverCguardTguard();
		break;
	case 'Enclave':
		enemy = enclaveSoldier();
		break;
	case 'BOS':
		enemy = bosSoldier();
		break;
	}
	return (enemy);
}

function gen(e) {
	'use strict';
	var enemy = null,
		output = '',
		i = 0;
	enemy = parseInput(e);
	output = '<div class="card"><div class="card-header"><a class="close">&times;</a><h4 class="card-title">' + e + '</h4><h6 class="card-subtitle">' + enemy.archeType + '</h6></div><div class="card-block"><table class="table table-sm table-responsive table-hover table-striped"><thead class="thead-inverse"><tr><th>Stat</th><th>Value</th></tr></thead><tr><td>Weapon</td><td>' + enemy.weapon + '</td></tr><tr><td>Armour</td><td>' + enemy.armour + '</td></tr><tr><td colspan="2" id="centerA">';
	for (i in enemy.attributes) {
		output = output + i + ': ' + enemy.attributes[i] + '  ';
	}
	output = output + '</td></tr>';
	for (i in enemy.derivedStats) {
		if (!i.isUndefined) {
			output = output + '<tr><td>' + i + '</td><td>' + enemy.derivedStats[i] + '</td></tr>';
		}
	}
	output = output + '</td></tr>';
	for (i in enemy.skills) {
		if (!i.isUndefined) {
			output = output + '<tr><td>' + i + '</td><td>' + enemy.skills[i] + '</td></tr>';
		}
	}
	output = output + '</td></tr>';
	for (i in enemy.edges) {
		if (!i.isUndefined) {
			output = output + '<tr><td>' + i + '</td><td>' + enemy.edges[i] + '</td></tr>';
		}
	}
	output = output + '</td></tr></table></div></div>';
	$('#removeList').append(output);
}

function encounter(amount, enemyType) {
	'use strict';
	var i;
	for (i = 0; i < amount; i += 1) {
		gen(enemyType);
	}
}