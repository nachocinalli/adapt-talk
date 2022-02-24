import ComponentView from 'core/js/views/componentView';

class TalkView extends ComponentView {
  postRender () {
    this.$('.component__widget').imageready(() => {
      this.setReadyStatus();
    });
    this.setupInviewCompletion('.component__widget');
  }

}

TalkView.template = 'talk.jsx';

export default TalkView;
