import { shallowMount, createLocalVue } from '@vue/test-utils'
import TheHeader from '@/components/TheHeader.vue'
import { store } from '@/store'
import VueRouter from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.component("icon", FontAwesomeIcon);

describe('AppHeader.vue', () => {
  it('renders AppHeader', () => {
    const wrapper = shallowMount(TheHeader, { store, localVue })
    expect(wrapper).toBeTruthy()
  })
})
