<template>
  <div id="app" class="app-container">
    <nav class="navbar">
      <div class="nav-links">
        <router-link class="nav-link" to="/">POČETNA</router-link>
        <router-link class="nav-link" to="/aplikacija">APLIKACIJA</router-link>
        <router-link class="nav-link" to="/kontakt">KONTAKT</router-link>
      </div>
    </nav>
    <router-view></router-view>

    <footer class="footer">
      © FPMOZ 2024
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-container {
  flex: 1;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3498db;
  color: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #2980b9;
}

.router-link-exact-active {
  border-bottom: 2px solid white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
}

.footer {
  background-color: #3498db;
  color: white;
  padding: 1rem;
  text-align: center;
  margin-top: auto;

}
</style>
