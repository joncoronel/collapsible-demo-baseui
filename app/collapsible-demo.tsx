"use client";

import { Collapsible } from "@base-ui-components/react";

import { ChevronRight } from "lucide-react";
import React from "react";
import { useTheme } from "next-themes";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Notification01StrokeRounded,
  Sun01StrokeRounded,
  Moon01StrokeRounded,
} from "@hugeicons-pro/core-stroke-rounded";

export default function CollapsibleDemo() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-background flex h-screen flex-col items-center justify-center">
      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="bg-card border-border/70 hover:bg-accent fixed top-6 right-6 z-50 rounded-md border p-2 shadow-sm transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <HugeiconsIcon icon={Sun01StrokeRounded} className="size-4" />
          ) : (
            <HugeiconsIcon icon={Moon01StrokeRounded} className="size-4" />
          )}
        </button>
      )}

      <Collapsible.Root className="group/collapsible rounded-2xl shadow-sm w-full max-w-xs border border-border/70 overflow-hidden">
        <Collapsible.Trigger className="group/collapsible-trigger flex w-full">
          <div className="flex items-center gap-2 px-3 py-2.5 w-full justify-between">
            <div className=" bg-linear-to-br from-accent via-muted to-accent rounded-md">
              <div className="flex items-center justify-center p-2 bg-muted border border-transparent bg-clip-padding rounded-md">
                <HugeiconsIcon
                  icon={Notification01StrokeRounded}
                  className="size-6 drop-shadow-sm fill-card text-border"
                />
              </div>
            </div>
            <ChevronRight className="size-4 transition-transform duration-200 ease-out group-data-panel-open/collapsible-trigger:rotate-90" />
          </div>
        </Collapsible.Trigger>
        <Collapsible.Panel className=" h-(--collapsible-panel-height)   overflow-hidden text-sm transition-all ease-out-cubic duration-250 data-ending-style:h-0 data-starting-style:h-0 data-ending-style:opacity-0 data-starting-style:opacity-0">
          <p className="border-t bg-card space-y-4 px-4 py-3">Hello</p>
        </Collapsible.Panel>
      </Collapsible.Root>
    </div>
  );
}
