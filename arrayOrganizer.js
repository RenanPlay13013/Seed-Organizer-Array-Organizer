const path = require("path");
const fs = require("fs")

function arrayOrganizer() { 
    
    const commandSepareToggle = true

var allSeedsArray = [
    "mysticalagriculture:chicken_seeds",
"mysticalagriculture:turtle_seeds",
"mysticalagriculture:air_seeds",
"mysticalagriculture:nether_quartz_seeds",
"mysticalagriculture:deepslate_seeds",
"mysticalagriculture:apatite_seeds",
"mysticalagriculture:mystical_flower_seeds",
"mysticalagriculture:fish_seeds",
"mysticalagriculture:earth_seeds",
"mysticalagriculture:pig_seeds",
"mysticalagriculture:stone_seeds",
"mysticalagriculture:dye_seeds",
"mysticalagriculture:sulfur_seeds",
"mysticalagriculture:dirt_seeds",
"mysticalagriculture:grains_of_infinity_seeds",
"mysticalagriculture:sheep_seeds",
"mysticalagriculture:coal_seeds",
"mysticalagriculture:silicon_seeds",
"mysticalagriculture:water_seeds",
"mysticalagriculture:copper_seeds",
"mysticalagriculture:amethyst_seeds",
"mysticalagriculture:nature_seeds",
"mysticalagriculture:coral_seeds",
"mysticalagriculture:inferium_seeds",
"mysticalagriculture:iron_seeds",
"mysticalagriculture:rubber_seeds",
"mysticalagriculture:ice_seeds",
"mysticalagriculture:cow_seeds",
"mysticalagriculture:squid_seeds",
"mysticalagriculture:slime_seeds",
"mysticalagriculture:wood_seeds",
"mysticalagriculture:nether_seeds",
"mysticalagriculture:honey_seeds",
"mysticalagriculture:fire_seeds",
"mysticalagriculture:aluminum_seeds",
"mysticalagriculture:saltpeter_seeds",
"mysticalagriculture:glowstone_seeds",
"mysticalagriculture:redstone_seeds",
"mysticalagriculture:obsidian_seeds",
"mysticalagriculture:prismarine_seeds",
"mysticalagriculture:zombie_seeds",
"mysticalagriculture:skeleton_seeds",
"mysticalagriculture:lead_seeds",
"mysticalagriculture:silver_seeds",
"mysticalagriculture:brass_seeds",
"mysticalagriculture:zinc_seeds",
"mysticalagriculture:bronze_seeds",
"mysticalagriculture:tin_seeds",
"mysticalagriculture:rabbit_seeds",
"mysticalagriculture:spider_seeds",
"mysticalagriculture:creeper_seeds",
"mysticalagriculture:graphite_seeds",
"mysticalagriculture:blizz_seeds",
"mysticalagriculture:blitz_seeds",
"mysticalagriculture:basalz_seeds",
"mysticalagriculture:copper_alloy_seeds",
"mysticalagriculture:redstone_alloy_seeds",
"mysticalagriculture:conductive_alloy_seeds",
"mysticalagriculture:manasteel_seeds",
"mysticalagriculture:sky_stone_seeds",
"mysticalagriculture:steel_seeds",
"mysticalagriculture:enderman_seeds",
"mysticalagriculture:ghast_seeds",
"mysticalagriculture:blaze_seeds",
"mysticalagriculture:experience_seeds",
"mysticalagriculture:end_seeds",
"mysticalagriculture:lapis_lazuli_seeds",
"mysticalagriculture:gold_seeds",
"mysticalagriculture:certus_quartz_seeds",
"mysticalagriculture:nickel_seeds",
"mysticalagriculture:constantan_seeds",
"mysticalagriculture:electrum_seeds",
"mysticalagriculture:invar_seeds",
"mysticalagriculture:mithril_seeds",
"mysticalagriculture:tungsten_seeds",
"mysticalagriculture:titanium_seeds",
"mysticalagriculture:uranium_seeds",
"mysticalagriculture:chrome_seeds",
"mysticalagriculture:pulsating_alloy_seeds",
"mysticalagriculture:dark_steel_seeds",
"mysticalagriculture:soularium_seeds",
"mysticalagriculture:lumium_seeds",
"mysticalagriculture:signalum_seeds",
"mysticalagriculture:soulium_seeds",
"mysticalagriculture:peridot_seeds",
"mysticalagriculture:sapphire_seeds",
"mysticalagriculture:ruby_seeds",
"mysticalagriculture:energetic_alloy_seeds",
"mysticalagriculture:elementium_seeds",
"mysticalagriculture:osmium_seeds",
"mysticalagriculture:fluorite_seeds",
"mysticalagriculture:refined_glowstone_seeds",
"mysticalagriculture:refined_obsidian_seeds",
"mysticalagriculture:fluix_seeds",
"mysticalagriculture:energized_steel_seeds",
"mysticalagriculture:blazing_crystal_seeds",
"mysticalagriculture:end_steel_seeds",
"mysticalagriculture:vibrant_alloy_seeds",
"mysticalagriculture:enderium_seeds",
"mysticalagriculture:iridium_seeds",
"mysticalagriculture:platinum_seeds",
"mysticalagriculture:wither_skeleton_seeds",
"mysticalagriculture:netherite_seeds",
"mysticalagriculture:emerald_seeds",
"mysticalagriculture:diamond_seeds",
"mysticalagriculture:terrasteel_seeds",
"mysticalagriculture:draconium_seeds",
"mysticalagriculture:niotic_crystal_seeds",
"mysticalagriculture:spirited_crystal_seeds",
"mysticalagriculture:uraninite_seeds",
"mysticalagriculture:nether_star_seeds",
"mysticalagriculture:dragon_egg_seeds",
"mysticalagriculture:gaia_spirit_seeds",
"mysticalagriculture:awakened_draconium_seeds",
"mysticalagriculture:nitro_crystal_seeds"
];

function flatternArray(arr) { 
    return arr.flat(Infinity);
}

var flatArray = [...new Set(flatternArray(allSeedsArray))];

const filePath = path.join(__dirname, "arrayOrganizerOutput.txt");

if (commandSepareToggle) { 

    fs.writeFile(filePath, flatArray.map(item => `"${item}"`).join(",\n"), (err) => { 
        if (err) { 
            console.error("❌ Erro ao Escrever o arquivo: ", err)
            return;
        }
    
        console.log(`✅ Array Organizado com sucesso, Quantia de seeds organizadas: ${allSeedsArray.length}`)
    })
} else {
fs.writeFile(filePath, flatArray.join("\n"), (err) => { 
    if (err) { 
        console.error("❌ Erro ao Escrever o arquivo: ", err)
        return;
    }

    console.log(`✅ Array Organizado com sucesso, Quantia de seeds organizadas: ${allSeedsArray.length}`)
})
}
}

module.exports = arrayOrganizer;