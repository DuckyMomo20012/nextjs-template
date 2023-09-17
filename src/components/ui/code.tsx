import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const codeVariants = cva(
  'rounded border px-[0.3rem] py-[0.2rem] text-sm font-mono',
  {
    variants: {
      variant: {
        solid: 'bg-primary border-0 text-primary-foreground',
        outline: 'border border-input text-accent-foreground',
        soft: 'bg-secondary text-secondary-foreground',
        ghost: 'border-0',
      },
    },
    defaultVariants: {
      variant: 'soft',
    },
  },
);

export interface CodeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof codeVariants> {}

function Code({ className, variant, ...props }: CodeProps) {
  return (
    <code className={cn(codeVariants({ variant }), className)} {...props} />
  );
}

export { Code, codeVariants };
