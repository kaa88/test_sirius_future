/* DEVELOPMENT ONLY!
Этот компонент выводит все иконки из спрайта с их названиями. Название копируете в <Icon> и всё работает.
Чтобы посмотреть лист, надо его импортировать в свой компонент и отрендерить.
*/

import { useEffect, useRef, useState } from 'react';

import iconSprite from '../../../assets/icons/icon-sprite.svg';

import Icon from './Icon';

const IconList = (): JSX.Element => {
  const spriteRef = useRef<HTMLObjectElement>(null);

  const [symbols, setSymbols] = useState<string[]>([]);

  useEffect(() => {
    const spriteEl = spriteRef.current;

    if (spriteEl) {
      setTimeout(() => {
        const svgContent = spriteEl.contentDocument;

        if (svgContent) {
          const list = svgContent.children[0].children;
          const symbols = [];

          for (let i = 0; i < list.length; i++) {
            symbols.push(list[i].id);
          }

          setSymbols(symbols);
        }
      }, 1000); // eslint-disable-line
    }
  }, []); // eslint-disable-line

  return (
    <div style={{ width: '100%', background: '#eee' }}>
      <object data={iconSprite} ref={spriteRef} style={{ width: 0, height: 0 }} />
      <p
        style={{
          fontSize: '20px',
          textAlign: 'center',
          color: '#222',
          marginBottom: '16px',
        }}
      >
        ICONS
      </p>
      <div
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, 100px)',
          columnGap: '5px',
          justifyContent: 'center',
        }}
      >
        {symbols.map(sym => (
          <div
            key={sym}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                display: 'flex',
                border: 'solid 1px green',
                fill: '#222',
              }}
            >
              <Icon name={sym} />
            </div>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1,
                textAlign: 'center',
                color: '#222',
              }}
            >
              {sym}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconList;
