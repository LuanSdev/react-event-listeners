import { EventEmitter } from 'events';
import { createContext } from 'react';

import { ContextProps, ProviderProps } from './protocols/listener-context';

export const LISTENER_CONTEXT = createContext({} as ContextProps);

export function ListenerProvider({ children }: ProviderProps) {
  const emitter = new EventEmitter();

  return (
    <LISTENER_CONTEXT.Provider value={{ emitter }}>
      {children}
    </LISTENER_CONTEXT.Provider>
  );
}
