import Adapt from 'core/js/adapt';
import TalkModel from './TalkModel';
import TalkView from './TalkView';

export default Adapt.register('talk', {
  model: TalkModel,
  view: TalkView
});
