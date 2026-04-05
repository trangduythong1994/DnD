const data_species_elf = [
    {
        id: "species_elf"
        , type: "Species"
        , name: "Elf"
        , description_text: `Created by the god Corellon, the first elves could change their forms at will. They lost this ability when Corellon cursed them for plotting with the deity Lolth, who tried and failed to usurp Corellon's dominion. When Lolth was cast into the Abyss, most elves renounced her and earned Corellon's forgiveness, but that which Corellon had taken from them was lost forever.
        <p>No longer able to shape-shift at will, the elves retreated to the Feywild, where their sorrow was deepened by that plane's influence. Over time, curiosity led many of them to explore other planes of existence, including worlds in the Material Plane. Elves have pointed ears and lack facial and body hair. They live for around 750 years, and they don't sleep but instead enter a trance when they need to rest. In that state, they remain aware of their surroundings while immersing themselves in memories and meditations.
        <p>An environment subtly transforms elves after they inhabit it for a millennium or more, and it grants them certain kinds of magic. Drow, high elves, and wood elves are examples of elves who have been transformed thus.
        <p><b>Drow.</b> Drow typically dwell in the Underdark and have been shaped by it. Some drow individuals and societies avoid the Underdark altogether yet carry its magic. In the Eberron setting, for example, drow dwell in rainforests and cyclopean ruins on the continent of Xen'drik.
        <p><b>High Elves.</b> High elves have been infused with the magic of crossings between the Feywild and the Material Plane. On some worlds, high elves refer to themselves by other names. For example, they call themselves sun or moon elves in the Forgotten Realms setting, Silvanesti and Qualinesti in the Dragonlance setting, and Aereni in the Eberron setting.
        <p><b>Wood Elves.</b> Wood elves carry the magic of primeval forests within themselves. They are known by many other names, including wild elves, green elves, and forest elves. Grugach are reclusive wood elves of the Greyhawk setting, while the Kagonesti and the Tairnadal are wood elves of the Dragonlance and Eberron settings, respectively.`
        , description: {
            "Creature Type": "Humanoid"
            , "Size": "Medium (about 5–6 feet tall)"
            , "Speed": "30 feet"
            , "Traits": ["Darkvision", "Elven Lineage", "Fey Ancestry", "Keen Senses", "Trance"]
        }
    }
    , {
        id: "feature_species_elf_darkvision"
        , type: "Feature"
        , category: "Species"
        , conditions: {
            species: "species_elf"
        }
        , name: "Darkvision"
        , description: `You have Darkvision with a range of 60 feet.`
    }
    , {
        id: "feature_species_elf_elven_lineage"
        , type: "Feature"
        , category: "Species"
        , conditions: {
            species: "species_elf"
        }
        , name: "Elven Lineage"
        , description: `You are part of a lineage that grants you supernatural abilities. Choose a lineage from the Elven Lineages table. You gain the level 1 benefit of that lineage.
        <p><span data-level="3">When you reach character levels 3 <span data-level="5">and 5</span>, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level.</span>
        <p><span data-level="3">Intelligence, Wisdom, or Charisma is your spellcasting ability for the spells you cast with this trait (choose the ability when you select the lineage).</span>
        <table style="width: 100%; text-align: left; border-collapse: collapse; margin-top: 10px;">
            <thead>
                <tr style="border-bottom: 2px solid #ccc;">
                    <th style="padding: 5px;">Lineage</th>
                    <th style="padding: 5px;">Level 1</th>
                    <th style="padding: 5px;" data-level="3">Level 3</th>
                    <th style="padding: 5px;" data-level="5">Level 5</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Drow</td>
                    <td style="padding: 5px;">The range of your Darkvision increases to 120 feet. You also know the <i>Dancing Lights</i> cantrip.</td>
                    <td style="padding: 5px;" data-level="3"><i>Faerie Fire</i></td>
                    <td style="padding: 5px;" data-level="5"><i>Darkness</i></td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">High Elf</td>
                    <td style="padding: 5px;">You know the <i>Prestidigitation</i> cantrip. Whenever you finish a Long Rest, you can replace that cantrip with a different cantrip from the Wizard spell list.</td>
                    <td style="padding: 5px;" data-level="3"><i>Detect Magic</i></td>
                    <td style="padding: 5px;" data-level="5"><i>Misty Step</i></td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Wood Elf</td>
                    <td style="padding: 5px;">Your Speed increases to 35 feet. You also know the <i>Druidcraft</i> cantrip.</td>
                    <td style="padding: 5px;" data-level="3"><i>Longstrider</i></td>
                    <td style="padding: 5px;" data-level="5"><i>Pass without Trace</i></td>
                </tr>
            </tbody>
        </table>`
    }
    , {
        id: "feature_species_elf_fey_ancestry"
        , type: "Feature"
        , category: "Species"
        , conditions: {
            species: "species_elf"
        }
        , name: "Fey Ancestry"
        , description: `You have Advantage on saving throws you make to avoid or end the Charmed condition.`
    }
    , {
        id: "feature_species_elf_keen_senses"
        , type: "Feature"
        , category: "Species"
        , conditions: {
            species: "species_elf"
        }
        , name: "Keen Senses"
        , description: `You have proficiency in the Insight, Perception, or Survival skill.`
    }
    , {
        id: "feature_species_elf_trance"
        , type: "Feature"
        , category: "Species"
        , conditions: {
            species: "species_elf"
        }
        , name: "Trance"
        , description: `You don't need to sleep, and magic can't put you to sleep. You can finish a Long Rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness.`
    }
];