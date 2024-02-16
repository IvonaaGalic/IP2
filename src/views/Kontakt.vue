<template>
    <div class="sve">
        <div class="kontakt">
            <div class="content">
                <h1>KONTAKT</h1>
                <form @submit.prevent="handleSubmit" ref="contactForm" method="POST" class="w-1/2 mx-auto mt-5">
                    <div class="form-group">
                        <input type="text" placeholder="Vaše ime" name="name" class="form__input" required />
                        <label for="name" class="form__label">Vaše ime</label>
                    </div>

                    <div class="form-group">
                        <input type="email" placeholder="Email" name="email" class="form__input" required />
                        <label for="email" class="form__label">Email adresa</label>
                    </div>


                    <div class="form-group">
                        <input type="text" placeholder="Vaša poruka" name="message" class="form__input" required />
                        <label for="message" class="form__label">Vaša poruka</label>
                    </div>

                    <div class="form-group">
                        <button class="form__button" type="submit">
                            Pošalji poruku
                        </button>
                    </div>
                </form>

                <div v-if="submitted" class="text-center mt-10">
                    <h2 class="text-2xl">Hvala Vam!</h2>
                    <div class="text-md">Javit ćemo Vam se uskoro.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            submitted: false,
        };
    },
    methods: {
        handleSubmit() {
            alert(
                `Poruka poslana!\nIme: ${this.$el.querySelector('[name="name"]').value}\nEmail: ${this.$el.querySelector('[name="email"]').value}\nPoruka: ${this.$el.querySelector('[name="message"]').value}`
            );

            this.$refs.contactForm.reset();

            this.submitted = true;
        },
    },
};
</script>

<style scoped>
.sve {
    background-image: url('../assets/slika2.jpg');
    background-size: cover;
    background-position: center;
    height: calc(108vh - 64px);
    width: 100%;
}

.kontakt {
    text-align: center;
    margin-top: 2rem;
    font-family: Arial, sans-serif;
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

form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    font-size: 1rem;
    color: white;
    display: block;
    transform: translate(1.25rem, -2.5rem);
    transform-origin: 0 0;
    transition: all 500ms;
    pointer-events: none;
}

.form__input {
    width: clamp(120px, 50vw, 420px);
    height: 2.5rem;
    padding: 0 1.25rem;
    border: 1px solid #ccc;
    border-radius: 2px;
    margin: 0.625rem auto;
    transition: all 250ms;
    outline: none;
    color: white;
}

.form__input:focus {
    border-top-color: rgba(0, 0, 0, 0.1);
}

.form__input:not(:placeholder-shown)+.form__label {
    transform: translateY(-4.50rem) scale(1);
    color: white;
}

.form__input::placeholder {
    display: none;
    color: transparent;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.form__input:not(:placeholder-shown) {
    border-top-color: rgba(0, 0, 0, 0.5);
}

.form__label {
    font-size: 1rem;
    color: #909090;
    display: block;
    transform: translate(1.25rem, -2.5rem);
    transform-origin: 0 0;
    transition: all 500ms;
    pointer-events: none;
}

.form__button {
    background-color: #3498db;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.form__button:hover {
    background-color: #1f618d;
}
</style>
