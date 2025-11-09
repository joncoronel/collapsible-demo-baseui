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
          <div className="flex items-center gap-2 p-3 w-full justify-between ">
            <div className="flex items-center flex-row gap-4">
              <div className="h-fit bg-linear-to-br from-accent via-muted to-accent rounded-md">
                <div className="flex items-center justify-center p-2 group-data-panel-open/collapsible-trigger:p-1.5 transition-all duration-300 ease-out-cubic bg-muted border border-transparent bg-clip-padding rounded-md">
                  <HugeiconsIcon
                    icon={Notification01StrokeRounded}
                    className="size-8 drop-shadow-sm fill-card text-accent group-data-panel-open/collapsible-trigger:size-5 transition-all duration-300 ease-out-cubic"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 items-start transition-all duration-300 ease-out-cubic group-data-panel-open/collapsible-trigger:justify-center group-data-panel-open/collapsible-trigger:gap-0">
                <p className="text-sm font-medium">5 New Activities</p>
                <p className="text-xs text-muted-foreground h-auto overflow-hidden transition-discrete transition-all duration-300 ease-out-cubic group-data-panel-open/collapsible-trigger:opacity-0 group-data-panel-open/collapsible-trigger:h-0 group-data-panel-open/collapsible-trigger:-translate-y-2 group-data-panel-open/collapsible-trigger:hidden starting:opacity-0 starting:h-0 starting:-translate-y-2 [interpolate-size:allow-keywords]">
                  What's happening around you
                </p>
              </div>
            </div>
            <ChevronRight className="size-4 transition-transform duration-300 ease-out-cubic group-data-panel-open/collapsible-trigger:rotate-90" />
          </div>
        </Collapsible.Trigger>
        <Collapsible.Panel className="group/collapsible-panel h-(--collapsible-panel-height)   overflow-hidden text-sm transition-all ease-out-cubic duration-250 data-ending-style:h-0 data-starting-style:h-0 data-ending-style:opacity-0 data-starting-style:opacity-0">
          <div className="flex flex-col border-t bg-card space-y-4 px-4 py-3">
            <div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </Collapsible.Panel>
      </Collapsible.Root>
    </div>
  );
}
