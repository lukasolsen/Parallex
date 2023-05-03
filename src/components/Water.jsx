import "./Effects/water.css";
import { useEffect } from "react";

export default function Water() {
  const getInformation = () => {
    fetch("https://api.ipify.org/?format=json")
      .then((results) => results.json())
      .then((dta) => {
        console.log(dta);
        fetch("/data/data.json")
          .then((response) => {
            return response.json();
          })
          .then((dt) => {
            let data = dt.ip_addresses || [];
            data.push(dta.ip);
            return fetch("/data/data.json", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ip_addresses: data }),
            });
          })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            console.log("IP address saved");
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
  };

  useEffect(() => {
    getInformation();
  }, []);

  return (
    <>
      <div className="mainWaterComponent">
        <div className="top">
          <div className="stars">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
          <div className="shooting-star"></div>
          <div className="clouds">
            <div className="cloud"></div>
            <div className="cloud"></div>
            <div className="cloud"></div>
          </div>
          <div className="sun">
            <div className="sun-glow-1"></div>
            <div className="sun-glow-2"></div>
            <div className="sun-glow-3"></div>
          </div>
          <div className="pyramids">
            <div className="pyramid"></div>
            <div className="pyramid"></div>
            <div className="pyramid"></div>
            <div className="pyramid"></div>
          </div>
        </div>
        <div className="bottom">
          <div className="boat">
            <div className="boat-bottom">
              <div className="squares">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
              </div>
            </div>
            <div className="boat-behind"></div>
            <div className="boat-top-left"></div>
            <div className="boat-top-right"></div>
          </div>
          <div className="boat">
            <div className="boat-bottom">
              <div className="squares">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
              </div>
            </div>
            <div className="boat-behind"></div>
            <div className="boat-top-left"></div>
            <div className="boat-top-right"></div>
          </div>
          <div className="main-sun-reflexion">
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
            <div className="reflexion-shape"></div>
          </div>
          <div className="small-sun-reflexions">
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
            <div className="reflexion"></div>
          </div>
        </div>
      </div>
    </>
  );
}
