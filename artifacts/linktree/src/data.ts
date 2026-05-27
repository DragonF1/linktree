export interface LinkItem {
  label: string;
  url: string;
  description?: string;
  icon?: string;
}

export interface Section {
  id: string;
  heading: string;
  links: LinkItem[];
  icon?: string;
}

export interface ModServer {
  name: string;
  role: string;
  members: string;
  inviteUrl: string;
  iconUrl?: string;
  accentColor: string;
  since?: string;
}

// ── Profile ──────────────────────────────────
export const profile = {
  displayName: "Dragon 🐉",
  name: "@dragonf1",
  userIcon:
    "https://cdn.discordapp.com/avatars/1005896490138484917/a_2acaf963885de681774f2441e39be9bf.webp?size=1024&animated=true",
  tagline: "i like to make discord bots and other things on the internet",
  yearsActive: 4,
};

// ── Link sections ─────────────────────────────
export const sections: Section[] = [
  {
    id: "discord-servers",
    heading: "Discord Servers",
    links: [
      {
        label: "TexDex",
        url: "https://discord.gg/R8NhzF2JgT",
        icon: "https://cdn.discordapp.com/icons/878684571972009984/b34a8733a4c76fd14b43e2697fb845cf.webp?size=1024",
        description: "Minecraft texture pack creating & searching tool",
      },
      {
        label: "Aura",
        url: "https://discord.gg/jvPqweaeC2",
        icon: "https://cdn.discordapp.com/icons/1033792063591944232/705108d38c8a6462d559d07d125aae37.webp?size=1024",
        description: "Custom Hypixel proxy server for displaying statistics and QOL features",
      },
    ],
  },
  {
    id: "bots",
    heading: "Discord Bots",
    links: [
      {
        label: "TexDex",
        url: "https://discord.com/oauth2/authorize?client_id=1166499953749803059",
        icon: "https://cdn.discordapp.com/icons/878684571972009984/b34a8733a4c76fd14b43e2697fb845cf.webp?size=1024",
        description: "The main bot used for the TexDex server",
      },
      {
        label: "TexDex AI",
        url: "",
        icon: "https://cdn.discordapp.com/icons/878684571972009984/b34a8733a4c76fd14b43e2697fb845cf.webp?size=1024",
        description: "Used for finding texture packs using AI",
      },
      {
        label: "TexDex Support",
        url: "",
        icon: "https://cdn.discordapp.com/icons/878684571972009984/b34a8733a4c76fd14b43e2697fb845cf.webp?size=1024",
        description: "Used for supporting TexDex powered by AI",
      },
      {
        label: "HyClash",
        url: "",
        icon: "https://cdn.discordapp.com/icons/1440126767166656578/e34fe696e983fd4d5cb8f3bbe803adc3.webp?size=1024",
        description: "The main bot used in the HyClash server",
      },
      {
        label: "Swuab's Optimizations",
        url: "",
        icon: "https://cdn.discordapp.com/icons/1288325153289408634/cebe666340db8847fae13b1febefb2f4.webp?size=1024",
        description: "The main bot used in Swuab's Optimizations server",
      },
      {
        label: "Trace",
        url: "https://discord.com/oauth2/authorize?client_id=1465236186623639594",
        icon: "https://cdn.discordapp.com/attachments/1092081566655725650/1508742832813506632/T_Mono_NoBG.png?ex=6a16a5c2&is=6a155442&hm=b4c9e3a0fa492f818b555886dbeed5e94384129f559642deaec3be0c46ae0fc4&",
        description: "A Hytale username searching tool & tracker",
      },
    ],
  },
  {
    id: "other",
    heading: "Other",
    links: [
      {
        label: "Aura Proxy",
        url: "https://discord.gg/jvPqweaeC2",
        icon: "https://cdn.discordapp.com/icons/1033792063591944232/705108d38c8a6462d559d07d125aae37.webp?size=1024",
        description: "Custom Hypixel proxy server for displaying statistics and QOL features",
      },
      {
        label: "Bedwars Custom Achivements Mod",
        url: "",
        description: "Adds custom achivements to Bedwars",
      },
    ],
  },
  {
    id: "websites",
    heading: "Websites",
    links: [
      {
        label: "TexDex",
        url: "https://texdex.net",
        icon: "https://cdn.discordapp.com/icons/878684571972009984/b34a8733a4c76fd14b43e2697fb845cf.webp?size=1024",
        description: "The website for TexDex",
      },
      {
        label: "Portfolio",
        url: "",
        icon: "",
        description: "My portfolio",
      },
    ],
  },
  {
    id: "socials",
    heading: "Socials",
    links: [
      {
        label: "Youtube",
        url: "https://www.youtube.com/@DragonF1",
        icon: "https://cdn.discordapp.com/emojis/1110175669750607902.webp?size=96",
        description: "My youtube channel",
      },
      {
        label: "Twitch",
        url: "https://www.twitch.tv/dragonf1live",
        icon: "https://cdn.discordapp.com/emojis/1327692533597343754.webp?size=96",
        description: "My twitch channel",
      },
    ],
  },
];

// ── Moderator experience ──────────────────────
export const modServers: ModServer[] = [
  {
    name: "Lunar Client",
    role: "Staff",
    members: "900k+",
    inviteUrl: "https://discord.gg/lunarclient",
    accentColor: "#1D0334",
    iconUrl:
      "https://cdn.discordapp.com/icons/555932873798975568/a_19519026d0d1e8f09b3841e13fd3c6ed.webp?size=1024&animated=true",
    since: "2025",
  },
  {
    name: "Badlion Client",
    role: "Sr. Tech Support",
    members: "90k+",
    inviteUrl: "https://discord.gg/badlion",
    accentColor: "#37B4D7",
    iconUrl:
      "https://cdn.discordapp.com/icons/147213712871129088/a_248b697fa6f8675d507c18b7ffd79aa2.webp?size=1024&animated=true",
    since: "2023",
  },
  {
    name: "HyClash",
    role: "Administrator",
    members: "4k+",
    inviteUrl: "https://discord.gg/hyclash",
    accentColor: "#E1BE7D",
    iconUrl:
      "https://cdn.discordapp.com/icons/1440126767166656578/e34fe696e983fd4d5cb8f3bbe803adc3.webp?size=1024",
    since: "2025",
  },
  {
    name: "Swuab's Optimizations",
    role: "CHRO",
    members: "1k+",
    inviteUrl: "https://discord.gg/swuabsoptimizations",
    accentColor: "#3E69C2",
    iconUrl:
      "https://cdn.discordapp.com/icons/1288325153289408634/cebe666340db8847fae13b1febefb2f4.webp?size=1024",
    since: "2024",
  },
];

// ── Footer ────────────────────────────────────
export const lastUpdated = "May 2026";
