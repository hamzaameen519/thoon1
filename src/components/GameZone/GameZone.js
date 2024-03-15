import React, { useState } from "react";
import "./gamezone.css";

const YourComponent = () => {
  const [selectedTab, setSelectedTab] = useState("Stake");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const [selectedPayoutOption, setSelectedPayoutOption] = useState("1 month");
  const [showPercentage, setShowPercentage] = useState(2);
  const [showMonth, setShowMonth] = useState("1 month");

  const [selectedPackage, setSelectedPackage] = useState("Thoon Meme Coin");
  const [inputValue, setInputValue] = useState("Thoon (BEP20)");

  const handlePayoutOptionChange = (option) => {
    setSelectedPayoutOption(option);
    switch (option) {
      case "1 month":
        setShowPercentage(2);
        setShowMonth("1 month");
        break;
      case "6 month":
        setShowPercentage(5);
        setShowMonth("6 months");
        break;
      case "1 year":
        setShowPercentage(15);
        setShowMonth("1 year");
        break;
      case "2 year":
        setShowPercentage(23);
        setShowMonth("2 years");
        break;
      default:
        setShowPercentage(0);
        setShowMonth("");
        break;
    }
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handlePackageChange = (value) => {
    setSelectedPackage(value);
  };

  const handleBuyClick = () => {
    // Handle buy functionality here
  };
  return (
    <div className="card-block flex-col items-center">
      <div className="selection-tabs flex items-center">
        <div
          className={`tab flex items-center justify-center ${
            selectedTab === "Stake" ? "active" : ""
          }`}
          onClick={() => handleTabClick("Stake")}
        >
          Stake
        </div>
        <div
          className={`tab flex items-center justify-center ${
            selectedTab === "Reward" ? "active" : ""
          }`}
          onClick={() => handleTabClick("Reward")}
        >
          Reward
        </div>
      </div>
      {/* Tab Stake content */}
      {selectedTab === "Stake" && (
        <div className="meta flex flex-col justify-between">
          <div className="fields-box flex flex-col">
            <div className="field flex flex-col">
              <div className="f-tag" style={{ margin: "2rem 0 1rem 0" }}>
                Select Package
              </div>
              <select
                value={selectedPackage}
                className="css-qc6sy-singleValue"
                style={{
                  padding: "0.6rem",
                  marginBottom: "1.6rem",
                  borderRadius: ".2rem",
                }}
                onChange={(e) => handlePackageChange(e.target.value)}
              >
                <option
                  value="Thoon Meme Coin"
                  className="css-qc6sy-singleValue"
                >
                  Thoon Meme Coin
                </option>
              </select>
            </div>
            <div
              className="input-box flex items-center"
              style={{ padding: ".6rem", border: "none", marginBottom: "1rem" }}
            >
              <input
                type="text"
                className="txt w-full"
                placeholder="1$ - 500$"
                value={inputValue}
                style={{ border: "none", outline: "none" }}
                onChange={(e) => handleInputChange(e.target.value)}
              />
            </div>

            <div>
              <div
                className="items-start mb-6"
                style={{ display: "grid", gridTemplateColumns: "" }}
              >
                <div className="item flex items-center cursor-pointer">
                  <button
                    className={`cleanbtn radio-btn rel ${
                      selectedPayoutOption === "1 month" ? "on" : ""
                    }`}
                    onClick={() => handlePayoutOptionChange("1 month")}
                  ></button>
                  <div className="toggle-desc ml-2 cfff b6">
                    Payout after One month 2%
                  </div>
                </div>

                <div className="item flex items-center cursor-pointer">
                  <button
                    className={`cleanbtn radio-btn rel ${
                      selectedPayoutOption === "6 month" ? "on" : ""
                    }`}
                    onClick={() => handlePayoutOptionChange("6 month")}
                  ></button>
                  <div className="toggle-desc ml-2 cfff b6">
                    Payout after 6 month 5%
                  </div>
                </div>

                <div className="item flex items-center cursor-pointer">
                  <button
                    className={`cleanbtn radio-btn rel ${
                      selectedPayoutOption === "1 year" ? "on" : ""
                    }`}
                    onClick={() => handlePayoutOptionChange("1 year")}
                  ></button>
                  <div className="toggle-desc ml-2 cfff b6">
                    Payout after 1 year 15%
                  </div>
                </div>

                <div className="item flex items-center cursor-pointer">
                  <button
                    className={`cleanbtn radio-btn rel ${
                      selectedPayoutOption === "2 year" ? "on" : ""
                    }`}
                    onClick={() => handlePayoutOptionChange("2 year")}
                  ></button>
                  <div className="toggle-desc ml-2 cfff b6">
                    Payout after 2 year 23%
                  </div>
                </div>
              </div>

              <div
                className="item flex items-center justify-between"
                style={{ margin: "1.7rem 0 .7rem 0" }}
              >
                <div className="lbl">ROI</div>
                <div className="val">{showPercentage}%</div>
              </div>

              <div className="item flex items-center justify-between">
                <div className="lbl">TIME</div>
                <div className="val">{showMonth}</div>
              </div>
            </div>
          </div>
          <div className="action flex flex-col items-center justify-center">
            <div className="flex items-center my-5">
              <button className="cleanbtn radio-btn rel"></button>
              <a
                href="https://www.xquantum.zone/gamzonewp"
                target="_blank"
                className="s12 cfff ml-3"
              >
                <u>
                  I have read, understood and accept the whitepaper of Gamezone
                </u>
              </a>
            </div>
            <button className="btn button" onClick={handleBuyClick}>
              BUY
            </button>
          </div>
        </div>
      )}
      {/* Tab Reward Content */}
      {selectedTab === "Reward" && (
        <div class="meta flex flex-col" style={{ minHeight: "250px" }}>
          <div class="field flex flex-col">
            <div class="field flex flex-col">
              <div class="f-tag"></div>
              <div class="select w-full css-b62m3t-container">
                <span
                  id="react-select-15-live-region"
                  class="css-7pg0cj-a11yText"
                ></span>
                <span
                  aria-live="polite"
                  aria-atomic="false"
                  aria-relevant="additions text"
                  class="css-7pg0cj-a11yText"
                ></span>
                {/* <div class=" css-1s2u09g-control">
                  <div class=" css-1d8n9bt">
                    <div class=" css-qc6sy-singleValue">GAMEZONE ALPHA II</div>
                   
                  </div>
                  <div class=" css-1wy0on6">
                    <span class=" css-1okebmr-indicatorSeparator"></span>
                    <div
                      class=" css-tlfecz-indicatorContainer"
                      aria-hidden="true"
                    >
                      <svg
                        height="20"
                        width="20"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        focusable="false"
                        class="css-8mmkcg"
                      >
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                      </svg>
                    </div>
                  </div>
                </div> */}
                {/* <input name="type" type="hidden" value="500$" /> */}
                <select
                  value={selectedPackage}
                  className="css-qc6sy-singleValue"
                  style={{
                    width: "100%",
                    padding: "0.6rem",
                    //   marginBottom: "1.6rem",
                    borderRadius: ".2rem",
                  }}
                  onChange={(e) => handlePackageChange(e.target.value)}
                >
                  <option
                    value="Thoon Meme Coin"
                    className="css-qc6sy-singleValue"
                  >
                    Thoon Meme Coin
                  </option>
                </select>
              </div>
            </div>
            <div class="field flex flex-col">
              <div class="f-tag">Select Investment</div>
              <div class="select w-full css-b62m3t-container">
                <span
                  id="react-select-16-live-region"
                  class="css-7pg0cj-a11yText"
                ></span>
                <span
                  aria-live="polite"
                  aria-atomic="false"
                  aria-relevant="additions text"
                  class="css-7pg0cj-a11yText"
                ></span>
                <select
                  name=""
                  id=""
                  style={{
                    width: "100%",
                    minHeight: "38px",
                    padding: ".5rem",
                    outline: "none",
                    borderRadius: ".3rem",
                  }}
                >
                  <option value="1">0</option>
                  <option value="1">1</option>
                  <option value="1">2</option>
                </select>
                <input name="type" type="hidden" value="" />
              </div>
              <div class="item flex items-center justify-between">
                <div class="lbl">CLAIM REWARD AFTER:</div>
                <div class="val">0 </div>
              </div>
              <div class="item flex items-center justify-between">
                <div class="lbl">TOTAL REWARD:</div>
                <div class="val">0</div>
              </div>
              <div class="item flex items-center justify-between my-5">
                <div class="btn button lbl rounded-lg">Claim Reward</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
