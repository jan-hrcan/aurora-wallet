import { mount, createLocalVue } from '@vue/test-utils';
import App from '../src/App.vue';

test('App  ', () => {
    const vue = createLocalVue();
    const app = mount(App, { vue });
    expect(app.classes()).toContain('testClass');
})
