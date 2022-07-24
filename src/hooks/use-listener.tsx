import { useContext, useEffect } from 'react';

import { LISTENER_CONTEXT } from '../contexts/listener-context';
import { EVENTS } from '../events';
import { UseListenerProps } from './protocols/use-listener';

export function useListener({ listen, eventName, callback }: UseListenerProps) {
  const { emitter } = useContext(LISTENER_CONTEXT);

  useEffect(() => {
    if (listen && callback) {
      emitter.on(eventName, (data: any) => callback(data));
    }

    return () => {
      emitter.removeListener(EVENTS.EDIT_TODO, () => {});
    };
  }, [listen, eventName]);

  function emit(data: any) {
    emitter.emit(eventName, data);
  }

  return { emit };
}
