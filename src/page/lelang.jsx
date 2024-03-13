import React from "react";
import "../css/lelang.css";
import { Button, InputGroup, Form } from "react-bootstrap";
import { VscSearch } from "react-icons/vsc";
import { dataLelang } from "../database/dataLelang";
import { Link } from "react-router-dom";

const Lelang = () => {
  return (
    <div className="main_lelang">
      <section className="hero_lelang">
        <img src="assets/logo.png" alt="" />
        <h1>KATALOG JUAL DAN LELANG PROPERTI JAMINAN</h1>
        <h1>BANK SEMBADA</h1>
      </section>

      <section className="searching">
        <InputGroup>
          <Form.Control
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">
            <VscSearch />
          </InputGroup.Text>
        </InputGroup>
      </section>
      <section className="cont_cart_lelang">
        {dataLelang.map((item, index) => {
          return (
            <div className="cart_lelang">
              <img src={item.images[0]} alt="" />
              <div className="cont-des-cart">
                <h1>Rp. {item.Harga.toLocaleString()}</h1>
                <h2>{item.judul}</h2>
                <h4>{item.alamat_singkat}</h4>
                <div className="ket_lelang">
                  <p>LT : {item.LT}</p>
                  <p>LB : {item.LB}</p>
                  <p>KT : {item.KT}</p>
                  <p>KM : {item.KM}</p>
                </div>
                <div>
                  <div className="cont-contact">
                    <img src="./assets/jill.jpg" alt="Jill" />
                    <div>
                      <h2>Jill Michel W.</h2>
                      <p>Bank Sembada</p>
                    </div>
                  </div>
                  <div className="cont-button-cart">
                    <Button
                      variant="warning"
                      className="helo"
                      as={Link}
                      to={`/Detail?${item.id}`}
                    >
                      Lihat Detail
                    </Button>
                    <Button variant="warning" className="helo">
                      Whatsapp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Lelang;
