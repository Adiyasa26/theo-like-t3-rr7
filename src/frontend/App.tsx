import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/home/page";
import AboutPage from "./pages/about/page";
import NotFound from "./features/404";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./pages/error-page";
import { JazzProvider } from "jazz-react";
import { env } from "~/env";

export default function App() {
  return (
    <JazzProvider
      sync={{ peer: `wss://cloud.jazz.tools/?key=${env.NEXT_PUBLIC_JAZZ_API_KEY}` }}
    >
    <ErrorBoundary fallbackRender={(props) => <ErrorPage {...props} />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
    </JazzProvider>
  );
}
