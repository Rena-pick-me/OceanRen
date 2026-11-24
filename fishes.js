
// DATA IKAN

const fishes = [
    {
        id: 1,
        name: "Ikan Badut",
        scientific: "Amphiprion ocellaris",
        category: "Terumbu Karang",
        habitat: "Terumbu karang dan anemon laut",
        food: "Plankton dan alga",
        image: "clownfish.jfif",
        description: "Ikan Badut dikenal dengan warna oranye dan garis putih pada tubuhnya. Ikan ini hidup berdampingan dengan anemon laut."
    },
    {
        id: 2,
        name: "Blue Tang",
        scientific: "Paracanthurus hepatus",
        category: "Terumbu Karang",
        habitat: "Terumbu karang tropis",
        food: "Alga",
        image: "blue-tang.jfif",
        description: "Blue Tang memiliki warna biru cerah dengan corak hitam. Ikan ini banyak ditemukan di kawasan terumbu karang."
    },
    {
        id: 3,
        name: "Lionfish",
        scientific: "Pterois volitans",
        category: "Terumbu Karang",
        habitat: "Terumbu karang dan perairan berbatu",
        food: "Ikan kecil dan udang",
        image: "lionfish.jfif",
        description: "Lionfish memiliki sirip panjang menyerupai kipas dan corak garis pada tubuhnya."
    },
    {
        id: 4,
        name: "Butterflyfish",
        scientific: "Chaetodon",
        category: "Terumbu Karang",
        habitat: "Terumbu karang",
        food: "Alga dan hewan kecil",
        image: "butterflyfish.jfif",
        description: "Butterflyfish memiliki bentuk tubuh pipih dan warna yang menarik. Ikan ini sering ditemukan di sekitar terumbu karang."
    },
    {
        id: 5,
        name: "Parrotfish",
        scientific: "Scaridae",
        category: "Terumbu Karang",
        habitat: "Terumbu karang tropis",
        food: "Alga",
        image: "parrotfish.jfif",
        description: "Parrotfish memiliki bentuk mulut menyerupai paruh. Ikan ini membantu menjaga keseimbangan ekosistem terumbu karang."
    },
    {
        id: 6,
        name: "Ikan Tuna",
        scientific: "Thunnini",
        category: "Pelagis",
        habitat: "Laut lepas",
        food: "Ikan kecil dan cumi-cumi",
        image: "tuna.jfif",
        description: "Tuna merupakan ikan perenang cepat yang hidup di perairan laut terbuka."
    },
    {
        id: 7,
        name: "Ikan Pari",
        scientific: "Batoidea",
        category: "Dasar Laut",
        habitat: "Dasar laut dan perairan pesisir",
        food: "Hewan kecil dan krustasea",
        image: "stingray.jfif",
        description: "Ikan pari memiliki tubuh pipih dan sirip dada lebar yang menyerupai sayap."
    },
    {
        id: 8,
        name: "Moorish Idol",
        scientific: "Zanclus cornutus",
        category: "Terumbu Karang",
        habitat: "Terumbu karang tropis",
        food: "Spons dan organisme kecil",
        image: "moorish-idol.jfif",
        description: "Moorish Idol memiliki pola warna hitam, putih, dan kuning dengan sirip punggung yang memanjang."
    }
        ,
    {
        id: 9,
        name: "Mandarin Fish",
        scientific: "Synchiropus splendidus",
        category: "Terumbu Karang",
        habitat: "Terumbu karang dan perairan dangkal",
        food: "Krustasea kecil dan organisme mikro",
        image: "mandarin-fish.jfif",
        description: "Mandarin Fish memiliki warna tubuh yang sangat cerah dengan perpaduan biru, oranye, dan hijau. Ikan ini banyak ditemukan di kawasan terumbu karang."
    },
    {
        id: 10,
        name: "Kuda Laut",
        scientific: "Hippocampus",
        category: "Terumbu Karang",
        habitat: "Padang lamun dan terumbu karang",
        food: "Plankton dan udang kecil",
        image: "seahorse.jfif",
        description: "Kuda laut memiliki bentuk tubuh unik dengan kepala menyerupai kuda. Ikan ini berenang dalam posisi tegak."
    },
    {
        id: 11,
        name: "Ikan Buntal",
        scientific: "Tetraodontidae",
        category: "Terumbu Karang",
        habitat: "Laut tropis dan perairan pesisir",
        food: "Moluska, krustasea, dan organisme kecil",
        image: "pufferfish.jfif",
        description: "Ikan buntal memiliki kemampuan menggembungkan tubuhnya ketika merasa terancam. Bentuknya yang unik membuat ikan ini mudah dikenali."
    },
    {
        id: 12,
        name: "Hiu Paus",
        scientific: "Rhincodon typus",
        category: "Pelagis",
        habitat: "Laut tropis dan subtropis",
        food: "Plankton dan ikan kecil",
        image: "whale-shark.jfif",
        description: "Hiu paus merupakan spesies ikan terbesar di dunia. Meskipun berukuran sangat besar, ikan ini memakan plankton dan organisme kecil."
    },
    {
        id: 13,
        name: "Hiu Martil",
        scientific: "Sphyrnidae",
        category: "Pelagis",
        habitat: "Laut tropis dan perairan lepas",
        food: "Ikan kecil, cumi-cumi, dan pari",
        image: "hammerhead-shark.jfif",
        description: "Hiu martil memiliki bentuk kepala melebar menyerupai martil. Bentuk kepala tersebut menjadi ciri khas yang membedakannya dari jenis hiu lainnya."
    },
    {
        id: 14,
        name: "Ikan Pari Manta",
        scientific: "Mobula birostris",
        category: "Pelagis",
        habitat: "Laut terbuka dan perairan tropis",
        food: "Plankton dan organisme kecil",
        image: "manta-ray.jfif",
        description: "Pari manta memiliki tubuh lebar dengan sirip dada menyerupai sayap. Ikan ini dikenal sebagai salah satu ikan pari terbesar di dunia."
    },
    {
        id: 15,
        name: "Belut Moray",
        scientific: "Muraenidae",
        category: "Dasar Laut",
        habitat: "Celah batu dan terumbu karang",
        food: "Ikan kecil dan krustasea",
        image: "moray-eel.jfif",
        description: "Belut moray memiliki tubuh panjang menyerupai ular dan sering bersembunyi di celah-celah batu karang."
    },
    {
        id: 16,
        name: "Ikan Kerapu",
        scientific: "Epinephelinae",
        category: "Dasar Laut",
        habitat: "Terumbu karang dan dasar laut berbatu",
        food: "Ikan kecil dan krustasea",
        image: "grouper.jfif",
        description: "Ikan kerapu memiliki tubuh relatif besar dengan mulut lebar. Ikan ini banyak ditemukan di sekitar terumbu karang."
    },
    {
        id: 17,
        name: "Ikan Todak",
        scientific: "Xiphias gladius",
        category: "Pelagis",
        habitat: "Laut lepas",
        food: "Ikan kecil dan cumi-cumi",
        image: "swordfish.jfif",
        description: "Ikan todak memiliki rahang atas yang panjang dan pipih menyerupai pedang. Ikan ini dikenal sebagai perenang cepat."
    },
    {
        id: 18,
        name: "Ikan Mola-Mola",
        scientific: "Mola mola",
        category: "Pelagis",
        habitat: "Laut terbuka",
        food: "Ubur-ubur dan organisme laut kecil",
        image: "mola-mola.jfif",
        description: "Mola-mola memiliki bentuk tubuh bulat dan pipih dengan sirip yang unik. Ikan ini dikenal sebagai ikan bertulang sejati yang sangat besar."
    }
        ,
    {
        id: 19,
        name: "Ubur-Ubur",
        scientific: "Scyphozoa",
        category: "Makhluk Laut Unik",
        habitat: "Laut terbuka dan perairan pesisir",
        food: "Plankton dan organisme kecil",
        image: "jellyfish.jfif",
        description: "Ubur-ubur memiliki tubuh transparan berbentuk seperti lonceng dan tentakel yang bergerak mengikuti arus air. Hewan ini terlihat indah saat berenang di laut."
    },
    {
        id: 20,
        name: "Dumbo Octopus",
        scientific: "Grimpoteuthis",
        category: "Makhluk Laut Unik",
        habitat: "Laut dalam",
        food: "Krustasea kecil dan organisme laut",
        image: "dumbo-octopus.jfif",
        description: "Dumbo Octopus merupakan gurita laut dalam yang memiliki sirip menyerupai telinga gajah. Bentuknya sangat unik dan menggemaskan."
    },
    {
        id: 21,
        name: "Sea Bunny",
        scientific: "Jorunna parva",
        category: "Makhluk Laut Unik",
        habitat: "Dasar laut dan terumbu karang",
        food: "Spons laut",
        image: "sea-bunny.jfif",
        description: "Sea Bunny merupakan siput laut kecil yang memiliki bentuk menyerupai kelinci dengan tonjolan seperti telinga dan tubuh berbulu."
    },
    {
        id: 22,
        name: "Blue Dragon",
        scientific: "Glaucus atlanticus",
        category: "Makhluk Laut Unik",
        habitat: "Permukaan laut terbuka",
        food: "Organisme laut seperti ubur-ubur",
        image: "blue-dragon.jfif",
        description: "Blue Dragon merupakan siput laut berwarna biru dengan bentuk tubuh menyerupai naga kecil. Warnanya sangat mencolok dan indah."
    },
    {
        id: 23,
        name: "Anjing Laut",
        scientific: "Phocidae",
        category: "Mamalia Laut",
        habitat: "Perairan dingin dan pesisir",
        food: "Ikan dan cumi-cumi",
        image: "seal.jfif",
        description: "Anjing laut merupakan mamalia laut dengan tubuh membulat dan sirip yang membantunya berenang. Hewan ini juga dikenal pandai bergerak di dalam air."
    },
    {
        id: 24,
        name: "Berang-Berang Laut",
        scientific: "Enhydra lutris",
        category: "Mamalia Laut",
        habitat: "Perairan pesisir Pasifik Utara",
        food: "Kerang, kepiting, dan hewan laut kecil",
        image: "sea-otter.jfif",
        description: "Berang-berang laut memiliki bulu yang tebal dan sering terlihat mengapung di permukaan laut. Hewan ini dikenal suka menggunakan batu untuk membuka makanan."
    },
    {
        id: 25,
        name: "Yellow Boxfish",
        scientific: "Ostracion cubicus",
        category: "Terumbu Karang",
        habitat: "Terumbu karang tropis",
        food: "Alga dan organisme kecil",
        image: "yellow-boxfish.jfif",
        description: "Yellow Boxfish memiliki bentuk tubuh menyerupai kotak dengan warna kuning cerah dan bintik-bintik hitam."
    },
    {
        id: 26,
        name: "Sotong",
        scientific: "Sepiida",
        category: "Makhluk Laut Unik",
        habitat: "Dasar laut dan perairan pesisir",
        food: "Udang dan ikan kecil",
        image: "cuttlefish.jfif",
        description: "Sotong merupakan hewan laut yang memiliki kemampuan mengubah warna dan pola tubuhnya untuk berkomunikasi serta berkamuflase."
    },
    {
        id: 27,
        name: "Garden Eel",
        scientific: "Heterocongrinae",
        category: "Makhluk Laut Unik",
        habitat: "Dasar laut berpasir",
        food: "Plankton",
        image: "garden-eel.jfif",
        description: "Garden Eel memiliki tubuh panjang dan tipis. Hewan ini sering muncul dari lubang pasir dan bergerak mengikuti arus air."
    },
    {
        id: 28,
        name: "Leafy Seadragon",
        scientific: "Phycodurus eques",
        category: "Makhluk Laut Unik",
        habitat: "Perairan pesisir Australia Selatan",
        food: "Udang kecil dan plankton",
        image: "leafy-seadragon.jfif",
        description: "Leafy Seadragon memiliki bentuk tubuh menyerupai naga dengan bagian tubuh menyerupai daun. Bentuk tersebut membantunya berkamuflase di antara rumput laut."
    }
    
];

