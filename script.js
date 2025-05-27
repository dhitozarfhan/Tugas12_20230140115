function kirimData() {
  const nama = document.getElementById("nama").value.trim();
  const nim = document.getElementById("nim").value.trim();
  const alamat = document.getElementById("alamat").value.trim();
  const angkatan = document.getElementById("angkatan").value;
  const tanggal = document.getElementById("tanggal").value;

  const peminatanRadio = document.querySelector('input[name="peminatan"]:checked');
  const peminatan = peminatanRadio ? peminatanRadio.value : "";

  // Validasi semua input
  if (!nama || !nim || !alamat || !angkatan || !tanggal || !peminatan) {
    alert("Mohon isi semua data terlebih dahulu.");
    return;
  }

  // Tampilkan hasil jika semua data terisi
  const hasil = `Nama : ${nama}
NIM : ${nim}
Peminatan : ${peminatan}
Alamat : ${alamat}
Angkatan : ${angkatan}
Tanggal : ${tanggal}`;

  alert(hasil);
}
