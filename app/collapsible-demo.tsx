"use client";

import { Collapsible } from "@base-ui-components/react";

import { ChevronRight } from "lucide-react";
import React from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";

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
          className="bg-card border-border hover:bg-accent fixed top-6 right-6 z-50 rounded-md border p-2 shadow-sm transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <SunIcon className="size-4" />
          ) : (
            <MoonIcon className="size-4" />
          )}
        </button>
      )}
      <Collapsible.Root className="group/collapsible rounded-lg shadow-sm">
        <Collapsible.Trigger className="group/collapsible-trigger flex items-center justify-between p-4">
          Hello
          <ChevronRight className="size-4 transition-transform duration-200 ease-out group-data-[panel-open]/collapsible-trigger:rotate-90" />
        </Collapsible.Trigger>
        <Collapsible.Panel className="flex h-[var(--collapsible-panel-height)] flex-col justify-end overflow-hidden text-sm transition-all ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
          <p>Hello</p>
        </Collapsible.Panel>
      </Collapsible.Root>
    </div>
  );
}
