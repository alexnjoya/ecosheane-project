import React from "react"
import * as Icon from "react-feather"

import RepairTeam1 from "../../images/repair-team-image/repair-team1.jpg"
import RepairTeam2 from "../../images/repair-team-image/repair-team2.jpg"
import RepairTeam3 from "../../images/repair-team-image/repair-team3.jpg"
import RepairTeam4 from "../../images/repair-team-image/repair-team4.jpg"

const Team = () => {
  return (
    <>
      <div className="team-area repair-team-area pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Our Awesome Team</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="single-team">
                <div className="team-image">
                  <img src={RepairTeam1} alt="Team" />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Josh Buttler</h3>
                    <span>CEO & Founder</span>
                  </div>

                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Facebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://gitlab.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-team">
                <div className="team-image">
                  <img src={RepairTeam2} alt="Team" />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Alex Maxwel</h3>
                    <span>CEO & Founder</span>
                  </div>

                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Facebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://gitlab.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-team">
                <div className="team-image">
                  <img src={RepairTeam3} alt="Team" />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Janny Cotller</h3>
                    <span>CEO & Founder</span>
                  </div>

                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Facebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://gitlab.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-team">
                <div className="team-image">
                  <img src={RepairTeam4} alt="Team" />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Jason Statham</h3>
                    <span>CEO & Founder</span>
                  </div>

                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Facebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://gitlab.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team