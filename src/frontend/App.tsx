import React from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router";
import HomePage from "./pages/home/page";
import AboutPage from "./pages/about/page";
import NotFound from "./features/404";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./pages/error-page";
import { env } from "~/env";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/react-router";
import { TRPCReactProvider } from "~/trpc/react";
import SignInPage from "./features/auth/sign-in";
import SignUpPage from "./features/auth/sign-up";

export default function App() {
  return (
    <ErrorBoundary fallbackRender={(props) => <ErrorPage {...props} />}>
      <BrowserRouter>
        <ClerkProvider
          publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
          signInUrl="/sign-in"
          signUpUrl="/sign-up"
        >
          <TRPCReactProvider>
            <Routes>
              <Route
                element={
                  <div className="h-screen">
                    <header className="sticky top-0 flex h-10 w-screen items-center justify-end px-4">
                      <SignedIn>
                        <UserButton />
                      </SignedIn>
                      <SignedOut>
                        <SignInButton />
                      </SignedOut>
                    </header>

                    <Outlet />
                  </div>
                }
              >
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />

                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="" element={<NotFound />} />
              </Route>
            </Routes>
          </TRPCReactProvider>
        </ClerkProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
