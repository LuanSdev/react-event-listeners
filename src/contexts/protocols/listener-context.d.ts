import { EventEmitter } from 'events';
import { ReactNode } from 'react';

export type ContextProps = {
  emitter: EventEmitter;
};

export type ProviderProps = { children: ReactNode };
