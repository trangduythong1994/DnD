const data_actions = [
    {
        id: "action_common_attack",
        type: "Action",
        rarity: "Common",
        name: "Attack",
        description: {
            lang_en: `Attack with a weapon or an Unarmed Strike.
            <p><b><i>Unarmed Strike.</i></b> Instead of using a weapon to make a melee attack, you can use a punch, kick, headbutt, or similar forceful blow.
            <p>Whenever you use your Unarmed Strike, choose one of the following options for its effect:
            <p-1><b>Damage.</b> You make an attack roll against the target. Your bonus to the roll equals your Strength modifier plus your Proficiency Bonus. On a hit, the target takes Bludgeoning damage equal to 1 plus your Strength modifier.</p-1>
            <p-1><b>Grapple.</b> The target must succeed on a Strength or Dexterity saving throw (it chooses which), or it has the Grappled condition. The DC for the saving throw and any escape attempts equals 8 plus your Strength modifier and Proficiency Bonus. This grapple is possible only if the target is no more than one size larger than you and if you have a hand free to grab it.</p-1>
            <p-1><b>Shove.</b> The target must succeed on a Strength or Dexterity saving throw (it chooses which), or you either push it 5 feet away or cause it to have the Prone condition. The DC for the saving throw equals 8 plus your Strength modifier and Proficiency Bonus. This shove is possible only if the target is no more than one size larger than you.</p-1>`,
            lang_vi: ``
        }
    },
    {
        id: "action_common_dash",
        type: "Action",
        rarity: "Common",
        name: "Dash",
        description: {
            lang_en: `For the rest of the turn, give yourself extra movement equal to your Speed.`,
            lang_vi: `Trong phần còn lại của lượt, bạn nhận thêm lượng di chuyển cộng thêm bằng với Speed của bạn.`
        }
    },
    {
        id: "action_common_disengage",
        type: "Action",
        rarity: "Common",
        name: "Disengage",
        description: {
            lang_en: `Your movement doesn't provoke Opportunity Attacks for the rest of the turn.`,
            lang_vi: `Chuyển động của bạn sẽ không kích hoạt Opportunity Attack trong phần còn lại của lượt.`
        }
    },
    {
        id: "action_common_dodge",
        type: "Action",
        rarity: "Common",
        name: "Dodge",
        description: {
            lang_en: `Until the start of your next turn, attack rolls against you have Disadvantage, and you make Dexterity saving throws with Advantage. You lose this benefit if you have the Incapacitated condition or if your Speed is 0.`,
            lang_vi: `Cho đến khi lượt tiếp theo của bạn bắt đầu, các attack roll nhắm vào bạn sẽ bị Disadvantage, và bạn thực hiện các Dexterity saving throw với Advantage. Bạn sẽ mất lợi ích này nếu bạn bị tình trạng Incapacitated hoặc nếu Speed của bạn bằng 0.`
        }
    },
    {
        id: "action_common_help",
        type: "Action",
        rarity: "Common",
        name: "Help",
        description: {
            lang_en: `Help another creature's ability check or attack roll, or administer first aid.
            <p>When you take the Help action, you do one of the following.
            <p><b><i>Assist an Ability Check.</i></b> Choose one of your skill or tool proficiencies and one ally who is near enough for you to assist verbally or physically. Before the start of your next turn, that ally has Advantage on the next ability check they make with the chosen skill or tool.
            <p><b><i>Assist an Attack Roll.</i></b> You momentarily distract an enemy within 5 feet of you. Before the start of your next turn, giving Advantage to the next attack roll by one of your allies against that enemy.
            <p><b><i>First Aid.</i></b> Try to stabilize a creature with 0 Hit Points, which requires a successful DC 10 Wisdom (Medicine) check. On a success, the creature becomes Stable. A Stable creature has 0 Hit Points but is no longer making Death Saving Throws, and it regains 1 Hit Point after Short Rest.`,
            lang_vi: `Hỗ trợ ability check hoặc attack roll của một sinh vật khác, hoặc tiến hành sơ cứu.`
        }
    },
    {
        id: "action_common_hide",
        type: "Action",
        rarity: "Common",
        name: "Hide",
        description: {
            lang_en: `You try to conceal yourself. To do so, you must succeed on a DC 15 Dexterity (Stealth) check while you’re Heavily Obscured or behind Three-Quarters Cover or Total Cover, and you must be out of any enemy’s line of sight. On a successful check, you have the Invisible condition while hidden.
            <p>Make note of your check’s total, which is the DC for a creature to find you with a Wisdom (Perception) check. You stop being hidden immediately after any of the following occurs: you make a sound louder than a whisper, an enemy finds you, you make an attack roll, or you cast a spell with a Verbal component.`,
            lang_vi: `Thực hiện một Dexterity (Stealth) check.`
        }
    },
    {
        id: "action_common_influence",
        type: "Action",
        rarity: "Common",
        name: "Influence",
        description: {
            lang_en: `You urge a creature to do something. Describe or roleplay how you’re communicating with it. 
            <p>The DM then determines whether the creature feels due to your interaction.
                <p-1><b>Willing.</b> If your urging aligns with the creature's desires, no ability check is necessary; the creature fulfills your request in a way it prefers.</p-1>
                <p-1><b>Unwilling.</b> If your urging is repugnant to the creature or counter to its alignment, no ability check is necessary; it doesn’t comply.</p-1>
                <p-1><b>Hesitant.</b> If you urge the creature to do something that it is hesitant to do, you must make an ability check, which is affected by the creature's attitude: Indifferent, Friendly (have Advantage), or Hostile (have Disadvantage).
                    <p-2><b>Charisma (Deception).</b> Deceiving a monster that understands you</p-2>
                    <p-2><b>Charisma (Intimidation).</b> Intimidating a monster</p-2>
                    <p-2><b>Charisma (Performance).</b> Amusing a monster</p-2>
                    <p-2><b>Charisma (Persuasion).</b> Persuading a monster that understands you</p-2>
                    <p-2><b>Wisdom (Animal Handling).</b> Gently coaxing a Beast or Monstrosity</p-2>
            <p>On a successful check, the monster does as urged. 
            <p>On a failed check, you must wait 24 hours (or a duration set by the DM) before urging it in the same way again.</p-1>`,
            lang_vi: `Thực hiện một Charisma (Deception, Intimidation, Performance, hoặc Persuasion) check hoặc Wisdom (Animal Handling) check để thay đổi thái độ của một sinh vật.`
        }
    },
    {
        id: "action_common_magic",
        type: "Action",
        rarity: "Common",
        name: "Magic",
        description: {
            lang_en: `You cast a spell that has a casting time of an action or use a feature or magic item that requires a Magic action to be activated.`,
            lang_vi: `Niệm một phép thuật (spell), sử dụng một vật phẩm ma thuật (magic item), hoặc sử dụng một đặc điểm ma thuật (magical feature).`
        }
    },
    {
        id: "action_common_ready",
        type: "Action",
        rarity: "Common",
        name: "Ready",
        description: {
            lang_en: `You take the Ready action to wait for a particular circumstance before you act. To do so, you take this action on your turn, which lets you act by taking a Reaction before the start of your next turn.
            <p>First, you decide what perceivable circumstance will trigger your Reaction. Then, you choose the action you will take in response to that trigger, or you choose to move up to your Speed in response to it.`,
            lang_vi: `Chuẩn bị thực hiện một hành động để phản hồi lại một điều kiện kích hoạt (trigger) do bạn định ra.`
        }
    },
    {
        id: "action_common_search",
        type: "Action",
        rarity: "Common",
        name: "Search",
        description: {
            lang_en: `You make a Wisdom check to discern something that isn’t obvious.
            <p>
            <p-2><b>Insight.</b> Creature’s state of mind</p-2>
            <p-2><b>Medicine.</b> Creature’s ailment or cause of death</p-2>
            <p-2><b>Perception.</b> Concealed creature or object</p-2>
            <p-2><b>Survival.</b> Tracks or food</p-2>`,
            lang_vi: `Thực hiện một Wisdom (Insight, Medicine, Perception, hoặc Survival) check.`
        }
    },
    {
        id: "action_common_study",
        type: "Action",
        rarity: "Common",
        name: "Study",
        description: {
            lang_en: `You make an Intelligence check to study your memory, a book, a clue, or another source of knowledge and call to mind an important piece of information about it.
            <p>
            <p-2><b>Arcana.</b> Spells, magic items, eldritch symbols, magical traditions, planes of existence, and certain creatures (Aberrations, Constructs, Elementals, Fey, and Monstrosities)</p-2>
            <p-2><b>History.</b> Historic events and people, ancient civilizations, wars, and certain creatures (Giants and Humanoids)</p-2>
            <p-2><b>Investigation.</b> Traps, ciphers, riddles, and gadgetry</p-2>
            <p-2><b>Nature.</b> Terrain, flora, weather, and certain creatures (Beasts, Dragons, Oozes, and Plants)</p-2>
            <p-2><b>Religion.</b> Deities, religious hierarchies and rites, holy symbols, cults, and certain creatures (Celestials, Fiends, and Undead)</p-2>`,
            lang_vi: `Thực hiện một Intelligence (Arcana, History, Investigation, Nature, hoặc Religion) check.`
        }
    },
    {
        id: "action_common_utilize",
        type: "Action",
        rarity: "Common",
        name: "Utilize",
        description: {
            lang_en: `Use a nonmagical object.`,
            lang_vi: `Sử dụng một vật thể không có ma thuật (nonmagical object).`
        }
    },
    {
        id: "reaction_common_opportunity_attack",
        type: "Reaction",
        rarity: "Common",
        name: "Opportunity Attack",
        description: {
            lang_en: `You can make an Opportunity Attack when a creature that you can see leaves your reach.`,
            lang_vi: `Bạn có thể thực hiện một Opportunity Attack khi một sinh vật mà bạn nhìn thấy di chuyển ra khỏi tầm đánh (reach) của bạn.`
        }
    }
];