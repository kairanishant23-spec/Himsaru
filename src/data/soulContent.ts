export interface ArtisanProfile {
  id: string;
  name: string;
  village: string;
  altitude: string;
  role: string;
  experience: string;
  image: string;
  quote: string;
  story: string;
  craftSpecialty: string;
  dailyRoutine: {
    time: string;
    activity: string;
    description: string;
  }[];
}

export interface MountainRitualStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  traditionNote: string;
  icon: string;
  image: string;
}

export interface PahadScenery {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  tag: string;
}

export const ARTISANS: ArtisanProfile[] = [
  {
    id: 'kamla-devi',
    name: 'Kamla Devi',
    village: 'Munsiyari, Kumaon',
    altitude: '2,200m above sea level',
    role: 'Master Bilona Artisan & Elder',
    experience: '38 years of traditional wisdom',
    image: '/images/himsaru_women_empowerment_1780214326121.png',
    quote: 'Our Badri cows feed only on wild medicinal alpine clover and sweet grass. When we churn the curd at daybreak, the mountain breeze infuses life into the ghee.',
    story: 'Kamla Devi leads the self-help collective of 18 village women in Munsiyari. With the fair compensation from HIMSARU, both her daughters have pursued degrees in Dehradun, breaking a century-long cycle of limited mountain schooling.',
    craftSpecialty: 'Ancient two-way rope Bilona churning in earthen pots over pine wood embers.',
    dailyRoutine: [
      {
        time: '4:30 AM',
        activity: 'Dawn Greeting & Milking',
        description: 'Chanting sacred morning shlokas while milking the free-grazing Badri cows before sunrise.'
      },
      {
        time: '7:00 AM',
        activity: 'Slow Churning',
        description: 'Using a handcrafted Mathani wooden rod, hand-churning overnight curd until pure white makkhan floats to the surface.'
      },
      {
        time: '11:00 AM',
        activity: 'Herbal Foraging',
        description: 'Ascending high slopes to gather wild herbs, timur seeds, and rhododendron petals for natural seasonal salts.'
      },
      {
        time: '4:00 PM',
        activity: 'Community Assembly',
        description: 'Meeting with younger village women to share packaging, record-keeping, and traditional recipe secrets.'
      }
    ]
  },
  {
    id: 'maya-rawat',
    name: 'Maya Rawat',
    village: 'Joshimath, Garhwal',
    altitude: '1,890m above sea level',
    role: 'High-Altitude Wild Honey Forager',
    experience: '14 years in mountain apiculture',
    image: '/images/media__1780214645909.jpg',
    quote: 'Wild Himalayan bees do not need chemical syrups. They harvest nectar from rare medicinal blooms that grow only where human feet rarely tread.',
    story: 'Maya was widowed young and faced extreme hardship until she trained in eco-friendly, stingless wild harvesting techniques. Today she trains women across five remote valleys in sustainable forest preservation.',
    craftSpecialty: 'Raw, unheated floral nectar extraction preserving live therapeutic pollen & royal jelly.',
    dailyRoutine: [
      {
        time: '5:30 AM',
        activity: 'Forest Walk',
        description: 'Checking natural stone-crevice hives sheltered from high-altitude winds.'
      },
      {
        time: '9:00 AM',
        activity: 'Cold Filtration',
        description: 'Passing harvested honey through fine muslin cloth without applying any heat.'
      },
      {
        time: '2:00 PM',
        activity: 'Terrace Farming',
        description: 'Tending to mountain red rice and rain-fed pulses on ancestral terrace steps.'
      }
    ]
  },
  {
    id: 'deepa-negi',
    name: 'Deepa Negi',
    village: 'Pithoragarh Border Valley',
    altitude: '1,950m above sea level',
    role: 'Silbatta Herb & Salt Alchemist',
    experience: '22 years',
    image: '/images/media__1780214658535.jpg',
    quote: 'Pahadi Pisyun Loon is not just salt; it is the fragrance of crushed mountain garlic, roasted cumin, and roasted bhang seeds ground slowly on heavy river rock.',
    story: 'Deepa turned ancestral culinary heritage into a sustainable cottage craft. Her signature garlic-mint and hemp-seed salts have reached tables across India.',
    craftSpecialty: 'Hand stone-ground Himalayan pink rock salt infused with sun-dried herbs.',
    dailyRoutine: [
      {
        time: '6:00 AM',
        activity: 'Herb Sunning',
        description: 'Laying out fresh mint, coriander, and wild pahadi garlic on rooftop woven mats.'
      },
      {
        time: '10:00 AM',
        activity: 'Silbatta Grinding',
        description: 'Crushing rock crystals with fresh herbs until rich green aromatic oils naturally blend.'
      },
      {
        time: '3:00 PM',
        activity: 'Air Drying & Sealing',
        description: 'Packaging in eco-friendly glass containers to retain rich natural mountain aroma.'
      }
    ]
  }
];

