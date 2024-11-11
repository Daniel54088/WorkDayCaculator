import { createBrowserRouter } from "react-router-dom";

export const createRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      lazy: async () => {
        const { CalculatorRoute } = await import("./app/calculator");
        return { Component: CalculatorRoute };
      },
    },
    // TODO: Add routes for the other pages
    {
      path: "*",
      lazy: async () => {
        const { NotFoundRoute } = await import("./not-found");
        return { Component: NotFoundRoute };
      },
    },
  ]);
