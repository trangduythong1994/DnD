const data_species_human = [
    {
        id: "species_human"
        , type: "Species"
        , name: "Human"
        , description_text: `Found throughout the multiverse, humans are as varied as they are numerous, and they endeavor to achieve as much as they can in the years they are given. Their ambition and resourcefulness are commended, respected, and feared on many worlds.
        <p>Humans are as diverse in appearance as the people of Earth, and they have many gods. Scholars dispute the origin of humanity, but one of the earliest known human gatherings is said to have occurred in Sigil, the torus-shaped city at the center of the multiverse and the place where the Common language was born. From there, humans could have spread to every part of the multiverse, bringing the City of Doors’ cosmopolitanism with them.`
        , description: {
            "Creature Type": "Humanoid"
            , "Size": "Medium (about 4–7 feet tall) or Small (about 2–4 feet tall), chosen when you select this species"
            , "Speed": "30 feet"
            , "Traits": ["Resourceful", "Skillful", "Versatile"]
        }
    }
    , {
        id: "feature_species_human_resourceful"
        , type: "Feature"
        , category: "Species"
        , conditions: {
            species: "species_human"
        }
        , name: "Resourceful"
        , description: `You gain Heroic Inspiration whenever you finish a Long Rest.`
    }
    , {
        id: "feature_species_human_skillful"
        , type: "Feature"
        , category: "Species"
        , conditions: {
            species: "species_human"
        }
        , name: "Skillful"
        , description: `You gain proficiency in one skill of your choice.`
    }
    , {
        id: "feature_species_human_versatile"
        , type: "Feature"
        , category: "Species"
        , conditions: {
            species: "species_human"
        }
        , name: "Versatile"
        , description: `You gain an Origin feat of your choice.`
    }
];