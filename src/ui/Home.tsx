import React from "react";
import { Button } from "../components/Button";
import { Section } from "../components/Section";
import { Icon } from "../components/Icon";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Home() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  function hideModal() {
    setIsActive((current) => !current);
  }

  const handlePlayClick = () => {
    navigate("/flip");
  };

  return (
    <div className={styles.banner}>
      <div
        id="myModal"
        className="modal"
        style={{
          display: isActive ? "none" : "",
        }}
      >
        <div className="modal-content">
          <div className="legal_modal">
            <h2>Legal Disclaimer and Terms of Use</h2>
            <ol>
              <li>
                <b>Age Requirement:</b> You must be at least 18 years of age, or
                the legal age of majority in your jurisdiction, to use this
                website and participate in the gambling games offered.
              </li>
              <li>
                <b>Legal Compliance:</b> You are responsible for ensuring that
                your participation in games on this website is lawful under the
                laws of your jurisdiction. The website is not responsible for
                any unlawful or unauthorized use.
              </li>
              <li>
                <b>Risk Acknowledgement:</b> You understand that gambling
                involves risk and that you may lose money. The website does not
                guarantee any winnings or other outcomes.
              </li>
              <li>
                <b>No Warranty:</b> The coin-flip game operates on a random,
                50/50 basis, and is provided "as is" without any warranties,
                express or implied, including, but not limited to, the implied
                warranties of merchantability or fitness for a particular
                purpose.
              </li>
              <li>
                <b>Limitation of Liability:</b> To the fullest extent permitted
                by law, this website, its operators, and its affiliates will not
                be liable for any damages of any kind arising from your use of
                this website, including, but not limited to, direct, indirect,
                incidental, punitive, and consequential damages.
              </li>
              <li>
                <b>Responsible Gambling:</b> You acknowledge that it is your
                responsibility to gamble responsibly. If you feel you may have a
                gambling problem, you should seek professional assistance.
              </li>
              <li>
                <b>Governing Law:</b> These terms and conditions are governed by
                the laws of the jurisdiction in which the website operates. You
                agree to submit to the jurisdiction of that country's courts for
                any litigation or disputes.
              </li>
            </ol>
            <p>
              By clicking "Enter", you affirm that you have read, understood,
              and accept these terms and conditions, and that you are in
              compliance with all laws and regulations pertaining to online
              gambling in your jurisdiction.
            </p>
            <br></br>
            <button type="button" onClick={hideModal} className="enter">
              Enter
            </button>
          </div>
        </div>
      </div>

      <Section>
        <img
          src="logo.png"
          alt="Logo"
          style={{ maxWidth: "200px", margin: "0 auto" }}
        />
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <Button
            as="a"
            color="white"
            onClick={handlePlayClick}
            icon={<Icon.ExternalLink />}
          >
            Play
          </Button>
        </div>
      </Section>
    </div>
  );
}
