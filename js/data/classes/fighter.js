const data_classes_fighter = [
    {
        id: "class_fighter"
        , type: "Class"
        , name: "Fighter"
        , description_text: `Fighters rule many battlefields. Questing knights, royal champions, elite soldiers, and hardened mercenaries—as Fighters, they all share an unparalleled prowess with weapons and armor. And they are well acquainted with death, both meting it out and defying it.
        <p>Fighters master various weapon techniques, and a well-equipped Fighter always has the right tool at hand for any combat situation. Likewise, a Fighter is adept with every form of armor. Beyond that basic degree of familiarity, each Fighter specializes in certain styles of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad ability and extensive specialization makes Fighters superior combatants.`
        , level: [
            {
                id: 0
                , hit_dice: 10
            }
            , {
                id: 1
                , second_wind: 2
                , weapon_mastery: 3
            }
            , {
                id: 2
                , action_surge: 1
            }
            , {
                id: 4
                , second_wind: 3
                , weapon_mastery: 4
            }
            , {
                id: 5
                , extra_attack: 1
            }
            , {
                id: 9
                , indomitable: 1
            }
            , {
                id: 10
                , second_wind: 4
                , weapon_mastery: 5
            }
            , {
                id: 11
                , extra_attack: 2
            }
            , {
                id: 13
                , indomitable: 2
            }
            , {
                id: 16
                , weapon_mastery: 6
            }
            , {
                id: 17
                , action_surge: 2
                , indomitable: 3
            }
            , {
                id: 20
                , extra_attack: 3
            }
        ]
        , description: {
            "Primary Ability": "Strength or Dexterity"
            , "Hit Point Die": "D10"
            , "Saving Throw Proficiencies": "Strength and Constitution"
            , "Skill Proficiencies": "Choose 2: Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Persuasion, Perception, or Survival"
            , "Weapon Proficiencies": "Simple and Martial weapons"
            , "Armor Training": "Light, Medium, and Heavy armor and Shields"
            , "Starting Equipment": "Choose A, B or C: (A) Chain Mail, Greatsword, Flail, 8 Javelins, Dungeoneer's Pack, and 4 GP; (B) Studded Leather Armor, Scimitar, Shortsword, Longbow, 20 Arrows, Quiver, Dungeonneer's Pack, and 11 GP; or (C) 155 GP"
            , "Level 1": ["Fighting Style", "Second Wind", "Weapon Mastery"]
            , "Level 2": ["Action Surge (1)", "Tactical Mind"]
            , "Level 3": ["Improved Critical", "Remarkable Athlete"]
            // , "Level 3": ["Fighter Subclass"]
            , "Level 4": ["Ability Score Improvement"]
            , "Level 5": ["Extra Attack", "Tactical Shift"]
            , "Level 6": ["Ability Score Improvement"]
            , "Level 7": ["Additional Fighting Style"]
            , "Level 8": ["Ability Score Improvement"]
            , "Level 9": ["Indomitable (1)", "Tactical Master"]
            , "Level 10": ["Heroic Warrior"]
            , "Level 11": ["Two Extra Attacks"]
            , "Level 12": ["Ability Score Improvement"]
            , "Level 13": ["Indomitable (2)", "Studied Attacks"]
            , "Level 14": ["Ability Score Improvement"]
            , "Level 15": ["Superior Critical"]
            , "Level 16": ["Ability Score Improvement"]
            , "Level 17": ["Action Surge (2)", "Indomitable (3)"]
            , "Level 18": ["Survivor"]
            , "Level 19": ["Epic Boon"]
            , "Level 20": ["Three Extra Attacks"]
        }
    }
    , {
        id: "feature_class_fighter_fighting_style"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_fighter"
            , level: 1
        }
        , name: "Fighting Style"
        , description: `You have honed your martial prowess and gain a Fighting Style feat of your choice. Defense is recommended.
        <p>Whenever you gain a Fighter level, you can replace the feat you chose with a different Fighting Style feat.`
    }
    , {
        id: "feature_class_fighter_second_wind"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_fighter"
            , level: 1
        }
        , name: "Second Wind"
        , description: `You have a limited well of physical and mental stamina that you can draw on. As a Bonus Action, you can use it to regain Hit Points equal to 1d10 plus your Fighter level.
        <p>You can use this feature twice. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.
        <p><span data-level="4">When you reach certain Fighter levels, you gain more uses of this feature</span>, as shown in the Second Wind column of the Fighter Features table.`
    }
    , {
        id: "feature_class_fighter_weapon_mastery"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_fighter"
            , level: 1
        }
        , name: "Weapon Mastery"
        , description: `Your training with weapons allows you to use the mastery property of three kinds of Simple or Martial weapons of your choice. Whenever you finish a Long Rest, you can practice weapon drills and change one of those weapon choices.
        <p><span data-level="4">When you reach certain Fighter levels, you gain the ability to use the mastery properties of more kinds of weapons</span>, as shown in the Weapon Mastery column of the Fighter Features table.`
    }
    , {
        id: "feature_class_fighter_action_surge"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_fighter"
            , level: 2
        }
        , name: "Action Surge"
        , description: `You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action, except the Magic action.
        <p>Once you use this feature, you can't do so again until you finish a Short or Long Rest. <span data-level="17">Starting at level 17, you can use it twice before a rest but only once on a turn.</span>`
    }
    , {
        id: "feature_class_fighter_tactical_mind"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_fighter"
            , level: 2
        }
        , name: "Tactical Mind"
        , description: `You have a mind for tactics and getting the upper hand on and off the battlefield. When you fail an ability check, you can expend a use of your Second Wind to push yourself toward success. Rather than regaining Hit Points, you roll 1d10 and add the number rolled to the ability check, potentially turning it into a success. If the check still fails, this use of Second Wind isn't expended.`
    }
    // , {
    //     id: "feature_class_fighter_fighter_subclass"
    //     , type: "Feature"
    //     , category: "Class"
    //     , conditions: {
    //         class: "class_fighter"
    //         , level: 3
    //     }
    //     , name: "Fighter Subclass"
    //     , description: `You gain a Fighter subclass of your choice. The Battle Master, Champion, Eldritch Knight, and Psi Warrior subclasses are detailed after this class's description. A subclass is a specialization that grants you features at certain Fighter levels. For the rest of your career, you gain each of your subclass's features that are of your Fighter level or lower.`
    // }
    , {
        id: "feature_class_fighter_extra_attack"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_fighter"
            , level: 5
        }
        , name: "Extra Attack"
        , description: `You can attack twice, instead of once, whenever you take the Attack action on your turn.`
    }
    , {
        id: "feature_class_fighter_tactical_shift"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_fighter"
            , level: 5
        }
        , name: "Tactical Shift"
        , description: `Whenever you activate your Second Wind with a Bonus Action, you can move up to half your Speed without provoking Opportunity Attacks.`
    }
    , {
        id: "feature_class_fighter_indomitable"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_fighter"
            , level: 9
        }
        , name: "Indomitable"
        , description: `If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll, and you can't use this feature again until you finish a Long Rest.
        <p><span data-level="13">You can use this feature twice between Long Rests starting at level 13 </span><span data-level="17">and three times between Long Rests starting at level 17.</span>`
    }
    , {
        id: "feature_class_fighter_tactical_master"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_fighter"
            , level: 9
        }
        , name: "Tactical Master"
        , description: `When you attack with a weapon whose mastery property you can use, you can replace that property with the Push, Sap, or Slow property for that attack.`
    }
    , {
        id: "feature_class_fighter_two_extra_attacks"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_fighter"
            , level: 11
        }
        , name: "Two Extra Attacks"
        , description: `You can attack three times instead of once whenever you take the Attack action on your turn.`
    }
    , {
        id: "feature_class_fighter_studied_attacks"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_fighter"
            , level: 13
        }
        , name: "Studied Attacks"
        , description: `You study your opponents and learn from each attack you make. If you make an attack roll against a creature and miss, you have Advantage on your next attack roll against that creature before the end of your next turn.`
    }
    , {
        id: "feature_class_fighter_epic_boon"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_fighter"
            , level: 19
        }
        , name: "Epic Boon"
        , description: `You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Combat Prowess is recommended.`
    }
    , {
        id: "feature_class_fighter_three_extra_attacks"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_fighter"
            , level: 20
        }
        , name: "Three Extra Attacks"
        , description: `You can attack four times instead of once whenever you take the Attack action on your turn.`
    }
    , {
        id: "feature_subclass_champion_improved_critical"
        , type: "Feature"
        , category: "Subclass"
        , conditions: {
            class: "class_fighter"
            , subclass: "subclass_champion"
            , level: 3
        }
        , name: "Improved Critical"
        , description: `Your attack rolls with weapons and Unarmed Strikes can score a Critical Hit on a roll of 19 or 20 on the d20.`
    }
    , {
        id: "feature_subclass_champion_remarkable_athlete"
        , type: "Feature"
        , category: "Subclass"
        , conditions: {
            class: "class_fighter"
            , subclass: "subclass_champion"
            , level: 3
        }
        , name: "Remarkable Athlete"
        , description: `Thanks to your athleticism, you have Advantage on Initiative rolls and Strength (Athletics) checks.
        <p>In addition, immediately after you score a Critical Hit, you can move up to half your Speed without provoking Opportunity Attacks.`
    }
    , {
        id: "feature_subclass_champion_additional_fighting_style"
        , type: "Feature"
        , category: "Subclass"
        , conditions: {
            class: "class_fighter"
            , subclass: "subclass_champion"
            , level: 7
        }
        , name: "Additional Fighting Style"
        , description: `You gain another Fighting Style feat of your choice.`
    }
    , {
        id: "feature_subclass_champion_heroic_warrior"
        , type: "Feature"
        , category: "Subclass"
        , conditions: {
            class: "class_fighter"
            , subclass: "subclass_champion"
            , level: 10
        }
        , name: "Heroic Warrior"
        , description: `The thrill of battle drives you toward victory. During combat, you can give yourself Heroic Inspiration whenever you start your turn without it.`
    }
    , {
        id: "feature_subclass_champion_superior_critical"
        , type: "Feature"
        , category: "Subclass"
        , conditions: {
            class: "class_fighter"
            , subclass: "subclass_champion"
            , level: 15
        }
        , name: "Superior Critical"
        , description: `Your attack rolls with weapons and Unarmed Strikes can now score a Critical Hit on a roll of 18–20 on the d20.`
    }
    , {
        id: "feature_subclass_champion_survivor"
        , type: "Feature"
        , category: "Subclass"
        , conditions: {
            class: "class_fighter"
            , subclass: "subclass_champion"
            , level: 18
        }
        , name: "Survivor"
        , description: `You attain the pinnacle of resilience in battle, giving you these benefits.
        <p><b>Defy Death.</b> You have Advantage on Death Saving Throws. Moreover, khi roll 18–20 on a Death Saving, you gain the benefit of rolling a 20 on it.
        <p><b>Heroic Rally.</b> At the start of each of your turns, you regain Hit Points equal to 5 plus your Constitution modifier if you are Bloodied and have at least 1 Hit Point.`
    }
];