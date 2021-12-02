import { render, screen } from '@testing-library/vue';
import AmazingComponent from '../src/AmazingComponent.vue';
/**
 * @jest-environment node || jsdom
 */

describe('<AmazingComponent />', ()=> {
  test('...', ()=> {
    render(AmazingComponent);
    expect(screen.queryByText('Hello World!')).toBeTruthy();
  });
});