export interface LegendaryMod {
    id: string;
    name: string;
    description: string;
    level: number;
    notes?: string[]
}

//TODO Add Tags for diffent types of mods (resistance vs other)
//TODO Add range value info
//TODO Add notes from wiki
export const WEAPON_LEGENDARY_MODS: { [id: string] : LegendaryMod; } = {
    //W-Level-1
    'anti_armor': {
        id: 'anti_armor',
        name: "Anti-Armor",
        description: "Ignores 50% of your target's armor",
        level: 1,
        notes: [
            'Stabilized or Tank Killer perks cause multiplicative armor penetration',
            'Stacks additively with weapon mods that add armor penetration. (Perforating magazine + Anti-armor = 90% penetration)'
        ]
    },
    'aristocrat': {
        id: 'aristocrat',
        name: "Aristocrat's",
        description: "Damage increases for every 1000 caps you have up to 50%",
        level: 1
    },
    'assassin': {
        id: 'assassin',
        name: "Assassin's",
        description: "+50% damage to Humans",
        level: 1,
        notes: [
            'Applies to both humans and players'
        ]
    },
    'berserker': {
        id: 'berserker',
        name: "Berserker's",
        description: "Lower Damage Resistance increases damage up to 50%",
        level: 1,
        notes: [
            'Applies to both humans and players'
        ]
    },
    'bloodied': {
        id: 'bloodied',
        name: "Bloodied",
        description: "Damage increases up to 95% as health decreases",
        level: 1,
        notes: [
            'Damage added is +(100 - Health%) in 5% increments i.e +80% Damage when health is 20-15%',
            '90% < HP ≤ 95% = +5% Damage',
            '85% < HP ≤ 90% = +10% Damage',
            'etc.'
        ]
    },
    'executioner': {
        id: 'executioner',
        name: "Executioner's",
        description: "+50% damage when your target is below 40% health",
        level: 1
    },
    'exterminator': {
        id: 'exterminator',
        name: "Exterminator's",
        description: "+50% damage to Mirelurks and bugs.",
        level: 1
    },
    'furious': {
        id: 'furious',
        name: "Furious",
        description: "+5% Damage after each consecutive hit on the same target, up to +45%",
        level: 1,
        notes: [
            '+5% damage per stack; nine stacks maximum for a total of +45% damage',
            'Stacks reset to 0 after not hitting the target for 10 seconds, but are not lost on missed attacks',
            'Stacks are reset on target swap'
        ]
    },
    'ghoul_slayer': {
        id: 'ghoul_slayer',
        name: "Ghoul Slayer's",
        description: "+50% damage to ghouls",
        level: 1
    },
    'gourmand': {
        id: 'gourmand',
        name: "Gourmand's",
        description: "Damage increases up to 24% as you fill your hunger and thirst meters",
        level: 1,
        notes: [
            'Damage bonuses from hunger and thirst are added together separately',
            '+12% Damage from Fully Fed',
            '+12% Damage from Fully Hydrated'
        ]
    },
    'hunter': {
        id: 'hunter',
        name: "Hunter's",
        description: "+50% damage to animals",
        level: 1
    },
    'instigating': {
        id: 'instigating',
        name: "Instigating",
        description: "Double damage if target is full health",
        level: 1,
        notes: ['+100% base damage']
    },
    'juggernaut': {
        id: 'juggernaut',
        name: "Juggernaut's",
        description: "Damage increases up to 25% as health increases",
        level: 1,
        notes: [
            '5% ≤ HP = +1% Damage',
            '10% < HP ≤ 15% = +3% Damage',
            'etc.'
        ]
    },
    'junkie': {
        id: 'junkie',
        name: "Junkie's",
        description: "+10% Damage per addiction, up to +50%",
        level: 1
    },
    'medic': {
        id: 'medic',
        name: "Medic's",
        description: "V.A.T.S. crits will heal you and your group",
        level: 1,
        notes: ["Heals 5% of the player's max HP per second for 1 second for all teammates within the radius of 768"]
    },
    'mutant_slayer': {
        id: 'mutant_slayer',
        name: "Mutant Slayer's",
        description: "+50% damage to super mutants",
        level: 1
    },
    'mutant': {
        id: 'mutant',
        name: "Mutant's",
        description: "+5% Damage for each mutation, up to +25%",
        level: 1
    },
    'nocturnal': {
        id: 'nocturnal',
        name: "Nocturnal",
        description: "50% increased damage at night.",
        level: 1
    },
    'quad': {
        id: 'quad',
        name: "Quad",
        description: "Quadruple ammo capacity",
        level: 1
    },
    'stalker': {
        id: 'stalker',
        name: "Stalker's",
        description: "If not in combat, +100% VATS accuracy at +50% AP cost",
        level: 1,
        notes: [
            'Multiplicative: ×2.0 VATS accuracy and ×2.0 AP Cost',
            'Not in combat means that combat music is not playing, or the player has not been detected'
        ]
    },
    'suppressor': {
        id: 'suppressor',
        name: "Suppressor's",
        description: "Reduce your target's damage output by 25% for 5s",
        level: 1
    },
    'troubleshooter': {
        id: 'troubleshooter',
        name: "Troubleshooter's",
        description: "+50% damage to robots",
        level: 1
    },
    'two_shot': {
        id: 'two_shot',
        name: "Two Shot",
        description: "Shoots an additional projectile",
        level: 1,
        notes: ['+25% Damage and adds an extra projectile, splitting weapon damage across all projectiles.']
    },
    'vampire': {
        id: 'vampire',
        name: "Vampire's",
        description: "Restore 2% health over 2 seconds when you hit an enemy",
        level: 1,
        notes: [
            "Heals limb damage. Gives 1% of the player's max HP for 2 seconds.",
            "Projectile weapons heal per each projectile. (ex. 8 projectiles hit a creature, player will be healed for total 16% of HP)"
        ]
    },
    'zealot': {
        id: 'zealot',
        name: "Zealot's",
        description: "+50% damage to Scorched",
        level: 1
    },
    //W-Level-2
    'basher': {
        id: 'basher',
        name: "Basher's",
        description: "Bashing damage increased by 50%",
        level: 2,
        notes: ['Multiplicative: Bash damage x1.5']
    },
    'crippling': {
        id: 'crippling',
        name: "Crippling",
        description: "+50% limb damage",
        level: 2,
        notes: ['Additive', 'Only increases limb condition damage, not actual damage dealt to HP bar']
    },
    'explosive': {
        id: 'explosive',
        name: "Explosive",
        description: "Bullets explode for 20% weapon damage",
        level: 2,
        notes: ['Projectile overridden', 'Reduces accuracy in VATS and increases spread', 'Damage is not divided between projectiles, each deals 20% base damage']
    },
    'explosive_shotgun': {
        id: 'explosive',
        name: "Explosive (Shotguns)",
        description: "Bullets explode for 3% weapon damage",
        level: 2,
        notes: ['Projectile overridden', 'Reduces accuracy in VATS and increases spread', 'Damage is not divided between projectiles, each deals 3% base damage']
    },
    'hitman': {
        id: 'hitman',
        name: "Hitman's",
        description: "+25% damage while aiming",
        level: 2,
        notes: ['Additive: +25% damage', 'Applies while aiming down with iron/glow/reflex sights and scopes', 'Not applied in VATS']
    },
    'inertial': {
        id: 'inertial',
        name: "Inertial",
        description: "Replenish 15 Action Points with each kill",
        level: 2
    },
    'last_shot': {
        id: 'last_shot',
        name: "Last Shot",
        description: "The last round in a magazine has a 25% chance to deal 2x DMG",
        level: 2,
        notes: ['Additive: +100% damage']
    },
    'rapid': {
        id: 'rapid',
        name: "Rapid",
        description: "25% faster fire rate",
        level: 2
    },
    'vats_enhanced_level2': {
        id: 'vats_enhanced_level2',
        name: "VATS Enhanced (Level 2)",
        description: "+50% VATS hit chance",
        level: 2,
        notes: ['Multiplicative: VATS hit chance x1.5']
    },
    //W-Level-3
    'agility': {
        id: 'agility',
        name: "Agility",
        description: "+1 Agility",
        level: 3
    },
    'durability': {
        id: 'durability',
        name: "Durability",
        description: "Breaks 50% slower",
        level: 3
    },
    'ghost': {
        id: 'ghost',
        name: "Ghost's",
        description: "Hits have a 10% chance to generate a Stealth Field for 2 seconds",
        level: 3
    },
    'lightweight': {
        id: 'lightweight',
        name: "Lightweight",
        description: "90% reduced weight",
        level: 3,
        notes: ['Does not apply to weight added by weapon mods']
    },
    'lucky': {
        id: 'lucky',
        name: "Lucky",
        description: "Your V.A.T.S. critical meter fills 15% faster",
        level: 3
    },
    'nimble': {
        id: 'nimble',
        name: "Nimble",
        description: "100% faster movement speed while aiming",
        level: 3,
        notes: ['Applies while aiming down with iron sights, glow sights or reflex sights', 'Not applied in VATS']
    },
    'perception': {
        id: 'perception',
        name: "Perception",
        description: "+1 Perception",
        level: 3
    },
    'swift': {
        id: 'swift',
        name: "Swift",
        description: "15% faster reload",
        level: 3
    },
    'resilient': {
        id: 'resilient',
        name: "Resilient",
        description: "+250 Damage Resistance while reloading",
        level: 3
    },
    'steadfast': {
        id: 'steadfast',
        name: "Steadfast",
        description: "+50 Damage Resistance while aiming",
        level: 3,
        notes: ['Applies while aiming down with iron sights, glow sights or reflex sights', 'Not applied in VATS']
    },
    'vats_enhanced_level3': {
        id: 'vats_enhanced_level3',
        name: "VATS Enhanced (Level 3)",
        description: "25% less V.A.T.S. Action Point cost",
        level: 3
    },
};

