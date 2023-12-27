import * as React from 'react'
import { forwardRef } from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '@/lib/utils'

const labelStyle =
  'pointer-events-none absolute z-10 flex select-none text-label-sm font-normal leading-tight text-onSurfaceVariant duration-200 peer-placeholder-shown/input:text-body-lg peer-placeholder-shown/input:text-onSurfaceVariant/70 peer-focus/input:text-label-sm peer-focus/input:leading-tight peer-focus/input:text-primary peer-disabled/input:!text-onSurfaceVariant/38 group-data-[invalid]/container:text-error'

const outlinedLabel = [
  'h-full w-full left-0 top-[-6px] mr-1 peer-placeholder-shown/input:leading-[4.2]',
  'peer-focus/input:before:mr-1 peer-has-[*]/icon:peer-placeholder-shown/input:before:mr-9 peer-has-[*]/icon:peer-focus/input:before:mr-1',

  /** Before **/
  'before:pointer-events-none before:mr-1 before:mt-[6px] before:box-border before:block before:h-full before:w-3.5 before:rounded-l-sm before:border-outline before:duration-200 before:transition-all before:border-t before:border-l',

  'peer-placeholder-shown/input:before:border-transparent',

  'peer-focus/input:before:border-primary peer-focus/input:before:border-l-2 peer-focus/input:before:border-t-2',

  'group-data-[invalid]/container:before:border-error group-data-[invalid]/container:before:border-l-2 group-data-[invalid]/container:before:border-t-2',

  'peer-disabled/input:before:border-t-onSurface/12 peer-disabled/input:before:border-l-onSurface/12 peer-disabled/input:peer-placeholder-shown/input:before:border-transparent',

  /** After **/
  'after:h-full after:pointer-events-none after:ml-1 after:mt-[6px] after:box-border after:block after:flex-grow after:rounded-r-sm after:border-r after:border-t after:border-outline duration-200 after:transition-all',

  'peer-placeholder-shown/input:after:border-transparent',

  'peer-focus/input:after:border-primary peer-focus/input:after:border-r-2 peer-focus/input:after:border-t-2',

  'group-data-[invalid]/container:after:border-error group-data-[invalid]/container:after:border-r-2 group-data-[invalid]/container:after:border-t-2',

  'peer-disabled/input:after:border-t-onSurface/12 peer-disabled/input:after:border-r-onSurface/12 peer-disabled/input:peer-placeholder-shown/input:after:border-transparent',
]

const FilledTextareaRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { error?: boolean }
>(({ className, error, ...props }, ref) => (
  <div
    ref={ref}
    data-invalid={error ? '' : undefined}
    className={cn(
      'group/container relative z-0 flex w-full rounded-sm rounded-br-xs bg-surfaceContainer pt-0 before:absolute before:inset-0 before:z-[-1] before:rounded-sm before:rounded-br-xs before:border-b before:border-onSurfaceVariant/12 before:transition-[color,border] focus-within:before:border-b-[2px] focus-within:before:border-primary',
      'has-[:disabled]:bg-surfaceContainer/38 has-[label]:pt-[22px] has-[:disabled]:before:border-onSurface/12',
      Boolean(error) && 'before:border-error',
      className
    )}
    {...props}
  />
))
FilledTextareaRoot.displayName = 'FilledTextareaRoot'

const OutlinedTextareaRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { error?: boolean }
>(({ className, error, ...props }, ref) => (
  <div
    ref={ref}
    data-invalid={error ? '' : undefined}
    className={cn(
      'group/container relative z-0 flex w-full bg-transparent before:absolute before:inset-0 before:z-[-1] before:rounded-sm before:rounded-br-xs before:border before:border-outline before:transition-[color,border] focus-within:before:border-2 focus-within:before:border-primary has-[label]:has-[:placeholder-shown]:before:border-outline has-[label]:before:border-t-transparent has-[label]:focus-within:before:border-b-primary has-[label]:focus-within:before:border-t-transparent',
      'has-[label]:pt-2 has-[:disabled]:before:border-onSurface/12 has-[:disabled]:has-[:placeholder-shown]:before:border-onSurface/12 has-[label]:has-[:disabled]:before:border-transparent has-[:disabled]:before:border-t-transparent has-[label]:has-[:disabled]:before:border-b-onSurface/12 has-[label]:has-[:disabled]:before:border-t-transparent',
      Boolean(error) &&
        'before:border-2 before:border-error has-[label]:has-[:placeholder-shown]:before:border-error',
      className
    )}
    {...props}
  />
))
OutlinedTextareaRoot.displayName = 'OutlinedTextareaRoot'

const FilledTextareaLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      labelStyle,
      'left-0 top-0 w-full px-4 pb-1 pt-2 peer-placeholder-shown/input:leading-[2.5]',
      className
    )}
    {...props}
  />
))
FilledTextareaLabel.displayName = 'FilledTextareaLabel'

const OutlinedTextfieldLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelStyle, outlinedLabel, className)}
    {...props}
  />
))
OutlinedTextfieldLabel.displayName = 'OutlinedTextfieldLabel'

const FilledTextareaInput = forwardRef<
  HTMLTextAreaElement,
  React.InputHTMLAttributes<HTMLTextAreaElement>
>(({ className, placeholder = '', ...props }, ref) => {
  return (
    <>
      <textarea
        ref={ref}
        placeholder={placeholder}
        className={cn(
          'peer/input min-h-[80px] grow resize-y bg-transparent px-4 pb-2 pt-3 text-onSurface caret-primary outline-none transition-opacity placeholder:text-onSurfaceVariant/50 focus:outline-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-onSurface/38 group-has-[label]/container:pt-0 group-has-[:focus]/container:placeholder:opacity-100 group-has-[label]/container:placeholder:opacity-0 group-data-[invalid]/container:caret-error',
          className
        )}
        {...props}
      />
    </>
  )
})

const OutlinedTextareaInput = forwardRef<
  HTMLTextAreaElement,
  React.InputHTMLAttributes<HTMLTextAreaElement>
>(({ className, placeholder = '', ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      placeholder={placeholder}
      className={cn(
        'peer/input min-h-[80px] grow resize-y bg-transparent px-4 pb-2 pt-3 text-onSurface caret-primary outline-none placeholder:text-onSurfaceVariant/50 focus:outline-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-onSurface/38 group-has-[label]/container:pt-1 group-has-[label]/container:placeholder:opacity-0 group-has-[label]/container:focus:placeholder:opacity-100 group-data-[invalid]/container:caret-error',
        className
      )}
      {...props}
    />
  )
})

const SupportingText = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('mt-1 px-4 text-body-sm text-onSurfaceVariant', className)}
      {...props}
    />
  )
})
SupportingText.displayName = 'SupportingText'

const FilledTextarea = Object.assign(FilledTextareaRoot, {
  Label: FilledTextareaLabel,
  Input: FilledTextareaInput,
  SupportingText,
})

const OutlinedTextarea = Object.assign(OutlinedTextareaRoot, {
  Label: OutlinedTextfieldLabel,
  Input: OutlinedTextareaInput,
  SupportingText,
})

export {
  FilledTextarea,
  OutlinedTextarea,
  FilledTextareaRoot,
  OutlinedTextareaRoot,
  FilledTextareaLabel,
  OutlinedTextfieldLabel,
  FilledTextareaInput,
  OutlinedTextareaInput,
  SupportingText,
}