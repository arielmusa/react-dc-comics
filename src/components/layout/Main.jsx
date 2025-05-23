import digitalComics from "../../assets/img/buy-comics-digital-comics.png";
import dcMerch from "../../assets/img/buy-comics-merchandise.png";
import subscription from "../../assets/img/buy-comics-subscriptions.png";
import comicShop from "../../assets/img/buy-comics-shop-locator.png";
import dcPowerVisa from "../../assets/img/buy-dc-power-visa.svg";
import Alert from "../ui/Alert";
import ComicsList from "./ComicsList";

export default function Main() {
  const hasMessage = false;
  let message;
  return (
    <main>
      <section id="jumbotron">
        <img src="src/assets/img/jumbotron.jpg" alt="" />
      </section>
      <section id="main-content">
        <div className="container">
          {hasMessage && (
            <Alert
              type="danger"
              bgColor="green"
              text={message || "Hello world"}
            />
          )}

          <ComicsList />
        </div>
      </section>

      <section id="icons-banner-section">
        <div className="container">
          <div className="icons-banner">
            <div className="icon-items">
              <img src={digitalComics} alt="Digital Comics" />
              Digital Comics
            </div>
            <div className="icon-items">
              <img src={dcMerch} alt="DC Merchandise" />
              DC Merchandise
            </div>
            <div className="icon-items">
              <img src={subscription} alt="" />
              Subscription
            </div>
            <div className="icon-items">
              <img src={comicShop} alt="" />
              Comic Shop Locator
            </div>
            <div className="icon-items">
              <img src={dcPowerVisa} alt="" />
              DC Power Visa
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
