import { LogEventCreator } from '@xionhub/logger';

export type FEATURE = 'blog';

export type PAGE = '/resume' | `/post/${string}` | '/';

export type AT = 'header' | 'footer' | 'post' | 'post-card-list' | 'side-bar';

export type TARGET = 'category' | 'post-card' | 'title';

export type ACTION = 'click' | 'page';

export const glue = '_' as const;
type GLUE = typeof glue;
export type GaEvent = LogEventCreator<
  FEATURE,
  PAGE,
  AT,
  TARGET,
  ACTION,
  {
    type: 'GA_EVENT';
  },
  GLUE
>;
