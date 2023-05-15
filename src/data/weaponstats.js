//// Card Image
// SMG Weapons
import alternator from "../images/smg/alternator.webp";
import car from "../images/smg/car.webp";
import prowler from "../images/smg/prowler.webp";
import r99 from "../images/smg/r99.webp";
import volt from "../images/smg/volt.webp";

// AR Weapons
import flatline from "../images/ar/flatline.webp";
import havoc from "../images/ar/havoc.webp";
import hemlock from "../images/ar/hemlock.webp";
import nemesis from "../images/ar/nemesis.webp";
import r301 from "../images/ar/r301.webp";

// LMG Weapons
import devotion from "../images/lmg/devotion.webp";
import l_star from "../images/lmg/l_star.webp";
import spitfire from "../images/lmg/spitfire.webp";
import rampage from "../images/lmg/rampage.webp";

//// Content Card Icons
// SMG Weapons
import r99_icon from "../images/smg_icon/r99_icon.svg";
import volt_icon from "../images/smg_icon/volt_icon.svg";
import alternator_icon from "../images/smg_icon/alternator_icon.svg";
import car_icon from "../images/smg_icon/car_icon.svg";
import prowler_icon from "../images/smg_icon/prowler_icon.svg";

// AR Weapons
import flatline_icon from "../images/ar_icon/flatline_icon.svg";
import havoc_icon from "../images/ar_icon/havoc_icon.svg";
import hemlock_icon from "../images/ar_icon/hemlock_icon.svg";
import nemesis_icon from "../images/ar_icon/nemesis_icon.svg";
import r301_icon from "../images/ar_icon/r301_icon.svg";

// LMG Weapons
import devotion_icon from "../images/lmg_icon/devotion_icon.svg";
import l_star_icon from "../images/lmg_icon/l_star_icon.svg";
import spitfire_icon from "../images/lmg_icon/spitfire_icon.svg";
import rampage_icon from "../images/lmg_icon/rampage_icon.svg";

// Ammo
import light_ammo_icon from "../images/ammo/light_ammo_icon.svg";
import heavy_ammo_icon from "../images/ammo/heavy_ammo_icon.svg";
import heavylight_ammo_icon from "../images/ammo/heavylight_ammo_icon.svg";
import energy_ammo_icon from "../images/ammo/energy_ammo_icon.svg";
import sniper_ammo_icon from "../images/ammo/sniper_ammo_icon.svg";
import shotgun_ammo_icon from "../images/ammo/shotgun_ammo_icon.svg";
import mythic_heavy_ammo_icon from "../images/ammo/mythic_heavy_ammo_icon.svg";
import mythic_energy_ammo_icon from "../images/ammo/mythic_energy_ammo_icon.svg";
import mythic_arrow_ammo_icon from "../images/ammo/mythic_arrow_ammo_icon.svg";

// Attachments
import laser_sight_icon from "../images/attachments/laser_sight.svg";
import barrel_mod_icon from "../images/attachments/barrel_mod.svg";
import light_mag_icon from "../images/attachments/light_mag.svg";
import energy_mag_icon from "../images/attachments/energy_mag.svg";
import heavy_mag_icon from "../images/attachments/heavy_mag.svg";
import sniper_mag_icon from "../images/attachments/sniper_mag.svg";
import car_mag_icon from "../images/attachments/car_mag.svg";
import optics_icon from "../images/attachments/optics.svg";
import standard_stock_icon from "../images/attachments/standard_stock.svg";
import turbocharger_icon from "../images/attachments/turbocharger.svg";
import boosted_loader_icon from "../images/attachments/boosted_loader.svg";
import disruptor_rounds_icon from "../images/attachments/disruptor_rounds.svg";
import shatter_caps_icon from "../images/attachments/shatter_caps.svg";
import double_tap_trigger_icon from "../images/attachments/double_tap_trigger.svg";
import double_tap_trigger_noborder_icon from "../images/attachments/double_tap_trigger_noborder.svg";

// Fire Modes
import auto_icon from "../images/others/auto_icon.svg";
import burst_icon from "../images/others/burst_icon.svg";
import single_icon from "../images/others/single_icon.svg";

// Manufacturer
import lastimosa_armory_icon from "../images/manufacturer/lastimosa_armory_icon.svg";
import siwhan_industries_icon from "../images/manufacturer/siwhan_industries_icon.svg";
import the_sisters_icon from "../images/manufacturer/the_sisters_icon.svg";
import rampart_icon from "../images/manufacturer/rampart_icon.svg";
import burrell_defense_icon from "../images/manufacturer/burrell_defense_icon.svg";
import wonyeon_icon from "../images/manufacturer/wonyeon_icon.svg";

