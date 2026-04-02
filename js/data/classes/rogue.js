const data_classes_rogue = [
    {
        id: "class_rogue"
        , type: "Class"
        , name: "Rogue"
        , description_text: `Rogues rely on cunning, stealth, and their foes’ vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem. A few even learn magical tricks to supplement their other abilities. Many Rogues focus on stealth and deception, while others refine skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks.
        <p>In combat, Rogues prioritize subtle strikes over brute strength. They would rather make one precise strike than wear an opponent down with a barrage of blows.
        <p>Some Rogues began their careers as criminals, while others used their cunning to fight crime. Whatever a Rogue’s relation to the law, no common criminal or officer of the law can match the subtle brilliance of the greatest Rogues.`
        , level: [
            {
                id: 0
                , hit_dice: 8
            }
            , { id: 1, sneak_attack: "1d6" }
            , { id: 2, sneak_attack: "1d6" }
            , { id: 3, sneak_attack: "2d6" }
            , { id: 4, sneak_attack: "2d6" }
            , { id: 5, sneak_attack: "3d6" }
            , { id: 6, sneak_attack: "3d6" }
            , { id: 7, sneak_attack: "4d6" }
            , { id: 8, sneak_attack: "4d6" }
            , { id: 9, sneak_attack: "5d6" }
            , { id: 10, sneak_attack: "5d6" }
            , { id: 11, sneak_attack: "6d6" }
            , { id: 12, sneak_attack: "6d6" }
            , { id: 13, sneak_attack: "7d6" }
            , { id: 14, sneak_attack: "7d6" }
            , { id: 15, sneak_attack: "8d6" }
            , { id: 16, sneak_attack: "8d6" }
            , { id: 17, sneak_attack: "9d6" }
            , { id: 18, sneak_attack: "9d6" }
            , { id: 19, sneak_attack: "10d6" }
            , { id: 20, sneak_attack: "10d6" }
        ]
        , description: {
            "Primary Ability": "Dexterity"
            , "Hit Point Die": "D8"
            , "Saving Throw Proficiencies": "Dexterity and Intelligence"
            , "Skill Proficiencies": "Choose 4: Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Persuasion, Sleight of Hand, or Stealth"
            , "Weapon Proficiencies": "Simple weapons and Martial weapons that have the Finesse or Light property"
            , "Tool Proficiencies": "Thieves’ Tools"
            , "Armor Training": "Light armor"
            , "Starting Equipment": "Choose A or B: (A) Leather Armor, 2 Daggers, Shortsword, Shortbow, 20 Arrows, Quiver, Thieves’ Tools, Burglar’s Pack, and 8 GP; or (B) 100 GP"
            , "Level 1": ["Expertise", "Sneak Attack", "Thieves’ Cant", "Weapon Mastery"]
            , "Level 2": ["Cunning Action"]
            , "Level 3": ["Steady Aim", "Fast Hands", "Second-Story Work"]
            // , "Level 3": ["Rogue Subclass"]
            , "Level 4": ["Ability Score Improvement"]
            , "Level 5": ["Cunning Strike", "Uncanny Dodge"]
            , "Level 6": ["Expertise"]
            , "Level 7": ["Evasion", "Reliable Talent"]
            , "Level 8": ["Ability Score Improvement"]
            , "Level 9": ["Supreme Sneak"]
            , "Level 10": ["Ability Score Improvement"]
            , "Level 11": ["Improved Cunning Strike"]
            , "Level 12": ["Ability Score Improvement"]
            , "Level 13": ["Use Magic Device"]
            , "Level 14": ["Devious Strikes"]
            , "Level 15": ["Slippery Mind"]
            , "Level 16": ["Ability Score Improvement"]
            , "Level 17": ["Thief's Reflexes"]
            , "Level 18": ["Elusive"]
            , "Level 19": ["Epic Boon"]
            , "Level 20": ["Stroke of Luck"]
        }
    }
    , {
        id: "feature_class_rogue_expertise"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_rogue"
            , level: 1
        }
        , name: "Expertise"
        , description: `You gain Expertise in two of your skill proficiencies of your choice. Sleight of Hand and Stealth are recommended if you have proficiency in them.
        <p><span data-level="6">At Rogue level 6, you gain Expertise in two more of your skill proficiencies of your choice.</span>`
    }
    , {
        id: "feature_class_rogue_sneak_attack"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_rogue"
            , level: 1
        }
        , name: "Sneak Attack"
        , description: `You know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack roll if you have Advantage on the roll and the attack uses a Finesse or a Ranged weapon. The extra damage’s type is the same as the weapon’s type.
        <p>You don’t need Advantage on the attack roll if at least one of your allies is within 5 feet of the target, the ally doesn’t have the Incapacitated condition, and you don’t have Disadvantage on the attack roll.
        <p>The extra damage increases as you gain Rogue levels, as shown in the Sneak Attack column of the Rogue Features table.`
    }
    , {
        id: "feature_class_rogue_thieves_cant"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_rogue"
            , level: 1
        }
        , name: "Thieves' Cant"
        , description: `You picked up various languages in the communities where you plied your roguish talents. You know Thieves’ Cant and one other language of your choice, which you choose from the languages tables.`
    }
    , {
        id: "feature_class_rogue_weapon_mastery"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_rogue"
            , level: 1
        }
        , name: "Weapon Mastery"
        , description: `Your training with weapons allows you to use the mastery properties of two kinds of weapons of your choice with which you have proficiency, such as Daggers and Shortbows.
        <p>Whenever you finish a Long Rest, you can change the kinds of weapons you chose. For example, you could switch to using the mastery properties of Scimitars and Shortswords.`
    }
    , {
        id: "feature_class_rogue_cunning_action"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_rogue"
            , level: 2
        }
        , name: "Cunning Action"
        , description: `Your quick thinking and agility allow you to move and act quickly. On your turn, you can take one of the following actions as a Bonus Action: Dash, Disengage, or Hide.`
    }
    // , {
    //     id: "feature_class_rogue_rogue_subclass"
    //     , type: "Feature"
    //     , category: "Class"
    //     , conditions: {
    //         class: "class_rogue"
    //         , level: 3
    //     }
    //     , name: "Rogue Subclass"
    //     , description: `You gain a Rogue subclass of your choice. The Arcane Trickster, Assassin, Soulknife, and Thief subclasses are detailed after this class’s description. A subclass is a specialization that grants you features at certain Rogue levels. For the rest of your career, you gain each of your subclass’s features that are of your Rogue level or lower.`
    // }
    , {
        id: "feature_class_rogue_steady_aim"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_rogue"
            , level: 3
        }
        , name: "Steady Aim"
        , description: `As a Bonus Action, you give yourself Advantage on your next attack roll on the current turn. You can use this feature only if you haven’t moved during this turn, and after you use it, your Speed is 0 until the end of the current turn.`
    }
    , {
        id: "feature_class_rogue_cunning_strike"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_rogue"
            , level: 5
        }
        , name: "Cunning Strike"
        , description: `You have developed cunning ways to use your Sneak Attack. When you deal Sneak Attack damage, you can add one of the following Cunning Strike effects. Each effect has a die cost, which is the number of Sneak Attack damage dice you must forgo to add the effect. You remove the die before rolling, and the effect occurs immediately after the attack’s damage is dealt. For example, if you add the Poison effect, remove 1d6 from the Sneak Attack’s damage before rolling.
        <p>If a Cunning Strike effect requires a saving throw, the DC equals 8 plus your Dexterity modifier and Proficiency Bonus.
        <ul>
            <li><b>Poison (Cost: 1d6).</b> You add a toxin to your strike, forcing the target to make a Constitution saving throw. On a failed save, the target has the Poisoned condition for 1 minute. At the end of each of its turns, the Poisoned target repeats the save, ending the effect on itself on a success.<br>To use this effect, you must have a Poisoner’s Kit on your person.</li>
            <li><b>Trip (Cost: 1d6).</b> If the target is Large or smaller, it must succeed on a Dexterity saving throw or have the Prone condition.</li>
            <li><b>Withdraw (Cost: 1d6).</b> Immediately after the attack, you move up to half your Speed without provoking Opportunity Attacks.</li>
        </ul>`
    }
    , {
        id: "feature_class_rogue_uncanny_dodge"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_rogue"
            , level: 5
        }
        , name: "Uncanny Dodge"
        , description: `When an attacker that you can see hits you with an attack roll, you can use your Reaction to halve the attack’s damage against you (round down).`
    }
    , {
        id: "feature_class_rogue_evasion"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_rogue"
            , level: 7
        }
        , name: "Evasion"
        , description: `You can nimbly dodge out of the way of certain dangers. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail. You can’t use this feature if you have the Incapacitated condition.`
    }
    , {
        id: "feature_class_rogue_reliable_talent"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_rogue"
            , level: 7
        }
        , name: "Reliable Talent"
        , description: `Whenever you make an ability check that uses one of your skill or tool proficiencies, you can treat a d20 roll of 9 or lower as a 10.`
    }
    , {
        id: "feature_class_rogue_improved_cunning_strike"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_rogue"
            , level: 11
        }
        , name: "Improved Cunning Strike"
        , description: `You can use up to two Cunning Strike effects when you deal Sneak Attack damage, paying the die cost for each effect.`
    }
    , {
        id: "feature_class_rogue_devious_strikes"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_rogue"
            , level: 14
        }
        , name: "Devious Strikes"
        , description: `You've practiced new ways to use your Sneak Attack deviously. The following effects are now among your Cunning Strike options.
        <ul>
            <li><b>Daze (Cost: 2d6).</b> The target must succeed on a Constitution saving throw, or on its next turn, it can do only one of the following: move or take an action or a Bonus Action.</li>
            <li><b>Knock Out (Cost: 6d6).</b> The target must succeed on a Constitution saving throw, or it has the Unconscious condition for 1 minute or until it takes any damage. The Unconscious target can repeat the save at the end of each of its turns, ending the effect on itself on a success.</li>
            <li><b>Obscure (Cost: 3d6).</b> The target must succeed on a Dexterity saving throw, or it has the Blinded condition until the end of its next turn.</li>
        </ul>`
    }
    , {
        id: "feature_class_rogue_slippery_mind"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_rogue"
            , level: 15
        }
        , name: "Slippery Mind"
        , description: `Your cunning mind is exceptionally difficult to control. You gain proficiency in Wisdom and Charisma saving throws.`
    }
    , {
        id: "feature_class_rogue_elusive"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_rogue"
            , level: 18
        }
        , name: "Elusive"
        , description: `You are so evasive that attackers rarely gain the upper hand against you. No attack roll can have Advantage against you unless you have the Incapacitated condition.`
    }
    , {
        id: "feature_class_rogue_epic_boon"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_rogue"
            , level: 19
        }
        , name: "Epic Boon"
        , description: `You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of The Night spirit is recommended.`
    }
    , {
        id: "feature_class_rogue_stroke_of_luck"
        , type: "Feature"
        , category: "Class"
        , conditions: {
            class: "class_rogue"
            , level: 20
        }
        , name: "Stroke of Luck"
        , description: `You have an uncanny knack for succeeding when you need to. If you fail a d20 Test, you can turn the roll into a 20.
        <p>Once you use this feature, you can’t use it again until you finish a Short Rest or a Long Rest.`
    }
    , {
        id: "feature_subclass_thief_fast_hands"
        , type: "Feature"
        , category: "Subclass"
        , conditions: {
            class: "class_rogue"
            , subclass: "subclass_thief"
            , level: 3
        }
        , name: "Fast Hands"
        , description: `As a Bonus Action, you can do one of the following.
        <ul>
            <li><b>Sleight of Hand.</b> Make a Dexterity (Sleight of Hand) check to pick a lock or disarm a trap with Thieves’ Tools or to pick a pocket.</li>
            <li><b>Use an Object.</b> Take the Utilize action, or take the Magic action to use a magic item that requires that action.</li>
        </ul>`
    }
    , {
        id: "feature_subclass_thief_second_story_work"
        , type: "Feature"
        , category: "Subclass"
        , conditions: {
            class: "class_rogue"
            , subclass: "subclass_thief"
            , level: 3
        }
        , name: "Second-Story Work"
        , description: `You have trained to reach especially hard-to-reach places, granting you these benefits.
        <p><b>Climber.</b> You gain a Climb Speed equal to your Speed.
        <p><b>Jumper.</b> You can determine your jump distance using your Dexterity rather than your Strength.`
    }
    , {
        id: "feature_subclass_thief_supreme_sneak"
        , type: "Feature"
        , category: "Subclass"
        , conditions: {
            class: "class_rogue"
            , subclass: "subclass_thief"
            , level: 9
        }
        , name: "Supreme Sneak"
        , description: `You gain the following Cunning Strike option.
        <p><b>Stealth Attack (Cost: 1d6).</b> If you have the Hide action’s Invisible condition, this attack doesn’t end that condition on you if you end the turn behind Three-Quarters Cover or Total Cover.`
    }
    , {
        id: "feature_subclass_thief_use_magic_device"
        , type: "Feature"
        , category: "Subclass"
        , conditions: {
            class: "class_rogue"
            , subclass: "subclass_thief"
            , level: 13
        }
        , name: "Use Magic Device"
        , description: `You have learned how to maximize use of magic items, granting you the following benefits.
        <ul>
            <li><b>Attunement.</b> You can attune to up to four magic items at once.</li>
            <li><b>Charges.</b> Whenever you use a magic item property that expends charges, roll 1d6. On a roll of 6, you use the property without expending the charges.</li>
            <li><b>Scrolls.</b> You can use any Spell Scroll, using Intelligence as your spellcasting ability for the spell. If the spell is a cantrip or level 1 spell, you can cast it reliably. If the scroll contains a higher-level spell, you must first succeed on an Intelligence (Arcana) check (DC 10 plus the spell’s level). On a successful check, you cast the spell from the scroll. On a failed check, the scroll disintegrates.</li>
        </ul>`
    }
    , {
        id: "feature_subclass_thief_thiefs_reflexes"
        , type: "Feature"
        , category: "Subclass"
        , conditions: {
            class: "class_rogue"
            , subclass: "subclass_thief"
            , level: 17
        }
        , name: "Thief's Reflexes"
        , description: `You are adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal Initiative and your second turn at your Initiative minus 10.`
    }
];