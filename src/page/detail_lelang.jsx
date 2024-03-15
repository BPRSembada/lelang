import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "../css/detail_lelang.css";
import { Button, InputGroup, Form } from "react-bootstrap";
import { dataLelang } from "../database/dataLelang";

const DetailLelang = () => {
  let idLelang = +document.location.search.substring(1);
  // console.log(idLelang);
  let detailData = dataLelang.filter((item) => item.id === idLelang);
  // console.log(detailData);
  // console.log(detailData[0].images);
  const [dP, SetDP] = useState(0);
  const [dpnumber, setDpNumber] = useState(0);
  const [bunga, setBunga] = useState(0);
  const [tenor, setTenor] = useState(0);
  const [cicilan, setCicilan] = useState(0);
  const setValue = () => {
    let DP = (detailData[0].Harga * 20) / 100;
    SetDP(DP.toLocaleString());
    setDpNumber(DP);
    console.log(detailData[0].Harga);
  };
  const Bunga = (e) => {
    let valueBunga = e.target.value;
    if (valueBunga === "0") {
      setBunga(0);
    } else if (valueBunga === "18") {
      setBunga(18);
    }
  };

  const Tenor = (e) => {
    let valueTenor = e.target.value;
    if (valueTenor === "0") {
      setTenor(0);
    } else if (valueTenor === "10") {
      setTenor(10);
    } else if (valueTenor === "15") {
      setTenor(15);
    }
  };
  const calculatorLelang = () => {
    let jumlahPinjaman = detailData[0].Harga - dpnumber;
    // Menghitung bunga bulanan
    let bungaBulanan = bunga / 100 / 12;

    // Menghitung jumlah bulan
    let jumlahBulan = tenor * 12;

    // Menghitung cicilan bulanan
    let cicilanBulanan =
      (jumlahPinjaman * bungaBulanan) /
      (1 - Math.pow(1 + bungaBulanan, -jumlahBulan));

    setCicilan(Math.ceil(cicilanBulanan));
  };
  useEffect(() => {
    console.log(cicilan);
    calculatorLelang();
    setValue();
  }, []);
  return (
    <div className="main_lelang">
      <section className="img_detail_lelang">
        <Carousel className="cart-detail">
          {detailData[0].images.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img src={item} alt="" />
                <Carousel.Caption>
                  <h3>{detailData[0].desImages[index]}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
      <section className="des-detail-lelang">
        <div>
          <h1>Rp. {detailData[0].Harga.toLocaleString()}</h1>
          <h2>{detailData[0].judul}</h2>
          <h4>{detailData[0].alamat_singkat}</h4>
          <div className="ket_lelang">
            <p>LT : {detailData[0].LT}</p>
            <p>LB : {detailData[0].LB}</p>
            <p>KT : {detailData[0].KT}</p>
            <p>KM : {detailData[0].KM}</p>
          </div>
        </div>
      </section>
      <section className="detail-properti">
        <h2>Detail Properti</h2>
        <div className="detail-item">
          <p>Alamat</p>
          <p>:</p>
          <p>{detailData[0].alamat}</p>
        </div>

        <div className="detail-item">
          <p>Lokasi </p>
          <p>:</p>
          <p>{detailData[0].akses_lokasi}</p>
        </div>
        <div className="detail-item">
          <p>Tipe </p>
          <p>:</p>
          <p>{detailData[0].tipe}</p>
        </div>
        <div className="detail-item">
          <p>Transaksi </p>
          <p>:</p>
          <p>{detailData[0].transaksi}</p>
        </div>
        <div className="detail-item">
          <p>Luas Bangunan </p>
          <p>:</p>
          <p>{detailData[0].LB}</p>
        </div>
        <div className="detail-item">
          <p>Luas Tanah </p>
          <p>:</p>
          <p>{detailData[0].LT}</p>
        </div>
        <div className="detail-item">
          <p>Listrik </p>
          <p>:</p>
          <p></p>
        </div>
        <div className="detail-item">
          <p>Sertifikat </p>
          <p>:</p>
          <p>{detailData[0].statusAset}</p>
        </div>
        <div className="detail-item">
          <p>Furnish </p>
          <p>:</p>
          <p></p>
        </div>
        <div className="detail-item">
          <p>Material Lantai</p>
          <p>:</p>
          <p></p>
        </div>
        <div className="detail-item">
          <p>Material bangunan</p>
          <p>:</p>
          <p></p>
        </div>
        <div className="detail-item">
          <p>Hadap</p>
          <p>:</p>
          <p></p>
        </div>
      </section>
      <section className="kpr-lelang">
        <h2>Simulasi Cicilan KPR</h2>
        <p>
          Anda dapat mengajukan KPR di Bank Sembada dengan penawaran yang
          menarik.
        </p>
        <div>
          <div className="item-kpr">
            <div>
              {" "}
              <h5>Harga</h5>
            </div>
            <div>
              <p>: Rp {detailData[0].Harga.toLocaleString()}</p>
            </div>
          </div>
          <div className="item-kpr">
            <div>
              <h5>Uang Muka</h5>{" "}
            </div>
            <div>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">20%</InputGroup.Text>
                <Form.Control
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={dP}
                />
              </InputGroup>
            </div>
          </div>
          <div className="item-kpr">
            <div>
              <h5>Jangka Waktu</h5>{" "}
            </div>
            <div>
              <Form.Select
                aria-label="Default select example"
                className="mb-3"
                onChange={(e) => Tenor(e)}
              >
                <option value="0">Pilih jakwa waktu</option>
                <option value="10">10 tahun</option>
                <option value="15">15 tahun</option>
              </Form.Select>
            </div>
          </div>
          <div className="item-kpr">
            <div>
              {" "}
              <h5>Suku Bunga</h5>{" "}
            </div>
            <div>
              <Form.Select
                aria-label="Default select example"
                className="mb-3"
                onChange={(e) => Bunga(e)}
              >
                <option value="0">Pilih Suku Bunga</option>
                <option value="18">18%</option>
              </Form.Select>
            </div>
          </div>
          <div className="item-kpr">
            <div>
              {" "}
              <h5>Jumalah Angsuran</h5>
            </div>
            <div>
              <p>: Rp {cicilan.toLocaleString()} /bulan</p>
            </div>
            {/* <button onClick={() => calculatorLelang()}>clik</button> */}
          </div>
        </div>
        <p>
          Kalkulator ini dirancang sebagai simulasi KPR dengan nilai pendekatan,
          suku bunga dapat berubah sesuai dengan ketetapan Bank, untuk
          mendapatkan informasi lebih lanjut silahkan hubungi petugas bank kami
        </p>
      </section>
      <section className="cont-utama-contact">
        <div className="info-hubungi">
          <h3>Untuk info lebih lanjut hubungi kami</h3>
        </div>
        <div className="cont-contact-detail">
          <div className="cont-contact">
            <img src="./assets/jill.jpg" alt="" />
            <div>
              <h2>Jill Michel W.</h2>
              <p>Bank Sembada</p>
            </div>
            <div>
              <Button variant="danger">Whatsapp</Button>
            </div>
          </div>
          <div className="cont-contact">
            <img src="./assets/beni.jpg" alt="" />
            <div>
              <h2>Beni Wijaya</h2>
              <p>Bank Sembada</p>
            </div>
            <div>
              <Button variant="danger">Whatsapp</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailLelang;
