import cryptostaking from "../images/WhyUs/cryptostaking.png";
import Card from "./Card";

const WhyUs = () => {
  return (
    <>
      <section id="why-us" className="why-us-section">
        <div className="container">
          <div className="why-us-container">
            <h2>
              Why <span>Us?</span>
            </h2>
            <div className="why-us-container-content">
              <div className="why-us-container-content-column-1">
                <Card
                  img="fa-solid fa-vault"
                  title="STORE YOUR NFTs"
                  text="Use CRYPTODOM's secure NFT vault to store and view your precious collectibles."
                />
                <Card
                  img="fa-solid fa-money-bill-trend-up"
                  title="STAKE YOUR CRYPTO "
                  text="We offer competitive interest rates on your crypto. Change to us and we will give you a joining bonus."
                />
                <Card
                  img="fa-solid fa-handshake"
                  title="TRADE YOUR CRYPTO "
                  text="Trade your crypto with ZERO FEES! Trading crypto has never been easier!"
                />
              </div>
              <div className="why-us-container-content-column-2">
                <img src={cryptostaking} alt="hand_img" />
              </div>
              <div className="why-us-container-content-column-3">
                <Card
                  img="fa-solid fa-credit-card"
                  title="QUICK WITHDRAWALS"
                  text="Need your money ASAP? Withdrawals are processed near instantly!"
                />
                <Card
                  img="fa-solid fa-sack-dollar"
                  title="LEVERAGE TRADING "
                  text="Trade with up to 100x leverage on super low fees"
                />
                <Card
                  img="fa-solid fa-phone"
                  title="NEED HELP?"
                  text="24hr one to one support. We're here if you need us... anytime, anywhere!"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default WhyUs;