export const ARMOR_LEGENDARY_MODS: { [id: string] : LegendaryMod; } = {
    //A-Level-1
    'aristocrat': {
        id: 'aristocrat',
        name: "Aristocrat's",
        description: "Grants up to +20 Energy Resistance and Damage Resistance, the higher your caps",
        level: 1
    },
    'assassin': {
        id: 'assassin',
        name: "Assassin's",
        description: "-15% damage from Humans",
        level: 1,
        notes: ['Maximum of 75% reduction; applies to both humans and players.']
    },
    'auto_stim': {
        id: 'auto_stim',
        name: "Auto Stim",
        description: "Automatically use a Stimpak when hit while health is 25% or less, once every 60 seconds",
        level: 1
    },
    'bolstering': {
        id: 'bolstering',
        name: "Bolstering",
        description: "Grants up to +35 Energy Resistance and Damage Resistance, the lower your health",
        level: 1,
        notes: [
            '0% < HP ≤ 10% = +35',
            '10% < HP ≤ 20% = +32',
            '20% < HP ≤ 30% = +28',
            '30% < HP ≤ 40% = +24',
            '40% < HP ≤ 50% = +20',
            '50% < HP ≤ 60% = +16',
            '60% < HP ≤ 70% = +12',
            '70% < HP ≤ 80% = +8',
            '80% < HP ≤ 90% = +4'
        ]
    },
    'chameleon': {
        id: 'chameleon',
        name: "Chameleon",
        description: "Blend with the environment while sneaking and not moving",
        level: 1,
        notes: ['+20 Stealth Field per piece (may exceed 100)', 'May be used while jumping/jetpacking']
    },
    'cloaking': {
        id: 'cloaking',
        name: "Cloaking",
        description: "Being hit in melee generates a Stealth Field once per 30 seconds",
        level: 1,
        notes: ['Grants invisibility for 2 seconds']
    },
    'exterminator': {
        id: 'exterminator',
        name: "Exterminator's",
        description: "-15% damage from Mirelurks and bugs",
        level: 1,
        notes: ['Maximum of 75% reduction']
    },
    'ghoul_slayer': {
        id: 'ghoul_slayer',
        name: "Ghoul Slayer's",
        description: "-15% damage from ghouls",
        level: 1,
        notes: ['Maximum of 75% reduction']
    },
    'hunter': {
        id: 'hunter',
        name: "Hunter's",
        description: "-15% damage from animals",
        level: 1,
        notes: ['Maximum of 75% reduction']
    },
    'life_saving': {
        id: 'life_saving',
        name: "Life Saving",
        description: "When incapacitated, gain a 50% chance to revive yourself with a Stimpak, once every minute",
        level: 1,
        notes: [
            'Having multiple pieces does not allow to be revived multiple times and does not reduce the timer, but it increases the chance of triggering',
            '(1 - 50%, 2 - 75%, 3 - 87.5%, 4 - 93.75%, 5 - 96.875%)',
            'Timer is not reset after death'
        ]
    },
    'mutant': {
        id: 'mutant',
        name: "Mutant's",
        description: "+10 Damage Resistance and Energy Resistance if you are mutated",
        level: 1,
        notes: ['Will always be +10 regardless of the number of current mutations']
    },
    'mutant_slayer': {
        id: 'mutant_slayer',
        name: "Mutant Slayer's",
        description: "-15% damage from Super Mutants",
        level: 1,
        notes: ['Maximum of 75% reduction']
    },
    'nocturnal': {
        id: 'nocturnal',
        name: "Nocturnal",
        description: "Damage and Energy Resistance increase at night",
        level: 1,
        notes: ['+40 Damage Resistance and Energy Resistance between 9 PM and 6 AM']
    },
    'overeater': {
        id: 'overeater',
        name: "Overeater's",
        description: "Increases Damage Reduction up to 6% as you fill your hunger and thirst meters",
        level: 1
    },
    'regenerating': {
        id: 'regenerating',
        name: "Regenerating",
        description: "Slowly regenerate health while not in combat",
        level: 1,
        notes: ['Increases heal rate by 5%']
    },
    'troubleshooter': {
        id: 'troubleshooter',
        name: "Troubleshooter's",
        description: "-15% damage from robots",
        level: 1,
        notes: ['Maximum of 75% reduction']
    },
    'unyielding': {
        id: 'unyielding',
        name: "Unyielding",
        description: "Gain up to +3 to all stats (except END) when low health",
        level: 1,
        notes: [
            '+1 between 60-40% HP',
            '+2 between 40-20% HP',
            '+3 at or below 20% HP'
        ]
    },
    'vanguard': {
        id: 'vanguard',
        name: "Vanguard's",
        description: "Grants up to +35 Energy Resistance and Damage Resistance, the higher your health",
        level: 1,
        notes: [
            '90% < HP ≤ 100% = +35',
            '80% < HP ≤ 90% = +28',
            '70% < HP ≤ 80% = +21',
            '60% < HP ≤ 70% = +14',
            '50% < HP ≤ 60% = +7'
        ]
    },
    'weightless': {
        id: 'weightless',
        name: "Weightless",
        description: "Weighs 90% less and does not count as armor for the Chameleon mutation",
        level: 1
    },
    'zealot': {
        id: 'zealot',
        name: "Zealot's",
        description: "-15% damage from Scorched",
        level: 1,
        notes: ['Maximum of 75% reduction']
    },
    //A-Level-2
    'agility': {
        id: 'agility',
        name: "Agility",
        description: "+1 Agility",
        level: 2
    },
    'antiseptic': {
        id: 'antiseptic',
        name: "Antiseptic",
        description: "+25% Environmental Disease Resistance",
        level: 2,
        notes: ['Stacks additively to a maximum of 125%']
    },
    'charisma': {
        id: 'charisma',
        name: "Charisma",
        description: "+1 Charisma",
        level: 2
    },
    'endurance': {
        id: 'endurance',
        name: "Endurance",
        description: "+1 Endurance",
        level: 2
    },
    'fireproof': {
        id: 'fireproof',
        name: "Fireproof",
        description: "+25 Fire Resistance",
        level: 2
    },
    'glutton': {
        id: 'glutton',
        name: "Glutton",
        description: "Hunger and Thirst grow 10% slower",
        level: 2,
        notes: ['Stacks to a maximum of -50%']
    },
    'hardy': {
        id: 'hardy',
        name: "Hardy",
        description: "Receive 7% less explosion damage",
        level: 2,
        notes: ['Stacks to a maximum of -35%']
    },
    'hazmat': {
        id: 'hazmat',
        name: "HazMat",
        description: "+25 Radiation Resistance",
        level: 2
    },
    'intelligence': {
        id: 'intelligence',
        name: "Intelligence",
        description: "+1 Intelligence",
        level: 2
    },
    'luck': {
        id: 'luck',
        name: "Luck",
        description: "+1 Luck",
        level: 2
    },
    'perception': {
        id: 'perception',
        name: "Perception",
        description: "+1 Perception",
        level: 2
    },
    'poisoner': {
        id: 'poisoner',
        name: "Poisoner's",
        description: "+25 Poison Resistance",
        level: 2
    },
    'powered': {
        id: 'powered',
        name: "Powered",
        description: "Increases Action Point refresh speed",
        level: 2,
        notes: [
            'Increase AP Regen by 5 per part',
            'Compare to Kinetic Servos (+1 per part), Core Assembly (+6), Company Tea (+10)'
        ]
    },
    'strength': {
        id: 'strength',
        name: "Strength",
        description: "+1 Strength",
        level: 2
    },
    'warming': {
        id: 'warming',
        name: "Warming",
        description: "+25 Cryo Resistance",
        level: 2
    },
    //A-Level-3    
    'acrobat': {
        id: 'acrobat',
        name: "Acrobat's",
        description: "Reduces falling damage by 50%",
        level: 3,
        notes: [
            'Effects stack additively',
            '2 or more parts will reduce fall damage by 100%'
        ]
    },
    'burning': {
        id: 'burning',
        name: "Burning",
        description: "5% chance to deal 100 Fire DMG to melee attackers",
        level: 3
    },
    'cavalier_blocking': {
        id: 'cavalier_blocking',
        name: "Cavalier's (Blocking)",
        description: "Reduces damage while blocking by 15%",
        level: 3,
        notes: ['5 parts will reduce incoming damage by 75%']
    },
    'cavalier_sprinting': {
        id: 'cavalier_sprinting',
        name: "Cavalier's (Sprinting)",
        description: "75% chance to reduce damage by 15% while sprinting",
        level: 3,
        notes: ['5 parts will reduce incoming damage by 75%']
    },
    'dissipating': {
        id: 'dissipating',
        name: "Dissipating",
        description: "Slowly regen radiation damage while not in combat",
        level: 3
    },
    'diver': {
        id: 'diver',
        name: "Diver's",
        description: "Grants the ability to breathe underwater",
        level: 3
    },
    'doctor': {
        id: 'doctor',
        name: "Doctor's",
        description: "Stimpaks, RadAway, and Rad-X are 5% more effective",
        level: 3,
        notes: ['Stacks to a maximum of +25%']
    },
    'durability': {
        id: 'durability',
        name: "Durability",
        description: "Breaks 50% slower",
        level: 3
    },
    'electrified': {
        id: 'electrified',
        name: "Electrified",
        description: "5% chance to deal 100 Energy DMG to melee attackers",
        level: 3
    },
    'frozen': {
        id: 'frozen',
        name: "Frozen",
        description: "5% chance to deal 100 Frost DMG to melee attackers",
        level: 3
    },
    'improved_sneaking': {
        id: 'improved_sneaking',
        name: "Improved sneaking",
        description: "Become harder to detect while sneaking",
        level: 3,
        notes: ['Reduces movement sound and detection chance by 25%']
    },
    'reduced_weight_ammo': {
        id: 'reduced_weight_ammo',
        name: "Reduced ammo weight",
        description: "Ammo weight reduced by 20%",
        level: 3,
        notes: [
            'When used with any weight reduction perk, the cap remains at 90% reduced weight. The reduction effects are additive but do not exceed a 90% reduction.'
        ]
    },
    'reduced_weight_food_chems': {
        id: 'reduced_weight_food_chems',
        name: "Reduced food/drink/chem weight",
        description: "Food, drink, and chem weights reduced by 20%",
        level: 3,
        notes: [
            'When used with any weight reduction perk, the cap remains at 90% reduced weight. The reduction effects are additive but do not exceed a 90% reduction.'
        ]
    },
    'reduced_weight_junk': {
        id: 'reduced_weight_junk',
        name: "Reduced junk weight",
        description: "Junk item weights reduced by 20%",
        level: 3,
        notes: [
            'When used with any weight reduction perk, the cap remains at 90% reduced weight. The reduction effects are additive but do not exceed a 90% reduction.'
        ]
    },
    'reduced_limb_damage': {
        id: 'reduced_limb_damage',
        name: "Reduced limb damage",
        description: "Receive 15% less limb damage",
        level: 3,
        notes: [
            'Applies to all limbs',
            'Does not stack'
        ]
    },
    'reduced_weight_weapon': {
        id: 'reduced_weight_weapon',
        name: "Reduced weapon weight",
        description: "Weapon weights reduced by 20%",
        level: 3,
        notes: [
            'When used with any weight reduction perk, the cap remains at 90% reduced weight. The reduction effects are additive but do not exceed a 90% reduction.'
        ]
    },
    'safecracker': {
        id: 'safecracker',
        name: "Safecracker's",
        description: "Increases size of sweet-spot while picking locks",
        level: 3,
        notes: ['Increases sweet spot by 100% per part']
    },
    'sentinel': {
        id: 'sentinel',
        name: "Sentinel's",
        description: "75% chance to reduce damage by 15% while standing still",
        level: 3,
        notes: ['Player must be stationary and not crouched', '5 parts will reduce incoming damage by 75%']
    },
    'toxic': {
        id: 'toxic',
        name: "Toxic",
        description: "5% chance to deal 100 Poison DMG to melee attackers",
        level: 3
    }
};

