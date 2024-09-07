import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { BadgeCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col", // when we use cn we pass our default classes,
          headingFont.className // then we write the dynamic class.
        )}
      >
        <div className="flex items-center text-purple-950 mb-2 text-6xl font-semibold">
          <BadgeCheck className="h-20 w-20 mr-2 text-purple-950 fill-white" />
          Galasky
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-purple-600 mb-4">
          Helps Teams Move
        </h1>
        <div className="text-3xl md:text-6xl text-center bg-gradient-to-r from-purple-100 via-purple-300 to-purple-100 text-white px-8 p-4 w-fit rounded-full">
          Work Ahead
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-purple-600 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        collaborate
      </div>
      <Button variant="primary"
        size="lg"
        asChild
      >
        <Link href="/sign-up">Get Galasky For Free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
