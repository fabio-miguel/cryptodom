import { useEffect, useState } from "react";

const MarketSummary = () => {
  const [data, setData] = useState([]);
  const [isApiLoad, setIsApiLoad] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [url]);

  // console.log(data);

  return (
    <>
      <section id="market" className="market-section">
        <div className="container">
          <div className="market-content">
            <h2>Market Summary</h2>
            <div className="market-content-coin-list">
              <div className="market-conent-coin-list-label-head">
                <h4>Crypto</h4>
                <h4>Price</h4>
                <h4>24hr Change</h4>
                <h4>Market Cap</h4>
              </div>
              <div
                onLoad={() => setIsApiLoad(false)}
                className="market-conent-coin-list-column"
              >
                {isApiLoad && <span className="loader"></span>}
                {data.map((item) => {
                  return (
                    <article key={item.id} className="market-content-coin-row">
                      <span>
                        <img src={item.image} alt={item.name} /> {item.name}
                      </span>
                      <p className="coin-price-change">{`$${item.current_price}`}</p>
                      <p
                        className={
                          item.price_change_percentage_24h > 0
                            ? "green-text"
                            : "red-text"
                        }
                      >{`${item.price_change_percentage_24h}%`}</p>
                      <p>{`$${item.market_cap}`}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MarketSummary;
