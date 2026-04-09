const data_feats = [
    {
        id: "feat_alert"
        , type: "Feat"
        , category: "Origin"
        , name: "Alert"
        , description: {
            "Description": `You gain the following benefits.
        <p><b><i>Initiative Proficiency.</i></b> When you roll Initiative, you can add your Proficiency Bonus to the roll.</p>
        <p><b><i>Initiative Swap.</i></b> Immediately after you roll Initiative, you can swap your Initiative with the Initiative of one willing ally in the same combat. You can't make this swap if you or the ally has the Incapacitated condition.</p>`
        }
        // , locked: true
    }
    , {
        id: "feat_crafter"
        , type: "Feat"
        , category: "Origin"
        , name: "Crafter"
        , description: {
            "Description": `You gain the following benefits.
        <p><b><i>Tool Proficiency.</i></b> You gain proficiency with three different Artisan's Tools of your choice from the Fast Crafting table.</p>
        <p><b><i>Discount.</i></b> Whenever you buy a nonmagical item, you receive a 20 percent discount on it.</p>
        <p><b><i>Fast Crafting.</i></b> When you finish a Long Rest, you can craft one piece of gear from the Fast Crafting table, provided you have the Artisan's Tools associated with that item and have proficiency with those tools. The item lasts until you finish another Long Rest, at which point the item falls apart.</p>
        <table style="width: 100%; text-align: left; border-collapse: collapse; margin-top: 10px;">
            <thead>
                <tr style="border-bottom: 2px solid #ccc;">
                    <th style="padding: 5px;">Artisan's Tools</th>
                    <th style="padding: 5px;">Crafted Gear</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Carpenter's Tools</td>
                    <td style="padding: 5px;">Ladder, Torch</td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Leatherworker's Tools</td>
                    <td style="padding: 5px;">Case, Pouch</td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Mason's Tools</td>
                    <td style="padding: 5px;">Block and Tackle</td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Potter's Tools</td>
                    <td style="padding: 5px;">Jug, Lamp</td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Smith's Tools</td>
                    <td style="padding: 5px;">Ball Bearings, Bucket, Caltrops, Grappling Hook, Iron Pot</td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Tinker's Tools</td>
                    <td style="padding: 5px;">Bell, Shovel, Tinderbox</td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Weaver's Tools</td>
                    <td style="padding: 5px;">Basket, Rope, Net, Tent</td>
                </tr>
                <tr>
                    <td style="padding: 5px; font-weight: bold;">Woodcarver's Tools</td>
                    <td style="padding: 5px;">Club, Greatclub, Quarterstaff</td>
                </tr>
            </tbody>
        </table>`
        }
        , locked: true
    }
    , {
        id: "feat_healer"
        , type: "Feat"
        , category: "Origin"
        , name: "Healer"
        , description: {
            "Description": `You gain the following benefits.
        <p><b><i>Battle Medic.</i></b> If you have a Healer's Kit, you can expend one use of it and tend to a creature within 5 feet of yourself as a Utilize action. That creature can expend one of its Hit Point Dice, and you then roll that die. The creature regains a number of Hit Points equal to the roll plus your Proficiency Bonus.</p>
        <p><b><i>Healing Rerolls.</i></b> Whenever you roll a die to determine the number of Hit Points you restore with a spell or with this feat's Battle Medic benefit, you can reroll the die if it rolls a 1, and you must use the new roll.</p>`
        }
        , locked: true
    }
    , {
        id: "feat_lucky"
        , type: "Feat"
        , category: "Origin"
        , name: "Lucky"
        , description: {
            "Description": `You gain the following benefits.
        <p><b><i>Luck Points.</i></b> You have a number of Luck Points equal to your Proficiency Bonus and can spend the points on the benefits below. You regain your expended Luck Points when you finish a Long Rest.</p>
        <p><b><i>Advantage.</i></b> When you roll a d20 for a D20 Test, you can spend 1 Luck Point to give yourself Advantage on the roll.</p>
        <p><b><i>Disadvantage.</i></b> When a creature rolls a d20 for an attack roll against you, you can spend 1 Luck Point to impose Disadvantage on that roll.</p>`
        }
        , locked: true
    }
    , {
        id: "feat_magic_initiate_cleric"
        , type: "Feat"
        , category: "Origin"
        , name: "Magic Initiate, Cleric"
        , description: {
            "Description": `You gain the following benefits.
        <p><b><i>Two Cantrips.</i></b> You learn two cantrips of your choice from the Cleric spell list. Intelligence, Wisdom, or Charisma is your spellcasting ability for this feat's spells (choose when you select this feat).</p>
        <p><b><i>Level 1 Spell.</i></b> Choose a level 1 spell from the same list you selected for this feat's cantrips. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have.</p>
        <p><b><i>Spell Change.</i></b> Whenever you gain a new level, you can replace one of the spells you chose for this feat with a different spell of the same level from the chosen spell list.</p>
        <p><b><i>Repeatable.</i></b> You can take this feat more than once, but you must choose a different spell list each time.</p>`
        }
        // , locked: true
    }
    , {
        id: "feat_magic_initiate_druid"
        , type: "Feat"
        , category: "Origin"
        , name: "Magic Initiate, Druid"
        , description: {
            "Description": `You gain the following benefits.
        <p><b><i>Two Cantrips.</i></b> You learn two cantrips of your choice from the Druid spell list. Intelligence, Wisdom, or Charisma is your spellcasting ability for this feat's spells (choose when you select this feat).</p>
        <p><b><i>Level 1 Spell.</i></b> Choose a level 1 spell from the same list you selected for this feat's cantrips. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have.</p>
        <p><b><i>Spell Change.</i></b> Whenever you gain a new level, you can replace one of the spells you chose for this feat with a different spell of the same level from the chosen spell list.</p>
        <p><b><i>Repeatable.</i></b> You can take this feat more than once, but you must choose a different spell list each time.</p>`
        }
        , locked: true
    }
    , {
        id: "feat_magic_initiate_wizard"
        , type: "Feat"
        , category: "Origin"
        , name: "Magic Initiate, Wizard"
        , description: {
            "Description": `You gain the following benefits.
        <p><b><i>Two Cantrips.</i></b> You learn two cantrips of your choice from the Wizard spell list. Intelligence, Wisdom, or Charisma is your spellcasting ability for this feat's spells (choose when you select this feat).</p>
        <p><b><i>Level 1 Spell.</i></b> Choose a level 1 spell from the same list you selected for this feat's cantrips. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have.</p>
        <p><b><i>Spell Change.</i></b> Whenever you gain a new level, you can replace one of the spells you chose for this feat with a different spell of the same level from the chosen spell list.</p>
        <p><b><i>Repeatable.</i></b> You can take this feat more than once, but you must choose a different spell list each time.</p>`
        }
        // , locked: true
    }
    , {
        id: "feat_musician"
        , type: "Feat"
        , category: "Origin"
        , name: "Musician"
        , description: {
            "Description": `You gain the following benefits.
        <p><b><i>Instrument Training.</i></b> You gain proficiency with three Musical Instruments of your choice.</p>
        <p><b><i>Encouraging Song.</i></b> As you finish a Short or Long Rest, you can play a song on a Musical Instrument with which you have proficiency and give Heroic Inspiration to allies who hear the song. The number of allies you can affect in this way equals your Proficiency Bonus.</p>`
        }
        , locked: true
    }
    , {
        id: "feat_savage_attacker"
        , type: "Feat"
        , category: "Origin"
        , name: "Savage Attacker"
        , description: {
            "Description": `You've trained to deal particularly damaging strikes. Once per turn when you hit a target with a weapon, you can roll the weapon's damage dice twice and use either roll against the target.`
        }
        // , locked: true
    }
    , {
        id: "feat_skilled"
        , type: "Feat"
        , category: "Origin"
        , name: "Skilled"
        , description: {
            "Description": `You gain proficiency in any combination of three skills or tools of your choice.
        <p><b><i>Repeatable.</i></b> You can take this feat more than once.</p>`
        }
        , locked: true
    }
    , {
        id: "feat_tavern_brawler"
        , type: "Feat"
        , category: "Origin"
        , name: "Tavern Brawler"
        , description: {
            "Description": `You gain the following benefits.
        <p><b><i>Enhanced Unarmed Strike.</i></b> When you hit with your Unarmed Strike and deal damage, you can deal Bludgeoning damage equal to 1d4 plus your Strength modifier instead of the normal damage of an Unarmed Strike.</p>
        <p><b><i>Damage Rerolls.</i></b> Whenever you roll a damage die for your Unarmed Strike, you can reroll the die if it rolls a 1, and you must use the new roll.</p>
        <p><b><i>Improvised Weaponry.</i></b> You have proficiency with improvised weapons.</p>
        <p><b><i>Push.</i></b> When you hit a creature with an Unarmed Strike as part of the Attack action on your turn, you can deal damage to the target and also push it 5 feet away from you. You can use this benefit only once per turn.</p>`
        }
        , locked: true
    }
    , {
        id: "feat_tough"
        , type: "Feat"
        , category: "Origin"
        , name: "Tough"
        , description: {
            "Description": `Your Hit Point maximum increases by an amount equal to twice your character level when you gain this feat. Whenever you gain a character level thereafter, your Hit Point maximum increases by an additional 2 Hit Points.`
        }
        , locked: true
    }
]