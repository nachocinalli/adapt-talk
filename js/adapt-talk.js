import components from 'core/js/components';
import TalkModel from './TalkModel';
import TalkView from './TalkView';

export default components.register('talk', {
  model: TalkModel,
  view: TalkView
});
