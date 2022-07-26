import type { CSSProperties, FunctionalComponent } from 'vue';
import '@arco-design/web-vue/es/layout/style';
import Layout from '@arco-design/web-vue/es/layout';
import type { ContentWidth } from './typings';

const { Content } = Layout;

export interface WrapContentProps {
  style?: CSSProperties;
  class?: string | string[] | any;
  isChildrenLayout?: boolean;
  location?: string | string[] | any;
  contentHeight?: number;
  contentWidth?: ContentWidth;
}

export const WrapContent: FunctionalComponent<WrapContentProps> = (
  props,
  { slots, attrs }
) => {
  // if (props.isChildrenLayout) {
  //   return slots.default?.()
  // }
  // const { getPrefixCls } = toRefs(useRouteContext())
  // const prefixCls = getPrefixCls.value('basicLayout')
  // const classNames = computed(() => {
  //   return {
  //     [`${prefixCls}-content`]: true,
  //     [`${prefixCls}-has-header`]: true,
  //   }
  // })

  return <Content {...attrs}>{slots.default?.()}</Content>;
};

WrapContent.inheritAttrs = false;
WrapContent.displayName = 'wrap-content';
