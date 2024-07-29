import "./MainContent.css";
// import phone1 from "../assets/phone 1.png";
// import phone2 from "../assets/phone 2.png";
// import phone3 from "../assets/phone 3.png";
// import phoneImg from "../assets/phoneImg.png";
import android from "../assets/android.png";
import iphone from "../assets/applePhone.png";
import tab from "../assets/tab.png";
const MainContent = () => (
  <main>
    <h1>
      The simplest way to <br />
      keep notes
    </h1>
    <h2>
      All your notes, synced on all your devices. Get Simplenote now for iOS,
      <br /> Android, Mac, Windows, Linux, or in your browser.
    </h2>
    <button>
      <a href="#signup">Sign up now</a>
    </button>
    <div className="phone-images">
      <img className="phone-1" src={android} />
      <img className="phone-2" src={iphone} />
      <img className="phone-3" src={tab} />
    </div>
    <div>
      <h1>
        Comprehensive underneath, <br />
        simple on the surface
      </h1>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      
    </div>
  </main>
);

export default MainContent;
