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

// Ammo
import light_ammo_icon from "../images/ammo/light_ammo_icon.svg";
import heavy_ammo_icon from "../images/ammo/heavy_ammo_icon.svg";
import energy_ammo_icon from "../images/ammo/energy_ammo_icon.svg";
import sniper_ammo_icon from "../images/ammo/sniper_ammo_icon.svg";
import shotgun_ammo_icon from "../images/ammo/shotgun_ammo_icon.svg";

// Attachments
import laser_sight_icon from "../images/attachments/laser_sight.svg";
import barrel_mod_icon from "../images/attachments/barrel_mod.svg";
import light_mag_icon from "../images/attachments/light_mag.svg";
import optics_icon from "../images/attachments/optics.svg";
import standard_stock_icon from "../images/attachments/standard_stock.svg";

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
    fire_mode: "Auto",
    manufacturer: "Lastimosa Armory",
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
    ammo_icon: light_ammo_icon,
    ammo: "Heavy/Light Rounds",
    fire_mode: "Auto",
    manufacturer: "Siwhan Industries",
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
    fire_mode: "Auto",
    manufacturer: "Unknown",
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
    fire_mode: "Auto",
    manufacturer: "Burrell Defense",
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
    fire_mode: "Burst (5)",
    manufacturer: "Lastimosa Armory",
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
    fire_mode: "Auto",
    manufacturer: "Wonyeon",
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
    fire_mode: "Auto",
    manufacturer: "Wonyeon",
  },
  {
    id: 8,
    title: "Hemlok Burst AR",
    category: "heavy",
    img: hemlock,
    description: "3-round burst SMG.",
    icon: hemlock_icon,
    type: "Assault rifle",
    ammo_icon: heavy_ammo_icon,
    ammo: "Heavy Rounds",
    fire_mode: "Burst (3)",
    manufacturer: "Lastimosa Armory",
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
    fire_mode: "Auto",
    manufacturer: "Lastimosa Armory",
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
    fire_mode: "Burst (4)",
    manufacturer: "The Sisters",
  },
];
