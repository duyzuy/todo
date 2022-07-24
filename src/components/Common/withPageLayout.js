import React from "react";

const withPageLayout = (
  WrapComponent,
  { title, classes }
) => {
  return (...props) => (
    <div className={`page__layout ${classes}`}>
      <div className="page__title">
        <h1>{title}</h1>
      </div>
      <div className="page__content">
        <WrapComponent {...props} />
      </div>
    </div>
  );
};
export default withPageLayout;
