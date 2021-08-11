import { HTMLAttributes } from 'react'
import { JSX as LocalJSX } from '052hide-stencil-wc/loader'

type ToReact<T> = {
  [P in keyof T]?: T[P] & Omit<HTMLAttributes<Element>, 'className'> & {
    class?: string;
  }
}

declare global {
  export namespace JSX {
    interface IntrinsicElements extends ToReact<LocalJSX.IntrinsicElements> {
    }
  }
}