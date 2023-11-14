'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Logo from './Logo'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
  
const components : { title: string, description: string }[] = [
    {
        title: "Frozen",
    
        description:
          "Recommended template for most use cases. Includes all the components you need to get started.",
      },
      {
        title: "Swift",
    
        description:
          "A template with a minimal set of components. Use this template if you want to build your own components.",
      },
      {
        title: "Tuscany",
    
        description:
          "Advanced template with more components and features. Use this template if you want to build a complex UI.",
      },
      {
        title: "Amber",
    
        description: "Great for building a marketing or landing page.",
      },
      {
        title: "Tide",
    
        description:
          "Layered template with a sidebar navigation. Great for building a dashboard or admin panel.",
      },
      {
        title: "Mint",
     
        description:
          "Nice template for building a blog or a content-heavy website.",
      },
]

export function NavigationBar() {
    return (
      <NavigationMenu>
        <NavigationMenuList className='hidden md:flex md:space-x-0'>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="relative flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md overflow-hidden"
                      href="/"
                    >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#191918] to-[#444545] blur-[124px]" />
                    <div className="relative z-10">

                      <Logo />

                      <div className="mb-2 mt-4 text-lg font-medium">
                        Bridge
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Bridge for Safety
                      </p>
                    </div>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Try">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Community">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink >
                Docs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
  }
   
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#222322] hover:text-accent-foreground focus:bg-[#222322] focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = "ListItem"