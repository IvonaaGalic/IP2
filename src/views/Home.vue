<template>
    <div class="sve">
        <div class="home-page">
            <div class="content">
                <h1>Dobrodošli u Vue.js Dog API projekt!</h1>
                <p>Krenite na putovanje kroz čarobni svijet pasa s našom Vue.js aplikacijom, besprijekorno pokretanom pomoću
                    Dog API-ja. Zaronite u bogato tkivo značajki, uključujući <router-link to="/aplikacija"
                        style="color: #3498db; text-decoration: underline;">zanimljive činjenice o psima, informacije o
                        pasminama</router-link> te razne slike, GIF-ove i videozapise.</p>
                <p>Otkrijte intrigantne činjenice o raznim vrstama pasa, istražite njihove jedinstvene karakteristike i
                    uronite u vizualni užitak sa zanimljivom kolekcijom medijskih sadržaja pasa.</p>
                <p>Za izradu je korišten Dogapi i Random.dog API za generiranje svih podataka.</p>
                <p>Projekt je rađen za potrebe kolegija Informatički projekt 2.</p>
                <h2 style="color: #3498db;">Ivona Galić</h2>
                <br>
                <h3>Materijali korišteni:</h3>
                <p>
                    <a href="https://dogapi.dog/docs/api-v2" target="_blank"
                        style="color: #3498db; font-weight: bold; text-decoration: underline;">Dogapi</a>
                    <br />
                    <a href="https://random.dog/woof.json" target="_blank"
                        style="color: #3498db; font-weight: bold; text-decoration: underline;">Random.dog</a>
                </p>

            </div>
        </div>
    </div>
</template>
  
<style scoped>
.sve {
    background-image: url('../assets/slika.jpeg');
    background-size: cover;
    background-position: center;
    height: calc(100vh - 64px);
    width: 100%;
}

.home-page {
    text-align: center;
    margin-top: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    padding: 2rem;
}

.content {
    background-color: rgba(18, 17, 17, 0.808);
    padding: 2rem;
    border-radius: 10px;
}

h1 {
    color: #3498db;
    margin-bottom: 1rem;
}

p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #3498db;
}

router-link {
    transition: color 0.3s ease, text-decoration 0.3s ease;
}

router-link:hover {
    color: #1f618d;
    text-decoration: none;
}
</style>
  