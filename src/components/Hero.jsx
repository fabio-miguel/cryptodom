import { useEffect, useState } from "react";

const Hero = () => {
  const [data, setData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false
  `;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  // console.log(data);

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content-text">
              <h1>
                Store Track Trade
                <br /> <span>Crypto Currencies</span>
              </h1>
            </div>
            {/* mobile btn */}

            <div onLoad={() => setIsLoad(false)} className="coin-slider">
              {isLoad && <span className="loader"></span>}
              {data.map((item) => {
                return (
                  <article key={item.id} className="slider-coin">
                    <img src={item.image} alt={item.name} />
                    <p>
                      {item?.name}
                      <span
                        className={
                          item.price_change_percentage_24h > 0
                            ? "green-text"
                            : "red-text"
                        }
                      >
                        {` ${item?.price_change_percentage_24h?.toFixed(2)} %`}
                      </span>
                    </p>
                    <p className="slider-coin-price">{`$${item.current_price?.toFixed(
                      2
                    )}`}</p>
                  </article>
                );
              })}
            </div>
          </div>
          {/* mobile btn */}
        </div>
      </section>
    </>
  );
};

export default Hero;
