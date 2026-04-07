const data_classes_cleric = [
    {
        id: "class_cleric"
        , type: "Class"
        , name: "Cleric"
        , spellcasting_ability: "Wisdom"
        , description_text: `Clerics draw power from the realms of the gods and harness it to work miracles. Blessed by a deity, a pantheon, or another immortal entity, a Cleric can reach out to the divine magic of the Outer Planes—where gods dwell—and channel it to bolster people and battle foes.
            <p>Because their power is a divine gift, Clerics typically associate themselves with temples dedicated to the deity or other immortal force that unlocked their magic. Harnessing divine magic doesn’t rely on specific training, yet Clerics might learn prayers and rites that help them draw on power from the Outer Planes.
            <p>Not every member of a temple or shrine is a Cleric. Some priests are called to a simple life of temple service, carrying out their devotion through prayer and rituals, not through magic. Many mortals claim to speak for the gods, but few can marshal the power of those gods the way a Cleric can.`
        , level: [
            {
                id: 0
                , hit_dice: 8
            }
            , {
                id: 1
                , spellcasting_ability: "wis"
                , cantrip_qty: 3
                , prepared_spell: 4
            }
            , {
                id: 2
                , channel_divinity: 2
                , prepared_spell: 5
            }
            , {
                id: 3
                , channel_divinity: 2
                , prepared_spell: 6
            }
            , {
                id: 4
                , cantrip_qty: 4
                , channel_divinity: 2
                , prepared_spell: 7
            }
            , {
                id: 5
                , channel_divinity: 2
                , prepared_spell: 9
            }
            , {
                id: 6
                , channel_divinity: 3
                , prepared_spell: 10
            }
            , {
                id: 7
                , channel_divinity: 3
                , prepared_spell: 11
            }
            , {
                id: 8
                , channel_divinity: 3
                , prepared_spell: 12
            }
            , {
                id: 9
                , channel_divinity: 3
                , prepared_spell: 14
            }
            , {
                id: 10
                , cantrip_qty: 5
                , channel_divinity: 3
                , prepared_spell: 15
            }
            , {
                id: 11
                , channel_divinity: 3
                , prepared_spell: 16
            }
            , {
                id: 12
                , channel_divinity: 3
                , prepared_spell: 16
            }
            , {
                id: 13
                , channel_divinity: 3
                , prepared_spell: 17
            }
            , {
                id: 14
                , channel_divinity: 3
                , prepared_spell: 17
            }
            , {
                id: 15
                , channel_divinity: 3
                , prepared_spell: 18
            }
            , {
                id: 16
                , channel_divinity: 3
                , prepared_spell: 18
            }
            , {
                id: 17
                , channel_divinity: 3
                , prepared_spell: 19
            }
            , {
                id: 18
                , channel_divinity: 4
                , prepared_spell: 20
            }
            , {
                id: 19
                , channel_divinity: 4
                , prepared_spell: 21
            }
            , {
                id: 20
                , channel_divinity: 4
                , prepared_spell: 22
            }
        ]
        , description: {
            "Primary Ability": "Wisdom"
            , "Hit Point Die": "D8"
            , "Saving Throw Proficiencies": "Wisdom and Charisma"
            , "Skill Proficiencies": "Choose 2: History, Insight, Medicine, Persuasion, or Religion"
            , "Weapon Proficiencies": "Simple weapons"
            , "Armor Training": "Light and Medium armor and Shields"
            , "Starting Equipment": "110 GP"
            , "Level 1": ["Spellcasting", "Divine Order"]
            , "Level 2": ["Channel Divinity"]
            , "Level 3": ["Disciple of Life", "Life Domain Spells", "Preserve Life"]
            // , "Level 3": ["Cleric Subclass"]
            , "Level 4": ["Ability Score Improvement"]
            , "Level 5": ["Sear Undead"]
            , "Level 6": ["Blessed Healer"]
            , "Level 7": ["Blessed Strikes"]
            , "Level 8": ["Ability Score Improvement"]
            , "Level 9": ["—"]
            , "Level 10": ["Divine Intervention"]
            , "Level 11": ["—"]
            , "Level 12": ["Ability Score Improvement"]
            , "Level 13": ["—"]
            , "Level 14": ["Improved Blessed Strikes"]
            , "Level 15": ["—"]
            , "Level 16": ["Ability Score Improvement"]
            , "Level 17": ["Supreme Healing"]
            , "Level 18": ["—"]
            , "Level 19": ["Epic Boon"]
            , "Level 20": ["Greater Divine Intervention"]
        }
    }
    , {
        id: "feature_class_cleric_spellcasting"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_cleric"
            , level: 1
        }
        , name: "Cleric Spellcasting"
        , description: `You have learned to cast spells through prayer and meditation.
            <p><b>Cantrips.</b> You know three cantrips of your choice from the Cleric spell list.
            <br>Whenever you gain a Cleric level, you can replace one of your cantrips with another cantrip of your choice from the Cleric spell list.
            <br><span data-level="4">When you reach Cleric levels 4 </span><span data-level="10">and 10</span>, you learn another cantrip of your choice from the Cleric spell list, as shown in the Cantrips column of the Cleric Features table.
            <p><b>Spell Slots.</b> The Cleric Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.
            <p><b>Prepared Spells of Level 1+.</b> You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Cleric spell list.
            <br>The number of spells on your list increases as you gain Cleric levels, as shown in the Prepared Spells column of the Cleric Features table. Whenever that number increases, choose additional spells from the Cleric spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots.
            <br>If another Cleric feature gives spells that you always have prepared, those spells don’t count against the number of spells on the list you prepare with this feature, but those spells otherwise count as Cleric spells for you.
            <p><b>Changing Your Prepared Spells.</b> Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Cleric spells for which you have spell slots.
            <p><b>Spellcasting Ability.</b> Wisdom is your spellcasting ability for your Cleric spells.
            <p><b>Spellcasting Focus.</b> You can use a Holy Symbol as a Spellcasting Focus for your Cleric spells.`
    }
    , {
        id: "feature_class_cleric_divine_order"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_cleric"
            , level: 1
        }
        , name: "Divine Order"
        , description: `You have dedicated yourself to one of the following sacred roles of your choice.
            <p><b>Protector.</b> Trained for battle, you gain proficiency with Martial weapons and training with Heavy armor.
            <p><b>Thaumaturge.</b> You know one extra cantrip from the Cleric spell list. In addition, your mystical connection to the divine gives you a bonus to your Intelligence (Arcana or Religion) checks. The bonus equals your Wisdom modifier (minimum of +1).`
    }
    , {
        id: "feature_class_cleric_channel_divinity"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_cleric"
            , level: 2
        }
        , name: "Channel Divinity"
        , description: `You can channel divine energy directly from the Outer Planes to fuel magical effects. You start with two such effects: Divine Spark and Turn Undead, each of which is described below. Each time you use your Channel Divinity, choose which Channel Divinity effect from this class to create. You gain additional effect options at higher Cleric levels.
            <p>You can use this class's Channel Divinity twice. You regain one of its expended uses when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest. <span data-level="6">You gain additional uses khi đạt Cleric levels 6 </span><span data-level="18">và 18</span>, như trong bảng Cleric Features.
            <p>If a Channel Divinity effect requires a saving throw, the DC equals the spell save DC from this class’s Spellcasting feature.`
    }
    , {
        id: "feature_class_cleric_divine_spark"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_cleric"
            , level: 2
        }
        , name: "Divine Spark"
        , description: `As a Magic action, you point your Holy Symbol at another creature you can see within 30 feet of yourself and focus divine energy at it. Roll 1d8 and add your Wisdom modifier. You either restore Hit Points to the creature equal to that total or force the creature to make a Constitution saving throw. On a failed save, the creature takes Necrotic or Radiant damage (your choice) equal to that total. On a successful save, the creature takes half as much damage (round down).
            <p><span data-level="7">You roll an additional d8 khi đạt Cleric levels 7 (2d8)</span><span data-level="13">, 13 (3d8)</span><span data-level="18">, và 18 (4d8)</span>.`
    }
    , {
        id: "feature_class_cleric_turn_undead"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_cleric"
            , level: 2
        }
        , name: "Turn Undead"
        , description: `As a Magic action, you present your Holy Symbol and censure Undead creatures. Each Undead within 30 feet of you must make a Wisdom saving throw. If the creature fails its save, it has the Frightened and Incapacitated conditions for 1 minute. For that duration, it tries to move as far from you as it can on its turns. This effect ends early on the creature if it takes any damage, if you have the Incapacitated condition, or if you die.`
    }
    // , {
    //     id: "feature_class_cleric_cleric_subclass"
    //     , type: "Feature"
    //     , category: "Class"
    //     , conditions: {
    //         class: "class_cleric"
    //         , level: 3
    //     }
    //     , name: "Cleric Subclass"
    //     , description: `You gain a Cleric subclass of your choice. The Life Domain, Light Domain, Trickery Domain, and War Domain subclasses are detailed after this class’s description. A subclass is a specialization that grants you features at certain Cleric levels. For the rest of your career, you gain each of your subclass’s features that are of your Cleric level or lower.`
    // }
    , {
        id: "feature_class_cleric_sear_undead"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_cleric"
            , level: 5
        }
        , name: "Sear Undead"
        , description: `Whenever you use Turn Undead, you can roll a number of d8s equal to your Wisdom modifier (minimum of 1d8) and add the rolls together. Each Undead that fails its saving throw against that use of Turn Undead takes Radiant damage equal to the roll’s total. This damage doesn’t end the turn effect.`
    }
    , {
        id: "feature_class_cleric_blessed_strikes"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_cleric"
            , level: 7
        }
        , name: "Blessed Strikes"
        , description: `Divine power infuses you in battle. You gain one of the following options of your choice (if you get either option from a Cleric subclass in an older book, use only the option you choose for this feature).
        <p><b>Divine Strike.</b> Once on each of your turns when you hit a creature with an attack roll using a weapon, you can cause the target to take an extra 1d8 Necrotic or Radiant damage (your choice).
        <p><b>Potent Spellcasting.</b> Add your Wisdom modifier to the damage you deal with any Cleric cantrip.`
    }
    , {
        id: "feature_class_cleric_divine_intervention"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_cleric"
            , level: 10
        }
        , name: "Divine Intervention"
        , description: `You can call on your deity or pantheon to intervene on your behalf. As a Magic action, choose any Cleric spell of level 5 or lower that doesn’t require a Reaction to cast. As part of the same action, you cast that spell without expending a spell slot or needing Material components. You can’t use this feature again until you finish a Long Rest.`
    }
    , {
        id: "feature_class_cleric_improved_blessed_strikes"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_cleric"
            , level: 14
        }
        , name: "Improved Blessed Strikes"
        , description: `The option you chose for Blessed Strikes grows more powerful.
        <p><b>Divine Strike.</b> The extra damage of your Divine Strike increases to 2d8.
        <p><b>Potent Spellcasting.</b> When you cast a Cleric cantrip and deal damage to a creature with it, you can give vitality to yourself or another creature within 60 feet of yourself, granting a number of Temporary Hit Points equal to twice your Wisdom modifier.`
    }
    , {
        id: "feature_class_cleric_epic_boon"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_cleric"
            , level: 19
        }
        , name: "Epic Boon"
        , description: `You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Fate is recommended.`
    }
    , {
        id: "feature_class_cleric_greater_divine_intervention"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_cleric"
            , level: 20
        }
        , name: "Greater Divine Intervention"
        , description: `You can call on even more powerful divine intervention. When you use your Divine Intervention feature, you can choose Wish when you select a spell. If you do so, you can’t use Divine Intervention again until you finish 2d4 Long Rests.`
    }
    , {
        id: "feature_subclass_life_domain_disciple_of_life"
        , type: "Feature"
        , category: "Subclass"
        , conditions: {
            class: "class_cleric"
            , subclass: "subclass_life_domain"
            , level: 3
        }
        , name: "Disciple of Life"
        , description: `When a spell you cast with a spell slot restores Hit Points to a creature, that creature regains additional Hit Points on the turn you cast the spell. The additional Hit Points equal 2 plus the spell slot's level.`
    }
    , {
        id: "feature_subclass_life_domain_spells"
        , type: "Feature"
        , category: "Subclass"
        , conditions: {
            class: "class_cleric"
            , subclass: "subclass_life_domain"
            , level: 3
        }
        , name: "Life Domain Spells"
        , description: `Your connection to this divine domain ensures you always have certain spells ready. When you reach a Cleric level specified in the Life Domain Spells table, you thereafter always have the listed spells prepared.
            <table style="width: 100%; text-align: left; border-collapse: collapse; margin-top: 10px;">
                <thead>
                    <tr style="border-bottom: 2px solid #ccc;">
                        <th style="padding: 5px;">Cleric Level</th>
                        <th style="padding: 5px;">Prepared Spells</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 5px; font-weight: bold;">3</td>
                        <td style="padding: 5px;"><i>Aid</i>, <i>Bless</i>, <i>Cure Wounds</i>, <i>Lesser Restoration</i></td>
                    </tr>
                    <tr data-level="5">
                        <td style="padding: 5px; font-weight: bold;">5</td>
                        <td style="padding: 5px;"><i>Mass Healing Word</i>, <i>Revivify</i></td>
                    </tr>
                    <tr data-level="7">
                        <td style="padding: 5px; font-weight: bold;">7</td>
                        <td style="padding: 5px;"><i>Aura of Life</i>, <i>Death Ward</i></td>
                    </tr>
                    <tr data-level="9">
                        <td style="padding: 5px; font-weight: bold;">9</td>
                        <td style="padding: 5px;"><i>Greater Restoration</i>, <i>Mass Cure Wounds</i></td>
                    </tr>
                </tbody>
            </table>`
    }
    , {
        id: "feature_subclass_life_domain_preserve_life"
        , type: "Feature"
        , category: "Subclass"
        , conditions: {
            class: "class_cleric"
            , subclass: "subclass_life_domain"
            , level: 3
        }
        , name: "Preserve Life"
        , description: `As a Magic action, you present your Holy Symbol and expend a use of your Channel Divinity to evoke healing energy that can restore a number of Hit Points equal to five times your Cleric level. Choose Bloodied creatures within 30 feet of yourself (which can include you), and divide those Hit Points among them. This feature can restore a creature to no more than half its Hit Point maximum.`
    }
    , {
        id: "feature_subclass_life_domain_blessed_healer"
        , type: "Feature"
        , category: "Subclass"
        , conditions: {
            class: "class_cleric"
            , subclass: "subclass_life_domain"
            , level: 6
        }
        , name: "Blessed Healer"
        , description: `The healing spells you cast on others heal you as well. Immediately after you cast a spell with a spell slot that restores Hit Points to one or more creatures other than yourself, you regain Hit Points equal to 2 plus the spell slot’s level.`
    }
    , {
        id: "feature_subclass_life_domain_supreme_healing"
        , type: "Feature"
        , category: "Subclass"
        , conditions: {
            class: "class_cleric"
            , subclass: "subclass_life_domain"
            , level: 17
        }
        , name: "Supreme Healing"
        , description: `When you would normally roll one or more dice to restore Hit Points to a creature with a spell or Channel Divinity, don’t roll those dice for the healing; instead use the highest number possible for each die. For example, instead of restoring 2d6 Hit Points to a creature with a spell, you restore 12.`
    }
];