// Pilih semua elemen FAQ
const faqs = document.querySelectorAll(".faq");

// Tambahkan event listener untuk setiap elemen FAQ
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    // Toggle class 'active' pada elemen FAQ yang diklik
    faq.classList.toggle("active");

    // Pilih semua elemen FAQ lainnya
    const otherFaqs = Array.from(faqs).filter((otherFaq) => otherFaq !== faq);

    // Tutup semua elemen FAQ lainnya
    otherFaqs.forEach((otherFaq) => {
      otherFaq.classList.remove("active");
    });
  });
});

// asumsi dataDosen adalah array of object yang berisi data dosen
dataDosen.forEach((dosen) => {
  const emailDosen = dosen.email;
  const nameDosen = dosen.name; // tambahkan variabel nameDosen
  const html = `
    <p>Email: <a href="mailto:${emailDosen}">${emailDosen}</a></p>
  `;
  // tambahkan html ke elemen yang terkait
  document.getElementById("lecturer-contact").innerHTML += html;

  // Create a contact link for each lecturer
  const contactLink = document.createElement("a");
  contactLink.href = `mailto:${emailDosen}`;
  contactLink.textContent = `Kontak ${nameDosen}`;
  document.getElementById("lecturer-contact").appendChild(contactLink);
});

//asumsi admin buat akun
function registerAdmin() {
  const fullname = document.getElementById("fullname").value;
  const nip = document.getElementById("nip").value;
  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  if (localStorage.getItem(nip)) {
    alert("NIP Sudah terdaftar");
  } else {
    localStorage.setItem(fullname, nip, password, email);
    alert("Registrasi berhasil, Silakan tekan tombol dibawah ini");
    window.location.href = "loginadmin.html";
  }
}

//login admin
function LoginAdmin() {
  const nip = document.getElementById("").value;
  const password = document.getElementById("").value;

  const storedPassword = localStorage.getItem(nip);
  const storredName = localStorage.getItem(fullname);

  if (storedPassword === password) {
    alert("Login berhasil!");
    localStorage.setItem("loggedInAdmin", storredName);
    window.location.href = "";
  } else {
    alert("Nip atau Password salah!!!");
  }
}

// Fungsi untuk menampilkan greeting di halaman Dashboard
function displayGreeting() {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Selamat datang, ${loggedInUser}!`;
  } else {
    window.location.href = "index.html"; // Redirect ke halaman login jika tidak ada pengguna yang login
  }
}

// Fungsi untuk menampilkan semua user terdaftar dalam format tabel
function displayRegisteredUsers() {
  const users = Object.keys(localStorage).filter(
    (key) => key !== "loggedInUser"
  );
  const userTable = document.getElementById("userTable");

  userTable.innerHTML = "";

  // Membuat header tabel
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = "<th>Username</th><th>Password</th><th>Aksi</th>";
  userTable.appendChild(headerRow);

  users.forEach(function (username) {
    const userPassword = localStorage.getItem(username);
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${username}</td>
            <td>${userPassword}</td>
            <td>
                <button class="edit" onclick="editUser('${username}')">Edit</button> |
                <button class="delete" onclick="deleteUser('${username}')">Hapus</button>
            </td>
        `;
    userTable.appendChild(row);
  });
}
