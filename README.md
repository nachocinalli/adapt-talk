# adapt-talk
 **talk** is a presentation component. You can see it [here](https://adaptlearning-no-core.web.app/#/id/po-55)

## Settings Overview
The attributes listed below are used in components.json and are properly formatted as JSON in  [*example.json*](https://github.com/nachocinalli/adapt-talk/blob/master/example.json).

## Adding basic CSS style

```
.talk {
  &__chat-container {
    align-items: flex-start;
  }
  &__chat__character-title {
    font-weight: 700;
    font-size: 0.75rem;
  }
  &__character__image-container {
    border-radius: 50%;
    border: 4px solid @item-color;
    background-color: @item-color-inverted;
    margin-bottom: 0.5rem;
    height: 80px;
  }
  &__character__image {
    border-radius: 50%;
    padding: 0.2rem;
  }
  &__chat__message {
    position: relative;
    background-color: @item-color;
    color: @item-color-inverted;
    border-radius: 1rem;
    padding: 1rem;
    width: 100%;
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-right-color: @item-color;
      top: 15px;
      left: 0;
      margin-left: -20px;
    }
  }
  &__chat {
    opacity: 0;
    transform: translateY(100px);
    transition: all 2000ms cubic-bezier(0.23, 1, 0.32, 1),
      visibility 0s linear 0s;
    &.is-visited {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

```
## Limitations

No known limitations.

----------------------------
**Version number:**  1.2.0  
**Framework versions:** 5.14.0+  
**Author / maintainer:** [Ignacio Cinalli] (https://github.com/nachocinalli)  
**Accessibility support:** 
**RTL support:**   
**Cross-platform coverage:** 