export const weaponStats = [
  {
    id: 1,
    title: "R-99 SMG",
    category: "light",
    img: r99,
    description: "Rapid-fire automatic SMG.",
    icon: r99_icon,
    type: "Sub machine gun",
    ammo_icon: light_ammo_icon,
    ammo: "Light Rounds",
    fire_mode: [
      {
        img: auto_icon,
        value: "Auto",
      },
    ],
    manufacturer: [
      {
        value: "Lastimosa Armory",
        img: lastimosa_armory_icon,
      },
    ],
    attachments: [
      {
        key: "laser",
        img: laser_sight_icon,
      },
      {
        key: "magazine",
        img: light_mag_icon,
      },
      {
        key: "optics",
        img: optics_icon,
      },
      {
        key: "stock",
        img: standard_stock_icon,
      },
    ],
    damages: [
      {
        key: "body",
        value: "12",
      },
      {
        key: "head",
        value: "18 (1.5x)",
      },
      {
        key: "legs",
        value: "10 (0.8x)",
      },
    ],
  },
  {
    id: 2,
    title: "C.A.R SMG",
    category: "heavy",
    img: car,
    description: "Adaptable SMG. Uses light and heavy ammo.",
    icon: car_icon,
    type: "Sub machine gun",
    ammo_icon: heavylight_ammo_icon,
    ammo: "Heavy/Light Rounds",
    fire_mode: [
      {
        img: auto_icon,
        value: "Auto",
      },
    ],
    manufacturer: [
      {
        value: "Siwhan Industries",
        img: siwhan_industries_icon,
      },
    ],
    attachments: [
      {
        key: "magazine",
        img: car_mag_icon,
      },
      {
        key: "optics",
        img: optics_icon,
      },
      {
        key: "stock",
        img: standard_stock_icon,
      },
    ],
    damages: [
      {
        key: "body",
        value: "13",
      },
      {
        key: "head",
        value: "20 (1.5x)",
      },
      {
        key: "legs",
        value: "10 (0.8x)",
      },
    ],
  },
  {
    id: 3,
    title: "Volt SMG",
    category: "energy",
    img: volt,
    description: "Energy actuated SMG.",
    icon: volt_icon,
    type: "Sub machine gun",
    ammo_icon: energy_ammo_icon,
    ammo: "Energy Ammo",
    fire_mode: [
      {
        img: auto_icon,
        value: "Auto",
      },
    ],
    attachments: [
      {
        key: "laser",
        img: laser_sight_icon,
      },
      {
        key: "magazine",
        img: energy_mag_icon,
      },
      {
        key: "optics",
        img: optics_icon,
      },
      {
        key: "stock",
        img: standard_stock_icon,
      },
    ],
    damages: [
      {
        key: "body",
        value: "15",
      },
      {
        key: "head",
        value: "23 (1.5x)",
      },
      {
        key: "legs",
        value: "12 (0.8x)",
      },
    ],
  },
  {
    id: 4,
    title: "Alternator SMG",
    category: "light",
    img: alternator,
    description: "Twin barrel full-auto SMG.",
    icon: alternator_icon,
    type: "Sub machine gun",
    ammo_icon: light_ammo_icon,
    ammo: "Light Rounds",
    fire_mode: [
      {
        img: auto_icon,
        value: "Auto",
      },
    ],
    manufacturer: [
      {
        value: "Burrell Defense",
        img: burrell_defense_icon,
      },
    ],
    attachments: [
      {
        key: "laser",
        img: laser_sight_icon,
      },
      {
        key: "magazine",
        img: light_mag_icon,
      },
      {
        key: "optics",
        img: optics_icon,
      },
      {
        key: "stock",
        img: standard_stock_icon,
      },
    ],
    damages: [
      {
        key: "body",
        value: "16",
      },
      {
        key: "head",
        value: "14 (1.5x)",
      },
      {
        key: "legs",
        value: "13 (0.8x)",
      },
    ],
  },
  {
    id: 5,
    title: "Prowler Burst PDW",
    category: "heavy",
    img: prowler,
    description: "5-round burst SMG.",
    icon: prowler_icon,
    type: "Sub machine gun",
    ammo_icon: heavy_ammo_icon,
    ammo: "Heavy Rounds",
    fire_mode: [
      {
        img: burst_icon,
        value: "Burst (5)",
      },
    ],
    manufacturer: [
      {
        value: "Lastimosa Armory",
        img: lastimosa_armory_icon,
      },
    ],
    attachments: [
      {
        key: "laser",
        img: laser_sight_icon,
      },
      {
        key: "magazine",
        img: heavy_mag_icon,
      },
      {
        key: "optics",
        img: optics_icon,
      },
      {
        key: "stock",
        img: standard_stock_icon,
      },
    ],
    damages: [
      {
        key: "body",
        value: "15",
      },
      {
        key: "head",
        value: "22 (1.5x)",
      },
      {
        key: "legs",
        value: "12 (0.8x)",
      },
    ],
  },
  {
    id: 6,
    title: "HAVOC Rifle",
    category: "energy",
    img: havoc,
    description: "Full-auto charged energy rifle.",
    icon: havoc_icon,
    type: "Assault rifle",
    ammo_icon: energy_ammo_icon,
    ammo: "Energy Ammo",
    fire_mode: [
      {
        img: auto_icon,
        value: "Auto",
      },
    ],
    manufacturer: [
      {
        value: "Siwhan Industries",
        img: siwhan_industries_icon,
      },
      {
        value: "Wonyeon",
        img: wonyeon_icon,
      },
    ],
    attachments: [
      {
        key: "magazine",
        img: energy_mag_icon,
      },
      {
        key: "optics",
        img: optics_icon,
      },
      {
        key: "stock",
        img: standard_stock_icon,
      },
      {
        key: "turbocharger",
        img: turbocharger_icon,
      },
    ],
    damages: [
      {
        key: "body",
        value: "18",
      },
      {
        key: "head",
        value: "32 (1.75x)",
      },
      {
        key: "legs",
        value: "15 (0.85x)",
      },
    ],
  },
  {
    id: 7,
    title: "VK-47 Flatline",
    category: "heavy",
    img: flatline,
    description: "Full-auto with a punch.",
    icon: flatline_icon,
    type: "Assault rifle",
    ammo_icon: heavy_ammo_icon,
    ammo: "Heavy Rounds",
    fire_mode: [
      {
        img: auto_icon,
        value: "Auto",
      },
      {
        img: single_icon,
        value: "Single",
      },
    ],
    manufacturer: [
      {
        value: "Wonyeon",
        img: wonyeon_icon,
      },
    ],
    attachments: [
      {
        key: "magazine",
        img: heavy_mag_icon,
      },
      {
        key: "optics",
        img: optics_icon,
      },
      {
        key: "stock",
        img: standard_stock_icon,
      },
    ],
    damages: [
      {
        key: "body",
        value: "18",
      },
      {
        key: "head",
        value: "32 (1.75x)",
      },
      {
        key: "legs",
        value: "14 (0.75x)",
      },
    ],
  },
  {
    id: 8,
    title: "Hemlok Burst AR",
    category: "mythic",
    img: hemlock,
    description: "3-round burst SMG.",
    icon: hemlock_icon,
    type: "Assault rifle",
    ammo_icon: mythic_heavy_ammo_icon,
    ammo: "Mythic Heavy Rounds",
    fire_mode: [
      {
        img: burst_icon,
        value: "Burst (3)",
      },
      {
        img: single_icon,
        value: "Single",
      },
    ],
    manufacturer: [
      {
        value: "Wonyeon",
        img: wonyeon_icon,
      },
    ],
    attachments: [
      {
        key: "optics",
        img: optics_icon,
      },
      {
        key: "boosted loader",
        img: boosted_loader_icon,
      },
    ],
    damages: [
      {
        key: "body",
        value: "23",
      },
      {
        key: "head",
        value: "40 (1.8x)",
      },
      {
        key: "legs",
        value: "17 (0.75x)",
      },
    ],
  },
  {
    id: 9,
    title: "R-301 Carbine",
    category: "light",
    img: r301,
    description: "Full-auto and high accuracy.",
    icon: r301_icon,
    type: "Sub machine gun",
    ammo_icon: light_ammo_icon,
    ammo: "Light Rounds",
    fire_mode: [
      {
        img: auto_icon,
        value: "Auto",
      },
    ],
    manufacturer: [
      {
        value: "Lastimosa Armory",
        img: lastimosa_armory_icon,
      },
    ],
    attachments: [
      {
        key: "barrel",
        img: barrel_mod_icon,
      },
      {
        key: "magazine",
        img: light_mag_icon,
      },
      {
        key: "optics",
        img: optics_icon,
      },
      {
        key: "stock",
        img: standard_stock_icon,
      },
    ],
    damages: [
      {
        key: "body",
        value: "13",
      },
      {
        key: "head",
        value: "23 (1.75x)",
      },
      {
        key: "legs",
        value: "10 (0.75x)",
      },
    ],
  },
  {
    id: 10,
    title: "Nemesis Burst AR",
    category: "energy",
    img: nemesis,
    description: "Auto-trigger 4-round burst energy rifle.",
    icon: nemesis_icon,
    type: "Assault rifle",
    ammo_icon: energy_ammo_icon,
    ammo: "Energy Ammo",
    fire_mode: [
      {
        img: burst_icon,
        value: "Burst (4)",
      },
    ],
    manufacturer: [
      {
        value: "Rampart (designer)",
        img: rampart_icon,
      },
      {
        value: "The Sisters (manufacturer)",
        img: the_sisters_icon,
      },
    ],
    attachments: [
      {
        key: "barrel_mod",
        img: barrel_mod_icon,
      },
      {
        key: "magazine",
        img: energy_mag_icon,
      },
      {
        key: "optics",
        img: optics_icon,
      },
      {
        key: "stock",
        img: standard_stock_icon,
      },
    ],
    damages: [
      {
        key: "body",
        value: "17",
      },
      {
        key: "head",
        value: "30 (1.75x)",
      },
      {
        key: "legs",
        value: "13 (0.75x)",
      },
    ],
  },
  {
    id: 11,
    title: "Devotion LMG",
    category: "energy",
    img: devotion,
    description: "Full-auto energy LMG.",
    icon: devotion_icon,
    type: "Light machine gun",
    ammo_icon: energy_ammo_icon,
    ammo: "Energy Ammo",
    fire_mode: [
      {
        img: auto_icon,
        value: "Auto",
      },
    ],
    attachments: [
      {
        key: "barrel_mod",
        img: barrel_mod_icon,
      },
      {
        key: "magazine",
        img: energy_mag_icon,
      },
      {
        key: "optics",
        img: optics_icon,
      },
      {
        key: "stock",
        img: standard_stock_icon,
      },
      {
        key: "turbocharger",
        img: turbocharger_icon,
      },
    ],
    damages: [
      {
        key: "body",
        value: "15",
      },
      {
        key: "head",
        value: "23 (1.5x)",
      },
      {
        key: "legs",
        value: "13 (0.85x)",
      },
    ],
  },
  {
    id: 12,
    title: "L-STAR EMG",
    category: "mythic",
    img: l_star,
    description: "Plasma-fueled heavy MG.",
    icon: l_star_icon,
    type: "Light machine gun",
    ammo_icon: mythic_energy_ammo_icon,
    ammo: "Mythic Energy Ammo",
    fire_mode: [
      {
        img: auto_icon,
        value: "Auto",
      },
    ],
    manufacturer: [
      {
        value: "Wonyeon",
        img: wonyeon_icon,
      },
    ],
    attachments: [
      {
        key: "optics",
        img: optics_icon,
      },
      {
        key: "disruptor rounds",
        img: disruptor_rounds_icon,
      },
    ],
    damages: [
      {
        key: "body",
        value: "16",
      },
      {
        key: "head",
        value: "24 (1.5x)",
      },
      {
        key: "legs",
        value: "14 (0.85x)",
      },
    ],
  },
  {
    id: 13,
    title: "M600 Spitfire",
    category: "light",
    img: spitfire,
    description: "Full-auto LMG.",
    icon: spitfire_icon,
    type: "Light machine gun",
    ammo_icon: light_ammo_icon,
    ammo: "Light Rounds",
    fire_mode: [
      {
        img: auto_icon,
        value: "Auto",
      },
    ],
    manufacturer: [
      {
        value: "Siwhan Industries",
        img: siwhan_industries_icon,
      },
    ],
    attachments: [
      {
        key: "magazine",
        img: light_mag_icon,
      },
      {
        key: "optics",
        img: optics_icon,
      },
      {
        key: "stock",
        img: standard_stock_icon,
      },
    ],
    damages: [
      {
        key: "body",
        value: "18",
      },
      {
        key: "head",
        value: "27 (1.5x)",
      },
      {
        key: "legs",
        value: "15 (0.85x)",
      },
    ],
  },
  {
    id: 14,
    title: "Rampage LMG",
    category: "heavy",
    img: rampage,
    description: "Fire Powered LMG. Charge with Thermites.",
    icon: rampage_icon,
    type: "Light machine gun",
    ammo_icon: heavy_ammo_icon,
    ammo: "Heavy Rounds",
    fire_mode: [
      {
        img: auto_icon,
        value: "Auto",
      },
    ],
    manufacturer: [
      {
        value: "Rampart (designer)",
        img: rampart_icon,
      },
      {
        value: "SWCC (manufacturer)",
      },
    ],
    attachments: [
      {
        key: "barrel_mod",
        img: barrel_mod_icon,
      },
      {
        key: "magazine",
        img: heavy_mag_icon,
      },
      {
        key: "optics",
        img: optics_icon,
      },
      {
        key: "stock",
        img: standard_stock_icon,
      },
    ],
    damages: [
      {
        key: "body",
        value: "26",
      },
      {
        key: "head",
        value: "39 (1.5x)",
      },
      {
        key: "legs",
        value: "22 (0.85x)",
      },
    ],
  },
];
