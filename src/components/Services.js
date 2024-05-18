import styled from "@emotion/styled";
import React from "react";
import _ from "lodash";
const Title = styled.div`
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 18px;
  position: relative;
  padding-bottom: 15px;
  ::after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 2px;
    bottom: 0px;
    left: calc(50% - 25px);
    background: #079765;
  }
`;
const Services = () => {
  return (
    <>
      <div className="container text-center">
        <div className="section-title">
          <div className="section-h2">Services</div>
          <div className="section-p">
            Transform your vehicle with our meticulous car detailing services,
            offering interior & exterior detailing, power polish, and ceramic
            coating applications for a pristine finish.
          </div>
        </div>
        <div className="row">
          <ServicesArray
            title={["Interior Detailing"]}
            text={[
              "Interior detailing involves thorough cleaning and restoring the interior surfaces of a vehicle, including the seats, carpets, dashboard, and other components.",
            ]}
            price={["$20"]}
          />
          <ServicesArray
            title={["Exterior Detailing"]}
            text={[
              "Exterior detailing is thoroughly washing, polishing, and protecting a vehicle's exterior surfaces in order to maintain and improve its appearance.",
            ]}
            price={["$99"]}
          />

          <ServicesArray
            title={["Ceramic Coating"]}
            text={[
              "Ceramic coating is a durable, protective layer applied to surfaces like vehicles or ceramics to enhance gloss and protect against contaminants.",
            ]}
            price={["$50"]}
          />
          <ServicesArray
            title={["Odor Removal"]}
            text={[
              "Our car detailing service specializes in advanced odor removal techniques, ensuring your vehicle smells fresh and clean by eliminating even the toughest odors at their source.",
            ]}
            price={["$$$"]}
          />
          <ServicesArray
            title={["Headlight Restoration"]}
            text={[
              "Headlight restoration involves the process of renewing and enhancing the clarity and effectiveness of cloudy or faded vehicle headlights.",
            ]}
            price={["$$$"]}
          />
          <ServicesArray
            title={["Decal Removal"]}
            text={[
              "Our expert decal removal service gently eliminates old, faded, or unwanted decals from your vehicle, restoring its original clean finish without damaging the paint.",
            ]}
            price={["$$$"]}
          />
        </div>
      </div>
    </>
  );
};

export default Services;

const ServicesArray = ({ text, title, price }) => {
  return (
    <>
      {_.isArray(text) && (
        <>
          {text.map((v, i) => {
            return (
              <React.Fragment key={i}>
                <div className="col-md-6 col-lg-4 p-3">
                  <div className="icon"><i className="bi bi-cart-plus-fill"/></div>
                  <Title className="mb-3 pb-2">{title}</Title>
                  <div className="">{v}</div>
                </div>
              </React.Fragment>
            );
          })}
        </>
      )}
    </>
  );
};
