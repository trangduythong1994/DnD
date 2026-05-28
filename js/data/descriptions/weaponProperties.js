const data_weaponProperties = [
    {
        name: "Ammunition",
        description: {
            lang_en: `You can use a weapon that has the Ammunition property to make a ranged attack only if you have ammunition to fire from it. The type of ammunition required is specified with the weapon’s range. Each attack expends one piece of ammunition. Drawing the ammunition is part of the attack (you need a free hand to load a one-handed weapon). After a fight, you can spend 1 minute to recover half the ammunition (round down) you used in the fight; the rest is lost.`,
            lang_vi: `Bạn chỉ có thể sử dụng vũ khí có đặc tính Ammunition (Đạn dược) để thực hiện một đòn tấn công tầm xa nếu bạn có đạn để bắn từ nó. Loại đạn cần thiết được chỉ định cùng với tầm bắn (range) của vũ khí. Mỗi đòn tấn công tiêu tốn một viên đạn. Việc rút đạn là một phần của đòn tấn công (bạn cần một tay rảnh để nạp đạn cho vũ khí một tay). Sau trận chiến, bạn có thể dành 1 phút để thu hồi lại một nửa số đạn (làm tròn xuống) mà bạn đã sử dụng trong trận; phần còn lại sẽ bị mất.`
        }
    },
    {
        name: "Finesse",
        description: {
            lang_en: `When making an attack with a Finesse weapon, use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.`,
            lang_vi: `Khi thực hiện một đòn tấn công bằng vũ khí Finesse (Linh hoạt), bạn có thể lựa chọn sử dụng modifier của Strength (Sức mạnh) hoặc Dexterity (Khéo léo) cho các attack roll và damage roll. Bạn phải sử dụng cùng một modifier cho cả hai roll này.`
        }
    },
    {
        name: "Heavy",
        description: {
            lang_en: `You have Disadvantage on attack rolls with a Heavy weapon if it’s a Melee weapon and your Strength score isn’t at least 13 or if it’s a Ranged weapon and your Dexterity score isn’t at least 13.`,
            lang_vi: `Bạn sẽ bị Disadvantage vào các attack roll khi sử dụng vũ khí Heavy (Nặng) nếu nó là vũ khí Melee (Cận chiến) và chỉ số Strength của bạn không đạt tối thiểu 13, hoặc nếu nó là vũ khí Ranged (Tầm xa) và chỉ số Dexterity của bạn không đạt tối thiểu 13.`
        }
    },
    {
        name: "Light",
        description: {
            lang_en: `When you take the Attack action on your turn and attack with a Light weapon, you can make one extra attack as a Bonus Action later on the same turn. That extra attack must be made with a different Light weapon, and you don’t add your ability modifier to the extra attack’s damage unless that modifier is negative.`,
            lang_vi: `Khi bạn thực hiện một Attack action trong lượt của mình và tấn công bằng một vũ khí Light (Nhẹ), bạn có thể thực hiện thêm một đòn tấn công phụ bằng một Bonus Action sau đó trong cùng lượt. Đòn tấn công phụ đó phải được thực hiện bằng một vũ khí Light khác, và bạn không được cộng ability modifier của mình vào sát thương của đòn tấn công phụ trừ khi modifier đó là số âm.`
        }
    },
    {
        name: "Loading",
        description: {
            lang_en: `You can fire only one piece of ammunition from a Loading weapon when you use an action, a Bonus Action, or a Reaction to fire it, regardless of the number of attacks you can normally make.`,
            lang_vi: `Bạn chỉ có thể bắn một viên đạn duy nhất từ vũ khí Loading (Nạp đạn) khi sử dụng một action, Bonus Action hoặc Reaction để bắn, bất kể số lượng đòn tấn công mà bạn có thể thực hiện thông thường là bao nhiêu.`
        }
    },
    {
        name: "Range",
        description: {
            lang_en: `A Range weapon has a range in parentheses after the Ammunition or Thrown property. The range lists two numbers. The first is the weapon’s normal range in feet, and the second is the weapon’s long range. When attacking a target beyond normal range, you have Disadvantage on the attack roll. You can’t attack a target beyond the long range.`,
            lang_vi: `Vũ khí có đặc tính Range (Tầm xa) sẽ ghi tầm bắn trong ngoặc đơn ngay sau đặc tính Ammunition hoặc Thrown. Tầm bắn liệt kê hai con số. Số đầu tiên là tầm bắn bình thường (normal range) tính bằng feet, và số thứ hai là tầm bắn tối đa (long range) của vũ khí. Khi tấn công một mục tiêu nằm ngoài tầm bắn bình thường, bạn sẽ bị Disadvantage vào attack roll. Bạn không thể tấn công mục tiêu nằm ngoài tầm bắn tối đa.`
        }
    },
    {
        name: "Reach",
        description: {
            lang_en: `A Reach weapon adds 5 feet to your reach when you attack with it, as well as when determining your reach for Opportunity Attacks with it.`,
            lang_vi: `Vũ khí Reach (Tầm với) cộng thêm 5 feet vào tầm đánh của bạn khi bạn tấn công bằng vũ khí đó, cũng như khi xác định tầm đánh để thực hiện Opportunity Attack bằng vũ khí này.`
        }
    },
    {
        name: "Thrown",
        description: {
            lang_en: `If a weapon has the Thrown property, you can throw the weapon to make a ranged attack, and you can draw that weapon as part of the attack. If the weapon is a Melee weapon, use the same ability modifier for the attack and damage rolls that you use for a melee attack with that weapon.`,
            lang_vi: `Nếu vũ khí có đặc tính Thrown (Ném), bạn có thể ném vũ khí đó để thực hiện một đòn tấn công tầm xa, và bạn có thể rút vũ khí đó ra như một phần của đòn tấn công. Nếu đó là một vũ khí Melee (Cận chiến), hãy sử dụng cùng một ability modifier cho attack roll và damage roll giống như khi bạn thực hiện một đòn tấn công cận chiến với vũ khí đó.`
        }
    },
    {
        name: "Two-Handed",
        description: {
            lang_en: `A Two-Handed weapon requires two hands when you attack with it.`,
            lang_vi: `Vũ khí Two-Handed (Hai tay) yêu cầu bạn phải sử dụng bằng cả hai tay khi tấn công.`
        }
    },
    {
        name: "Versatile",
        description: {
            lang_en: `A Versatile weapon can be used with one or two hands. A damage value in parentheses appears with the property. The weapon deals that damage when used with two hands to make a melee attack.`,
            lang_vi: `Vũ khí Versatile (Đa năng) có thể được sử dụng bằng một tay hoặc hai tay. Một giá trị sát thương nằm trong ngoặc đơn sẽ xuất hiện cùng với đặc tính này. Vũ khí sẽ gây ra lượng sát thương đó khi được sử dụng bằng hai tay để thực hiện một đòn tấn công cận chiến.`
        }
    }
];