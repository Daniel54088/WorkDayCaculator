import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MainErrorFallback } from "@/components/errors/main";

import { store } from "@/store";
import { Provider } from "react-redux";
import { Spinner } from "@/components/ui/spinner";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <Provider store={store}>{children}</Provider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
