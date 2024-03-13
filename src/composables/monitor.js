import { ref, shallowRef, defineAsyncComponent, onMounted, onUnmounted } from 'vue'

export function useMonitor() {
  const breakpoint = ref('sm')
  const menu = shallowRef(
    defineAsyncComponent(() => import('../components/Menus/MenuSuperiorXs.vue'))
  )
  const footer = shallowRef(
    defineAsyncComponent(() => import('../components/Footers/RodaPeXs.vue'))
  )

  const updateBreakpoint = () => {
    const width = window.innerWidth
    if (width < 576) {
      breakpoint.value = 'xs'
      menu.value = defineAsyncComponent(() => import('../components/Menus/MenuSuperiorXs.vue'))
      footer.value = defineAsyncComponent(() => import('../components/Footers/RodaPeXs.vue'))
    } else if (width < 768) {
      breakpoint.value = 'sm'
      menu.value = defineAsyncComponent(() => import('../components/Menus/MenuSuperiorSm.vue'))
      footer.value = defineAsyncComponent(() => import('../components/Footers/RodaPeSm.vue'))
    } else if (width < 992) {
      breakpoint.value = 'md'
      menu.value = defineAsyncComponent(() => import('../components/Menus/MenuSuperiorMd.vue'))
      footer.value = defineAsyncComponent(() => import('../components/Footers/RodaPeMd.vue'))
    } else if (width < 1200) {
      breakpoint.value = 'lg'
      menu.value = defineAsyncComponent(() => import('../components/Menus/MenuSuperiorLg.vue'))
      footer.value = defineAsyncComponent(() => import('../components/Footers/RodaPeLg.vue'))
    } else {
      breakpoint.value = 'xl'
      menu.value = defineAsyncComponent(() => import('../components/Menus/MenuSuperiorXl.vue'))
      footer.value = defineAsyncComponent(() => import('../components/Footers/RodaPeXl.vue'))
    }
  }

  onMounted(() => {
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateBreakpoint);
  });

  return {
    breakpoint,
    menu,
    footer
  };
}
