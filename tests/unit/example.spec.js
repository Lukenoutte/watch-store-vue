import { shallowMount, createLocalVue } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'
import { store } from '@/store'
import VueRouter from 'vue-router'


const localVue = createLocalVue()
localVue.use(VueRouter)

describe('AppHeader.vue', () => {
  it('renders AppHeader', () => {
    const wrapper = shallowMount(AppHeader, { store, localVue })
    expect(wrapper).toBeTruthy()
  })
})
