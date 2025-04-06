import { type Metadata } from "next";
import "./globals.css";
import { ConvexClientProvider } from "@/providers/ConvexClientProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "MiauChat",
  description: "Chatea con tus amikos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ConvexClientProvider>
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster richColors />
        </ConvexClientProvider>
        ;
      </body>
    </html>
  );
}
