import React, { useEffect, useRef, useState } from 'react';
import { html, compile, classes, templates } from 'core/js/reactHelpers';

export default function Talk(props) {
  const {
    el,
    _items
  } = props;
  const hasObserver = ('IntersectionObserver' in window);
  const useObserver = function(options) {
    const [elements, setElements] = useState([]);
    const [entries, setEntries] = useState([]);
    const observer = hasObserver
      ? useRef(new IntersectionObserver(observedEntries => {
        setEntries(observedEntries);
      }, options))
      : null;

    useEffect(function() {
      if (!observer) return;

      const { current: currentObserver } = observer;
      currentObserver.disconnect();
      if (elements.length) {
        elements.forEach(element => currentObserver.observe(element));
      }
      return function cleanUp() {
        if (currentObserver) {
          currentObserver.disconnect();
        }
      };
    }, [elements]);

    return [observer?.current, setElements, entries];
  };
  const [observer, setElements, entries] = useObserver({
    threshold: 1.0,
    root: null,
    rootMargin: '60px'
  });

  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const chatEntry = entry.target;
        chatEntry.classList.add('is-visited');
        observer.unobserve(chatEntry);
      }
    });
  }, [entries, observer]);

  useEffect(() => {
    if (!observer) return;

    const chatElements = el.querySelectorAll('.talk__chat');
    setElements(chatElements);
  }, [setElements, _items]);

  return (
    <div className='component__inner talk__inner'>
      <templates.header {...props} />
      <div className='component__widget talk__widget'>

        <div className='talk__container-items' role='feed'>

          {_items.map(({ _character, _graphic, text, _classes }, _index) => (
            <div key={_index}
              role='article'
              className={classes([
                'talk__chat',
                `talk__chat-character-${_character._index}`,
                !hasObserver && 'is-visited',
                _classes
              ])}
              aria-posinset={_index + 1}
              tabIndex="0"
              aria-labelledby={`talk__chat-container-${_index}`}
              aria-setsize={el.querySelectorAll('.talk__chat.is-visited').length + 1}
              data-index={_index}>
              <div className={classes(['talk__chat-status'])}></div>
              <div className="talk__chat-container" id={`talk__chat-container-${_index}`}>
                <div className={classes(['talk__chat__character', _character._classes])}>
                  {_character?._graphic && (
                    <templates.image
                      {..._character._graphic}
                      classNamePrefixes={['component', 'talk__character']}
                    />
                  )}
                  {_character?.name && (
                    <div className="talk__chat__character-title">
                      {html(compile(_character.name))}
                    </div>
                  )}
                </div>
                <div className="talk__chat__message">
                  {_graphic && (
                    <templates.image
                      {..._graphic}
                      classNamePrefixes={['component', 'talk__message']}
                    />
                  )}
                  {text && <div className="talk__chat__message-text">{html(compile(text))}</div>}
                </div>
              </div>
            </div>

          ))}
        </div>

      </div>

    </div>
  );
}
