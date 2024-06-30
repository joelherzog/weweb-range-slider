export default {
  editor: {
    label: {
      en: 'Range Slider',
    },
  },
  properties: {
    min: {
      type: 'number',
      label: {
        en: 'Min Value',
      },
      defaultValue: 0,
    },
    max: {
      type: 'number',
      label: {
        en: 'Max Value',
      },
      defaultValue: 100,
    },
    step: {
      type: 'number',
      label: {
        en: 'Step',
      },
      defaultValue: 1,
    },
    minValue: {
      type: 'number',
      label: {
        en: 'Initial Min Value',
      },
      defaultValue: 0,
    },
    maxValue: {
      type: 'number',
      label: {
        en: 'Initial Max Value',
      },
      defaultValue: 100,
    },
    thumbColor: {
      type: 'color',
      label: {
        en: 'Thumb Color',
      },
      defaultValue: '#ffffff',
    },
    trackColor: {
      type: 'color',
      label: {
        en: 'Track Color',
      },
      defaultValue: '#ddd',
    },
    rangeColor: {
      type: 'color',
      label: {
        en: 'Range Color',
      },
      defaultValue: '#3a3a3a',
    },
  },
};
