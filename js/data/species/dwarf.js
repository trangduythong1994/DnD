const data_species_dwarf = [
    {
        id: "species_dwarf"
        , type: "Species"
        , name: "Dwarf"
        , description_text: `Dwarves were raised from the earth in the elder days by a deity of the forge. Called by various names on different worlds—Moradin, Reorx, and others—that god gave dwarves an affinity for stone and metal and for living underground. The god also made them resilient like the mountains, with a life span of about 350 years.
        <p>Squat and often bearded, the original dwarves carved cities and strongholds into mountainsides and under the earth. Their oldest legends tell of conflicts with the monsters of mountaintops and the Underdark, whether those monsters were towering giants or subterranean horrors. Inspired by those tales, dwarves of any culture often sing of valorous deeds—especially of the little overcoming the mighty.
        <p>On some worlds in the multiverse, the first settlements of dwarves were built in hills or mountains, and the families who trace their ancestry to those settlements call themselves hill dwarves or mountain dwarves, respectively. The Greyhawk and Dragonlance settings have such communities.`
        , description: {
            "Creature Type": "Humanoid"
            , "Size": "Medium (about 4–5 feet tall)"
            , "Speed": "30 feet"
            , "Traits": ["Darkvision", "Dwarven Resilience", "Dwarven Toughness", "Stonecunning"]
        }
    }
    , {
        id: "feature_species_dwarf_darkvision"
        , type: "Feature"
        , category: "Species"
        , conditions: {
            species: "species_dwarf"
        }
        , name: "Darkvision"
        , description: `You have Darkvision with a range of 120 feet.`
    }
    , {
        id: "feature_species_dwarf_dwarven_resilience"
        , type: "Feature"
        , category: "Species"
        , conditions: {
            species: "species_dwarf"
        }
        , name: "Dwarven Resilience"
        , description: `You have Resistance to Poison damage. You also have Advantage on saving throws you make to avoid or end the Poisoned condition.`
    }
    , {
        id: "feature_species_dwarf_dwarven_toughness"
        , type: "Feature"
        , category: "Species"
        , conditions: {
            species: "species_dwarf"
        }
        , name: "Dwarven Toughness"
        , description: `Your Hit Point maximum increases by 1, and it increases by 1 again whenever you gain a level.`
    }
    , {
        id: "feature_species_dwarf_stonecunning"
        , type: "Feature"
        , category: "Species"
        , conditions: {
            species: "species_dwarf"
        }
        , name: "Stonecunning"
        , description: `As a Bonus Action, you gain Tremorsense with a range of 60 feet for 10 minutes. You must be on a stone surface or touching a stone surface to use this Tremorsense. The stone can be natural or worked.
        <p>You can use this Bonus Action a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest.`
    }
];