// ELEMEN HTML

const fishContainer = document.getElementById("fishContainer");
const searchInput = document.getElementById("searchFish");
const categoryFilter = document.getElementById("categoryFilter");
const favoriteFilter = document.getElementById("favoriteFilter");
const emptyMessage = document.getElementById("emptyMessage");

let showFavoritesOnly = false;

let favorites = JSON.parse(
    localStorage.getItem("oceanFavorites") || "[]"
);

// MENAMPILKAN IKAN

function renderFishes() {
    if (!fishContainer) return;

    const keyword = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    const category = categoryFilter
        ? categoryFilter.value
        : "all";

    const filteredFishes = fishes.filter(fish => {
        const matchName =
            fish.name.toLowerCase().includes(keyword) ||
            fish.scientific.toLowerCase().includes(keyword);

        const matchCategory =
            category === "all" || fish.category === category;

        const matchFavorite =
            !showFavoritesOnly || favorites.includes(fish.id);

        return matchName && matchCategory && matchFavorite;
    });

    fishContainer.innerHTML = "";

    if (filteredFishes.length === 0) {
        if (emptyMessage) {
            emptyMessage.style.display = "block";
        }
        return;
    }

    if (emptyMessage) {
        emptyMessage.style.display = "none";
    }

    filteredFishes.forEach(fish => {
        const isFavorite = favorites.includes(fish.id);

        const card = document.createElement("article");
        card.className = "fish-card";

        card.innerHTML = `
            <img src="${fish.image}" alt="${fish.name}">
            <div class="fish-info">
                <span class="fish-category">${fish.category}</span>
                <h3>${fish.name}</h3>
                <p>${fish.scientific}</p>

                <button class="detail-button">
                    Lihat Detail
                </button>

                <button class="favorite-button">
                    ${isFavorite ? "♥ Favorit" : "♡ Favorit"}
                </button>
            </div>
        `;

        card.querySelector(".detail-button").addEventListener(
            "click",
            () => showFishDetail(fish.id)
        );

        card.querySelector(".favorite-button").addEventListener(
            "click",
            () => toggleFavorite(fish.id)
        );

        fishContainer.appendChild(card);
    });
}

