import React from 'react';
import { PubSubManager } from '@xionhub/pubsub';
import { GaEvent } from './atom';
import { tupleToString } from './lib';

export type LoggerAdapter = {
  track: (event: GaEvent['logEventParam']) => void;
};

export const logger = new PubSubManager<GaEvent['logEvent']>();

export const useLogger = (): LoggerAdapter => {
  const track = (event: GaEvent['logEventParam']) => {
    const eventName = tupleToString<GaEvent['eventName']>(event.eventName);
    const eventPath = tupleToString<GaEvent['eventPath']>(event.eventPath);
    logger.publish({
      type: event.type,
      eventName,
      eventPath,
    });
  };
  return {
    track,
  };
};

export const LoggerProvider = () => {
  React.useEffect(() => {
    const listener = (event: GaEvent['logEvent']) => {
      console.group('😂 GA Event Logging');
      console.log('event : ', event);
      console.log('😍 hello world 😍');
      console.groupEnd();
    };
    logger.subscribe('GA_EVENT', listener);
    return () => logger.unsubscribe('GA_EVENT', listener);
  }, []);
  return null;
};
