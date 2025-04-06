"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { LoadingLogo } from "@/components/shared/LoadingLogo";

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";

const convex = new ConvexReactClient(CONVEX_URL);

type ConvexClientProviderProps = {
  children: React.ReactNode;
};
export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => (
  <ClerkProvider>
    <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
      <Authenticated>{children}</Authenticated>
      <AuthLoading>
          <LoadingLogo />
        </AuthLoading>
    </ConvexProviderWithClerk>
  </ClerkProvider>
);