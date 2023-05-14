// Card Image
//// Weapons
import alternator_smg from "../images/smg/alternator.webp";
import car_smg from "../images/smg/car.webp";
import prowler_smg from "../images/smg/prowler.webp";
import r99_smg from "../images/smg/r99.webp";
import volt_smg from "../images/smg/volt.webp";

//// Content Card Icons
// Weapons
import r99_icon from "../images/smg/r99_smg_icon.svg";
import volt_icon from "../images/smg/volt_smg_icon.svg";
import alternator_icon from "../images/smg/alternator_smg_icon.svg";
import car_icon from "../images/smg/car_smg_icon.svg";
import prowler_icon from "../images/smg/prowler_smg_icon.svg";

// Ammo
import light_ammo_icon from "../images/ammo/light_ammo_icon.svg";
import heavy_ammo_icon from "../images/ammo/heavy_ammo_icon.svg";
import energy_ammo_icon from "../images/ammo/energy_ammo_icon.svg";
import sniper_ammo_icon from "../images/ammo/sniper_ammo_icon.svg";
import shotgun_ammo_icon from "../images/ammo/shotgun_ammo_icon.svg";

export const weaponStats = [
  {
    id: 1,
    title: "R-99 SMG",
    category: "light",
    img: r99_smg,
    description: "Rapid-fire automatic SMG.",
    icon: r99_icon,
    type: "Sub machine gun",
    ammo_icon: light_ammo_icon,
    ammo: "Light Rounds",
    fire_mode: "Auto",
    manufacturer: "Lastimosa Armory",
  },
  {
    id: 2,
    title: "C.A.R SMG",
    category: "heavy",
    img: car_smg,
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
    img: volt_smg,
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
    img: alternator_smg,
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
    img: prowler_smg,
    description: "5-round burst SMG.",
    icon: prowler_icon,
    type: "Sub machine gun",
    ammo_icon: heavy_ammo_icon,
    ammo: "Heavy Rounds",
    fire_mode: "Burst (5)",
    manufacturer: "Lastimosa Armory",
  },
];
