import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import vuetify from 'vuetify';
import VueI18n from 'vue-i18n';
import messages from '../../i18n/mensages';
import HelloWorld from '@/components/HelloWorld.vue';
import Home from '@/views/Home.vue';
import App from '@/App.vue';

Vue.use(VueI18n);
Vue.use(vuetify);

const i18n = new VueI18n({
  locale: 'en',
  messages,
  fallbackLocale: 'en',
  silentTranslationWarn: false,
});

describe('HelloWorld.vue', () => {
  test('Component rendering test msg', async () => {
    const msg = 'For help and collaboration with other Vuetify developers, please join our online Discord Communit';
    const wrapper = shallowMount(HelloWorld, { i18n });
    expect(wrapper.text()).toMatch(msg);
  });

  test('renders correctly - HelloWorld', () => {
    const wrapper = shallowMount(HelloWorld, { i18n });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders correctly - Home', () => {
    const wrapper = shallowMount(Home, { i18n });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('renders correctly - App', () => {
    const wrapper = shallowMount(App, { i18n });
    expect(wrapper.element).toMatchSnapshot();
  });
});
