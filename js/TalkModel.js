import ItemModel from 'core/js/models/itemModel';
import ComponentModel from 'core/js/models/componentModel';

export default class TalkModel extends ComponentModel {

  init() {
    this.setUpItems();

    super.init();
  }

  setUpItems() {

    const items = this.get('_items') || [];
    const characters = this.get('_characters') || [];
    characters.forEach((character, index) => {
      character._index = index + 1;
    });
    items.forEach((item, index) => {
      item._index = index;
      if (!item._character) return;
      item._character = characters.filter((character) => character._index === item._character)[0];
    });
    this.setChildren(new Backbone.Collection(items, { model: ItemModel }));
  }

}