export const MOUNTAIN_RITUALS: MountainRitualStep[] = [
  {
    step: 1,
    title: 'The High-Altitude Sanctuary',
    subtitle: 'Where Pure Air Meets Healing Flora',
    description: 'Our Badri cows and wild bees live freely at 1,500m to 3,000m altitude. Far away from industrial smog, they drink pristine glacier waters and graze on natural Himalayan flora like Shankhpushpi, Jatamansi, and alpine clover.',
    traditionNote: 'Indigenous Pahadi cows are never tethered in cramped sheds; they roam the sacred meadows freely.',
    icon: '🏔️',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
  },
  {
    step: 2,
    title: 'The Overnight Earthen Awakening',
    subtitle: 'Slow Fermentation into Living Curd',
    description: 'Unlike commercial factory ghee made from boiled industrial cream, authentic Vedic ghee begins by fermenting fresh, warm A2 milk with natural curd culture in hand-spun clay pots overnight. This develops millions of gut-friendly probiotics.',
    traditionNote: 'Clay pots breathe and regulate natural temperatures during chilly Himalayan nights.',
    icon: '🏺',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80'
  },
  {
    step: 3,
    title: 'The Sacred Bilona Churn',
    subtitle: 'Bidirectional Wooden Churning',
    description: 'At the break of dawn, our artisan mothers use a two-way wooden churn (Mathani) pulled by cotton cords. Churning clockwise and counter-clockwise gently separates pure, silky makkhan (butter) without friction heat.',
    traditionNote: 'This rhythmic churn is sung along with traditional Uttarakhand folk songs of harvest and grace.',
    icon: '🪵',
    image: '/images/media__1780214658575.jpg'
  },
  {
    step: 4,
    title: 'Slow Pine-Wood Embers',
    subtitle: 'Golden Clarity & Deep Mountain Aroma',
    description: 'The freshly churned butter is slowly clarified in heavy brass vessels over low-heat pine wood and cow-dung embers. When the golden curds caramelize gently, the ghee turns to liquid gold, cooled naturally and bottled with zero additives.',
    traditionNote: 'Wood fire imparts subtle smoky undertones that cannot be replicated by factory machines.',
    icon: '✨',
    image: '/images/media__1780214658599.jpg'
  }
];

export const PAHAD_GALLERY: PahadScenery[] = [
  {
    id: 'scenery-1',
    title: 'Terraces of Chamoli at Dawn',
    location: 'Chamoli, Uttarakhand',
    description: 'Ancient stepped farming terraces where organic red rice and mountain pulses thrive with zero chemicals.',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&q=80',
    tag: 'Pristine Terrains'
  },
  {
    id: 'scenery-2',
    title: 'Nanda Devi Sanctuary Peaks',
    location: 'Garhwal Himalayas',
    description: 'The snow-crowned crown of the Himalayas, blessing valley soils with mineral-rich snowmelt.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
    tag: 'Sacred Heights'
  },
  {
    id: 'scenery-3',
    title: 'Misty Alpine Meadows',
    location: 'Bugyal Valley, 2800m',
    description: 'Where indigenous Badri cattle graze on medicinal herbs and high-altitude wild blossoms.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
    tag: 'Wild Pastures'
  },
  {
    id: 'scenery-4',
    title: 'Mountain Village Hearth',
    location: 'Tehri Garhwal',
    description: 'Stone and slate homes where woodfire smoke curls peacefully into the morning mist.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    tag: 'Rural Warmth'
  }
];

export const IMPACT_METRICS = [
  { value: '140+', label: 'Pahadi Women Artisans Supported', icon: '👩‍🌾' },
  { value: '100%', label: 'Fair Trade & Direct Livelihood Uplift', icon: '🤝' },
  { value: '1,800m+', label: 'Average Sourcing Elevation', icon: '🏔️' },
  { value: 'Zero', label: 'Pesticides, Chemicals or Preservatives', icon: '🌱' }
];
