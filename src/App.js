import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "./components/Layout";
import {
  NotFound,
  PrivateRoute,
} from "./components/Common";
import {
  PRIVATE_ROUTES,
  AUTH_ROUTES,
} from "./constants/routes";
const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute type="guest" />}>
        {AUTH_ROUTES.map((route, index) => {
          const Component = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={<Component />}
            />
          );
        })}
      </Route>

      <Route element={<PrivateRoute type="private" />}>
        <Route path="/admin" element={<AdminLayout />}>
          {PRIVATE_ROUTES.map((route, index) => {
            const Component = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={<Component />}
              />
            );
          })}
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
