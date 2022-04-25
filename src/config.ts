'use strict';

export const actions = [
  {
    key: 'zoom-in',
    icon: 'table-build-icon table-build-icon-zoom-in',
    title: 'Zoom In',
    onClick: (canvas) => {
      canvas.zoom(canvas._zoomData + 0.1);
    }
  },
  {
    key: 'zoom-out',
    icon: 'table-build-icon table-build-icon-zoom-out',
    title: 'Zoom Out',
    onClick: (canvas) => {
      canvas.zoom(canvas._zoomData - 0.1);
    }
  },
  {
    key: 'fit',
    icon: 'table-build-icon table-build-icon-quanping2',
    title: 'Center It',
    onClick: (canvas) => {
      canvas.focusCenterWithAnimate(undefined, () => {
        console.log('complete!!!')
      });
    }
  }
];
