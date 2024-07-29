import "./DownloadLinks.css";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import linux from "../assets/linux.png";
import windows from "../assets/microsoft.png";
const DownloadLinks = () => (
  // <section>
  <div className="download-section">
    <h1>Available on all your devices</h1>
    <h2>
      Download Simplenote for any device and stay in sync – all the time,
      <br />
      everywhere.
    </h2>
    <div className="download-buttons">
      <div>
        <div>
          <img src={apple} />
          <span>
            <h3>Download on the</h3>
            <h2>App Store</h2>
          </span>
        </div>
        <div>
          <img src={google} />
          <span>
            <h3>Download on the</h3>
            <h2>Play Store</h2>
          </span>
        </div>
        <div>
          <img src={linux} />
          <span>
            <h3>Download on the</h3>
            <h2>Linux</h2>
          </span>
        </div>
      </div>
      <div>
        <div>
          <img src={apple} />
          <span>
            <h3>Download on the</h3>
            <h2>Mac App Store</h2>
          </span>
        </div>

        <div>
          <img src={windows} />
          <span>
            <h3>Download on the</h3>
            <h2>Windows Store</h2>
          </span>
        </div>
      </div>
    </div>
    <a className="othdwn">Other Downloads</a>
  </div>

  // </section>
);

export default DownloadLinks;
