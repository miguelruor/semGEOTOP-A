import logo from './logo.svg';
import './App.css';
import NavPills from "./components/NavPills/NavPills.js";

export default function Example(){
  return (
    <NavPills
      color="warning"
      tabs={[
        {
          tabButton: "Profile",
          tabContent: (
            <span>
              <p>
                Collaboratively administrate empowered markets via
                plug-and-play networks. Dynamically procrastinate
                B2C users after installed base benefits.
              </p>
              <br />
              <p>
                Dramatically visualize customer directed convergence
                without revolutionary ROI. Collaboratively
                administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after
                installed base benefits.
              </p>
              <br />
              <p>This is very nice.</p>
            </span>
          )
        },
        {
          tabButton: "Settings",
          tabContent: (
            <span>
              <p>
                Efficiently unleash cross-media information without
                cross-media value. Quickly maximize timely
                deliverables for real-time schemas.
              </p>
              <br />
              <p>
                Dramatically maintain clicks-and-mortar solutions
                without functional solutions.
              </p>
            </span>
          )
        },
        {
          tabButton: "Options",
          tabContent: (
            <span>
              <p>
                Completely synergize resource taxing relationships
                via premier niche markets. Professionally cultivate
                one-to-one customer service with robust ideas.{" "}
              </p>
              <br />
              <p>
                Dynamically innovate resource-leveling customer
                service for state of the art customer service.
              </p>
            </span>
          )
        }
      ]}
    />
  );
}