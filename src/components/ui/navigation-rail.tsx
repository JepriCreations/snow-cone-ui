import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

const NavigationRailRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <aside
    ref={ref}
    className={cn(
      'navigation-bar fixed inset-x-0 bottom-0 z-30 flex items-center bg-surfaceContainer py-4 pt-3 md:-inset-x-px md:inset-y-0 md:w-[88px] md:flex-col md:px-0 md:py-5',
      className
    )}
    {...props}
  />
))
NavigationRailRoot.displayName = 'NavigationRail'

const NavigationRailContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn(
      'flex grow items-center justify-around md:h-fit md:w-full md:grow-0 md:flex-col md:space-y-5',
      className
    )}
    {...props}
  />
))
NavigationRailContainer.displayName = 'NavigationRailContainer'

const iconStyle =
  'group-data-[active]:duration-100 group-hover:font-emphasis z-0 group-data-[active]:font-filled group-hover:group-data-[active]:font-filled-emphasis'

const NavigationRailItemIcon = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ children, className, ...props }, ref) => (
  <span
    className={cn(
      'relative grid h-8 w-16 place-items-center rounded-lg text-onSurface before:absolute before:inset-0 before:z-0 before:hidden before:animate-zoom-in-x before:rounded-2xl before:bg-secondaryContainer before:transition-colors group-data-[active]:before:block md:w-14'
    )}
  >
    <Slot ref={ref} className={cn(iconStyle, className)} {...props}>
      {children}
    </Slot>
    <span className="absolute inset-0 z-0 rounded-2xl bg-onSurfaceVariant opacity-0 transition-opacity group-hover:opacity-8 group-focus:opacity-12 group-active:opacity-12" />
  </span>
))

const NavigationRailItemLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'w-full truncate text-center text-label-md font-normal text-onSurface group-hover:font-medium group-data-[active]:font-medium',
      className
    )}
    {...props}
  >
    {children}
  </span>
))

interface NavigationRailItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean
  asChild?: boolean
}

const itemStyle =
  'relative group grid w-full place-items-center gap-y-1 font-normal outline-none p-0.5'

const NavigationRailItem = React.forwardRef<
  HTMLAnchorElement,
  NavigationRailItemProps
>(({ className, active, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      ref={ref}
      data-active={active ? '' : undefined}
      className={cn(itemStyle, className)}
      {...props}
    />
  )
})
NavigationRailItem.displayName = 'NavigationRailItem'

const NavigationRail = Object.assign(NavigationRailRoot, {
  Container: NavigationRailContainer,
  Item: NavigationRailItem,
  ItemIcon: NavigationRailItemIcon,
  ItemLabel: NavigationRailItemLabel,
})

const styles = {
  icon: iconStyle,
  item: itemStyle,
}

export {
  NavigationRail,
  NavigationRailRoot,
  NavigationRailContainer,
  NavigationRailItem,
  NavigationRailItemIcon,
  NavigationRailItemLabel,
  styles,
}
