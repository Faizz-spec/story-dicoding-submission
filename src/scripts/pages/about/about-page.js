const AboutPage = {
  async render() {
    return `
      <section class="container">
        <h1>Tentang Aplikasi</h1>
        <p>Aplikasi ini dibuat sebagai bagian dari submission proyek pada kelas Menjadi Front-End Web Developer Expert di Dicoding.</p>
        
        <h2>Fitur Utama</h2>
        <ul>
          <li>Menampilkan daftar cerita dari API</li>
          <li>Menambahkan cerita baru dengan foto dan lokasi</li>
          <li>Interaktif dengan kamera dan peta</li>
          <li>Transisi halaman halus menggunakan View Transition API</li>
          <li>Ramah aksesibilitas (alt, label, skip link, dll)</li>
        </ul>
        
        <h2>Teknologi yang Digunakan</h2>
        <ul>
          <li>HTML5, CSS3, JavaScript ES6</li>
          <li>Leaflet.js untuk peta</li>
          <li>Webpack untuk bundling</li>
        </ul>
        
        <h2>Profil Pembuat</h2>
        <p>Nama: Ahmad Nur Faizin<br>
        GitHub: <a href="https://github.com/Faizz-spec" target="_blank" rel="noopener">Faizz-spec</a><br>
        Email: faizintenan@gmail.com</p>
      </section>
    `;
  },

  async afterRender() {
    // Kosong, tidak ada interaksi dinamis
  }
};

export default AboutPage;
