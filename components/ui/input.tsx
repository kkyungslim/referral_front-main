import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { useEffect } from 'react';

const inputVariants = cva(
  'file:text-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm' +
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  {
    variants: {
      variant: {
        default: 'focus:border-primary',
        secondary: '',
        warning: '',
        destructive: '',
        outline: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface ValidatedInputProps
  extends Omit<React.ComponentProps<'input'>, 'onInvalid'>,
    VariantProps<typeof inputVariants> {
  validator?: (value: string) => boolean;
  errorMessage?: string;
  onValidationSuccess?: (value: string) => void;
  onValidationError?: (value: string) => void;
  focusOnRender?: boolean;
}

function Input({
  className,
  variant,
  value,
  type = 'text',
  validator,
  errorMessage = 'Invalid input',
  onValidationSuccess,
  onValidationError,
  focusOnRender = false,
  ...props
}: ValidatedInputProps) {
  const [touched, setTouched] = React.useState(
    typeof value === 'string' ? value?.length > 0 : false,
  );
  const [error, setError] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!touched) {
      setTouched(true);
    }
    if (validator) {
      const isValid = validator(value);
      if (isValid) {
        setError(null);
        onValidationSuccess?.(value);
      } else {
        setError(errorMessage);
        onValidationError?.(value);
      }
    }
    props.onChange?.(e);
  };

  useEffect(() => {
    if (focusOnRender) {
      inputRef.current?.focus();
    }
  }, []);

  return (
    <div className="flex flex-col gap-1">
      <input
        ref={inputRef}
        type={type}
        value={value ?? ''}
        data-slot="input"
        aria-invalid={!!error}
        className={cn(inputVariants({ variant }), className)}
        {...props}
        onChange={handleChange}
      />
      {touched && error && (
        <p className="text-sm text-[color:var(--third)]">{error}</p>
      )}
    </div>
  );
}

export { Input };
