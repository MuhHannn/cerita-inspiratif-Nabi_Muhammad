const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(express.static(__dirname));

// Koneksi ke MongoDB
mongoose.connect("mongodb+srv://ppqita:santri@ppqitadb.4jtlspc.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Koneksi MongoDB gagal:"));
db.once("open", function () {
  console.log("Berhasil terkoneksi ke MongoDB");
});

// Skema dan model komentar
const CommentSchema = new mongoose.Schema({
  name: String,
  comment: String,
});
const Comment = mongoose.model("Comment", CommentSchema);

app.use(bodyParser.urlencoded({ extended: true }));

// Menyajikan halaman artikel
app.get("/article", async (req, res) => {
  // Gantilah ini dengan artikel yang ingin Anda tampilkan
  const article = `
    <!-- Tampilkan artikel di sini -->

    <h1>Kisah Nabi Muhammad</h1>
        <img src="ilustrasi-nabi-muhammad-saw.jpg"></img>
    <div>    
      <h2>Kehidupan Awal dan Keluarga</h2>
      <p>Muhammad lahir di Mekah, sebuah kota di wilayah Hijaz di semenanjung Arab pada sekitar tahun 570 Masehi. Ayahnya, Abdullah, meninggal sebelum kelahiran Muhammad, dan ibunya, Aminah, juga meninggal ketika Muhammad masih sangat kecil. Sebagai yatim piatu, Muhammad diasuh oleh kakeknya, Abdul Muthalib, dan setelah kematian kakeknya, oleh pamannya, Abu Talib.Selama masa muda, Muhammad dikenal sebagai seorang pedagang dan menjadi dikenal dengan julukan "Al-Amin" (yang berarti "Orang Terpercaya") karena integritas dan kejujurannya yang tinggi. Pada usia 25 tahun, dia bekerja sebagai pedagang dan bertemu dengan seorang janda bernama Khadijah, yang kemudian menjadi istrinya. Mereka memiliki anak-anak bersama, termasuk putri yang terkenal, Fatimah.
      </p>
      <h2>Menerima Wahyu Pertama</h2>
      <p>
        Pada usia 40 tahun, saat Muhammad berada di gua Hira untuk bermeditasi, dia menerima wahyu pertamanya. Malaikat Jibril (Gabriel) muncul di depannya dan menyuruhnya membaca. Muhammad awalnya sangat bingung dan ketakutan oleh pengalaman ini, tetapi istrinya, Khadijah, dan sepupunya, Ali, memberinya dukungan. Ini adalah permulaan kenabian Muhammad, dan wahyu-wahyu selanjutnya yang dia terima dari Allah disusun menjadi Al-Quran, kitab suci umat Islam.</p>
      <h2>Penyebaran Ajaran Islam</h2>
      <p>
        Muhammad dipanggil untuk menyampaikan ajaran Islam kepada masyarakat Mekah yang banyak menyembah berhala. Ajaran dasar Islam adalah tauhid, kepercayaan kepada satu Allah yang mengutuk penyembahan berhala dan mengajarkan etika moral dan perilaku yang baik. Muhammad menghadapi perlawanan dan persekusi awal dari orang-orang Mekah yang menganggap ajarannya sebagai ancaman terhadap kekuasaan dan ekonomi mereka yang terkait dengan penyembahan berhala.Pada tahun 622 Masehi, situasi menjadi sangat sulit bagi Muhammad dan para pengikutnya, sehingga dia dan beberapa pengikutnya melakukan hijrah (migrasi) ke kota Madinah, di luar kendali orang-orang Mekah. Peristiwa hijrah ini juga menandai awal kalender Islam yang dikenal sebagai Hijri.Di Madinah, Muhammad menjadi pemimpin politik dan spiritual. Dia memediasi konflik antara suku-suku yang tinggal di Madinah dan membentuk Konstitusi Madinah, yang mengatur hak dan tanggung jawab semua warga kota, termasuk Muslim dan non-Muslim.
      </p>
      <h2>Peperangan dan Perkembangan Islam</h2>
      <p>
        Di Madinah, Muhammad juga memimpin pasukan Muslim dalam sejumlah konflik dengan suku-suku Arab lainnya, yang dikenal sebagai perang-perang. Selama periode ini, Al-Quran terus diturunkan dan memberikan pedoman bagi umat Islam dalam berbagai hal, termasuk hukum, etika, dan ritual keagamaan. Perang-perang terkenal seperti Perang Badar, Perang Uhud, dan Perang Khandaq adalah bagian dari sejarah perjuangan awal umat Islam.

        Selama masa ini, Muhammad juga menikahi beberapa wanita dan memiliki anak-anak, meskipun istri pertamanya, Khadijah, tetap istimewa dalam hatinya. Dia juga menjalani kehidupan sederhana dan berbagi harta dengan yang membutuhkan, menunjukkan contoh etika dan kemurahan hati yang diajarkan oleh Islam.
      </p>
      <h2>Kembali ke Mekah</h2>
      <p>
        Setelah beberapa tahun di Madinah, Muhammad dan para pengikutnya memiliki cukup kekuatan untuk kembali ke Mekah. Pada tahun 630 Masehi, Muhammad dan pasukan Muslimnya memasuki Mekah tanpa pertumpahan darah, dan kota itu akhirnya menerima Islam. Salah satu tindakan penting yang dilakukan oleh Muhammad di Mekah adalah membersihkan Ka'bah, tempat suci pusat penyembahan berhala, dari berhala-berhala tersebut dan mengembalikannya sebagai tempat ibadah tunggal kepada Allah.</p>
      <h2>Kematian Muhammad</h2>
      <p>
        Muhammad meninggal pada tanggal 8 Juni 632 Masehi di Madinah. Setelah kematiannya, kepemimpinan umat Muslim dipegang oleh para khalifah, yang merupakan penerusnya dalam mengatur komunitas Muslim.

        Muhammad meninggalkan warisan yang sangat besar. Ajaran-ajaran Al-Quran dan tindak tanduknya membentuk dasar bagi praktik dan keyakinan Islam. Agama Islam tumbuh pesat setelah kematiannya, menyebar dari Arab ke seluruh dunia, dan saat ini menjadi salah satu agama terbesar di dunia.

        Muhammad dianggap sebagai contoh utama dalam kehidupan dan beribadah oleh umat Muslim. Kisah hidupnya, yang mencakup ketabahan dalam menghadapi perlawanan awal, kepemimpinan di Madinah, dan kemuliaan dalam kemenangan akhir di Mekah, memberikan inspirasi bagi jutaan orang yang mengikuti agama Islam. Meskipun terdapat perbedaan pandangan dalam agama Islam tentang beberapa aspek sejarahnya, Muhammad tetap menjadi sosok yang sangat dihormati dan dicintai dalam kepercayaan umat Muslim.
      </p>
      <p>
        Sebagai seorang programmer/orang IT Ada banyak pelajaran dan nilai yang dapat diambil dari sejarah dan kehidupan Nabi Muhammad yang relevan. Berikut beberapa di antaranya:
      </p>
      <ol>
          <li>
            Ketekunan dan Kedisiplinan: Muhammad menerima wahyu pertamanya pada usia 40, yang menunjukkan bahwa pencapaian besar bisa dicapai dalam hidup pada usia berapapun. Keberhasilan dalam dunia IT dan pemrograman seringkali membutuhkan ketekunan dan kedisiplinan untuk terus belajar dan berkembang.</li>
          <li>
            Integritas dan Kejujuran: Muhammad dikenal sebagai "Al-Amin" atau "Orang Terpercaya." Integritas dan kejujuran adalah sifat penting dalam dunia IT, di mana kepercayaan pelanggan dan rekan kerja sangat berharga. Ini juga berlaku dalam menjaga kode sumber dan data yang diandalkan.</li>
          <li>
            Kemampuan untuk Memediasi Konflik: Muhammad berhasil memediasi konflik antara suku-suku di Madinah dan menciptakan Konstitusi Madinah yang berprinsip inklusif. Kemampuan untuk memahami berbagai sudut pandang dan memediasi konflik sangat berguna dalam proyek IT yang melibatkan beragam pemangku kepentingan.</li>
          <li>
            Kepemimpinan: Muhammad adalah pemimpin politik dan spiritual yang memimpin pasukan dan komunitasnya. Kepemimpinan adalah keterampilan yang penting dalam mengelola tim pengembangan perangkat lunak, menginspirasi rekan kerja, dan mencapai tujuan proyek.</li>
          <li>
            Kemurahan Hati: Muhammad adalah contoh kemurahan hati dan kepedulian terhadap yang kurang beruntung. Sifat ini relevan dalam dunia IT dalam hal berbagi pengetahuan, membantu rekan kerja, dan berkontribusi pada komunitas pemrograman.</li>
          <li>
            Inklusivitas dan Keragaman: Muhammad membentuk Konstitusi Madinah yang menghormati hak dan tanggung jawab semua warga kota, termasuk Muslim dan non-Muslim. Di dunia IT yang beragam, menghargai dan mempromosikan inklusivitas dan keragaman merupakan sikap yang sangat penting.</li>
          <li>
            Resolusi Masalah: Selama hidupnya, Muhammad menghadapi berbagai tantangan dan konflik, dan dia mencari solusi yang bijaksana. Ini dapat menjadi panduan dalam menyelesaikan masalah teknis dan manajerial dalam proyek IT.</li>
          <li>
            Kecintaan pada Pembelajaran: Muhammad memulai misinya sebagai nabi dengan menerima wahyu pertamanya. Pencarian pengetahuan dan pembelajaran kontinu adalah sifat yang penting bagi IT dan pemrogrammer untuk tetap relevan dalam industri yang terus berubah.</li>
          <li>
            Kepemimpinan Berbasis Nilai: Muhammad memimpin berdasarkan nilai-nilai agama Islam, seperti keadilan, kebenaran, dan kebaikan. Dalam dunia IT, berpegang pada prinsip-prinsip etika, seperti privasi dan keamanan data, adalah penting.</li>
          <li>
            Kemampuan untuk Menerima Kritik: Muhammad menerima kritik dan tantangan selama misinya. Dalam pengembangan perangkat lunak, penting untuk bisa menerima kritik dan umpan balik untuk terus meningkatkan kualitas produk.</li>
      </ol>
      <div>
        <h3>Biografi Penulis</h3>
        <h4>Muhammad Hanan</h4>
        <p>Adalah seorang anak asal Semarang berusia 17 tahun yang mana sedang menuntut ilmu dalam jenjang SMA di Pondok Pesantren Quran dan IT Al Mahir</p></div>
      </div>
`;

  // Menampilkan formulir komentar
  const comments = await Comment.find();
  const commentForm = `
    <h2>Tambahkan Komentar</h2>
    <form action="/comment" method="post">
      <label for="name">Nama:</label>
      <input type="text" name="name" required>
      <label for="comment">Komentar:</label>
      <textarea name="comment" required></textarea>
      <button type="submit">Kirim</button>
    </form>
    <h2>Komentar</h2>
    <ul>
      ${comments
        .map((comment) => `<li>${comment.name}: ${comment.comment}</li>`)
        .join("")}
    </ul>
  `;

  const style = `
    <link rel="stylesheet" type="text/css" href="/style.css">
  `;

  res.send(
    `<html><head>${style}</head><body>${article + commentForm}</body></html>`
  );
});

// Menyimpan komentar ke MongoDB
app.post("/comment", (req, res) => {
  const { name, comment } = req.body;
  const newComment = new Comment({ name, comment });
  newComment.save();
  res.redirect("/article");
});

// Menjalankan server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
