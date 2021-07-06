import locationIcon from "../assets/location.PNG";
import emailIcon from "../assets/email.PNG";
import fbIcon from "../assets/fb.PNG";
import linkedinIcon from "../assets/linkedin.PNG";
import supportIcon from "../assets/support.PNG";

export default function Footer() {
  return (
    <div className="footerMain">
      <div className="footerTop">
        <div className="address">
          <h6>Sourcing talents to germany</h6>
          <img alt="img" src={locationIcon} />
          <span>Startup Incubator Berlin, Rohrdamm 88, 13629 Berlin</span>
          <br />
          <br />
          <img alt="img" src={emailIcon} />
          <span>Startup Incubator Berlin, Rohrdamm 88, 13629 Berlin</span>
          <br />
          <br />
          <p>
            Moyyn Group is a venture of MyHelpBuddy UG
            <br /> supported by European Union Social Fund and
            <br /> Berlin Senate
          </p>
          <img alt="img" src={fbIcon} />
          <img alt="img" src={linkedinIcon} />
        </div>
        <div className="footerLinks">
          <h6>Links</h6>
          <span>{"> "}Submit your CV</span>
          <br />
          <span>{"> "}Jobs</span>
          <br />
          <span>{"> "}Companies</span>
          <br />
          <span>{"> "}Terms</span>
          <br />
          <span>{"> "}Provacy</span>
          <br />
          <span>{"> "}Imprint</span>
          <br />
        </div>
        <div className="support">
          <h6>Supported by</h6>
          <img alt="img" src={supportIcon} />
        </div>
      </div>
      <div className="footerBottom">© 2021 Moyyn. All rights reserved.</div>
    </div>
  );
}
