const data_actions = [
    {
        id: "action_common_attack",
        type: "Action",
        rarity: "Common",
        name: "Attack",
        description: {
            lang_en: `Attack with a weapon or an Unarmed Strike.
            <p><b>Unarmed Strike.</b> Instead of using a weapon to make a melee attack, you can use a punch, kick, headbutt, or similar forceful blow. In game terms, this is an Unarmed Strike—a melee attack that involves you using your body to damage, grapple, or shove a target within 5 feet of you.
            <p>Whenever you use your Unarmed Strike, choose one of the following options for its effect:
            <ul>
                <li><b>Damage.</b> You make an attack roll against the target. Your bonus to the roll equals your Strength modifier plus your Proficiency Bonus. On a hit, the target takes Bludgeoning damage equal to 1 plus your Strength modifier.</li>
                <li><b>Grapple.</b> The target must succeed on a Strength or Dexterity saving throw (it chooses which), or it has the Grappled condition. The DC for the saving throw and any escape attempts equals 8 plus your Strength modifier and Proficiency Bonus. This grapple is possible only if the target is no more than one size larger than you and if you have a hand free to grab it.</li>
                <li><b>Shove.</b> The target must succeed on a Strength or Dexterity saving throw (it chooses which), or you either push it 5 feet away or cause it to have the Prone condition. The DC for the saving throw equals 8 plus your Strength modifier and Proficiency Bonus. This shove is possible only if the target is no more than one size larger than you.</li>
            </ul>`,
            lang_vi: `Tấn công bằng một vũ khí hoặc một Unarmed Strike.
            <p><b>Unarmed Strike.</b> Thay vì sử dụng vũ khí để thực hiện một melee attack, bạn có thể sử dụng một cú đấm, đá, húc đầu.
            <p>Bất cứ khi nào bạn sử dụng Unarmed Strike, hãy chọn một trong các tùy chọn sau cho hiệu ứng của nó:
            <ul>
                <li><b>Damage.</b> Bạn thực hiện một attack roll nhắm vào mục tiêu. Bonus cho roll này bằng Strength modifier cộng với Proficiency Bonus của bạn. Nếu đánh trúng, mục tiêu sẽ phải chịu Bludgeoning damage bằng 1 cộng với Strength modifier của bạn.</li>
                <li><b>Grapple.</b> Mục tiêu phải thành công một Strength hoặc Dexterity saving throw (do mục tiêu tự chọn), nếu trượt sẽ bị tình trạng Grappled (Túm giữ). DC cho saving throw này và bất kỳ nỗ lực trốn thoát (escape) nào đều bằng 8 + Strength modifier + Proficiency Bonus của bạn. Đòn grapple này chỉ có thể thực hiện nếu mục tiêu lớn hơn bạn không quá một bậc kích cỡ và bạn đang có một tay rảnh để tóm lấy nó.</li>
                <li><b>Shove.</b> Mục tiêu phải thành công một Strength hoặc Dexterity saving throw (do mục tiêu tự chọn), nếu trượt bạn có thể đẩy nó lùi xa 5 feet hoặc khiến nó bị tình trạng Prone (Ngã sấp). DC cho saving throw này bằng 8 + Strength modifier + Proficiency Bonus của bạn. Đòn shove này chỉ có thể thực hiện nếu mục tiêu lớn hơn bạn không quá một bậc kích cỡ.</li>
            </ul>`
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
            lang_en: `Help another creature's ability check or attack roll, or administer first aid.`,
            lang_vi: `Hỗ trợ ability check hoặc attack roll của một sinh vật khác, hoặc tiến hành sơ cứu.`
        }
    },
    {
        id: "action_common_hide",
        type: "Action",
        rarity: "Common",
        name: "Hide",
        description: {
            lang_en: `Make a Dexterity (Stealth) check.`,
            lang_vi: `Thực hiện một Dexterity (Stealth) check.`
        }
    },
    {
        id: "action_common_influence",
        type: "Action",
        rarity: "Common",
        name: "Influence",
        description: {
            lang_en: `Make a Charisma (Deception, Intimidation, Performance, or Persuasion) or Wisdom (Animal Handling) check to alter a creature's attitude.`,
            lang_vi: `Thực hiện một Charisma (Deception, Intimidation, Performance, hoặc Persuasion) check hoặc Wisdom (Animal Handling) check để thay đổi thái độ của một sinh vật.`
        }
    },
    {
        id: "action_common_magic",
        type: "Action",
        rarity: "Common",
        name: "Magic",
        description: {
            lang_en: `Cast a spell, use a magic item, or use a magical feature.`,
            lang_vi: `Niệm một phép thuật (spell), sử dụng một vật phẩm ma thuật (magic item), hoặc sử dụng một đặc điểm ma thuật (magical feature).`
        }
    },
    {
        id: "action_common_ready",
        type: "Action",
        rarity: "Common",
        name: "Ready",
        description: {
            lang_en: `Prepare to take an action in response to a trigger you define.`,
            lang_vi: `Chuẩn bị thực hiện một hành động để phản hồi lại một điều kiện kích hoạt (trigger) do bạn định ra.`
        }
    },
    {
        id: "action_common_search",
        type: "Action",
        rarity: "Common",
        name: "Search",
        description: {
            lang_en: `Make a Wisdom (Insight, Medicine, Perception, or Survival) check.`,
            lang_vi: `Thực hiện một Wisdom (Insight, Medicine, Perception, hoặc Survival) check.`
        }
    },
    {
        id: "action_common_study",
        type: "Action",
        rarity: "Common",
        name: "Study",
        description: {
            lang_en: `Make an Intelligence (Arcana, History, Investigation, Nature, or Religion) check.`,
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