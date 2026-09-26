import { Product } from '@/types';

export const PRODUCTS: Product[] = [[
        /* GHEE */
        {
          id: 'ghee-1',
          cat: 'ghee',
          name: 'Badri Cow Ghee (A2)',
          hindi: 'बद्री गाय का शुद्ध देसी घी',
          badge: 'BESTSELLER',
          feat: true,
          img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80',
          imgs: [
            'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&q=80',
            'https://images.unsplash.com/photo-1645696301019-35adcc18cabb?w=300&q=80',
            'https://images.unsplash.com/photo-1598300188904-6a1a70d49f40?w=300&q=80',
            'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&q=80',
          ],
          desc: 'Rarest Pahadi ghee — Bilona method, from sacred Badri cows grazing on Himalayan herbs above 1500m.',
          longDesc:
            'The Badri cow is a rare indigenous breed native to Uttarakhand, found grazing on Himalayan herbs at altitudes above 1500m. Their milk is uniquely rich in A2 beta-casein protein. Prepared using the ancient Bilona method — raw milk → curd set overnight → hand-churned → slowly clarified over a wood fire. The result is a deeply aromatic, golden ghee that carries the essence of the Himalayas in every spoonful.',
          tags: ['A2 Milk', 'Bilona Method', 'Grass-Fed', 'No Additives'],
          ing: 'Pure A2 milk cream from Badri cows, hand-churned using traditional Bilona method. No added colors, flavors, or preservatives.',
          ben: [
            'Rich in A2 beta-casein — easier to digest',
            'Vitamins A, D, E, K2',
            'Supports immunity and gut health',
            'Butyric acid supports colon health',
            'Boosts brain function',
          ],
          how: 'Use for dal tadka, rotis, khichdi, or a spoonful in warm milk every morning. Ideal for Ayurvedic preparations. 12 months shelf life.',
          variants: [
            { size: '500g', price: 1999, mrp: 2100, sku: 'BADRI-500G' },
            { size: '1kg', price: 2999, mrp: 3500, sku: 'BADRI-1KG' },
          ],
        },

        /* HONEY */
        {
          id: 'honey-1',
          cat: 'honey',
          name: 'Jamun Honey',
          hindi: 'जामुन शहद',
          badge: 'BESTSELLER',
          feat: true,
          img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80',
          imgs: [
            'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&q=80',
            'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=300&q=80',
            'https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?w=300&q=80',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
          ],
          desc: 'Raw, wild Jamun honey with deep floral notes. Known for blood sugar management and antioxidant properties.',
          longDesc:
            'Harvested from wild beehives in Jamun forests of Uttarakhand. The bees feed exclusively on Jamun flowers, giving this honey its distinctive dark amber colour and robust, slightly tangy flavour. Raw, completely unfiltered and never heat-treated — preserving every enzyme, pollen grain and beneficial compound.',
          tags: [
            'Raw & Unfiltered',
            'Jamun Flowers',
            'Blood Sugar Support',
            'Wild Harvest',
          ],
          ing: '100% pure wild Jamun honey. No sugar, no heat treatment, no filtration.',
          ben: [
            'Helps manage blood sugar levels',
            'Powerful antioxidant & antibacterial',
            'Rich in enzymes and propolis',
            'Boosts immunity naturally',
          ],
          how: 'Take 1 tsp with warm water in the morning. Never heat above 40°C. Apply on skin for natural glow.',
          variants: [
            { size: '500g', price: 530, mrp: 600, sku: 'JHONEY-500G' },
            { size: '1kg', price: 999, mrp: 1100, sku: 'JHONEY-1KG' },
          ],
        },

        {
          id: 'honey-2',
          cat: 'honey',
          name: 'Mustard Honey',
          hindi: 'सरसों का शहद',
          feat: true,
          img: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=600&q=80',
          imgs: [
            'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=300&q=80',
            'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&q=80',
            'https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?w=300&q=80',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
          ],
          desc: 'Pale golden mustard honey — naturally crystallises quickly. Excellent for heart health and respiratory issues.',
          longDesc:
            'Harvested from beehives in vast mustard fields of Uttarakhand during the winter blooming season. This honey has a distinctive pale golden colour and naturally crystallises fast — a sign of pure, raw honey. Rich in pollen that provides respiratory benefits and supports heart health.',
          tags: [
            'Raw',
            'Naturally Crystallising',
            'Heart Health',
            'Respiratory Support',
          ],
          ing: '100% pure wild mustard honey. No additives, no filtration, no heat.',
          ben: [
            'Excellent for heart health',
            'Supports respiratory system',
            'Naturally crystallises — sign of purity',
            'Rich in winter flower pollen',
          ],
          how: 'Warm slightly if crystallised by placing jar in warm (not hot) water. Mix in tea, use in desserts, or eat directly.',
          variants: [
            { size: '500g', price: 530, mrp: 600, sku: 'MHONEY-500G' },
            { size: '1kg', price: 999, mrp: 1100, sku: 'MHONEY-1KG' },
          ],
        },

        {
          id: 'honey-3',
          cat: 'honey',
          name: 'Multi Floral Honey',
          hindi: 'बहु-पुष्प शहद',
          img: 'https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?w=600&q=80',
          imgs: [
            'https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?w=300&q=80',
            'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=300&q=80',
            'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&q=80',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
          ],
          desc: 'Wild multi-floral honey from Himalayan meadows — Buransh, Kafal, oak and dozens of alpine blossoms.',
          longDesc:
            'Our classic Pahadi honey, harvested from wild beehives at 1500–3000m altitude. The bees feast on Buransh (rhododendron), Kafal, Himalayan oak and dozens of alpine blossoms through the year — giving this multi-floral honey its complex, rich flavour profile.',
          tags: [
            'Raw & Unfiltered',
            'Multi-Flora',
            'Wild Harvest',
            'Himalayan Altitude',
          ],
          ing: '100% pure wild Himalayan multi-floral honey. No additives.',
          ben: [
            'Powerful antioxidant',
            'Boosts overall immunity',
            'Rich in diverse enzymes and pollens',
            'Natural energy source',
          ],
          how: 'Mix in warm water with lemon each morning. Never heat above 40°C.',
          variants: [
            { size: '500g', price: 500, mrp: 560, sku: 'MFHONEY-500G' },
            { size: '1kg', price: 920, mrp: 1050, sku: 'MFHONEY-1KG' },
          ],
        },

        {
          id: 'honey-4',
          cat: 'honey',
          name: 'Indica Honey',
          hindi: 'इंडिका शहद',
          img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
          imgs: [
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
            'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&q=80',
            'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=300&q=80',
            'https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?w=300&q=80',
          ],
          desc: 'Rare Apis Indica (Indian honey bee) honey — smaller bees, more complex honey with deeper therapeutic benefits.',
          longDesc:
            'Produced by Apis Indica — the native Indian honey bee — known for producing small amounts of exceptionally rich honey. This rare variety has a more complex flavour and a higher enzyme concentration than regular honey, with deeper therapeutic properties.',
          tags: [
            'Apis Indica',
            'Rare Variety',
            'Deep Therapeutic',
            'High Enzyme',
          ],
          ing: '100% pure Apis Indica honey. Wild harvested, unfiltered, raw.',
          ben: [
            'Higher enzyme concentration than regular honey',
            'Stronger antimicrobial properties',
            'Rich therapeutic benefits',
            'Rare — limited seasonal harvest',
          ],
          how: 'Take 1 tsp daily. Can be used for wound healing. Never heat.',
          variants: [
            { size: '500g', price: 699, mrp: 800, sku: 'IHONEY-500G' },
            { size: '1kg', price: 1500, mrp: 1700, sku: 'IHONEY-1KG' },
          ],
        },

        /* SALTS */
        {
          id: 'salt-1',
          cat: 'salt',
          name: 'Garlic Salt (Silbatta)',
          hindi: 'लहसुन नमक — सिलबट्टा',
          img: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=600&q=80',
          imgs: [
            'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=300&q=80',
            'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&q=80',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
            'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=300&q=80',
          ],
          desc: 'Himalayan rock salt stone-ground with roasted garlic, cumin & Pahadi spices on traditional silbatta.',
          longDesc:
            'Himalayan rock salt combined with sun-dried Pahadi garlic, roasted cumin, ajwain, and local spices — ground to perfection on a traditional stone sil-batta by local artisans. The stone grinding preserves natural oils and creates a uniquely textured salt with intense, rounded flavour.',
          tags: [
            'Silbatta Ground',
            'Himalayan Salt',
            'Garlic',
            'No Anti-Caking',
          ],
          ing: 'Himalayan rock salt, sun-dried Pahadi garlic, roasted cumin, ajwain, coriander — all stone-ground.',
          ben: [
            '84+ natural trace minerals',
            'Garlic antibacterial & immunity boosting',
            'Aids digestion naturally',
            'No anti-caking agents or bleach',
          ],
          how: 'Sprinkle on salads, raita, dal, sabzis, or use as finishing salt. Excellent on grilled vegetables.',
          variants: [{ size: '100g', price: 199, mrp: 220, sku: 'GSALT-100G' }],
        },

        {
          id: 'salt-2',
          cat: 'salt',
          name: 'Hemp Salt (Silbatta)',
          hindi: 'भांग नमक — सिलबट्टा',
          img: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=600&q=80',
          imgs: [
            'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=300&q=80',
            'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=300&q=80',
            'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&q=80',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
          ],
          desc: "Uttarakhand's legendary Bhang (hemp seed) salt — earthy, nutty, aromatic. A Pahadi kitchen staple.",
          longDesc:
            'Bhang seeds (hemp seeds) are a Uttarakhand superfood — rich in omega-3, protein, and minerals. When roasted and ground with Himalayan rock salt, cumin, and local spices on a sil-batta, they create the legendary Bhang Salt — one of the most beloved condiments of the hills.',
          tags: [
            'Hemp Seeds',
            'Silbatta Ground',
            'Omega-3 Rich',
            'Pahadi Tradition',
          ],
          ing: 'Himalayan rock salt, roasted hemp seeds (bhang), cumin, coriander, black pepper — stone-ground.',
          ben: [
            'Rich in Omega-3 fatty acids',
            'High protein hemp seeds',
            'Himalayan mineral salt benefits',
            'Traditional Pahadi recipe',
          ],
          how: 'Best with raita, cucumber, fruits, or sprinkled on any dish as a finishing salt. Classic Pahadi condiment.',
          variants: [{ size: '100g', price: 199, mrp: 220, sku: 'HSALT-100G' }],
        },

        {
          id: 'salt-3',
          cat: 'salt',
          name: 'Mix Salt (Pisyu Loon)',
          hindi: 'पिस्यूँ लूण — मिक्स',
          img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
          imgs: [
            'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&q=80',
            'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=300&q=80',
            'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=300&q=80',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
          ],
          desc: 'The iconic Pisyu Loon — stone-ground blend of cumin, ajwain, coriander, ginger & Pahadi mirch with Himalayan salt.',
          longDesc:
            'Pisyu Loon is the most iconic condiment of Uttarakhand. Rock salt combined with toasted cumin, ajwain, coriander, dry ginger, and Pahadi mirch — ground together on a traditional sil-batta. One taste and you understand why every Pahadi household has cherished this recipe for generations.',
          tags: [
            'Stone Ground',
            'Traditional Recipe',
            '84+ Minerals',
            'Pisyu Loon',
          ],
          ing: 'Himalayan rock salt, roasted cumin, ajwain, coriander, dry ginger, Pahadi mirch — all stone-ground.',
          ben: [
            '84+ natural trace minerals',
            'Improves digestion & appetite',
            'Complex spice benefits',
            'Zero artificial additives',
          ],
          how: 'Sprinkle on fresh fruits, raita, salads, or as finishing salt on any dish. Great on cucumber and buttermilk.',
          variants: [
            { size: '100g', price: 230, mrp: 260, sku: 'MIXSALT-100G' },
          ],
        },

        /* PULSES */
        {
          id: 'pulse-1',
          cat: 'pulses',
          name: 'Pahadi Rajma',
          hindi: 'पहाड़ी राजमा',
          img: 'https://images.unsplash.com/photo-1604929822687-38a1a85c0ed8?w=600&q=80',
          imgs: [
            'https://images.unsplash.com/photo-1604929822687-38a1a85c0ed8?w=300&q=80',
            'https://images.unsplash.com/photo-1576181256399-834e3b3a49bf?w=300&q=80',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
            'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&q=80',
          ],
          desc: 'The famous Pahadi kidney beans — grown at 1500–2500m without pesticides. Incomparably flavorful.',
          longDesc:
            'Grown at 1500–2500m in mineral-rich volcanic soil without pesticides. High altitude, cool temperatures and snowmelt irrigation give Pahadi Rajma its signature tender texture and nutty depth of flavour — completely different from plains varieties.',
          tags: [
            'High Altitude Grown',
            'Non-GMO',
            'Chemical Free',
            'Kumaoni Variety',
          ],
          ing: '100% natural Pahadi Rajma. Traditional farming at 2000m+ altitude, no pesticides or chemicals.',
          ben: [
            'High plant protein & dietary fiber',
            'Rich in iron, folate, potassium',
            'Low glycemic index — good for diabetics',
            'Heart-healthy',
          ],
          how: 'Soak overnight, pressure cook 4–5 whistles. Best as Rajma Chawal with HIMSARU A2 Ghee!',
          variants: [
            { size: '500g', price: 249, mrp: 280, sku: 'RAJMA-500G' },
            { size: '1kg', price: 320, mrp: 380, sku: 'RAJMA-1KG' },
          ],
        },

        {
          id: 'pulse-2',
          cat: 'pulses',
          name: 'Gehat Dal (Horse Gram)',
          hindi: 'गहत दाल — कुलथी',
          img: 'https://images.unsplash.com/photo-1576181256399-834e3b3a49bf?w=600&q=80',
          imgs: [
            'https://images.unsplash.com/photo-1576181256399-834e3b3a49bf?w=300&q=80',
            'https://images.unsplash.com/photo-1604929822687-38a1a85c0ed8?w=300&q=80',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
            'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&q=80',
          ],
          desc: "Uttarakhand's wonder pulse — known for dissolving kidney stones naturally. High protein mountain food.",
          longDesc:
            "Gehat (Kulath) is Uttarakhand's legendary wonder pulse. Traditionally consumed in winters, it is scientifically proven to help dissolve kidney and urinary stones. Extremely high in protein and dietary fiber, it is a winter staple of Pahadi kitchens.",
          tags: [
            'Kidney Stone Remedy',
            'High Protein',
            'Winter Staple',
            'Organically Grown',
          ],
          ing: 'Pure Pahadi Gehat (Kulath/Horse Gram). Organically grown at high altitude, sun-dried.',
          ben: [
            'Dissolves kidney & urinary stones naturally',
            'Very high protein and dietary fiber',
            'Rich in calcium, iron, zinc',
            'Traditional winter health food',
          ],
          how: 'Soak 8 hours. Pressure cook for Gehat Dal Fry with ghee, garlic & Pahadi salt. Also great as dal soup.',
          variants: [
            { size: '500g', price: 199, mrp: 230, sku: 'GEHAT-500G' },
            { size: '1kg', price: 299, mrp: 340, sku: 'GEHAT-1KG' },
          ],
        },

        {
          id: 'pulse-3',
          cat: 'pulses',
          name: 'Kale Bhatt (Black Soybean)',
          hindi: 'काले भट्ट',
          img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
          imgs: [
            'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&q=80',
            'https://images.unsplash.com/photo-1576181256399-834e3b3a49bf?w=300&q=80',
            'https://images.unsplash.com/photo-1604929822687-38a1a85c0ed8?w=300&q=80',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
          ],
          desc: 'Black soybean from Uttarakhand — ancient protein source, rich in anthocyanins and antioxidants.',
          longDesc:
            'Kale Bhatt (Black Soybean) is an ancient Pahadi crop with deep roots in Uttarakhand cuisine. The jet-black colour comes from anthocyanins — powerful antioxidants. It is a nutritional powerhouse: very high in plant protein, fiber, and essential minerals.',
          tags: [
            'Anthocyanin Rich',
            'Ancient Crop',
            'High Protein',
            'Uttarakhand Native',
          ],
          ing: 'Pure Pahadi Kale Bhatt (Black Soybean). Organically grown, minimally processed.',
          ben: [
            'Rich in anthocyanins & antioxidants',
            'Very high plant protein',
            'Heart-healthy fatty acids',
            'Anti-inflammatory properties',
          ],
          how: 'Soak overnight, pressure cook. Excellent as curry with ghee and local spices, or in salads after cooking.',
          variants: [
            { size: '500g', price: 149, mrp: 175, sku: 'KBHATT-500G' },
            { size: '1kg', price: 249, mrp: 290, sku: 'KBHATT-1KG' },
          ],
        },

        /* SPICES */
        {
          id: 'spice-1',
          cat: 'spices',
          name: 'Pahadi Haldi (Turmeric)',
          hindi: 'पहाड़ी हल्दी',
          img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
          imgs: [
            'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&q=80',
            'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=300&q=80',
            'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=300&q=80',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
          ],
          desc: 'High-altitude Pahadi turmeric with 3–7% curcumin vs 2% commercial. Stone-ground, deeply aromatic.',
          longDesc:
            'Pahadi Haldi from Uttarakhand contains 3–7% curcumin — compared to 2% in commercial turmeric — giving it deeper colour, stronger aroma, and far more potent medicinal properties. Stone-ground by artisans to preserve natural oils and active compounds.',
          tags: [
            '3–7% Curcumin',
            'Stone Ground',
            'No Artificial Color',
            'High Altitude',
          ],
          ing: 'Pure mountain turmeric from Uttarakhand, stone-ground. No artificial color, no preservatives.',
          ben: [
            '3–7% curcumin vs 2% commercial',
            'Powerful anti-inflammatory',
            'Strong antioxidant',
            'No lead chromate or artificial dye',
          ],
          how: 'Golden milk (haldi doodh), curries, rice, marinades. Mix with warm milk + honey + black pepper for healing drink.',
          variants: [{ size: '100g', price: 99, mrp: 120, sku: 'HALDI-100G' }],
        },

        /* RICE */
        {
          id: 'rice-1',
          cat: 'rice',
          name: 'Red Rice (Pahadi Laal Chawal)',
          hindi: 'पहाड़ी लाल चावल',
          img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80',
          imgs: [
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80',
            'https://images.unsplash.com/photo-1612966759403-e3a40bcf8d91?w=300&q=80',
            'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&q=80',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
          ],
          desc: 'Pahadi Red Rice — earthy, nutty, and packed with anthocyanins. Grown in terraced mountain fields.',
          longDesc:
            'Grown on terraced mountain fields of Uttarakhand, Pahadi Red Rice gets its distinctive reddish colour from anthocyanins — powerful antioxidants in the outer bran layer. It has a nutty, earthy flavour, higher fiber than white rice, and a low glycemic index.',
          tags: [
            'Anthocyanin Rich',
            'Low GI',
            'Whole Grain',
            'Mountain Terraces',
          ],
          ing: '100% pure Pahadi Red Rice. Traditionally grown, minimally processed, no polishing.',
          ben: [
            'Rich in anthocyanins & antioxidants',
            'Higher fiber than white rice',
            'Low glycemic index',
            'Nutty, earthy flavour profile',
          ],
          how: 'Use 1:2.5 rice-to-water ratio. Soak 30 min for fluffier results. Excellent as daily rice or pulao.',
          variants: [
            { size: '500g', price: 199, mrp: 230, sku: 'RRICE-500G' },
            { size: '1kg', price: 249, mrp: 290, sku: 'RRICE-1KG' },
          ],
        },

        {
          id: 'rice-2',
          cat: 'rice',
          name: 'Black Rice (Pahadi Kala Chawal)',
          hindi: 'पहाड़ी काला चावल',
          img: 'https://images.unsplash.com/photo-1612966759403-e3a40bcf8d91?w=600&q=80',
          imgs: [
            'https://images.unsplash.com/photo-1612966759403-e3a40bcf8d91?w=300&q=80',
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80',
            'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&q=80',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
          ],
          desc: 'Black Rice from Pahadi mountains — once the "forbidden rice" of royals. Highest antioxidant of all rices.',
          longDesc:
            'Black Rice — once reserved for Chinese royalty — grows in the cool mountain terraces of Uttarakhand. It turns deep purple when cooked and has the highest anthocyanin content of any variety of rice, making it one of the most antioxidant-rich foods available.',
          tags: [
            'Forbidden Rice',
            'Highest Antioxidant',
            'Purple When Cooked',
            'Ancient Grain',
          ],
          ing: '100% pure Pahadi Black Rice. Traditionally grown, minimally processed.',
          ben: [
            'Highest antioxidant of all rice varieties',
            'Very rich in anthocyanins',
            'Anti-inflammatory properties',
            'Higher protein than most rice',
          ],
          how: 'Soak 1 hour. Cook 1:2.5 rice-to-water. Makes beautiful purple kheer and stunning rice bowls.',
          variants: [
            { size: '500g', price: 199, mrp: 230, sku: 'BRICE-500G' },
            { size: '1kg', price: 249, mrp: 290, sku: 'BRICE-1KG' },
          ],
        },

        {
          id: 'rice-3',
          cat: 'rice',
          name: 'Pahadi White Rice (Basmati style)',
          hindi: 'पहाड़ी चावल',
          img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80',
          imgs: [
            'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80',
            'https://images.unsplash.com/photo-1612966759403-e3a40bcf8d91?w=300&q=80',
            'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&q=80',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
          ],
          desc: 'Traditional Pahadi rice from Uttarakhand mountain terraces — fragrant, long-grain, naturally grown.',
          longDesc:
            'Traditional Pahadi Rice grown on terraced mountain fields using centuries-old farming methods. Irrigated by snowmelt, grown in cool air, and dried in mountain sunshine — this fragrant, naturally aromatic rice carries the freshness of Himalayan fields in every grain.',
          tags: [
            'Mountain Grown',
            'Snowmelt Irrigated',
            'Naturally Aromatic',
            'Chemical Free',
          ],
          ing: '100% pure Pahadi mountain rice. Traditionally grown, no chemicals or pesticides.',
          ben: [
            'Naturally fragrant and aromatic',
            'Grown in mineral-rich mountain soil',
            'No pesticides or chemicals',
            'Supports Pahadi farming community',
          ],
          how: 'Cook 1:2 rice-to-water. Perfect for dal rice, khichdi, pulao, and everyday meals.',
          variants: [
            { size: '500g', price: 149, mrp: 175, sku: 'PRICE-500G' },
            { size: '1kg', price: 200, mrp: 240, sku: 'PRICE-1KG' },
          ],
        },
      ];

export const CATEGORIES = [
  { id: 'all', label: 'All Creations', icon: '🏔️' },
  { id: 'ghee', label: 'A2 Badri Ghee', icon: '🧈' },
  { id: 'honey', label: 'Wild Forest Honey', icon: '🍯' },
  { id: 'salt', label: 'Pahadi Herb Salt', icon: '🧂' },
  { id: 'dal', label: 'Mountain Pulses', icon: '🌾' },
  { id: 'rice', label: 'Alpine Rice', icon: '🍚' },
  { id: 'spice', label: 'Wild Spices', icon: '🌿' }
];
