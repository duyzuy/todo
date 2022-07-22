import React from "react";

const withPageLayout = (WrapComponent, { title, classes }) => {
  console.log(title);
  return (...props) => {
    return (
      <div className={`page__layout`}>
        <div className="page__title">
          <h1>{title}</h1>
        </div>
        <div className="page__content">
          <WrapComponent {...props} />
        </div>
      </div>
    );
  };
};
export default withPageLayout;
