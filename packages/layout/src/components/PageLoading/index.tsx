import '@arco-design/web-vue/es/spin/style';

import { defineComponent, h } from 'vue';
import { Spin, type SpinProps } from '@arco-design/web-vue';
import { spinProps } from '@arco-design/web-vue/es/spin/Spin';

export type PageLoadingProps = SpinProps;

const PageLoading = defineComponent({
  name: 'PageLoading',
  props: {
    ...spinProps(),
  },
  render() {
    return h(
      'div',
      { style: { paddingTop: '100px', textAlign: 'center' } },
      h(Spin, { ...this.$props })
    );
  },
});

export default PageLoading;
