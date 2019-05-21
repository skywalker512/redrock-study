interface ListenerMetadata {
  eventName: string
  handler: Function
  selector?: string
}

// eslint-disable-next-line max-len
export const Listen = (eventName: string, selector?: string) => (target: any, methodName: string) => {
  if (!target.constructor.listeners) {
    // eslint-disable-next-line no-param-reassign
    target.constructor.listeners = [];
  }
  target.constructor.listeners.push({ selector, eventName, handler: target[methodName] });
};

export const addEventListeners = (target: any) => {
  if (!target.constructor.listeners) {
    return;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const listener of target.constructor.listeners as Array<ListenerMetadata>) {
    const eventTarget = listener.selector ? target[listener.selector] : target;
    if (eventTarget) {
      eventTarget.addEventListener(listener.eventName, (e: EventListener) => {
        listener.handler.call(target, e);
      });
    }
  }
};
