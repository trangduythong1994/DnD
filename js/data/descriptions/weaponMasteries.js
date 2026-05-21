const data_weaponMasteries = [
    {
        name: "Cleave",
        description: {
            lang_en: `If you hit a creature with a melee attack roll using this weapon, you can make a melee attack roll with the weapon against a second creature within 5 feet of the first that is also within your reach. On a hit, the second creature takes the weapon’s damage, but don’t add your ability modifier to that damage unless that modifier is negative. You can make this extra attack only once per turn.`,
            lang_vi: `Nếu bạn đánh trúng một sinh vật bằng một đòn attack roll cận chiến sử dụng vũ khí này, bạn có thể thực hiện một đòn attack roll cận chiến bằng vũ khí đó vào một sinh vật thứ hai cách sinh vật đầu tiên trong vòng 5 feet và cũng nằm trong tầm đánh của bạn. Nếu trúng, sinh vật thứ hai sẽ chịu sát thương của vũ khí, nhưng không được cộng ability modifier của bạn vào sát thương đó trừ khi modifier đó là số âm. Bạn chỉ có thể thực hiện đòn tấn công phụ này một lần mỗi lượt.`
        }
    },
    {
        name: "Graze",
        description: {
            lang_en: `If your attack roll with this weapon misses a creature, you can deal damage to that creature equal to the ability modifier you used to make the attack roll. This damage is the same type dealt by the weapon, and the damage can be increased only by increasing the ability modifier.`,
            lang_vi: `Nếu attack roll của bạn bằng vũ khí này trượt một sinh vật, bạn có thể gây sát thương cho sinh vật đó bằng với ability modifier mà bạn đã dùng để thực hiện attack roll. Sát thương này có cùng loại với sát thương của vũ khí, và lượng sát thương này chỉ có thể được tăng lên bằng cách tăng ability modifier.`
        }
    },
    {
        name: "Nick",
        description: {
            lang_en: `When you make the extra attack of the Light property, you can make it as part of the Attack action instead of as a Bonus Action. You can make this extra attack only once per turn.`,
            lang_vi: `Khi bạn thực hiện đòn tấn công phụ của đặc tính Light (Nhẹ), bạn có thể gộp nó vào luôn trong Attack action thay vì dùng một Bonus Action. Bạn chỉ có thể thực hiện đòn tấn công phụ này một lần mỗi lượt.`
        }
    },
    {
        name: "Push",
        description: {
            lang_en: `If you hit a creature with this weapon, you can push the creature up to 10 feet straight away from yourself if it is Large or smaller.`,
            lang_vi: `Nếu bạn đánh trúng một sinh vật bằng vũ khí này, bạn có thể đẩy sinh vật đó lùi xa tối đa 10 feet theo đường thẳng ra xa khỏi bạn nếu nó có kích cỡ Large trở xuống.`
        }
    },
    {
        name: "Sap",
        description: {
            lang_en: `If you hit a creature with this weapon, that creature has Disadvantage on its next attack roll before the start of your next turn.`,
            lang_vi: `Nếu bạn đánh trúng một sinh vật bằng vũ khí này, sinh vật đó sẽ bị Disadvantage vào attack roll tiếp theo của nó trước khi lượt tiếp theo của bạn bắt đầu.`
        }
    },
    {
        name: "Slow",
        description: {
            lang_en: `If you hit a creature with this weapon and deal damage to it, you can reduce its Speed by 10 feet until the start of your next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn’t exceed 10 feet.`,
            lang_vi: `Nếu bạn đánh trúng một sinh vật bằng vũ khí này và gây sát thương cho nó, bạn có thể giảm 10 feet Tốc độ (Speed) di chuyển của nó cho đến khi lượt tiếp theo của bạn bắt đầu. Nếu sinh vật bị đánh trúng nhiều lần bởi các vũ khí có đặc tính này, mức giảm Tốc độ cũng không vượt quá 10 feet.`
        }
    },
    {
        name: "Topple",
        description: {
            lang_en: `If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.`,
            lang_vi: `Nếu bạn đánh trúng một sinh vật bằng vũ khí này, bạn có thể ép sinh vật đó phải thực hiện một Constitution saving throw (DC bằng 8 + ability modifier dùng cho attack roll + Proficiency Bonus của bạn). Nếu đổ xúc xắc trượt (failed save), sinh vật đó sẽ bị trạng thái ngã sấp (Prone).`
        }
    },
    {
        name: "Vex",
        description: {
            lang_en: `If you hit a creature with this weapon and deal damage to the creature, you have Advantage on your next attack roll against that creature before the end of your next turn.`,
            lang_vi: `Nếu bạn đánh trúng một sinh vật bằng vũ khí này và gây sát thương cho sinh vật đó, bạn sẽ nhận được Advantage cho attack roll tiếp theo của mình nhắm vào sinh vật đó trước khi lượt tiếp theo của bạn kết thúc.`
        }
    }
];