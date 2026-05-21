const data_weapons = [
  // --- SIMPLE MELEE ---
  {
    id: "weapon_standard_club",
    type: "Weapon",
    archetype: "Club",
    rarity: "Standard",
    category: "Simple Melee",
    name: "Club",
    damage: "1d4 Bludgeoning",
    properties: "Light",
    mastery: "Slow",
    weight: "2 lb.",
    cost: "1 SP",
    description: `Vũ khí cận chiến cơ bản, thường là một gậy gỗ chắc chắn.`
    // , locked: true
  },
  {
    id: "weapon_standard_dagger",
    type: "Weapon",
    archetype: "Dagger",
    rarity: "Standard",
    category: "Simple Melee",
    name: "Dagger",
    damage: "1d4 Piercing",
    properties: "Finesse, Thrown (20/60)",
    mastery: "Nick",
    weight: "1 lb.",
    cost: "2 GP",
    description: "Một con dao găm nhỏ gọn, dễ giấu và linh hoạt trong cả cận chiến lẫn ném."
    // , locked: true
  },
  {
    id: "weapon_standard_greatclub",
    type: "Weapon",
    rarity: "Standard",
    category: "Simple Melee",
    name: "Greatclub",
    damage: "1d8 Bludgeoning",
    properties: "Two-Handed",
    mastery: "Push",
    weight: "10 lb.",
    cost: "2 SP",
    description: "Một cây gậy lớn bằng gỗ bọc sắt, đòi hỏi sức mạnh để vung."
    , locked: true
  },
  {
    id: "weapon_standard_handaxe",
    type: "Weapon",
    rarity: "Standard",
    category: "Simple Melee",
    name: "Handaxe",
    damage: "1d6 Slashing",
    properties: "Light, Thrown (Range 20/60)",
    mastery: "Vex",
    weight: "2 lb.",
    cost: "5 GP",
    description: "Rìu cầm tay nhỏ có thể dùng để chém hoặc phóng đi."
    , locked: true
  },
  {
    id: "weapon_standard_javelin",
    type: "Weapon",
    rarity: "Standard",
    category: "Simple Melee",
    name: "Javelin",
    damage: "1d6 Piercing",
    properties: "Thrown (Range 30/120)",
    mastery: "Slow",
    weight: "2 lb.",
    cost: "5 SP",
    description: "Một cây lao nhẹ, cân bằng tốt để ném ở tầm xa."
    // , locked: true
  },
  {
    id: "weapon_standard_light_hammer",
    type: "Weapon",
    rarity: "Standard",
    category: "Simple Melee",
    name: "Light Hammer",
    damage: "1d4 Bludgeoning",
    properties: "Light, Thrown (Range 20/60)",
    mastery: "Nick",
    weight: "2 lb.",
    cost: "2 GP",
    description: "Búa ném nhẹ dùng trong chiến đấu."
    , locked: true
  },
  {
    id: "weapon_standard_mace",
    type: "Weapon",
    rarity: "Standard",
    category: "Simple Melee",
    name: "Mace",
    damage: "1d6 Bludgeoning",
    properties: "—",
    mastery: "Sap",
    weight: "4 lb.",
    cost: "5 GP",
    description: "Chùy có đầu nặng bằng kim loại dùng để đập."
    // , locked: true
  },
  {
    id: "weapon_standard_quarterstaff",
    type: "Weapon",
    rarity: "Standard",
    category: "Simple Melee",
    name: "Quarterstaff",
    damage: "1d6 Bludgeoning",
    properties: "Versatile (1d8)",
    mastery: "Topple",
    weight: "4 lb.",
    cost: "2 SP",
    description: "Côn gỗ dài, vừa dùng để phòng thủ vừa tấn công."
    // , locked: true
  },
  {
    id: "weapon_standard_sickle",
    type: "Weapon",
    rarity: "Standard",
    category: "Simple Melee",
    name: "Sickle",
    damage: "1d4 Slashing",
    properties: "Light",
    mastery: "Nick",
    weight: "2 lb.",
    cost: "1 GP",
    description: "Lưỡi liềm sắc bén mượn từ công cụ nông nghiệp."
    , locked: true
  },
  {
    id: "weapon_standard_spear",
    type: "Weapon",
    rarity: "Standard",
    category: "Simple Melee",
    name: "Spear",
    damage: "1d6 Piercing",
    properties: "Thrown (Range 20/60), Versatile (1d8)",
    mastery: "Sap",
    weight: "3 lb.",
    cost: "1 GP",
    description: "Giáo ngắn, vũ khí quân sự phổ biến nhất."
    // , locked: true
  },

  // --- SIMPLE RANGED ---
  {
    id: "weapon_standard_dart",
    type: "Weapon",
    rarity: "Standard",
    category: "Simple Ranged",
    name: "Dart",
    damage: "1d4 Piercing",
    properties: "Finesse, Thrown (Range 20/60)",
    mastery: "Vex",
    weight: "1/4 lb.",
    cost: "5 CP",
    description: "Phi tiêu sắc nhọn được ném bằng tay."
    , locked: true
  },
  {
    id: "weapon_standard_light_crossbow",
    type: "Weapon",
    rarity: "Standard",
    category: "Simple Ranged",
    name: "Light Crossbow",
    damage: "1d8 Piercing",
    properties: "Ammunition (Range 80/320; Bolt), Loading, Two-Handed",
    mastery: "Slow",
    weight: "5 lb.",
    cost: "25 GP",
    description: "Nỏ hạng nhẹ dễ ngắm bắn."
    , locked: true
  },
  {
    id: "weapon_standard_shortbow",
    type: "Weapon",
    rarity: "Standard",
    category: "Simple Ranged",
    name: "Shortbow",
    damage: "1d6 Piercing",
    properties: "Ammunition (Range 80/320; Arrow), Two-Handed",
    mastery: "Vex",
    weight: "2 lb.",
    cost: "25 GP",
    description: "Cung ngắn gọn nhẹ thích hợp đi săn và do thám."
    // , locked: true
  },
  {
    id: "weapon_standard_sling",
    type: "Weapon",
    rarity: "Standard",
    category: "Simple Ranged",
    name: "Sling",
    damage: "1d4 Bludgeoning",
    properties: "Ammunition (Range 30/120; Bullet)",
    mastery: "Slow",
    weight: "0 lb.",
    cost: "1 SP",
    description: "Súng cao su da đơn giản bắn đạn đá hoặc bi chì."
    , locked: true
  },

  // --- MARTIAL MELEE ---
  {
    id: "weapon_standard_battleaxe",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "Battleaxe",
    damage: "1d8 Slashing",
    properties: "Versatile (1d10)",
    mastery: "Topple",
    weight: "4 lb.",
    cost: "10 GP",
    description: "Rìu chiến với lưỡi thép lớn."
    , locked: true
  },
  {
    id: "weapon_standard_flail",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "Flail",
    damage: "1d8 Bludgeoning",
    properties: "—",
    mastery: "Sap",
    weight: "2 lb.",
    cost: "10 GP",
    description: "Chùy xích chuyên dùng để đánh vòng qua khiên đối phương."
    // , locked: true
  },
  {
    id: "weapon_standard_glaive",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "Glaive",
    damage: "1d10 Slashing",
    properties: "Heavy, Reach, Two-Handed",
    mastery: "Graze",
    weight: "6 lb.",
    cost: "20 GP",
    description: "Thanh đao dài gắn trên một cây sào."
    , locked: true
  },
  {
    id: "weapon_standard_greataxe",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "Greataxe",
    damage: "1d12 Slashing",
    properties: "Heavy, Two-Handed",
    mastery: "Cleave",
    weight: "7 lb.",
    cost: "30 GP",
    description: "Đại rìu với lực chém cực mạnh."
    , locked: true
  },
  {
    id: "weapon_standard_greatsword",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "Greatsword",
    damage: "2d6 Slashing",
    properties: "Heavy, Two-Handed",
    mastery: "Graze",
    weight: "6 lb.",
    cost: "50 GP",
    description: "Đại kiếm đòi hỏi thể lực lớn để sử dụng hai tay."
    // , locked: true
  },
  {
    id: "weapon_standard_halberd",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "Halberd",
    damage: "1d10 Slashing",
    properties: "Heavy, Reach, Two-Handed",
    mastery: "Cleave",
    weight: "6 lb.",
    cost: "20 GP",
    description: "Kích dài kết hợp rìu chém và mũi giáo xuyên."
    , locked: true
  },
  {
    id: "weapon_standard_lance",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "Lance",
    damage: "1d10 Piercing",
    properties: "Heavy, Reach, Two-Handed (unless mounted)",
    mastery: "Topple",
    weight: "6 lb.",
    cost: "10 GP",
    description: "Thương kỵ binh dài và nặng dùng để xung phong đâm."
    , locked: true
  },
  {
    id: "weapon_standard_longsword",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "Longsword",
    damage: "1d8 Slashing",
    properties: "Versatile (1d10)",
    mastery: "Sap",
    weight: "3 lb.",
    cost: "15 GP",
    description: "Kiếm dài cơ bản của các chiến binh hoàng gia."
    , locked: true
  },
  {
    id: "weapon_standard_maul",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "Maul",
    damage: "2d6 Bludgeoning",
    properties: "Heavy, Two-Handed",
    mastery: "Topple",
    weight: "10 lb.",
    cost: "10 GP",
    description: "Đại búa tạ dùng để nghiền nát giáp sắt."
    , locked: true
  },
  {
    id: "weapon_standard_morningstar",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "Morningstar",
    damage: "1d8 Piercing",
    properties: "—",
    mastery: "Sap",
    weight: "4 lb.",
    cost: "15 GP",
    description: "Chùy gai đâm thủng da thịt kẻ địch."
    , locked: true
  },
  {
    id: "weapon_standard_pike",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "Pike",
    damage: "1d10 Piercing",
    properties: "Heavy, Reach, Two-Handed",
    mastery: "Push",
    weight: "18 lb.",
    cost: "5 GP",
    description: "Trường giáo cực dài, dùng hiệu quả để đâm và ngăn chặn kẻ thù tiếp cận."
    , locked: true
  },
  {
    id: "weapon_standard_rapier",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "Rapier",
    damage: "1d8 Piercing",
    properties: "Finesse",
    mastery: "Vex",
    weight: "2 lb.",
    cost: "25 GP",
    description: "Kiếm liễu với lưỡi kiếm mỏng chuyên dùng để đâm nhanh."
    , locked: true
  },
  {
    id: "weapon_standard_scimitar",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "Scimitar",
    damage: "1d6 Slashing",
    properties: "Finesse, Light",
    mastery: "Nick",
    weight: "3 lb.",
    cost: "25 GP",
    description: "Thanh đao cong, trọng lượng dồn lên lưỡi để chém ngọt hơn."
    // , locked: true
  },
  {
    id: "weapon_standard_shortsword",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "Shortsword",
    damage: "1d6 Piercing",
    properties: "Finesse, Light",
    mastery: "Vex",
    weight: "2 lb.",
    cost: "10 GP",
    description: "Kiếm ngắn thiết kế để cân bằng cả chém lẫn đâm."
    // , locked: true
  },
  {
    id: "weapon_standard_trident",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "Trident",
    damage: "1d8 Piercing",
    properties: "Thrown (Range 20/60), Versatile (1d10)",
    mastery: "Topple",
    weight: "4 lb.",
    cost: "5 GP",
    description: "Đinh ba có khả năng ném và cận chiến đa dạng."
    , locked: true
  },
  {
    id: "weapon_standard_warhammer",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "Warhammer",
    damage: "1d8 Bludgeoning",
    properties: "Versatile (1d10)",
    mastery: "Push",
    weight: "5 lb.",
    cost: "15 GP",
    description: "Búa chiến đúc thép cứng cáp, sát thương diện lớn."
    , locked: true
  },
  {
    id: "weapon_standard_war_pick",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "War Pick",
    damage: "1d8 Piercing",
    properties: "Versatile (1d10)",
    mastery: "Sap",
    weight: "2 lb.",
    cost: "5 GP",
    description: "Cuốc chiến bằng thép chuyên để khoét lỗ trên khiên thép."
    , locked: true
  },
  {
    id: "weapon_standard_whip",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Melee",
    name: "Whip",
    damage: "1d4 Slashing",
    properties: "Finesse, Reach",
    mastery: "Slow",
    weight: "3 lb.",
    cost: "2 GP",
    description: "Roi da bện giúp tấn công ở tầm xa và trói chân kẻ địch."
    , locked: true
  },

  // --- MARTIAL RANGED ---
  {
    id: "weapon_standard_blowgun",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Ranged",
    name: "Blowgun",
    damage: "1 Piercing",
    properties: "Ammunition (Range 25/100; Needle), Loading",
    mastery: "Vex",
    weight: "1 lb.",
    cost: "10 GP",
    description: "Ống tiêu dùng để thổi kim tẩm độc tàng hình."
    , locked: true
  },
  {
    id: "weapon_standard_hand_crossbow",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Ranged",
    name: "Hand Crossbow",
    damage: "1d6 Piercing",
    properties: "Ammunition (Range 30/120; Bolt), Light, Loading",
    mastery: "Vex",
    weight: "3 lb.",
    cost: "75 GP",
    description: "Nỏ tay gọn nhẹ có thể sử dụng dễ dàng trong lúc chạy trốn."
    , locked: true
  },
  {
    id: "weapon_standard_heavy_crossbow",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Ranged",
    name: "Heavy Crossbow",
    damage: "1d10 Piercing",
    properties: "Ammunition (Range 100/400; Bolt), Heavy, Loading, Two-Handed",
    mastery: "Push",
    weight: "18 lb.",
    cost: "50 GP",
    description: "Nỏ hạng nặng có sức công phá cực kỳ mạnh mẽ."
    , locked: true
  },
  {
    id: "weapon_standard_longbow",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Ranged",
    name: "Longbow",
    damage: "1d8 Piercing",
    properties: "Ammunition (Range 150/600; Arrow), Heavy, Two-Handed",
    mastery: "Slow",
    weight: "2 lb.",
    cost: "50 GP",
    description: "Cung dài sinh ra cho các chiến binh tinh nhuệ với tầm bắn rất xa."
    // , locked: true
  },
  {
    id: "weapon_standard_musket",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Ranged",
    name: "Musket",
    damage: "1d12 Piercing",
    properties: "Ammunition (Range 40/120; Bullet), Loading, Two-Handed",
    mastery: "Slow",
    weight: "10 lb.",
    cost: "500 GP",
    description: "Súng hỏa mai (Firearm) thời sơ khai, sát thương khủng."
    , locked: true
  },
  {
    id: "weapon_standard_pistol",
    type: "Weapon",
    rarity: "Standard",
    category: "Martial Ranged",
    name: "Pistol",
    damage: "1d10 Piercing",
    properties: "Ammunition (Range 30/90; Bullet), Loading",
    mastery: "Vex",
    weight: "3 lb.",
    cost: "250 GP",
    description: "Súng lục (Firearm) sử dụng thuốc súng, bù đắp tầm ngắn bằng lượng sát thương lớn."
    , locked: true
  }
  ,{
    id: "weapon_uncommon_whisperfang",
    type: "Weapon",
    archetype: "Dagger",
    rarity: "Uncommon",
    category: "Simple Melee",
    name: "Whisperfang",
    damage: "1d4 Piercing",
    properties: "Finesse, Light, Thrown (Range 20/60)",
    mastery: "Nick",
    weight: "1 lb.",
    cost: "???",
    description: `You have a +1 bonus to attack and damage rolls made with this magic weapon.
    <p>Proficiency with a Dagger allows you to add your proficiency bonus to the attack roll for any attack you make with it.`
    , passcode: 6006453655
    , locked: true
  }
  ,{
    id: "weapon_rare_sun_blade",
    type: "Weapon",
    rarity: "Rare",
    category: "Martial Melee",
    name: "Sun Blade",
    damage: "1d8 Radiant",
    properties: "Finesse, Versatile (1d10)",
    mastery: "Sap",
    weight: "3 lb.",
    cost: "???",
    description: `Vật phẩm này trông giống như một chuôi kiếm.
    <p><b><i>Blade of Radiance.</i></b> Trong khi nắm giữ chuôi kiếm, bạn có thể dùng một Bonus Action để khiến một lưỡi kiếm bằng ánh sáng thuần khiết phóng ra hoặc làm cho lưỡi kiếm biến mất. Trong khi lưỡi kiếm tồn tại, vũ khí ma thuật này hoạt động như một Longsword với đặc tính Finesse. Nếu bạn có proficiency với Longsword hoặc Shortsword, bạn cũng có proficiency với Sun Blade.
    <p>Bạn nhận được +2 bonus vào các attack roll và damage roll thực hiện bằng vũ khí này, đồng thời nó gây Radiant damage thay vì Slashing damage. Khi bạn đánh trúng một Undead bằng thanh kiếm này, mục tiêu đó phải chịu thêm 1d8 Radiant damage.
    <p><b><i>Sunlight.</i></b> Lưỡi kiếm phát sáng của thanh kiếm tỏa ra Bright Light trong bán kính 15 feet và Dim Light cho 15 feet tiếp theo. Ánh sáng này chính là ánh sáng mặt trời (sunlight). Trong khi lưỡi kiếm vẫn đang duy trì, bạn có thể thực hiện một Magic action để tăng hoặc giảm bán kính của Bright Light và Dim Light, mỗi loại 5 feet, lên mức tối đa là 30 feet cho mỗi loại hoặc giảm xuống mức tối thiểu là 10 feet cho mỗi loại.`,
    passcode: 7429185301,
    locked: true
  }
];