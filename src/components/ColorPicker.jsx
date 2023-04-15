import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          '#FDB813 ',
          '#F88379 ',
          '#AFDFE4',
          '#B19CD9 ',
          '#E8D8C3',
          '#A2DED0',

          '#ffa600 ',
          '#FF00FF',
          '#00FFFF ',
          '#BF40BF',
          '#FFFF00',
          '#00FF00',

          '#F5F5F5 ',
          '#eae9e9 ',
          '#CCCCCC',
          '#838282 ',
          '#3F3F3F',
          '#222222',
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
