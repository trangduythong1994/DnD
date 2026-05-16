const data_weapons = [
  // --- SIMPLE MELEE ---
  {
    id: "weapon_common_club",
    type: "Weapon",
    rarity: "Common",
    category: "Simple Melee",
    name: "Club",
    damage: "1d4 Bludgeoning",
    properties: "Light",
    mastery: "Slow",
    weight: "2 lb.",
    cost: "1 SP"
    , locked: true
  },
  {
    id: "weapon_common_dagger",
    type: "Weapon",
    rarity: "Common",
    category: "Simple Melee",
    name: "Dagger",
    damage: "1d4 Piercing",
    properties: "Finesse, Light, Thrown (Range 20/60)",
    mastery: "Nick",
    weight: "1 lb.",
    cost: "2 GP"
    // , locked: true
  },
  {
    id: "weapon_common_greatclub",
    type: "Weapon",
    rarity: "Common",
    category: "Simple Melee",
    name: "Greatclub",
    damage: "1d8 Bludgeoning",
    properties: "Two-Handed",
    mastery: "Push",
    weight: "10 lb.",
    cost: "2 SP"
    , locked: true
  },
  {
    id: "weapon_common_handaxe",
    type: "Weapon",
    rarity: "Common",
    category: "Simple Melee",
    name: "Handaxe",
    damage: "1d6 Slashing",
    properties: "Light, Thrown (Range 20/60)",
    mastery: "Vex",
    weight: "2 lb.",
    cost: "5 GP"
    , locked: true
  },
  {
    id: "weapon_common_javelin",
    type: "Weapon",
    rarity: "Common",
    category: "Simple Melee",
    name: "Javelin",
    damage: "1d6 Piercing",
    properties: "Thrown (Range 30/120)",
    mastery: "Slow",
    weight: "2 lb.",
    cost: "5 SP"
    // , locked: true
  },
  {
    id: "weapon_common_light_hammer",
    type: "Weapon",
    rarity: "Common",
    category: "Simple Melee",
    name: "Light Hammer",
    damage: "1d4 Bludgeoning",
    properties: "Light, Thrown (Range 20/60)",
    mastery: "Nick",
    weight: "2 lb.",
    cost: "2 GP"
    , locked: true
  },
  {
    id: "weapon_common_mace",
    type: "Weapon",
    rarity: "Common",
    category: "Simple Melee",
    name: "Mace",
    damage: "1d6 Bludgeoning",
    properties: "—",
    mastery: "Sap",
    weight: "4 lb.",
    cost: "5 GP"
    // , locked: true
  },
  {
    id: "weapon_common_quarterstaff",
    type: "Weapon",
    rarity: "Common",
    category: "Simple Melee",
    name: "Quarterstaff",
    damage: "1d6 Bludgeoning",
    properties: "Versatile (1d8)",
    mastery: "Topple",
    weight: "4 lb.",
    cost: "2 SP"
    // , locked: true
  },
  {
    id: "weapon_common_sickle",
    type: "Weapon",
    rarity: "Common",
    category: "Simple Melee",
    name: "Sickle",
    damage: "1d4 Slashing",
    properties: "Light",
    mastery: "Nick",
    weight: "2 lb.",
    cost: "1 GP"
    , locked: true
  },
  {
    id: "weapon_common_spear",
    type: "Weapon",
    rarity: "Common",
    category: "Simple Melee",
    name: "Spear",
    damage: "1d6 Piercing",
    properties: "Thrown (Range 20/60), Versatile (1d8)",
    mastery: "Sap",
    weight: "3 lb.",
    cost: "1 GP"
    // , locked: true
  },

  // --- SIMPLE RANGED ---
  {
    id: "weapon_common_dart",
    type: "Weapon",
    rarity: "Common",
    category: "Simple Ranged",
    name: "Dart",
    damage: "1d4 Piercing",
    properties: "Finesse, Thrown (Range 20/60)",
    mastery: "Vex",
    weight: "1/4 lb.",
    cost: "5 CP"
    , locked: true
  },
  {
    id: "weapon_common_light_crossbow",
    type: "Weapon",
    rarity: "Common",
    category: "Simple Ranged",
    name: "Light Crossbow",
    damage: "1d8 Piercing",
    properties: "Ammunition (Range 80/320; Bolt), Loading, Two-Handed",
    mastery: "Slow",
    weight: "5 lb.",
    cost: "25 GP"
    , locked: true
  },
  {
    id: "weapon_common_shortbow",
    type: "Weapon",
    rarity: "Common",
    category: "Simple Ranged",
    name: "Shortbow",
    damage: "1d6 Piercing",
    properties: "Ammunition (Range 80/320; Arrow), Two-Handed",
    mastery: "Vex",
    weight: "2 lb.",
    cost: "25 GP"
    // , locked: true
  },
  {
    id: "weapon_common_sling",
    type: "Weapon",
    rarity: "Common",
    category: "Simple Ranged",
    name: "Sling",
    damage: "1d4 Bludgeoning",
    properties: "Ammunition (Range 30/120; Bullet)",
    mastery: "Slow",
    weight: "0 lb.",
    cost: "1 SP"
    , locked: true
  },

  // --- MARTIAL MELEE ---
  {
    id: "weapon_common_battleaxe",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "Battleaxe",
    damage: "1d8 Slashing",
    properties: "Versatile (1d10)",
    mastery: "Topple",
    weight: "4 lb.",
    cost: "10 GP"
    , locked: true
  },
  {
    id: "weapon_common_flail",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "Flail",
    damage: "1d8 Bludgeoning",
    properties: "—",
    mastery: "Sap",
    weight: "2 lb.",
    cost: "10 GP"
    // , locked: true
  },
  {
    id: "weapon_common_glaive",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "Glaive",
    damage: "1d10 Slashing",
    properties: "Heavy, Reach, Two-Handed",
    mastery: "Graze",
    weight: "6 lb.",
    cost: "20 GP"
    , locked: true
  },
  {
    id: "weapon_common_greataxe",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "Greataxe",
    damage: "1d12 Slashing",
    properties: "Heavy, Two-Handed",
    mastery: "Cleave",
    weight: "7 lb.",
    cost: "30 GP"
    , locked: true
  },
  {
    id: "weapon_common_greatsword",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "Greatsword",
    damage: "2d6 Slashing",
    properties: "Heavy, Two-Handed",
    mastery: "Graze",
    weight: "6 lb.",
    cost: "50 GP"
    // , locked: true
  },
  {
    id: "weapon_common_halberd",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "Halberd",
    damage: "1d10 Slashing",
    properties: "Heavy, Reach, Two-Handed",
    mastery: "Cleave",
    weight: "6 lb.",
    cost: "20 GP"
    , locked: true
  },
  {
    id: "weapon_common_lance",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "Lance",
    damage: "1d10 Piercing",
    properties: "Heavy, Reach, Two-Handed (unless mounted)",
    mastery: "Topple",
    weight: "6 lb.",
    cost: "10 GP"
    , locked: true
  },
  {
    id: "weapon_common_longsword",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "Longsword",
    damage: "1d8 Slashing",
    properties: "Versatile (1d10)",
    mastery: "Sap",
    weight: "3 lb.",
    cost: "15 GP"
    , locked: true
  },
  {
    id: "weapon_common_maul",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "Maul",
    damage: "2d6 Bludgeoning",
    properties: "Heavy, Two-Handed",
    mastery: "Topple",
    weight: "10 lb.",
    cost: "10 GP"
    , locked: true
  },
  {
    id: "weapon_common_morningstar",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "Morningstar",
    damage: "1d8 Piercing",
    properties: "—",
    mastery: "Sap",
    weight: "4 lb.",
    cost: "15 GP"
    , locked: true
  },
  {
    id: "weapon_common_pike",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "Pike",
    damage: "1d10 Piercing",
    properties: "Heavy, Reach, Two-Handed",
    mastery: "Push",
    weight: "18 lb.",
    cost: "5 GP"
    , locked: true
  },
  {
    id: "weapon_common_rapier",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "Rapier",
    damage: "1d8 Piercing",
    properties: "Finesse",
    mastery: "Vex",
    weight: "2 lb.",
    cost: "25 GP"
    , locked: true
  },
  {
    id: "weapon_common_scimitar",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "Scimitar",
    damage: "1d6 Slashing",
    properties: "Finesse, Light",
    mastery: "Nick",
    weight: "3 lb.",
    cost: "25 GP"
    // , locked: true
  },
  {
    id: "weapon_common_shortsword",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "Shortsword",
    damage: "1d6 Piercing",
    properties: "Finesse, Light",
    mastery: "Vex",
    weight: "2 lb.",
    cost: "10 GP"
    // , locked: true
  },
  {
    id: "weapon_common_trident",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "Trident",
    damage: "1d8 Piercing",
    properties: "Thrown (Range 20/60), Versatile (1d10)",
    mastery: "Topple",
    weight: "4 lb.",
    cost: "5 GP"
    , locked: true
  },
  {
    id: "weapon_common_warhammer",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "Warhammer",
    damage: "1d8 Bludgeoning",
    properties: "Versatile (1d10)",
    mastery: "Push",
    weight: "5 lb.",
    cost: "15 GP"
    , locked: true
  },
  {
    id: "weapon_common_war_pick",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "War Pick",
    damage: "1d8 Piercing",
    properties: "Versatile (1d10)",
    mastery: "Sap",
    weight: "2 lb.",
    cost: "5 GP"
    , locked: true
  },
  {
    id: "weapon_common_whip",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Melee",
    name: "Whip",
    damage: "1d4 Slashing",
    properties: "Finesse, Reach",
    mastery: "Slow",
    weight: "3 lb.",
    cost: "2 GP"
    , locked: true
  },

  // --- MARTIAL RANGED ---
  {
    id: "weapon_common_blowgun",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Ranged",
    name: "Blowgun",
    damage: "1 Piercing",
    properties: "Ammunition (Range 25/100; Needle), Loading",
    mastery: "Vex",
    weight: "1 lb.",
    cost: "10 GP"
    , locked: true
  },
  {
    id: "weapon_common_hand_crossbow",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Ranged",
    name: "Hand Crossbow",
    damage: "1d6 Piercing",
    properties: "Ammunition (Range 30/120; Bolt), Light, Loading",
    mastery: "Vex",
    weight: "3 lb.",
    cost: "75 GP"
    , locked: true
  },
  {
    id: "weapon_common_heavy_crossbow",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Ranged",
    name: "Heavy Crossbow",
    damage: "1d10 Piercing",
    properties: "Ammunition (Range 100/400; Bolt), Heavy, Loading, Two-Handed",
    mastery: "Push",
    weight: "18 lb.",
    cost: "50 GP"
    , locked: true
  },
  {
    id: "weapon_common_longbow",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Ranged",
    name: "Longbow",
    damage: "1d8 Piercing",
    properties: "Ammunition (Range 150/600; Arrow), Heavy, Two-Handed",
    mastery: "Slow",
    weight: "2 lb.",
    cost: "50 GP"
    // , locked: true
  },
  {
    id: "weapon_common_musket",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Ranged",
    name: "Musket",
    damage: "1d12 Piercing",
    properties: "Ammunition (Range 40/120; Bullet), Loading, Two-Handed",
    mastery: "Slow",
    weight: "10 lb.",
    cost: "500 GP"
    , locked: true
  },
  {
    id: "weapon_common_pistol",
    type: "Weapon",
    rarity: "Common",
    category: "Martial Ranged",
    name: "Pistol",
    damage: "1d10 Piercing",
    properties: "Ammunition (Range 30/90; Bullet), Loading",
    mastery: "Vex",
    weight: "3 lb.",
    cost: "250 GP"
    , locked: true
  }
  ,{
    id: "weapon_uncommon_whisperfang",
    type: "Weapon",
    rarity: "Uncommon",
    category: "Simple Melee",
    name: "Whisperfang",
    damage: "1d4 Piercing",
    properties: "Finesse, Light, Thrown (Range 20/60)",
    mastery: "Nick",
    weight: "1 lb.",
    cost: "???",
    description: `You have a +1 bonus to attack and damage rolls made with this magic weapon.
    <p>Proficiency with a Dagger allows you to add your proficiency bonus to the attack roll for any attack you make with it.`
    , passcode: 6006453655
    , locked: true
  }
  ,{
    id: "weapon_rare_sun_blade",
    type: "Weapon",
    rarity: "Rare",
    category: "Martial Melee",
    name: "Sun Blade",
    damage: "1d8 Radiant",
    properties: "Finesse, Versatile (1d10)",
    mastery: "Sap",
    weight: "3 lb.",
    cost: "???",
    description: `This item appears to be a sword hilt.
	  <p><b><i>Blade of Radiance.</b></i> While grasping the hilt, you can take a Bonus Action to cause a blade of pure radiance to spring into existence or make the blade disappear. While the blade exists, this magic weapon functions as a Longsword with Finesse. If you are proficient with Longswords or Shortswords, you are proficient with the Sun Blade.
	  <p>You gain a +2 bonus to attack rolls and damage rolls made with this weapon, which deals Radiant damage instead of Slashing damage. When you hit an Undead with it, that target takes an extra 1d8 Radiant damage.
	  <p><b><i>Sunlight.</b></i> The sword’s luminous blade emits Bright Light in a 15-foot radius and Dim Light for an additional 15 feet. The light is sunlight. While the blade persists, you can take a Magic action to expand or reduce its radius of Bright Light and Dim Light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.`,
    passcode: 7429185301,
    locked: true
  }
];