export const POWER_ARMOR_LEGENDARY_MODS: { [id: string] : LegendaryMod; } = {
    //PA-Level-1
    'aristocrat': {
        id: 'aristocrat',
        name: "Aristocrat's",
        description: "Grants up to +20 Energy Resistance and Damage Resistance, the higher your caps",
        level: 1
    },
    'assassin': {
        id: 'assassin',
        name: "Assassin's",
        description: "-15% damage from Humans",
        level: 1,
        notes: ['Maximum of 75% reduction; applies to both humans and players.']
    },
    'auto_stim': {
        id: 'auto_stim',
        name: "Auto Stim",
        description: "Automatically use a Stimpak when hit while health is 25% or less, once every 60 seconds",
        level: 1
    },
    'bolstering': {
        id: 'bolstering',
        name: "Bolstering",
        description: "Grants up to +35 Energy Resistance and Damage Resistance, the lower your health",
        level: 1,
        notes: [
            '0% < HP ≤ 10% = +35',
            '10% < HP ≤ 20% = +32',
            '20% < HP ≤ 30% = +28',
            '30% < HP ≤ 40% = +24',
            '40% < HP ≤ 50% = +20',
            '50% < HP ≤ 60% = +16',
            '60% < HP ≤ 70% = +12',
            '70% < HP ≤ 80% = +8',
            '80% < HP ≤ 90% = +4'
        ]
    },
    'chameleon': {
        id: 'chameleon',
        name: "Chameleon",
        description: "Blend with the environment while sneaking and not moving",
        level: 1,
        notes: ['+20 Stealth Field per piece (may exceed 100)', 'May be used while jumping/jetpacking']
    },
    'cloaking': {
        id: 'cloaking',
        name: "Cloaking",
        description: "Being hit in melee generates a Stealth Field once per 30 seconds",
        level: 1,
        notes: ['Grants invisibility for 2 seconds']
    },
    'exterminator': {
        id: 'exterminator',
        name: "Exterminator's",
        description: "-15% damage from Mirelurks and bugs",
        level: 1,
        notes: ['Maximum of 75% reduction']
    },
    'ghoul_slayer': {
        id: 'ghoul_slayer',
        name: "Ghoul Slayer's",
        description: "-15% damage from ghouls",
        level: 1,
        notes: ['Maximum of 75% reduction']
    },
    'hunter': {
        id: 'hunter',
        name: "Hunter's",
        description: "-15% damage from animals",
        level: 1,
        notes: ['Maximum of 75% reduction']
    },
    'mutant': {
        id: 'mutant',
        name: "Mutant's",
        description: "+10 Damage Resistance and Energy Resistance if you are mutated",
        level: 1,
        notes: ['Will always be +10 regardless of the number of current mutations']
    },
    'mutant_slayer': {
        id: 'mutant_slayer',
        name: "Mutant Slayer's",
        description: "-15% damage from Super Mutants",
        level: 1,
        notes: ['Maximum of 75% reduction']
    },
    'nocturnal': {
        id: 'nocturnal',
        name: "Nocturnal",
        description: "Damage and Energy Resistance increase at night",
        level: 1,
        notes: ['+40 Damage Resistance and Energy Resistance between 9 PM and 6 AM']
    },
    'overeater': {
        id: 'overeater',
        name: "Overeater's",
        description: "Increases Damage Reduction up to 6% as you fill your hunger and thirst meters",
        level: 1
    },
    'regenerating': {
        id: 'regenerating',
        name: "Regenerating",
        description: "Slowly regenerate health while not in combat",
        level: 1,
        notes: ['Increases heal rate by 5%']
    },
    'troubleshooter': {
        id: 'troubleshooter',
        name: "Troubleshooter's",
        description: "-15% damage from robots",
        level: 1,
        notes: ['Maximum of 75% reduction']
    },
    'vanguard': {
        id: 'vanguard',
        name: "Vanguard's",
        description: "Grants up to +35 Energy Resistance and Damage Resistance, the higher your health",
        level: 1,
        notes: [
            '90% < HP ≤ 100% = +35',
            '80% < HP ≤ 90% = +28',
            '70% < HP ≤ 80% = +21',
            '60% < HP ≤ 70% = +14',
            '50% < HP ≤ 60% = +7'
        ]
    },
    'zealot': {
        id: 'zealot',
        name: "Zealot's",
        description: "-15% damage from Scorched",
        level: 1,
        notes: ['Maximum of 75% reduction']
    },
    //PA-Level-2
    'agility': {
        id: 'agility',
        name: "Agility",
        description: "+1 Agility",
        level: 2
    },
    'antiseptic': {
        id: 'antiseptic',
        name: "Antiseptic",
        description: "+25% Environmental Disease Resistance",
        level: 2,
        notes: ['Stacks additively to a maximum of 125%']
    },
    'charisma': {
        id: 'charisma',
        name: "Charisma",
        description: "+1 Charisma",
        level: 2
    },
    'endurance': {
        id: 'endurance',
        name: "Endurance",
        description: "+1 Endurance",
        level: 2
    },
    'fireproof': {
        id: 'fireproof',
        name: "Fireproof",
        description: "+25 Fire Resistance",
        level: 2
    },
    'glutton': {
        id: 'glutton',
        name: "Glutton",
        description: "Hunger and Thirst grow 10% slower",
        level: 2,
        notes: ['Stacks to a maximum of -50%']
    },
    'hardy': {
        id: 'hardy',
        name: "Hardy",
        description: "Receive 7% less explosion damage",
        level: 2,
        notes: ['Stacks to a maximum of -35%']
    },
    'hazmat': {
        id: 'hazmat',
        name: "HazMat",
        description: "+25 Radiation Resistance",
        level: 2
    },
    'intelligence': {
        id: 'intelligence',
        name: "Intelligence",
        description: "+1 Intelligence",
        level: 2
    },
    'luck': {
        id: 'luck',
        name: "Luck",
        description: "+1 Luck",
        level: 2
    },
    'perception': {
        id: 'perception',
        name: "Perception",
        description: "+1 Perception",
        level: 2
    },
    'poisoner': {
        id: 'poisoner',
        name: "Poisoner's",
        description: "+25 Poison Resistance",
        level: 2
    },
    'powered': {
        id: 'powered',
        name: "Powered",
        description: "Increases Action Point refresh speed",
        level: 2,
        notes: [
            'Increase AP Regen by 5 per part',
            'Compare to Kinetic Servos (+1 per part), Core Assembly (+6), Company Tea (+10)'
        ]
    },
    'strength': {
        id: 'strength',
        name: "Strength",
        description: "+1 Strength",
        level: 2
    },
    'warming': {
        id: 'warming',
        name: "Warming",
        description: "+25 Cryo Resistance",
        level: 2
    },
    //PA-Level-3
    'burning': {
        id: 'burning',
        name: "Burning",
        description: "5% chance to deal 100 Fire DMG to melee attackers",
        level: 3
    },
    'cavalier_blocking': {
        id: 'cavalier_blocking',
        name: "Cavalier's (Blocking)",
        description: "Reduces damage while blocking by 15%",
        level: 3,
        notes: ['5 parts will reduce incoming damage by 75%']
    },
    'cavalier_sprinting': {
        id: 'cavalier_sprinting',
        name: "Cavalier's (Sprinting)",
        description: "75% chance to reduce damage by 15% while sprinting",
        level: 3,
        notes: ['5 parts will reduce incoming damage by 75%']
    },
    'dissipating': {
        id: 'dissipating',
        name: "Dissipating",
        description: "Slowly regen radiation damage while not in combat",
        level: 3
    },
    'doctor': {
        id: 'doctor',
        name: "Doctor's",
        description: "Stimpaks, RadAway, and Rad-X are 5% more effective",
        level: 3,
        notes: ['Stacks to a maximum of +25%']
    },
    'durability': {
        id: 'durability',
        name: "Durability",
        description: "Breaks 50% slower",
        level: 3
    },
    'electrified': {
        id: 'electrified',
        name: "Electrified",
        description: "5% chance to deal 100 Energy DMG to melee attackers",
        level: 3
    },
    'frozen': {
        id: 'frozen',
        name: "Frozen",
        description: "5% chance to deal 100 Frost DMG to melee attackers",
        level: 3
    },
    'reduced_weight_ammo': {
        id: 'reduced_weight_ammo',
        name: "Reduced ammo weight",
        description: "Ammo weight reduced by 20%",
        level: 3,
        notes: [
            'When used with any weight reduction perk, the cap remains at 90% reduced weight. The reduction effects are additive but do not exceed a 90% reduction.'
        ]
    },
    'reduced_weight_food_chems': {
        id: 'reduced_weight_food_chems',
        name: "Reduced food/drink/chem weight",
        description: "Food, drink, and chem weights reduced by 20%",
        level: 3,
        notes: [
            'When used with any weight reduction perk, the cap remains at 90% reduced weight. The reduction effects are additive but do not exceed a 90% reduction.'
        ]
    },
    'reduced_weight_junk': {
        id: 'reduced_weight_junk',
        name: "Reduced junk weight",
        description: "Junk item weights reduced by 20%",
        level: 3,
        notes: [
            'When used with any weight reduction perk, the cap remains at 90% reduced weight. The reduction effects are additive but do not exceed a 90% reduction.'
        ]
    },
    'reduced_weight_weapon': {
        id: 'reduced_weight_weapon',
        name: "Reduced weapon weight",
        description: "Weapon weights reduced by 20%",
        level: 3,
        notes: [
            'When used with any weight reduction perk, the cap remains at 90% reduced weight. The reduction effects are additive but do not exceed a 90% reduction.'
        ]
    },
    'safecracker': {
        id: 'safecracker',
        name: "Safecracker's",
        description: "Increases size of sweet-spot while picking locks",
        level: 3,
        notes: ['Increases sweet spot by 100% per part']
    },
    'sentinel': {
        id: 'sentinel',
        name: "Sentinel's",
        description: "75% chance to reduce damage by 15% while standing still",
        level: 3,
        notes: ['Player must be stationary and not crouched', '5 parts will reduce incoming damage by 75%']
    },
    'toxic': {
        id: 'toxic',
        name: "Toxic",
        description: "5% chance to deal 100 Poison DMG to melee attackers",
        level: 3
    }
}