const data_tools = [
    {
        id: "tool_alchemists_supplies"
        , type: "Tool"
        , name: "Alchemist's Supplies"
        , description: {
            "Ability": "Intelligence"
            , "Utilize": "Identify a substance (DC 15), or start a fire (DC 15)"
            , "Craft": "Acid, Alchemist's Fire, Component Pouch, Oil, Paper, Perfume"
            , "Weight": "8 lb."
            , "Cost": "50 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_brewers_supplies"
        , type: "Tool"
        , name: "Brewer's Supplies"
        , description: {
            "Ability": "Intelligence"
            , "Utilize": "Detect poisoned drink (DC 15), or identify alcohol (DC 10)"
            , "Craft": "Antitoxin"
            , "Weight": "9 lb."
            , "Cost": "20 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_calligraphers_supplies"
        , type: "Tool"
        , name: "Calligrapher's Supplies"
        , description: {
            "Ability": "Dexterity"
            , "Utilize": "Write text with impressive flourishes that guard against forgery (DC 15)"
            , "Craft": "Ink, Spell Scroll"
            , "Weight": "5 lb."
            , "Cost": "10 GP"
            , "Variants": "—"
        }
        // , locked: true
    }
    , {
        id: "tool_carpenters_tools"
        , type: "Tool"
        , name: "Carpenter's Tools"
        , description: {
            "Ability": "Strength"
            , "Utilize": "Seal or pry open a door or container (DC 20)"
            , "Craft": "Club, Greatclub, Quarterstaff, Barrel, Chest, Ladder, Pole, Portable Ram, Torch"
            , "Weight": "6 lb."
            , "Cost": "8 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_cartographers_tools"
        , type: "Tool"
        , name: "Cartographer's Tools"
        , description: {
            "Ability": "Wisdom"
            , "Utilize": "Draft a map of a small area (DC 15)"
            , "Craft": "Map"
            , "Weight": "6 lb."
            , "Cost": "15 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_cobblers_tools"
        , type: "Tool"
        , name: "Cobbler's Tools"
        , description: {
            "Ability": "Dexterity"
            , "Utilize": "Modify footwear to give Advantage on the wearer's next Dexterity (Acrobatics) check (DC 10)"
            , "Craft": "Climber's Kit"
            , "Weight": "5 lb."
            , "Cost": "5 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_cooks_utensils"
        , type: "Tool"
        , name: "Cook's Utensils"
        , description: {
            "Ability": "Wisdom"
            , "Utilize": "Improve food's flavor (DC 10), or detect spoiled or poisoned food (DC 15)"
            , "Craft": "Rations"
            , "Weight": "8 lb."
            , "Cost": "1 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_glassblowers_tools"
        , type: "Tool"
        , name: "Glassblower's Tools"
        , description: {
            "Ability": "Intelligence"
            , "Utilize": "Discern what a glass object held in the past 24 hours (DC 15)"
            , "Craft": "Glass Bottle, Magnifying Glass, Spyglass, Vial"
            , "Weight": "5 lb."
            , "Cost": "30 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_jewelers_tools"
        , type: "Tool"
        , name: "Jeweler's Tools"
        , description: {
            "Ability": "Intelligence"
            , "Utilize": "Discern a gem's value (DC 15)"
            , "Craft": "Arcane Focus, Holy Symbol"
            , "Weight": "2 lb."
            , "Cost": "25 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_leatherworkers_tools"
        , type: "Tool"
        , name: "Leatherworker's Tools"
        , description: {
            "Ability": "Dexterity"
            , "Utilize": "Add a design to a leather item (DC 10)"
            , "Craft": "Sling, Whip, Hide Armor, Leather Armor, Studded Leather Armor, Backpack, Crossbow Bolt Case, Map or Scroll Case, Parchment, Pouch, Quiver, Waterskin"
            , "Weight": "5 lb."
            , "Cost": "5 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_masons_tools"
        , type: "Tool"
        , name: "Mason's Tools"
        , description: {
            "Ability": "Strength"
            , "Utilize": "Chisel a symbol or hole in stone (DC 10)"
            , "Craft": "Block and Tackle"
            , "Weight": "8 lb."
            , "Cost": "10 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_painters_supplies"
        , type: "Tool"
        , name: "Painter's Supplies"
        , description: {
            "Ability": "Wisdom"
            , "Utilize": "Paint a recognizable image of something you've seen (DC 10)"
            , "Craft": "Druidic Focus, Holy Symbol"
            , "Weight": "5 lb."
            , "Cost": "10 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_potters_tools"
        , type: "Tool"
        , name: "Potter's Tools"
        , description: {
            "Ability": "Intelligence"
            , "Utilize": "Discern what a ceramic object held in the past 24 hours (DC 15)"
            , "Craft": "Jug, Lamp"
            , "Weight": "3 lb."
            , "Cost": "10 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_smiths_tools"
        , type: "Tool"
        , name: "Smith's Tools"
        , description: {
            "Ability": "Strength"
            , "Utilize": "Pry open a door or container (DC 20)"
            , "Craft": "Any Melee weapon (except Club, Greatclub, Quarterstaff, and Whip), Medium armor (except Hide), Heavy armor, Ball Bearings, Bucket, Caltrops, Chain, Crowbar, Firearm Bullets, Grappling Hook, Iron Pot, Iron Spikes, Sling Bullets"
            , "Weight": "8 lb."
            , "Cost": "20 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_tinkers_tools"
        , type: "Tool"
        , name: "Tinker's Tools"
        , description: {
            "Ability": "Dexterity"
            , "Utilize": "Assemble a Tiny item composed of scrap, which falls apart in 1 minute (DC 20)"
            , "Craft": "Musket, Pistol, Bell, Bullseye Lantern, Flask, Hooded Lantern, Hunting Trap, Lock, Manacles, Mirror, Shovel, Signal Whistle, Tinderbox"
            , "Weight": "10 lb."
            , "Cost": "50 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_weavers_tools"
        , type: "Tool"
        , name: "Weaver's Tools"
        , description: {
            "Ability": "Dexterity"
            , "Utilize": "Mend a tear in clothing (DC 10), or sew a Tiny design (DC 10)"
            , "Craft": "Padded Armor, Basket, Bedroll, Blanket, Fine Clothes, Net, Robe, Rope, Sack, String, Tent, Traveler's Clothes"
            , "Weight": "5 lb."
            , "Cost": "1 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_woodcarvers_tools"
        , type: "Tool"
        , name: "Woodcarver's Tools"
        , description: {
            "Ability": "Dexterity"
            , "Utilize": "Carve a pattern in wood (DC 10)"
            , "Craft": "Club, Greatclub, Quarterstaff, Ranged weapons (except Pistol, Musket, and Sling), Arcane Focus, Arrows, Bolts, Druidic Focus, Ink Pen, Needles"
            , "Weight": "5 lb."
            , "Cost": "1 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_disguise_kit"
        , type: "Tool"
        , name: "Disguise Kit"
        , description: {
            "Ability": "Charisma"
            , "Utilize": "Apply makeup (DC 10)"
            , "Craft": "Costume"
            , "Weight": "3 lb."
            , "Cost": "25 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_forgery_kit"
        , type: "Tool"
        , name: "Forgery Kit"
        , description: {
            "Ability": "Dexterity"
            , "Utilize": "Mimic 10 or fewer words of someone else's handwriting (DC 15), or duplicate a wax seal (DC 20)"
            , "Craft": "—"
            , "Weight": "5 lb."
            , "Cost": "15 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_gaming_set"
        , type: "Tool"
        , name: "Gaming Set"
        , description: {
            "Ability": "Wisdom"
            , "Utilize": "Discern whether someone is cheating (DC 10), or win the game (DC 20)"
            , "Craft": "—"
            , "Weight": "—"
            , "Cost": "Varies"
            , "Variants": "Dice (1 SP), dragonchess (1 GP), playing cards (5 SP), three-dragon ante (1 GP)"
        }
        // , locked: true
    }
    , {
        id: "tool_herbalism_kit"
        , type: "Tool"
        , name: "Herbalism Kit"
        , description: {
            "Ability": "Intelligence"
            , "Utilize": "Identify a plant (DC 10)"
            , "Craft": "Antitoxin, Candle, Healer's Kit, Potion of Healing"
            , "Weight": "3 lb."
            , "Cost": "5 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_musical_instrument"
        , type: "Tool"
        , name: "Musical Instrument"
        , description: {
            "Ability": "Charisma"
            , "Utilize": "Play a known tune (DC 10), or improvise a song (DC 15)"
            , "Craft": "—"
            , "Weight": "Varies"
            , "Cost": "Varies"
            , "Variants": "Bagpipes (30 GP, 6 lb.), drum (6 GP, 3 lb.), dulcimer (25 GP, 10 lb.), flute (2 GP, 1 lb.), horn (3 GP, 2 lb.), lute (35 GP, 2 lb.), lyre (30 GP, 2 lb.), pan flute (12 GP, 2 lb.), shawm (2 GP, 1 lb.), viol (30 GP, 1 lb.)"
        }
        , locked: true
    }
    , {
        id: "tool_navigators_tools"
        , type: "Tool"
        , name: "Navigator's Tools"
        , description: {
            "Ability": "Wisdom"
            , "Utilize": "Plot a course (DC 10), or determine position by stargazing (DC 15)"
            , "Craft": "—"
            , "Weight": "2 lb."
            , "Cost": "25 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_poisoners_kit"
        , type: "Tool"
        , name: "Poisoner's Kit"
        , description: {
            "Ability": "Intelligence"
            , "Utilize": "Detect a poisoned object (DC 10)"
            , "Craft": "Basic Poison"
            , "Weight": "2 lb."
            , "Cost": "50 GP"
            , "Variants": "—"
        }
        , locked: true
    }
    , {
        id: "tool_thieves_tools"
        , type: "Tool"
        , name: "Thieves' Tools"
        , description: {
            "Ability": "Dexterity"
            , "Utilize": "Pick a lock (DC 15), or disarm a trap (DC 15)"
            , "Craft": "—"
            , "Weight": "1 lb."
            , "Cost": "25 GP"
            , "Variants": "—"
        }
        // , locked: true
    }
];