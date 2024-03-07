import "../css/footer.css";

import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
const NewFooter = () => {
  return (
    <div>
      <div className="new-container-footer">
        <div className="new-left-footer">
          <h2>Hubungi Kami</h2>
          <h3>Alamat</h3>
          <div className="alamat-bank-sembada">
            <p>
              Gedung ASEAN TOWER Lantai 1, Jalan KH Samanhudi No.10, RT.01 RW.02
              Kel. Pasar Baru, Kec. Sawah Besar, Jakarta Pusat 10710
            </p>
            <h3>Nomor Telepon</h3>
            <div className="telephone">
              <p>Telepon: 021-3840786</p>
              <p>Telepon: 021-3840881</p>
            </div>
          </div>
        </div>
        <div className="new-middle-footer">
          <h2>Sosial Media</h2>
          <ul>
            <li>
              <a href="https://www.instagram.com/bpr.sembada/" target="blank">
                <IoLogoInstagram className="footer-icon" />
              </a>
            </li>

            <li>
              <a href="https://twitter.com/BPRSembada" target="blank">
                <FaXTwitter className="footer-icon" />
              </a>
            </li>

            <li>
              <a href="mailto:bprsembada@bprsembada.com">
                <MdOutlineMail className="footer-icon" />
              </a>
            </li>
          </ul>
          <h6>Melayani dengan prinsip "TULUS"</h6>
        </div>
        <div className="new-right-footer">
          <div className="new-legalitas-footer">
            <img src="./assets/LembagaPenjaminSimpanan.png" alt="" />
            <div>
              <h2>Berizin dan diawasi oleh OJK</h2>
              <h2>Merupakan peserta penjamin LPS</h2>
            </div>
          </div>

          <p>
            COPYRIGHT © 2023 PT BPR MULTI SEMBADA DANA. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
};
export default NewFooter;
