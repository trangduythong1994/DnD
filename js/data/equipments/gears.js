const data_gears = [
    {
        id: "gear_acid"
        , type: "Gear"
        , name: "Acid"
        , description: {
            "Description": "When you take the Attack action, you can replace one of your attacks with throwing a vial of Acid. Target one creature or object you can see within 20 feet of yourself. The target must succeed on a Dexterity saving throw (DC 8 plus your Dexterity modifier and Proficiency Bonus) or take 2d6 Acid damage."
            , "Weight": "1 lb."
            , "Cost": "25 GP"
        }
        , locked: true
    }
    , {
        id: "gear_alchemists_fire"
        , type: "Gear"
        , name: "Alchemist's Fire"
        , description: {
            "Description": "When you take the Attack action, you can replace one of your attacks with throwing a flask of Alchemist’s Fire. Target one creature or object you can see within 20 feet of yourself. The target must succeed on a Dexterity saving throw (DC 8 plus your Dexterity modifier and Proficiency Bonus) or take 1d4 Fire damage and start burning (see the rules glossary)."
            , "Weight": "1 lb."
            , "Cost": "50 GP"
        }
        , locked: true
    }
    , {
        id: "gear_ammunition_arrows"
        , type: "Gear"
        , name: "Ammunition, Arrows"
        , description: {
            "Description": "Ammunition is required by a weapon that has the Ammunition property. A weapon’s description specifies the type of ammunition used by the weapon. This purchase provides 20 Arrows, typically stored in a Quiver."
            , "Weight": "1 lb."
            , "Cost": "1 GP"
        }
        // , locked: true
    }
    , {
        id: "gear_ammunition_bolts"
        , type: "Gear"
        , name: "Ammunition, Bolts"
        , description: {
            "Description": "Ammunition is required by a weapon that has the Ammunition property. A weapon’s description specifies the type of ammunition used by the weapon. This purchase provides 20 Bolts, typically stored in a Case."
            , "Weight": "1½ lb."
            , "Cost": "1 GP"
        }
        , locked: true
    }
    , {
        id: "gear_ammunition_bullets_firearm"
        , type: "Gear"
        , name: "Ammunition, Bullets (Firearm)"
        , description: {
            "Description": "Ammunition is required by a weapon that has the Ammunition property. A weapon’s description specifies the type of ammunition used by the weapon. This purchase provides 10 Firearm Bullets, typically stored in a Pouch."
            , "Weight": "2 lb."
            , "Cost": "3 GP"
        }
        , locked: true
    }
    , {
        id: "gear_ammunition_bullets_sling"
        , type: "Gear"
        , name: "Ammunition, Bullets (Sling)"
        , description: {
            "Description": "Ammunition is required by a weapon that has the Ammunition property. A weapon’s description specifies the type of ammunition used by the weapon. This purchase provides 20 Sling Bullets, typically stored in a Pouch."
            , "Weight": "1½ lb."
            , "Cost": "4 CP"
        }
        , locked: true
    }
    , {
        id: "gear_ammunition_needles"
        , type: "Gear"
        , name: "Ammunition, Needles"
        , description: {
            "Description": "Ammunition is required by a weapon that has the Ammunition property. A weapon’s description specifies the type of ammunition used by the weapon. This purchase provides 50 Needles, typically stored in a Pouch."
            , "Weight": "1 lb."
            , "Cost": "1 GP"
        }
        , locked: true
    }
    , {
        id: "gear_antitoxin"
        , type: "Gear"
        , name: "Antitoxin"
        , description: {
            "Description": "As a Bonus Action, you can drink a vial of Antitoxin to gain Advantage on saving throws to avoid or end the Poisoned condition for 1 hour."
            , "Weight": "-"
            , "Cost": "50 GP"
        }
        , locked: true
    }
    , {
        id: "gear_arcane_focus_crystal"
        , type: "Gear"
        , name: "Arcane Focus, Crystal"
        , description: {
            "Description": "An Arcane Focus takes one of the forms in the Arcane Focuses table and is bejeweled or carved to channel arcane magic. A Sorcerer, Warlock, or Wizard can use such an item as a Spellcasting Focus."
            , "Weight": "1 lb."
            , "Cost": "10 GP"
        }
        , locked: true
    }
    , {
        id: "gear_arcane_focus_orb"
        , type: "Gear"
        , name: "Arcane Focus, Orb"
        , description: {
            "Description": "An Arcane Focus takes one of the forms in the Arcane Focuses table and is bejeweled or carved to channel arcane magic. A Sorcerer, Warlock, or Wizard can use such an item as a Spellcasting Focus."
            , "Weight": "3 lb."
            , "Cost": "20 GP"
        }
        , locked: true
    }
    , {
        id: "gear_arcane_focus_rod"
        , type: "Gear"
        , name: "Arcane Focus, Rod"
        , description: {
            "Description": "An Arcane Focus takes one of the forms in the Arcane Focuses table and is bejeweled or carved to channel arcane magic. A Sorcerer, Warlock, or Wizard can use such an item as a Spellcasting Focus."
            , "Weight": "2 lb."
            , "Cost": "10 GP"
        }
        , locked: true
    }
    , {
        id: "gear_arcane_focus_staff"
        , type: "Gear"
        , name: "Arcane Focus, Staff"
        , description: {
            "Description": "An Arcane Focus takes one of the forms in the Arcane Focuses table and is bejeweled or carved to channel arcane magic. A Sorcerer, Warlock, or Wizard can use such an item as a Spellcasting Focus. (Also a Quarterstaff)"
            , "Weight": "4 lb."
            , "Cost": "5 GP"
        }
        , locked: true
    }
    , {
        id: "gear_arcane_focus_wand"
        , type: "Gear"
        , name: "Arcane Focus, Wand"
        , description: {
            "Description": "An Arcane Focus takes one of the forms in the Arcane Focuses table and is bejeweled or carved to channel arcane magic. A Sorcerer, Warlock, or Wizard can use such an item as a Spellcasting Focus."
            , "Weight": "1 lb."
            , "Cost": "10 GP"
        }
        , locked: true
    }
    , {
        id: "gear_backpack"
        , type: "Gear"
        , name: "Backpack"
        , description: {
            "Description": "A Backpack holds up to 30 pounds within 1 cubic foot. It can also serve as a saddlebag."
            , "Weight": "5 lb."
            , "Cost": "2 GP"
        }
        // , locked: true
    }
    , {
        id: "gear_ball_bearings"
        , type: "Gear"
        , name: "Ball Bearings"
        , description: {
            "Description": "As a Utilize action, you can spill Ball Bearings from their pouch. They spread to cover a level, 10-foot-square area within 10 feet of yourself. A creature that enters this area for the first time on a turn must succeed on a DC 10 Dexterity saving throw or have the Prone condition. It takes 10 minutes to recover the Ball Bearings."
            , "Weight": "2 lb."
            , "Cost": "1 GP"
        }
        , locked: true
    }
    , {
        id: "gear_barrel"
        , type: "Gear"
        , name: "Barrel"
        , description: {
            "Description": "A Barrel holds up to 40 gallons of liquid or up to 4 cubic feet of dry goods."
            , "Weight": "70 lb."
            , "Cost": "2 GP"
        }
        , locked: true
    }
    , {
        id: "gear_basket"
        , type: "Gear"
        , name: "Basket"
        , description: {
            "Description": "A Basket holds up to 40 pounds within 2 cubic feet."
            , "Weight": "2 lb."
            , "Cost": "4 SP"
        }
        , locked: true
    }
    , {
        id: "gear_bedroll"
        , type: "Gear"
        , name: "Bedroll"
        , description: {
            "Description": "A Bedroll sleeps one Small or Medium creature. While in a Bedroll, you automatically succeed on saving throws against extreme cold (see the Dungeon Master’s Guide)."
            , "Weight": "7 lb."
            , "Cost": "1 GP"
        }
        , locked: true
    }
    , {
        id: "gear_bell"
        , type: "Gear"
        , name: "Bell"
        , description: {
            "Description": "When rung as a Utilize action, a Bell produces a sound that can be heard up to 60 feet away."
            , "Weight": "-"
            , "Cost": "1 GP"
        }
        , locked: true
    }
    , {
        id: "gear_blanket"
        , type: "Gear"
        , name: "Blanket"
        , description: {
            "Description": "While wrapped in a blanket, you have Advantage on saving throws against extreme cold (see the Dungeon Master’s Guide)."
            , "Weight": "3 lb."
            , "Cost": "5 SP"
        }
        // , locked: true
    }
    , {
        id: "gear_block_and_tackle"
        , type: "Gear"
        , name: "Block and Tackle"
        , description: {
            "Description": "A Block and Tackle allows you to hoist up to four times the weight you can normally lift."
            , "Weight": "5 lb."
            , "Cost": "1 GP"
        }
        , locked: true
    }
    // , {
    //     id: "gear_bright_fungal_cloak"
    //     , type: "Gear"
    //     , name: "Bright Fungal Cloak"
    //     , description: {
    //         "Description": "While wearing a Bright Fungal Cloak, you can take a Bonus Action to furl or unfurl it. When the cloak is unfurled, it sheds Bright Light in a 5-foot radius and Dim Light for an additional 5 feet. One pound of fungus is sewn into a Bright Fungal Cloak. This fungus can be eaten as food. Once all the fungus is consumed, the cloak becomes a mundane set of Traveler’s Clothes."
    //         , "Weight": "-"
    //         , "Cost": "25 GP"
    //     }
    //     , locked: true
    // }
, {
        id: "gear_book_arcana"
        , type: "Gear"
        , name: "Book, Arcana"
        , description: {
            "Description": "A Book contains fiction or nonfiction. If you consult an accurate nonfiction Book about its topic, you gain a +5 bonus to Intelligence (Arcana) checks you make about that topic."
            , "Weight": "5 lb."
            , "Cost": "25 GP"
        }
        , locked: true
    }
    , {
        id: "gear_book_history"
        , type: "Gear"
        , name: "Book, History"
        , description: {
            "Description": "A Book contains fiction or nonfiction. If you consult an accurate nonfiction Book about its topic, you gain a +5 bonus to Intelligence (History) checks you make about that topic."
            , "Weight": "5 lb."
            , "Cost": "25 GP"
        }
        // , locked: true
    }
    , {
        id: "gear_book_nature"
        , type: "Gear"
        , name: "Book, Nature"
        , description: {
            "Description": "A Book contains fiction or nonfiction. If you consult an accurate nonfiction Book about its topic, you gain a +5 bonus to Intelligence (Nature) checks you make about that topic."
            , "Weight": "5 lb."
            , "Cost": "25 GP"
        }
        , locked: true
    }
    , {
        id: "gear_book_religion"
        , type: "Gear"
        , name: "Book, Religion"
        , description: {
            "Description": "A Book contains fiction or nonfiction. If you consult an accurate nonfiction Book about its topic, you gain a +5 bonus to Intelligence (Religion) checks you make about that topic."
            , "Weight": "5 lb."
            , "Cost": "25 GP"
        }
        // , locked: true
    }
    , {
        id: "gear_bottle_glass"
        , type: "Gear"
        , name: "Bottle, Glass"
        , description: {
            "Description": "A Glass Bottle holds up to 1½ pints."
            , "Weight": "2 lb."
            , "Cost": "2 GP"
        }
        , locked: true
    }
    , {
        id: "gear_bucket"
        , type: "Gear"
        , name: "Bucket"
        , description: {
            "Description": "A Bucket holds up to half a cubic foot of contents."
            , "Weight": "2 lb."
            , "Cost": "5 CP"
        }
        , locked: true
    }
    , {
        id: "gear_burglars_pack"
        , type: "Gear"
        , name: "Burglar's Pack"
        , description: {
            "Description": "A Burglar’s Pack contains the following items: Backpack, Ball Bearings, Bell, 10 Candles, Crowbar, Hooded Lantern, 7 flasks of Oil, 5 days of Rations, Rope, Tinderbox, and Waterskin."
            , "Weight": "42 lb."
            , "Cost": "16 GP"
        }
        , locked: true
    }
    , {
        id: "gear_caltrops"
        , type: "Gear"
        , name: "Caltrops"
        , description: {
            "Description": "As a Utilize action, you can spread Caltrops from their bag to cover a 5-foot-square area within 5 feet of yourself. A creature that enters this area for the first time on a turn must succeed on a DC 15 Dexterity saving throw or take 1 Piercing damage and have its Speed reduced to 0 until the start of its next turn. It takes 10 minutes to recover the Caltrops."
            , "Weight": "2 lb."
            , "Cost": "1 GP"
        }
        // , locked: true
    }
    , {
        id: "gear_candle"
        , type: "Gear"
        , name: "Candle"
        , description: {
            "Description": "For 1 hour, a lit Candle sheds Bright Light in a 5-foot radius and Dim Light for an additional 5 feet."
            , "Weight": "-"
            , "Cost": "1 CP"
        }
        , locked: true
    }
    , {
        id: "gear_case"
        , type: "Gear"
        , name: "Case"
        , description: {
            "Description": "Cases are cylindrical containers designed to hold and protect specific items.\n\n| Variant | Weight | Cost | Description |\n|---|---|---|---|\n| Crossbow Bolt | 1 lb. | 1 GP | A Crossbow Bolt Case holds up to 20 Bolts. |\n| Map or Scroll | 1 lb. | 1 GP | A Map or Scroll Case holds up to 10 sheets of paper or 5 sheets of parchment. |"
            , "Weight": "Varies"
            , "Cost": "Varies"
        }
        , locked: true
    }
    , {
        id: "gear_chain"
        , type: "Gear"
        , name: "Chain"
        , description: {
            "Description": "As a Utilize action, you can wrap a Chain around an unwilling creature within 5 feet of yourself that has the Grappled, Incapacitated, or Restrained condition if you succeed on a DC 13 Strength (Athletics) check. If the creature’s legs are bound, the creature has the Restrained condition until it escapes. Escaping the Chain requires the creature to make a successful DC 18 Dexterity (Acrobatics) check as an action. Bursting the Chain requires a successful DC 20 Strength (Athletics) check as an action."
            , "Weight": "10 lb."
            , "Cost": "5 GP"
        }
        , locked: true
    }
    , {
        id: "gear_chest"
        , type: "Gear"
        , name: "Chest"
        , description: {
            "Description": "A Chest holds up to 12 cubic feet of contents."
            , "Weight": "25 lb."
            , "Cost": "5 GP"
        }
        , locked: true
    }
    , {
        id: "gear_climbers_kit"
        , type: "Gear"
        , name: "Climber's Kit"
        , description: {
            "Description": "A Climber’s Kit includes boot tips, gloves, pitons, and a harness. As a Utilize action, you can use the Climber’s Kit to anchor yourself; when you do, you can’t fall more than 25 feet from the anchor point, and you can’t move more than 25 feet from there without undoing the anchor as a Bonus Action."
            , "Weight": "12 lb."
            , "Cost": "25 GP"
        }
        , locked: true
    }
    , {
        id: "gear_clothes_fine"
        , type: "Gear"
        , name: "Clothes, Fine"
        , description: {
            "Description": "Fine Clothes are made of expensive fabrics and adorned with expertly crafted details. Some events and locations admit only people wearing these clothes."
            , "Weight": "6 lb."
            , "Cost": "15 GP"
        }
        // , locked: true
    }
    , {
        id: "gear_clothes_travelers"
        , type: "Gear"
        , name: "Clothes, Traveler's"
        , description: {
            "Description": "Traveler’s Clothes are resilient garments designed for travel in various environments."
            , "Weight": "4 lb."
            , "Cost": "2 GP"
        }
        // , locked: true
    }
    , {
        id: "gear_component_pouch"
        , type: "Gear"
        , name: "Component Pouch"
        , description: {
            "Description": "A Component Pouch is watertight and filled with compartments that hold all the free Material components of your spells."
            , "Weight": "2 lb."
            , "Cost": "25 GP"
        }
        , locked: true
    }
    , {
        id: "gear_costume"
        , type: "Gear"
        , name: "Costume"
        , description: {
            "Description": "While wearing a Costume, you have Advantage on any ability check you make to impersonate the person or type of person it represents."
            , "Weight": "4 lb."
            , "Cost": "5 GP"
        }
        , locked: true
    }
    , {
        id: "gear_crowbar"
        , type: "Gear"
        , name: "Crowbar"
        , description: {
            "Description": "Using a Crowbar gives you Advantage on Strength checks where the Crowbar’s leverage can be applied."
            , "Weight": "5 lb."
            , "Cost": "2 GP"
        }
        // , locked: true
    }
    // , {
    //     id: "gear_desert_clothing"
    //     , type: "Gear"
    //     , name: "Desert Clothing"
    //     , description: {
    //         "Description": "When you are wearing Desert Clothing and not wearing Medium or Heavy armor, you automatically succeed on saving throws against the effects of extreme heat. See chapter 3 of the Dungeon Master’s Guide for rules on extreme heat."
    //         , "Weight": "-"
    //         , "Cost": "5 GP"
    //     }
    //     , locked: true
    // }
    // , {
    //     id: "gear_devil_mask"
    //     , type: "Gear"
    //     , name: "Devil Mask"
    //     , description: {
    //         "Description": "While you are wearing a Devil Mask, other creatures have Disadvantage on Intelligence (Investigation) and Wisdom (Insight) checks made to discern your true identity or intentions."
    //         , "Weight": "-"
    //         , "Cost": "25 GP"
    //     }
    //     , locked: true
    // }
    , {
        id: "gear_diplomats_pack"
        , type: "Gear"
        , name: "Diplomat's Pack"
        , description: {
            "Description": "A Diplomat’s Pack contains the following items: Chest, Fine Clothes, Ink, 5 Ink Pens, Lamp, 2 Map or Scroll Cases, 4 flasks of Oil, 5 sheets of Paper, 5 sheets of Parchment, Perfume, and Tinderbox."
            , "Weight": "39 lb."
            , "Cost": "39 GP"
        }
        , locked: true
    }
    , {
        id: "gear_druidic_focus_sprig_of_mistletoe"
        , type: "Gear"
        , name: "Druidic Focus, Sprig of mistletoe"
        , description: {
            "Description": "A Druidic Focus takes one of the forms in the Druidic Focuses table and is carved, tied with ribbon, or painted to channel primal magic. A Druid or Ranger can use such an object as a Spellcasting Focus."
            , "Weight": "-"
            , "Cost": "1 GP"
        }
        , locked: true
    }
    , {
        id: "gear_druidic_focus_wooden_staff"
        , type: "Gear"
        , name: "Druidic Focus, Wooden staff"
        , description: {
            "Description": "A Druidic Focus takes one of the forms in the Druidic Focuses table and is carved, tied with ribbon, or painted to channel primal magic. A Druid or Ranger can use such an object as a Spellcasting Focus. (Also a Quarterstaff)"
            , "Weight": "4 lb."
            , "Cost": "5 GP"
        }
        , locked: true
    }
    , {
        id: "gear_druidic_focus_yew_wand"
        , type: "Gear"
        , name: "Druidic Focus, Yew wand"
        , description: {
            "Description": "A Druidic Focus takes one of the forms in the Druidic Focuses table and is carved, tied with ribbon, or painted to channel primal magic. A Druid or Ranger can use such an object as a Spellcasting Focus."
            , "Weight": "1 lb."
            , "Cost": "10 GP"
        }
        , locked: true
    }
    , {
        id: "gear_dungeoneers_pack"
        , type: "Gear"
        , name: "Dungeoneer's Pack"
        , description: {
            "Description": "A Dungeoneer’s Pack contains the following items: Backpack, Caltrops, Crowbar, 2 flasks of Oil, 10 days of Rations, Rope, Tinderbox, 10 Torches, and Waterskin."
            , "Weight": "55 lb."
            , "Cost": "12 GP"
        }
        , locked: true
    }
    , {
        id: "gear_entertainers_pack"
        , type: "Gear"
        , name: "Entertainer's Pack"
        , description: {
            "Description": "An Entertainer’s Pack contains the following items: Backpack, Bedroll, Bell, Bullseye Lantern, 3 Costumes, Mirror, 8 flasks of Oil, 9 days of Rations, Tinderbox, and Waterskin."
            , "Weight": "58.5 lb."
            , "Cost": "40 GP"
        }
        , locked: true
    }
    , {
        id: "gear_explorers_pack"
        , type: "Gear"
        , name: "Explorer's Pack"
        , description: {
            "Description": "An Explorer’s Pack contains the following items: Backpack, Bedroll, 2 flasks of Oil, 10 days of Rations, Rope, Tinderbox, 10 Torches, and Waterskin."
            , "Weight": "55 lb."
            , "Cost": "10 GP"
        }
        , locked: true
    }
    , {
        id: "gear_flask"
        , type: "Gear"
        , name: "Flask"
        , description: {
            "Description": "A Flask holds up to 1 pint."
            , "Weight": "1 lb."
            , "Cost": "2 CP"
        }
        , locked: true
    }
    // , {
    //     id: "gear_garb_of_light_and_shadow"
    //     , type: "Gear"
    //     , name: "Garb of Light and Shadow"
    //     , description: {
    //         "Description": "This garb appeals to Fey from one Domain of Delight, such as the Gloaming Court or the Summer Court. While wearing the garb, you have Advantage on ability checks to influence Fey associated with that Domain of Delight."
    //         , "Weight": "-"
    //         , "Cost": "50 GP"
    //     }
    //     , locked: true
    // }
    // , {
    //     id: "gear_genie_robe"
    //     , type: "Gear"
    //     , name: "Genie Robe"
    //     , description: {
    //         "Description": "This robe appeals to Elementals associated with a particular Elemental Plane (Air, Earth, Fire, Water). While wearing a Genie Robe, you have Advantage on ability checks made to influence Elementals associated with that plane."
    //         , "Weight": "-"
    //         , "Cost": "50 GP"
    //     }
    //     , locked: true
    // }
    , {
        id: "gear_grappling_hook"
        , type: "Gear"
        , name: "Grappling Hook"
        , description: {
            "Description": "As a Utilize action, you can throw the Grappling Hook at a railing, a ledge, or another catch within 50 feet of yourself, and the hook catches on if you succeed on a DC 13 Dexterity (Acrobatics) check. If you tied a Rope to the hook, you can then climb it."
            , "Weight": "4 lb."
            , "Cost": "5 GP"
        }
        , locked: true
    }
    , {
        id: "gear_healers_kit"
        , type: "Gear"
        , name: "Healer's Kit"
        , description: {
            "Description": "A Healer’s Kit has ten uses. As a Utilize action, you can expend one of its uses to stabilize an Unconscious creature that has 0 Hit Points without needing to make a Wisdom (Medicine) check."
            , "Weight": "3 lb."
            , "Cost": "5 GP"
        }
        , locked: true
    }
    , {
        id: "gear_holy_symbol_amulet"
        , type: "Gear"
        , name: "Holy Symbol, Amulet"
        , description: {
            "Description": "A Holy Symbol takes one of the forms in the Holy Symbol table and is bejeweled or painted to channel divine magic. A Cleric or Paladin can use a Holy Symbol as a Spellcasting Focus. (Worn or held)"
            , "Weight": "1 lb."
            , "Cost": "5 GP"
        }
        // , locked: true
    }
    , {
        id: "gear_holy_symbol_emblem"
        , type: "Gear"
        , name: "Holy Symbol, Emblem"
        , description: {
            "Description": "A Holy Symbol takes one of the forms in the Holy Symbol table and is bejeweled or painted to channel divine magic. A Cleric or Paladin can use a Holy Symbol as a Spellcasting Focus. (Borne on fabric or a Shield)"
            , "Weight": "-"
            , "Cost": "5 GP"
        }
        // , locked: true
    }
    , {
        id: "gear_holy_symbol_reliquary"
        , type: "Gear"
        , name: "Holy Symbol, Reliquary"
        , description: {
            "Description": "A Holy Symbol takes one of the forms in the Holy Symbol table and is bejeweled or painted to channel divine magic. A Cleric or Paladin can use a Holy Symbol as a Spellcasting Focus. (Held)"
            , "Weight": "2 lb."
            , "Cost": "5 GP"
        }
        // , locked: true
    }
    , {
        id: "gear_holy_water"
        , type: "Gear"
        , name: "Holy Water"
        , description: {
            "Description": "When you take the Attack action, you can replace one of your attacks with throwing a flask of Holy Water. Target one creature you can see within 20 feet of yourself. The target must succeed on a Dexterity saving throw (DC 8 plus your Dexterity modifier and Proficiency Bonus) or take 2d8 Radiant damage if it is a Fiend or an Undead."
            , "Weight": "1 lb."
            , "Cost": "25 GP"
        }
        // , locked: true
    }
    , {
        id: "gear_hunting_trap"
        , type: "Gear"
        , name: "Hunting Trap"
        , description: {
            "Description": "As a Utilize action, you can set a Hunting Trap, which is a sawtooth steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground. A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 Piercing damage and have its Speed reduced to 0 until the start of its next turn. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet). A creature can use its action to make a DC 13 Strength (Athletics) check, freeing itself or another creature within its reach on a success. Each failed check deals 1 Piercing damage to the trapped creature."
            , "Weight": "25 lb."
            , "Cost": "5 GP"
        }
        , locked: true
    }
    , {
        id: "gear_ink"
        , type: "Gear"
        , name: "Ink"
        , description: {
            "Description": "Ink comes in a 1-ounce bottle, which provides enough ink to write about 500 pages."
            , "Weight": "-"
            , "Cost": "10 GP"
        }
        , locked: true
    }
    , {
        id: "gear_ink_pen"
        , type: "Gear"
        , name: "Ink Pen"
        , description: {
            "Description": "Using Ink, an Ink Pen is used to write or draw."
            , "Weight": "-"
            , "Cost": "2 CP"
        }
        , locked: true
    }
    , {
        id: "gear_jug"
        , type: "Gear"
        , name: "Jug"
        , description: {
            "Description": "A Jug holds up to 1 gallon."
            , "Weight": "4 lb."
            , "Cost": "2 CP"
        }
        , locked: true
    }
    , {
        id: "gear_ladder"
        , type: "Gear"
        , name: "Ladder"
        , description: {
            "Description": "A Ladder is 10 feet tall. You must climb to move up or down it."
            , "Weight": "25 lb."
            , "Cost": "1 SP"
        }
        , locked: true
    }
    , {
        id: "gear_lamp"
        , type: "Gear"
        , name: "Lamp"
        , description: {
            "Description": "A Lamp burns Oil as fuel to cast Bright Light in a 15-foot radius and Dim Light for an additional 30 feet."
            , "Weight": "1 lb."
            , "Cost": "5 SP"
        }
        , locked: true
    }
    , {
        id: "gear_lantern"
        , type: "Gear"
        , name: "Lantern"
        , description: {
            "Description": "Lanterns burn Oil as fuel to cast light.\n\n| Variant | Weight | Cost | Description |\n|---|---|---|---|\n| Bullseye | 2 lb. | 10 GP | A Bullseye Lantern burns Oil as fuel to cast Bright Light in a 60-foot Cone and Dim Light for an additional 60 feet. |\n| Hooded | 2 lb. | 5 GP | A Hooded Lantern burns Oil as fuel to cast Bright Light in a 30-foot radius and Dim Light for an additional 30 feet. As a Bonus Action, you can lower the hood, reducing the light to Dim Light in a 5-foot radius, or raise it again. |"
            , "Weight": "Varies"
            , "Cost": "Varies"
        }
        , locked: true
    }
    , {
        id: "gear_lock"
        , type: "Gear"
        , name: "Lock"
        , description: {
            "Description": "A Lock comes with a key. Without the key, a creature can use Thieves’ Tools to pick this Lock with a successful DC 15 Dexterity (Sleight of Hand) check."
            , "Weight": "1 lb."
            , "Cost": "10 GP"
        }
        , locked: true
    }
    // , {
    //     id: "gear_locking_spellbook"
    //     , type: "Gear"
    //     , name: "Locking Spellbook"
    //     , description: {
    //         "Description": "This 100-page leather-bound tome can be used as a Spellbook. It is closed with a lock that comes with a key. As a Utilize action, a creature can try to pick the lock using Thieves’ Tools, doing so with a successful DC 15 Dexterity (Sleight of Hand) check."
    //         , "Weight": "-"
    //         , "Cost": "35 GP"
    //     }
    //     , locked: true
    // }
    , {
        id: "gear_magnifying_glass"
        , type: "Gear"
        , name: "Magnifying Glass"
        , description: {
            "Description": "A Magnifying Glass grants Advantage on any ability check made to appraise or inspect a highly detailed item. Lighting a fire with a Magnifying Glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite."
            , "Weight": "-"
            , "Cost": "100 GP"
        }
        , locked: true
    }
    , {
        id: "gear_manacles"
        , type: "Gear"
        , name: "Manacles"
        , description: {
            "Description": "As a Utilize action, you can use Manacles to bind an unwilling Small or Medium creature within 5 feet of yourself that has the Grappled, Incapacitated, or Restrained condition if you succeed on a DC 13 Dexterity (Sleight of Hand) check. While bound, a creature has Disadvantage on attack rolls, and the creature is Restrained if the Manacles are attached to a chain or hook that is fixed in place. Escaping the Manacles requires a successful DC 20 Dexterity (Sleight of Hand) check as an action. Bursting them requires a successful DC 25 Strength (Athletics) check as an action. Each set of Manacles comes with a key. Without the key, a creature can use Thieves’ Tools to pick the Manacles’ lock with a successful DC 15 Dexterity (Sleight of Hand) check."
            , "Weight": "6 lb."
            , "Cost": "2 GP"
        }
        , locked: true
    }
    , {
        id: "gear_map"
        , type: "Gear"
        , name: "Map"
        , description: {
            "Description": "If you consult an accurate Map, you gain a +5 bonus to Wisdom (Survival) checks you make to find your way in the place represented on it."
            , "Weight": "-"
            , "Cost": "1 GP"
        }
        , locked: true
    }
    , {
        id: "gear_mirror"
        , type: "Gear"
        , name: "Mirror"
        , description: {
            "Description": "A handheld steel Mirror is useful for personal cosmetics but also for peeking around corners and reflecting light as a signal."
            , "Weight": "1/2 lb."
            , "Cost": "5 GP"
        }
        , locked: true
    }
    // , {
    //     id: "gear_monster_camouflage"
    //     , type: "Gear"
    //     , name: "Monster Camouflage"
    //     , description: {
    //         "Description": "A suit of Monster Camouflage looks like a Beast or Monstrosity, such as an owlbear. To discern that you’re disguised, a creature must take the Study action to inspect your appearance and succeed on a DC 10 Intelligence (Investigation or Nature) check. The creature has Advantage on this check if it is within 30 feet of you and automatically succeeds on this check if you do anything the monster you’re disguised as couldn’t do."
    //         , "Weight": "-"
    //         , "Cost": "50 GP"
    //     }
    //     , locked: true
    // }
    , {
        id: "gear_net"
        , type: "Gear"
        , name: "Net"
        , description: {
            "Description": "When you take the Attack action, you can replace one of your attacks with throwing a Net. Target a creature you can see within 15 feet of yourself. The target must succeed on a Dexterity saving throw (DC 8 plus your Dexterity modifier and Proficiency Bonus) or have the Restrained condition until it escapes. The target succeeds automatically if it is Huge or larger. To escape, the target or a creature within 5 feet of it must take an action to make a DC 10 Strength (Athletics) check, freeing the Restrained creature on a success. Destroying the Net (AC 10; 5 HP; Immunity to Bludgeoning, Poison, and Psychic damage) also frees the target, ending the effect."
            , "Weight": "3 lb."
            , "Cost": "1 GP"
        }
        , locked: true
    }
    , {
        id: "gear_oil"
        , type: "Gear"
        , name: "Oil"
        , description: {
            "Description": `You can douse a creature, object, or space with Oil or use it as fuel, as detailed below.
            <p><b><i>Dousing a Creature or an Object.</b></i> When you take the Attack action, you can replace one of your attacks with throwing an Oil flask. Target one creature or object within 20 feet of yourself. The target must succeed on a Dexterity saving throw (DC 8 plus your Dexterity modifier and Proficiency Bonus) or be covered in oil. If the target takes Fire damage before the oil dries (after 1 minute), the target takes an extra 5 Fire damage from burning oil.
            <p><b><i>Dousing a Space.</b></i> You can take the Utilize action to pour an Oil flask on level ground to cover a 5-foot-square area within 5 feet of yourself. If lit, the oil burns until the end of the turn 2 rounds from when the oil was lit (or 12 seconds) and deals 5 Fire damage to any creature that enters the area or ends its turn there. A creature can take this damage only once per turn.
            <p><b><i>Fuel.</b></i> Oil serves as fuel for Lamps and Lanterns. Once lit, a flask of Oil burns for 6 hours in a Lamp or Lantern. That duration doesn’t need to be consecutive; you can extinguish the burning Oil (as a Utilize action) and rekindle it again until it has burned for a total of 6 hours.</p>`
            , "Weight": "1 lb."
            , "Cost": "1 SP"
        }
        // , locked: true
    }
    , {
        id: "gear_paper"
        , type: "Gear"
        , name: "Paper"
        , description: {
            "Description": "One sheet of Paper can hold about 250 handwritten words."
            , "Weight": "-"
            , "Cost": "2 SP"
        }
        , locked: true
    }
    , {
        id: "gear_parchment"
        , type: "Gear"
        , name: "Parchment"
        , description: {
            "Description": "One sheet of Parchment can hold about 250 handwritten words."
            , "Weight": "-"
            , "Cost": "1 SP"
        }
        // , locked: true
    }
    , {
        id: "gear_perfume"
        , type: "Gear"
        , name: "Perfume"
        , description: {
            "Description": "Perfume comes in a 4-ounce vial. For 1 hour after applying Perfume to yourself, you have Advantage on Charisma (Persuasion) checks made to influence an Indifferent Humanoid within 5 feet of yourself."
            , "Weight": "-"
            , "Cost": "5 GP"
        }
        , locked: true
    }
    , {
        id: "gear_poison_basic"
        , type: "Gear"
        , name: "Poison, Basic"
        , description: {
            "Description": "As a Bonus Action, you can use a vial of Basic Poison to coat one weapon or up to three pieces of ammunition. A creature that takes Piercing or Slashing damage from the poisoned weapon or ammunition takes an extra 1d4 Poison damage. Once applied, the poison retains potency for 1 minute or until its damage is dealt, whichever comes first."
            , "Weight": "-"
            , "Cost": "100 GP"
        }
        , locked: true
    }
    , {
        id: "gear_pole"
        , type: "Gear"
        , name: "Pole"
        , description: {
            "Description": "A Pole is 10 feet long. You can use it to touch something up to 10 feet away. If you must make a Strength (Athletics) check as part of a High or Long Jump, you can use the Pole to vault, giving yourself Advantage on the check."
            , "Weight": "7 lb."
            , "Cost": "5 CP"
        }
        , locked: true
    }
    , {
        id: "gear_pot_iron"
        , type: "Gear"
        , name: "Pot, Iron"
        , description: {
            "Description": "An Iron Pot holds up to 1 gallon."
            , "Weight": "10 lb."
            , "Cost": "2 GP"
        }
        , locked: true
    }
    , {
        id: "gear_potion_of_healing"
        , type: "Gear"
        , name: "Potion of Healing"
        , description: {
            "Description": "This potion is a magic item. As a Bonus Action, you can drink it or administer it to another creature within 5 feet of yourself. The creature that drinks the magical red fluid in this vial regains 2d4 + 2 Hit Points."
            , "Weight": "1/2 lb."
            , "Cost": "50 GP"
        }
        , locked: true
    }
    , {
        id: "gear_pouch"
        , type: "Gear"
        , name: "Pouch"
        , description: {
            "Description": "A Pouch holds up to 6 pounds within one-fifth of a cubic foot."
            , "Weight": "1 lb."
            , "Cost": "5 SP"
        }
        // , locked: true
    }
    , {
        id: "gear_priests_pack"
        , type: "Gear"
        , name: "Priest's Pack"
        , description: {
            "Description": "A Priest’s Pack contains the following items: Backpack, Blanket, Holy Water, Lamp, 7 days of Rations, Robe, and Tinderbox."
            , "Weight": "29 lb."
            , "Cost": "33 GP"
        }
        , locked: true
    }
    , {
        id: "gear_quiver"
        , type: "Gear"
        , name: "Quiver"
        , description: {
            "Description": "A Quiver holds up to 20 Arrows."
            , "Weight": "1 lb."
            , "Cost": "1 GP"
        }
        // , locked: true
    }
    , {
        id: "gear_ram_portable"
        , type: "Gear"
        , name: "Ram, Portable"
        , description: {
            "Description": "You can use a Portable Ram to break down doors. When doing so, you gain a +4 bonus to the Strength check. One other character can help you use the ram, giving you Advantage on this check."
            , "Weight": "35 lb."
            , "Cost": "4 GP"
        }
        , locked: true
    }
    , {
        id: "gear_rations"
        , type: "Gear"
        , name: "Rations"
        , description: {
            "Description": "Rations consist of travel-ready food, including jerky, dried fruit, hardtack, and nuts. See “Malnutrition” in the rules glossary for the risks of not eating."
            , "Weight": "2 lb."
            , "Cost": "5 SP"
        }
        // , locked: true
    }
    , {
        id: "gear_robe"
        , type: "Gear"
        , name: "Robe"
        , description: {
            "Description": "A Robe has vocational or ceremonial significance. Some events and locations admit only people wearing a Robe bearing certain colors or symbols."
            , "Weight": "4 lb."
            , "Cost": "1 GP"
        }
        // , locked: true
    }
    , {
        id: "gear_rope"
        , type: "Gear"
        , name: "Rope"
        , description: {
            "Description": "As a Utilize action, you can tie a knot with Rope if you succeed on a DC 10 Dexterity (Sleight of Hand) check. The Rope can be burst with a successful DC 20 Strength (Athletics) check. You can bind an unwilling creature with the Rope only if the creature has the Grappled, Incapacitated, or Restrained condition. If the creature’s legs are bound, the creature has the Restrained condition until it escapes. Escaping the Rope requires the creature to make a successful DC 15 Dexterity (Acrobatics) check as an action."
            , "Weight": "5 lb."
            , "Cost": "1 GP"
        }
        , locked: true
    }
    , {
        id: "gear_sack"
        , type: "Gear"
        , name: "Sack"
        , description: {
            "Description": "A Sack holds up to 30 pounds within 1 cubic foot."
            , "Weight": "1/2 lb."
            , "Cost": "1 CP"
        }
        // , locked: true
    }
    , {
        id: "gear_scholars_pack"
        , type: "Gear"
        , name: "Scholar's Pack"
        , description: {
            "Description": "A Scholar’s Pack contains the following items: Backpack, Book, Ink, Ink Pen, Lamp, 10 flasks of Oil, 10 sheets of Parchment, and Tinderbox."
            , "Weight": "22 lb."
            , "Cost": "40 GP"
        }
        , locked: true
    }
    , {
        id: "gear_shovel"
        , type: "Gear"
        , name: "Shovel"
        , description: {
            "Description": "Working for 1 hour, you can use a Shovel to dig a hole that is 5 feet on each side in soil or similar material."
            , "Weight": "5 lb."
            , "Cost": "2 GP"
        }
        , locked: true
    }
    , {
        id: "gear_signal_whistle"
        , type: "Gear"
        , name: "Signal Whistle"
        , description: {
            "Description": "When blown as a Utilize action, a Signal Whistle produces a sound that can be heard up to 600 feet away."
            , "Weight": "-"
            , "Cost": "5 CP"
        }
        , locked: true
    }
    , {
        id: "gear_spell_scroll_cantrip"
        , type: "Gear"
        , name: "Spell Scroll, Cantrip"
        , description: {
            "Description": "A Spell Scroll is a magic item that bears the words of a spell determined by the scroll’s creator. If the spell is on your class’s spell list, you can read the scroll and cast the spell using its normal casting time and without providing any Material components. If the spell requires a saving throw or an attack roll, the spell save DC is 13, and the attack bonus is +5. The scroll disintegrates when the casting is completed."
            , "Weight": "-"
            , "Cost": "30 GP"
        }
        , locked: true
    }
    , {
        id: "gear_spell_scroll_level_1"
        , type: "Gear"
        , name: "Spell Scroll, Level 1"
        , description: {
            "Description": "A Spell Scroll is a magic item that bears the words of a spell determined by the scroll’s creator. If the spell is on your class’s spell list, you can read the scroll and cast the spell using its normal casting time and without providing any Material components. If the spell requires a saving throw or an attack roll, the spell save DC is 13, and the attack bonus is +5. The scroll disintegrates when the casting is completed."
            , "Weight": "-"
            , "Cost": "50 GP"
        }
        , locked: true
    }
    , {
        id: "gear_spikes_iron"
        , type: "Gear"
        , name: "Spikes, Iron"
        , description: {
            "Description": "Iron Spikes come in bundles of ten. As a Utilize action, you can use a blunt object, such as a Light Hammer, to hammer a spike into wood, earth, or a similar material. You can do so to jam a door shut or to then tie a Rope or Chain to the Spike."
            , "Weight": "5 lb."
            , "Cost": "1 GP"
        }
        , locked: true
    }
    , {
        id: "gear_spyglass"
        , type: "Gear"
        , name: "Spyglass"
        , description: {
            "Description": "Objects viewed through a Spyglass are magnified to twice their size."
            , "Weight": "1 lb."
            , "Cost": "1,000 GP"
        }
        , locked: true
    }
    , {
        id: "gear_string"
        , type: "Gear"
        , name: "String"
        , description: {
            "Description": "String is 10 feet long. You can tie a knot in it as a Utilize action."
            , "Weight": "-"
            , "Cost": "1 SP"
        }
        , locked: true
    }
    , {
        id: "gear_tent"
        , type: "Gear"
        , name: "Tent"
        , description: {
            "Description": "A Tent sleeps up to two Small or Medium creatures."
            , "Weight": "20 lb."
            , "Cost": "2 GP"
        }
        , locked: true
    }
    , {
        id: "gear_tinderbox"
        , type: "Gear"
        , name: "Tinderbox"
        , description: {
            "Description": "A Tinderbox is a small container holding flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a Candle, Lamp, Lantern, or Torch—or anything else with exposed fuel—takes a Bonus Action. Lighting any other fire takes 1 minute."
            , "Weight": "1 lb."
            , "Cost": "5 SP"
        }
        // , locked: true
    }
    , {
        id: "gear_torch"
        , type: "Gear"
        , name: "Torch"
        , description: {
            "Description": "A Torch burns for 1 hour, casting Bright Light in a 20-foot radius and Dim Light for an additional 20 feet. When you take the Attack action, you can attack with the Torch, using it as a Simple Melee weapon. On a hit, the target takes 1 Fire damage."
            , "Weight": "1 lb."
            , "Cost": "1 CP"
        }
        // , locked: true
    }
    , {
        id: "gear_vial"
        , type: "Gear"
        , name: "Vial"
        , description: {
            "Description": "A Vial holds up to 4 ounces."
            , "Weight": "-"
            , "Cost": "1 GP"
        }
        , locked: true
    }
    // , {
    //     id: "gear_warm_fungal_clothing"
    //     , type: "Gear"
    //     , name: "Warm Fungal Clothing"
    //     , description: {
    //         "Description": "When you’re wearing Warm Fungal Clothing, you automatically succeed on saving throws against the effects of extreme cold. See chapter 3 of the Dungeon Master’s Guide for rules on extreme cold. One pound of fungus is sewn into Fungal Clothing. This fungus can be eaten as food. Once all the fungus is consumed, this becomes a mundane set of Traveler’s Clothes."
    //         , "Weight": "-"
    //         , "Cost": "15 GP"
    //     }
    //     , locked: true
    // }
    , {
        id: "gear_waterskin"
        , type: "Gear"
        , name: "Waterskin"
        , description: {
            "Description": "A Waterskin holds up to 4 pints. If you don’t drink sufficient water, you risk dehydration (see the rules glossary)."
            , "Weight": "5 lb. (full)"
            , "Cost": "2 SP"
        }
        , locked: true
    }
    // , {
    //     id: "gear_winter_camouflage"
    //     , type: "Gear"
    //     , name: "Winter Camouflage"
    //     , description: {
    //         "Description": "While you wear Winter Camouflage in an appropriate environment, you have Advantage on Dexterity (Stealth) checks."
    //         , "Weight": "-"
    //         , "Cost": "50 GP"
    //     }
    //     , locked: true
    // }
]