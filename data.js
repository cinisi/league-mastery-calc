var data = [
    // offensive
    [
        {
            index: 1,
            name: "Summoner's Wrath",
            ranks: 1,
            desc: "Improves the following Summoner Spells:\n\n|Exhaust:| Reduces target's Magic Resist and Armor by 10\n|Ignite:| Increases Ability Power and Attack Damage by 5 while on cooldown\n|Surge:| Increases Ability Power and Attack Speed gained by 10%\n|Ghost:| Increases Movement Speed bonus to 35%",
            rankInfo: [],
        },
        {
            index: 2,
            name: "Brute Force",
            ranks: 3,
            desc: "+# Attack Damage",
            rankInfo: [1, 2, 3],
        },
        {
            index: 3,
            name: "Mental Force",
            ranks: 4,
            desc: "+# Ability Power",
            rankInfo: [1, 2, 3, 4],
        },
        {
            index: 4,
            name: "Butcher",
            ranks: 2,
            desc: "Basic attacks deal # bonus damage to minions and monsters",
            rankInfo: [2, 4],
        },
        {
            index: 6,
            name: "Alacrity",
            ranks: 4,
            desc: "+#% Attack Speed",
            rankInfo: [1.5, 3, 4.5, 6],
        },
        {
            index: 7,
            name: "Sorcery",
            ranks: 4,
            desc: "+#% Cooldown Reduction",
            rankInfo: [1, 2, 3, 4],
        },
        {
            index: 8,
            name: "Demolitionist",
            ranks: 1,
            desc: "Basic attacks deal 10 bonus damage to towers",
            rankInfo: [],
        },
        {
            index: 9,
            name: "Deadliness",
            ranks: 4,
            desc: "+#% Critical Strike Chance",
            rankInfo: [1, 2, 3, 4],
        },
        {
            index: 10,
            name: "Weapon Expertise",
            ranks: 1,
            desc: "+10% Armor Penetraton",
            rankInfo: [],
        },
        {
            index: 11,
            name: "Arcane Knowledge",
            ranks: 1,
            desc: "+10% Magic Penetration",
            rankInfo: [],
        },
        {
            index: 12,
            name: "Havoc",
            ranks: 3,
            desc: "Increases damage dealt by #%",
            rankInfo: [0.5, 1, 1.5],
        },
        {
            index: 13,
            name: "Lethality",
            ranks: 1,
            desc: "10% Critical Strike Damage",
            rankInfo: [],
        },
        {
            index: 14,
            name: "Vampirism",
            ranks: 3,
            desc: "#% Life Steal",
            rankInfo: [1, 2, 3],
        },
        {
            index: 15,
            name: "Blast",
            ranks: 4,
            perlevel: 1,
            desc: "+# Ability Power per level\n(# Ability Power at champion level 18)",
            rankInfo: [0.25, 0.5, 0.75, 1],
        },
        {
            index: 18,
            name: "Sunder",
            ranks: 3,
            desc: "+# Armor Penetration",
            rankInfo: [2, 4, 6],
        },
        {
            index: 19,
            name: "Archmage",
            ranks: 4,
            desc: "Increases your Ability Power #%",
            rankInfo: [1.25, 2.5, 3.75, 5],
        },
        {
            index: 22,
            name: "Executioner",
            ranks: 1,
            desc: "Increases damage dealt by 6% to targets below 40% Health",
            rankInfo: [],
        },
    ],
        // defensive
    [
        {
            index: 1,
            name: "Summoner's Resolve",
            ranks: 1,
            desc: "Improves the following Summoner Spells:\n\n|Revive:| Grants a massive Movement Speed boost for a short duration upon reviving\n|Cleanse:| Increases duration of disable reduction by 1 second\n|Heal:| Increases Health restored by 15%\n|Smite:| Grants 10 bonus gold on use\n|Garrison:| Allied Garrisoned turrets deal 50% splash damage",
            rankInfo: [],
        },
        {
            index: 2,
            name: "Resistance",
            ranks: 3,
            desc: "+# Magic Resist",
            rankInfo: [2, 4, 6],
        },
        {
            index: 3,
            name: "Hardiness",
            ranks: 3,
            desc: "+# Armor",
            rankInfo: [2, 4, 6],
        },
        {
            index: 4,
            name: "Tough Skin",
            ranks: 2,
            desc: "Reduces damage taken from minions and monsters by #",
            rankInfo: [1, 2],
        },
        {
            index: 6,
            name: "Durability",
            ranks: 4,
            perlevel: 1,
            desc: "+# Health per level\n(+# Health at champion level 18)",
            rankInfo: [1.5, 3, 4.5, 6],
        },
        {
            index: 7,
            name: "Vigor",
            ranks: 3,
            desc: "+# Health Regen per 5 seconds",
            rankInfo: [1, 2, 3],
        },
        {
            index: 9,
            name: "Indomitable",
            ranks: 2,
            desc: "Reduces incoming damage by #",
            rankInfo: [1, 2],
        },
        {
            index: 10,
            name: "Veteran's Scars",
            ranks: 1,
            desc: "+30 Health",
            rankInfo: [],
        },
        {
            index: 11,
            name: "Evasion",
            ranks: 3,
            desc: "Reduces the damage taken from area effect abilities by #%",
            rankInfo: [1, 2, 3],
        },
        {
            index: 12,
            name: "Bladed Armor",
            ranks: 1,
            desc: "Returns 6 damage against minion and monster attacks",
            rankInfo: [],
        },
        {
            index: 13,
            name: "Siege Commander",
            ranks: 1,
            desc: "Reduces the Armor of nearby towers by 10 (does not stack)",
            rankInfo: [],
        },
        {
            index: 14,
            name: "Initiator",
            ranks: 3,
            desc: "Increases Movement Speed by #% when above 70% Health",
            rankInfo: [1, 2, 3],
        },
        {
            index: 15,
            name: "Enlightenment",
            ranks: 3,
            perlevel: 1,
            desc: "+# Cooldown Reduction per level\n(+#% Cooldown Reduction at champion level 18)",
            rankInfo: [0.15, 0.3, 0.45],
        },
        {
            index: 18,
            name: "Honor Guard",
            ranks: 3,
            desc: "Reduces damage taken by #%",
            rankInfo: [0.5, 1, 1.5],
        },
        {
            index: 19,
            name: "Mercenary",
            ranks: 3,
            desc: "Gain # bonus gold on champion kills and assists (50% reduced effect on the Crystal Scar).",
            rankInfo: [8, 16, 24],
        },
        {
            index: 22,
            name: "Juggernaut",
            ranks: 1,
            desc: "Increases your maximum Health by 3% and reduces the duration of incoming disables by 10%.",
            rankInfo: [],
        },
    ],
    [
        {
            index: 1,
            name: "Summoner's Insight",
            ranks: 1,
            desc: "Improves the following Summoner Spells:\n\n|Teleport:| Reduces cast time by 1 second\n|Promote:| Increases promoted minion's bonus defensive stats by 15%\n|Flash:| Reduces cooldown by 15 seconds\n|Clarity:| Increases Mana restored by 20%\n|Clairvoyance:| Increases duration by 2 seconds",
            rankInfo: [],
        },
        {
            index: 2,
            name: "Good Hands",
            ranks: 3,
            desc: "Reduces time spent dead by #%",
            rankInfo: [4, 7, 10],
        },
        {
            index: 3,
            name: "Expanded Mind",
            ranks: 3,
            perlevel: 1,
            desc: "+# Mana per level\n(+# Mana at champion level 18)\nor +# Energy",
            rankInfo: [4, 8, 12],
            rankInfo2: [4, 7, 10],
        },
        {
            index: 4,
            name: "Improved Recall",
            ranks: 1,
            desc: "Reduces the cast time of Recall by 1 second and Enhanced Recall by # seconds.",
            rankInfo: [0.5],
        },
        {
            index: 6,
            name: "Swiftness",
            ranks: 4,
            desc: "+#% Movement Speed",
            rankInfo: [0.5, 1, 1.5, 2],
        },
        {
            index: 7,
            name: "Meditation",
            ranks: 3,
            desc: "+# Mana Regen per 5 seconds",
            rankInfo: [1, 2, 3],
        },
        {
            index: 8,
            name: "Scout",
            ranks: 1,
            desc: "Increase vision range of wards by 5%",
            rankInfo: [],
        },
        {
            index: 10,
            name: "Greed",
            ranks: 4,
            desc: "Gain an additional # gold every 10 seconds",
            rankInfo: [0.5, 1, 1.5, 2],
        },
        {
            index: 11,
            name: "Transmutation",
            ranks: 3,
            desc: "+#% Spell Vamp",
            rankInfo: [1, 2, 3],
        },
        {
            index: 12,
            name: "Runic Affinity",
            ranks: 1,
            desc: "Increases the duration of shrine, relic, quest, and neutral monster buffs by 20%",
            rankInfo: [],
        },
        {
            index: 14,
            name: "Wealth",
            ranks: 2,
            desc: "Increases starting gold by #",
            rankInfo: [20, 40],
        },
        {
            index: 15,
            name: "Awareness",
            ranks: 4,
            desc: "Increases experience gained by #%",
            rankInfo: [1.25, 2.5, 3.75, 5],
        },
        {
            index: 16,
            name: "Sage",
            ranks: 1,
            desc: "Gain 40 bonus experience on champion kills and assists  (50% reduced effect on the Crystal Scar)",
            rankInfo: [],
        },
        {
            index: 18,
            name: "Perseverance",
            ranks: 3,
            desc: "Increases Health and Mana Regen by #%",
            rankInfo: [3, 6, 9],
        },
        {
            index: 19,
            name: "Intelligence",
            ranks: 3,
            desc: "+#% Cooldown Reduction",
            rankInfo: [2, 4, 6],
        },
        {
            index: 23,
            name: "Mastermind",
            ranks: 1,
            desc: "Reduces the cooldown of your Summoner Spells by 15%.",
            rankInfo: [],
        },
    ]
];