// FITUR FAVORIT

function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(item => item !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem(
        "oceanFavorites",
        JSON.stringify(favorites)
    );

    renderFishes();
}

// DETAIL IKAN

function showFishDetail(id) {
    const fish = fishes.find(item => item.id === id);

    if (!fish) return;

    document.getElementById("modalImage").src = fish.image;
    document.getElementById("modalName").textContent = fish.name;
    document.getElementById("modalScientific").textContent = fish.scientific;
    document.getElementById("modalHabitat").textContent = fish.habitat;
    document.getElementById("modalFood").textContent = fish.food;
    document.getElementById("modalDescription").textContent = fish.description;

    document.getElementById("fishModal").classList.add("active");
}

// TUTUP MODAL

const closeModal = document.getElementById("closeModal");

if (closeModal) {
    closeModal.addEventListener("click", () => {
        document.getElementById("fishModal").classList.remove("active");
    });
}

const fishModal = document.getElementById("fishModal");

if (fishModal) {
    fishModal.addEventListener("click", event => {
        if (event.target === fishModal) {
            fishModal.classList.remove("active");
        }
    });
}

// PENCARIAN DAN FILTER

if (searchInput) {
    searchInput.addEventListener("input", renderFishes);
}

if (categoryFilter) {
    categoryFilter.addEventListener("change", renderFishes);
}

if (favoriteFilter) {
    favoriteFilter.addEventListener("click", () => {
        showFavoritesOnly = !showFavoritesOnly;

        favoriteFilter.textContent = showFavoritesOnly
            ? "Tampilkan Semua"
            : "♡ Favorit Saya";

        renderFishes();
    });
}

// JALANKAN WEBSITE

renderFishes();
