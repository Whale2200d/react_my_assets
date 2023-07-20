// eslint-disable-next-line react/no-typos
import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // isValid?: boolean; // example code
  }
}
