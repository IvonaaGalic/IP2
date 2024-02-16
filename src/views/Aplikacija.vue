<template>
    <div class="stranica-sa-psima">
        <h1>Random Dog Facts</h1>

        <div v-if="loading" class="ucitavanje">Dohvaćam slučajnu informaciju o psu...</div>

        <div v-if="error" class="greska">{{ error }}</div>

        <div v-if="dogFact" class="informacije-o-psu">
            <p>{{ dogFact }}</p>
            <div class="kontejner-medija">
                <img :src="dogImageUrl" alt="Medij s psom" class="medij-sa-psom" />
            </div>
        </div>

        <button @click="fetchRandomDogFact" class="novi-fakt-button">Next</button>

        <div class="lista-pasmina">
            <h2>Vrste pasa</h2>
            <select v-model="selectedBreed" @change="fetchBreedInformation" class="pasmina-dropdown">
                <option value="">Odaberite pasminu</option>
                <option v-for="breed in dogBreeds" :key="breed.id" :value="breed.id">{{ breed.attributes.name }}</option>
            </select>
        </div>

        <div v-if="selectedBreed && breedInformation" class="informacije-o-pasmini">
            <h2>{{ breedInformation.attributes.name }}</h2>
            <p>{{ breedInformation.attributes.description }}</p>
            <p>Očekivano trajanje života: {{ breedInformation.attributes.life.min }} - {{
                breedInformation.attributes.life.max }}
                godina</p>
            <p>Masa mužjaka: {{ breedInformation.attributes.male_weight.min }} - {{
                breedInformation.attributes.male_weight.max }} kg</p>
            <p>Masa ženki: {{ breedInformation.attributes.female_weight.min }} - {{
                breedInformation.attributes.female_weight.max }} kg</p>
            <p>Hipoalergenski: {{ breedInformation.attributes.hypoallergenic ? 'Da' : 'Ne' }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            error: null,
            dogFact: null,
            dogImageUrl: null,
            dogBreeds: [],
            selectedBreed: '',
            breedInformation: null,
        };
    },
    methods: {
        async fetchDogBreeds() {
            try {
                const response = await fetch('https://dogapi.dog/api/v2/breeds');
                const data = await response.json();
                this.dogBreeds = data.data;
            } catch (error) {
                console.error('Pogreška pri dohvaćanju pasmina pasa:', error);
            }
        },

        async fetchBreedInformation() {
            if (this.selectedBreed) {
                this.loading = true;
                this.error = null;

                try {
                    const response = await fetch(`https://dogapi.dog/api/v2/breeds/${this.selectedBreed}`);
                    const data = await response.json();
                    this.breedInformation = data.data;
                } catch (error) {
                    console.error('Pogreška pri dohvaćanju informacija o pasmini:', error);
                    this.error = 'Pogreška pri dohvaćanju informacija o pasmini.';
                } finally {
                    this.loading = false;
                }
            } else {
                this.breedInformation = null;
            }
        },

        async fetchRandomDogFact() {
            this.loading = true;
            this.error = null;

            try {
                const response = await fetch('https://dog-api.kinduff.com/api/facts');
                const data = await response.json();
                this.dogFact = data.facts[0];
                this.fetchRandomDogImage();
            } catch (error) {
                console.error('Pogreška pri dohvaćanju slučajne informacije o psu:', error);
                this.error = 'Pogreška pri dohvaćanju slučajne informacije o psu.';
            } finally {
                this.loading = false;
            }
        },

        async fetchRandomDogImage() {
            try {
                const response = await fetch('https://random.dog/woof.json');
                const data = await response.json();
                this.dogImageUrl = data.url;
            } catch (error) {
                console.error('Pogreška pri dohvaćanju slike psa:', error);
                this.fetchRandomDogFact();
            }
        },
    },
    mounted() {
        this.fetchRandomDogFact();
        this.fetchDogBreeds();
    },
};
</script>

<style scoped>
.stranica-sa-psima {
    text-align: center;
    margin-top: 2rem;
    font-family: Arial, sans-serif;
    color: #333;
    margin-bottom: 25px;

}

.ucitavanje,
.greska {
    margin-top: 1rem;
    color: #ff5733;
}

.informacije-o-psu {
    margin-top: 1rem;
}

.kontejner-medija {
    height: 300px;
    overflow: hidden;
}

.medij-sa-psom {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

.novi-fakt-button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.novi-fakt-button:hover {
    background-color: #3498db;
}

.lista-pasmina {
    margin-top: 2rem;
}

select {
    padding: 0.5rem;
    font-size: 1rem;
}

.informacije-o-pasmini {
    margin-top: 2rem;
}

.informacije-o-pasmini h2 {
    color: #3498db;
}

.pasmina-dropdown {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #3498db;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.pasmina-dropdown:hover {
    border-color: #1f618d;
}

.pasmina-dropdown:focus {
    border-color: #1f618d;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
</style>