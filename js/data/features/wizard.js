const data_classes_wizard = [
    {
        id: "class_wizard"
        , type: "Class"
        , name: "Wizard"
        , spellcasting_ability: "Intelligence"
        , level: [
            { id: 0, hit_dice: 6 }
            , { id: 1, spellcasting_ability: "int", cantrip_qty: 3, prepared_spell: 4 }
            , { id: 2, prepared_spell: 5 }
            , { id: 3, prepared_spell: 6 }
            , { id: 4, cantrip_qty: 4, prepared_spell: 7 }
            , { id: 5, prepared_spell: 9 }
            , { id: 6, prepared_spell: 10 }
            , { id: 7, prepared_spell: 11 }
            , { id: 8, prepared_spell: 12 }
            , { id: 9, prepared_spell: 14 }
            , { id: 10, cantrip_qty: 5, prepared_spell: 15 }
            , { id: 11, prepared_spell: 16 }
            , { id: 12, prepared_spell: 16 }
            , { id: 13, prepared_spell: 17 }
            , { id: 14, prepared_spell: 18 }
            , { id: 15, prepared_spell: 19 }
            , { id: 16, prepared_spell: 21 }
            , { id: 17, prepared_spell: 22 }
            , { id: 18, prepared_spell: 23 }
            , { id: 19, prepared_spell: 24 }
            , { id: 20, prepared_spell: 25 }
        ]
        , description: {
            "Primary Ability": "Intelligence"
            , "Hit Point Die": "D6"
            , "Saving Throw Proficiencies": "Intelligence and Wisdom"
            , "Skill Proficiencies": "Choose 2: Arcana, History, Insight, Investigation, Medicine, Nature or Religion"
            , "Weapon Proficiencies": "Simple weapons"
            , "Armor Training": "None"
            , "Starting Equipment": "Choose A or B: (A) 2 Daggers, Arcane Focus (Quarterstaff), Robe, Spellbook, Scholar’s Pack, and 5 GP; or (B) 55 GP"
            , "Level 1": ["Spellcasting", "Ritual Adept", "Arcane Recovery"]
            , "Level 2": ["Scholar"]
            , "Level 3": ["Evocation Savant", "Potent Cantrip"]
            // , "Level 3": ["Wizard Subclass"]
            , "Level 4": ["Ability Score Improvement"]
            , "Level 5": ["Memorize Spell"]
            , "Level 6": ["Sculpt Spells"]
            , "Level 7": ["—"]
            , "Level 8": ["Ability Score Improvement"]
            , "Level 9": ["—"]
            , "Level 10": ["Empowered Evocation"]
            , "Level 11": ["—"]
            , "Level 12": ["Ability Score Improvement"]
            , "Level 13": ["—"]
            , "Level 14": ["Overchannel"]
            , "Level 15": ["—"]
            , "Level 16": ["Ability Score Improvement"]
            , "Level 17": ["—"]
            , "Level 18": ["Spell Mastery"]
            , "Level 19": ["Epic Boon"]
            , "Level 20": ["Signature Spells"]
        }
    }
    , {
        id: "feature_class_wizard_spellcasting"
        , type: "Feature"
        , category: "Class"
        , conditions: { class: "class_wizard", level: 1 }
        , name: "Wizard Spellcasting"
        , description: `As a student of arcane magic, you have learned to cast spells.
        <p><b>Cantrips.</b> You know three Wizards cantrips of your choice. Light, Mage Hand, and Ray of Frost are recommended. Whenever you finish a Long Rest, you can replace one of your cantrips from this feature with another Wizard cantrip of your choice.
        <br><span data-level="4">When you reach Wizard levels 4 </span><span data-level="10">and 10</span>, you learn another Wizard cantrip of your choice, as shown in the Cantrips column of the Wizard Features table.
        <p><b>Spellbook.</b> Your wizardly apprenticeship culminated in the creation of a unique book: your spellbook. It is a Tiny object that weighs 3 pounds, contains 100 pages, and can be read only by you or someone casting Identify. You determine the book’s appearance and materials, such as a gilt-edged tome or a collection of vellum bound with twine.
        <br>The book contains the level 1+ spells you know. It starts with six level 1 Wizard spells of your choice. Detect Magic, Feather Fall, Mage Armor, Magic Missile, Sleep, and Thunderwave are recommended.
        <br>Whenever you gain a Wizard level after 1, add two Wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard Features table. The spells are the culmination of arcane research you do regularly.
        <p><b>Spell Slots.</b> The Wizard Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended spell slots when you finish a Long Rest.
        <p><b>Prepared Spells of Level 1+.</b> You prepare the list of level 1+ spells that are available for you to cast with this feature. To do so, choose four spells from your spellbook. The chosen spells must be of a level for which you have spell slots.
        <br>The number of spells on your list increases as you gain Wizard levels, as shown in the Prepared Spells column of the Wizard Features table. Whenever that number increases, choose additional Wizard spells until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. <span data-level="3">For example, if you’re a level 3 Wizard, your list of prepared spells can include six spells of levels 1 and 2 in any combination, chosen from your spellbook.</span>
        <br>If another Wizard feature gives spells that you always have prepared, those spells don’t count against the number of spells you can prepare with this feature, but those spells otherwise count as Wizard spells for you.
        <p><b>Changing Your Prepared Spells.</b> Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with spells from your spellbook.
        <p><b>Spellcasting Ability.</b> Intelligence is your spellcasting ability for your Wizard spells.
        <p><b>Spellcasting Focus.</b> You can use an Arcane Focus or your spellbook as a Spellcasting Focus for your Wizard spells.
        <blockquote style="margin: 10px 0; padding: 10px; background-color: #f9f9f9; border-left: 4px solid #ccc;">
            <b>EXPANDING AND REPLACING A SPELLBOOK</b>
            <p>The spells you add to your spellbook as you gain levels reflect your ongoing magical research, but you might find other spells during your adventures that you can add to the book. You could discover a Wizard spell on a Spell Scroll, for example, and then copy it into your spellbook.</p>
            <p><b>Copying a Spell into the Book.</b> When you find a level 1+ Wizard spell, you can copy it into your spellbook if it’s of a level you can prepare and if you have time to copy it. For each level of the spell, the transcription takes 2 hours and costs 50 GP. Afterward you can prepare the spell like the other spells in your spellbook.</p>
            <p><b>Copying the Book.</b> You can copy a spell from your spellbook into another book. This is like copying a new spell into your spellbook but faster, since you already know how to cast the spell. You need spend only 1 hour and 10 GP for each level of the copied spell.</p>
            <p>If you lose your spellbook, you can use the same procedure to transcribe the Wizard spells that you have prepared into a new spellbook. Filling out the remainder of the new book requires you to find new spells to do so. For this reason, many wizards keep a backup spellbook.</p>
        </blockquote>`
    }
    , {
        id: "feature_class_wizard_ritual_adept"
        , type: "Feature"
        , category: "Class"
        , conditions: { class: "class_wizard", level: 1 }
        , name: "Ritual Adept"
        , description: `You can cast any spell as a Ritual if that spell has the Ritual tag and the spell is in your spellbook. You needn’t have the spell prepared, but you must read from the book to cast a spell in this way.`
    }
    , {
        id: "feature_class_wizard_arcane_recovery"
        , type: "Feature"
        , category: "Class"
        , conditions: { class: "class_wizard", level: 1 }
        , name: "Arcane Recovery"
        , description: `You can regain some of your magical energy by studying your spellbook. When you finish a Short Rest, you can choose expended spell slots to recover. The spell slots can have a combined level equal to no more than half your Wizard level (round up), and none of the slots can be level 6 or higher. <span data-level="4">For example, if you’re a level 4 Wizard, you can recover up to two levels' worth of spell slots, regaining either one level 2 spell slot or two level 1 spell slots.</span>
        <p>Once you use this feature, you can’t do so again until you finish a Long Rest.`
    }
    , {
        id: "feature_class_wizard_scholar"
        , type: "Feature"
        , category: "Class"
        , conditions: { class: "class_wizard", level: 2 }
        , name: "Scholar"
        , description: `While studying magic, you also specialized in an academic field of study. Choose one of the following skills in which you have proficiency: Arcana, History, Investigation, Medicine, Nature, or Religion. You have Expertise in the chosen skill.`
    }
    // , {
    //     id: "feature_class_wizard_wizard_subclass"
    //     , type: "Feature"
    //     , category: "Class"
    //     , conditions: { class: "class_wizard", level: 3 }
    //     , name: "Wizard Subclass"
    //     , description: `You gain a Wizard subclass of your choice. The Abjurer, Diviner, Evoker, and Illusionist subclasses are detailed after this class’s description. A subclass is a specialization that grants you features at certain Wizard levels. For the rest of your career, you gain each of your subclass’s features that are of your Wizard level or lower.`
    // }
    , {
        id: "feature_class_wizard_memorize_spell"
        , type: "Feature"
        , category: "Class"
        , conditions: { class: "class_wizard", level: 5 }
        , name: "Memorize Spell"
        , description: `Whenever you finish a Short Rest, you can study your spellbook and replace one of the level 1+ Wizard spells you have prepared for your Spellcasting feature with another level 1+ spell from the book.`
    }
    , {
        id: "feature_class_wizard_spell_mastery"
        , type: "Feature"
        , category: "Class"
        , conditions: { class: "class_wizard", level: 18 }
        , name: "Spell Mastery"
        , description: `You have achieved such mastery over certain spells that you can cast them at will. Choose a level 1 and a level 2 spell in your spellbook that have a casting time of an action. You always have those spells prepared, and you can cast them at their lowest level without expending a spell slot. To cast either spell at a higher level, you must expend a spell slot.
        <p>Whenever you finish a Long Rest, you can study your spellbook and replace one of those spells with an eligible spell of the same level from that book.`
    }
    , {
        id: "feature_class_wizard_epic_boon"
        , type: "Feature"
        , category: "Class"
        , conditions: { class: "class_wizard", level: 19 }
        , name: "Epic Boon"
        , description: `You gain an Epic Boon feat or another feat of your choice for which you qualify. Boon of Spell Recall is recommended.`
    }
    , {
        id: "feature_class_wizard_signature_spells"
        , type: "Feature"
        , category: "Class"
        , conditions: { class: "class_wizard", level: 20 }
        , name: "Signature Spells"
        , description: `Choose two level 3 spells in your spellbook as your signature spells. You always have these spells prepared, and you can cast each of them once at level 3 without expending a spell slot. When you do so, you can’t cast them in this way again until you finish a Short or Long Rest. To cast either spell at a higher level, you must expend a spell slot.`
    }
    , {
        id: "feature_subclass_evoker_evocation_savant"
        , type: "Feature"
        , category: "Subclass"
        , conditions: { class: "class_wizard", subclass: "subclass_evoker", level: 3 }
        , name: "Evocation Savant"
        , description: `Choose two Wizard spells from the Evocation school, each of which must be no higher than level 2, and add them to your spellbook for free.
        <p>In addition, whenever you gain access to a new level of spell slots in this class, you can add one Wizard spell from the Evocation school to your spellbook for free. The chosen spell must be of a level for which you have spell slots.`
    }
    , {
        id: "feature_subclass_evoker_potent_cantrip"
        , type: "Feature"
        , category: "Subclass"
        , conditions: { class: "class_wizard", subclass: "subclass_evoker", level: 3 }
        , name: "Potent Cantrip"
        , description: `Your damaging cantrips affect even creatures that avoid the brunt of the effect. When you cast a cantrip at a creature and you miss with the attack roll or the target succeeds on a saving throw against the cantrip, the target takes half the cantrip’s damage (if any) but suffers no additional effect from the cantrip.`
    }
    , {
        id: "feature_subclass_evoker_sculpt_spells"
        , type: "Feature"
        , category: "Subclass"
        , conditions: { class: "class_wizard", subclass: "subclass_evoker", level: 6 }
        , name: "Sculpt Spells"
        , description: `You can create pockets of relative safety within the effects of your evocations. When you cast an Evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 plus the spell’s level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save.`
    }
    , {
        id: "feature_subclass_evoker_empowered_evocation"
        , type: "Feature"
        , category: "Subclass"
        , conditions: { class: "class_wizard", subclass: "subclass_evoker", level: 10 }
        , name: "Empowered Evocation"
        , description: `Whenever you cast a Wizard spell from the Evocation school, you can add your Intelligence modifier to one damage roll of that spell.`
    }
    , {
        id: "feature_subclass_evoker_overchannel"
        , type: "Feature"
        , category: "Subclass"
        , conditions: { class: "class_wizard", subclass: "subclass_evoker", level: 14 }
        , name: "Overchannel"
        , description: `You can increase the power of your spells. When you cast a Wizard spell with a spell slot of levels 1–5 that deals damage, you can deal maximum damage with that spell on the turn you cast it.
        <p>The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a Long Rest, you take 2d12 Necrotic damage for each level of the spell slot immediately after you cast it. This damage ignores Resistance and Immunity.
        <p>Each time you use this feature again before finishing a Long Rest, the Necrotic damage per spell level increases by 1d12.`
    }
];