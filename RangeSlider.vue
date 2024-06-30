<template>
    <div class="range-slider">
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        v-model="localMinValue"
        @input="updateValues('min')"
      />
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        v-model="localMaxValue"
        @input="updateValues('max')"
      />
      <div class="slider">
        <div class="slider-track" :style="{ background: trackColor }"></div>
        <div class="slider-range" :style="{ ...rangeStyle, background: rangeColor }"></div>
        <div class="slider-thumb left" :style="{ ...leftThumbStyle, background: thumbColor }"></div>
        <div class="slider-thumb right" :style="{ ...rightThumbStyle, background: thumbColor }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RangeSlider',
    props: {
      min: { type: Number, default: 0 },
      max: { type: Number, default: 100 },
      step: { type: Number, default: 1 },
      minValue: { type: Number, default: 0 },
      maxValue: { type: Number, default: 100 },
      thumbColor: { type: String, default: '#ffffff' },
      trackColor: { type: String, default: '#ddd' },
      rangeColor: { type: String, default: '#3a3a3a' },
    },
    data() {
      return {
        localMinValue: this.minValue,
        localMaxValue: this.maxValue,
      };
    },
    computed: {
      rangeStyle() {
        const left = ((this.localMinValue - this.min) / (this.max - this.min)) * 100;
        const right = 100 - ((this.localMaxValue - this.min) / (this.max - this.min)) * 100;
        return { left: `${left}%`, right: `${right}%` };
      },
      leftThumbStyle() {
        const left = ((this.localMinValue - this.min) / (this.max - this.min)) * 100;
        return { left: `${left}%` };
      },
      rightThumbStyle() {
        const right = ((this.localMaxValue - this.min) / (this.max - this.min)) * 100;
        return { left: `${right}%` };
      },
    },
    methods: {
      updateValues(handle) {
        if (handle === 'min' && this.localMinValue > this.localMaxValue - this.step) {
          this.localMinValue = this.localMaxValue - this.step;
        } else if (handle === 'max' && this.localMaxValue < this.localMinValue + this.step) {
          this.localMaxValue = this.localMinValue + this.step;
        }
        this.$emit('input', { min: this.localMinValue, max: this.localMaxValue });
      },
    },
    watch: {
      minValue(val) {
        this.localMinValue = val;
      },
      maxValue(val) {
        this.localMaxValue = val;
      },
    },
  };
  </script>
  
  <style scoped>
  .range-slider {
    position: relative;
    width: 100%;
  }
  
  input[type='range'] {
    position: absolute;
    pointer-events: none;
    -webkit-appearance: none;
    z-index: 2;
    height: 0;
    width: 100%;
    opacity: 0;
  }
  
  input[type='range']::-webkit-slider-thumb {
    pointer-events: all;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #3a3a3a;
  }
  
  input[type='range']:focus {
    outline: none;
  }
  
  .slider {
    position: relative;
    width: 100%;
    height: 10px;
  }
  
  .slider-track {
    position: absolute;
    width: 100%;
    height: 10px;
    z-index: 1;
  }
  
  .slider-range {
    position: absolute;
    height: 10px;
    z-index: 2;
  }
  
  .slider-thumb {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid #3a3a3a;
    border-radius: 50%;
    z-index: 3;
  }
  </style>
  