const { testWithSpectron } = require('vue-cli-plugin-electron-builder');

jest.setTimeout(60000);

test('Window Loads Properly', async () => {
  const { app, stopServe } = await testWithSpectron();
  const win = app.browserWindow;
  const { width, height } = await win.getBounds();

  expect(await win.isMinimized()).toBe(false);
  expect(await win.isVisible()).toBe(true);
  expect(width).toBeGreaterThan(0);
  expect(height).toBeGreaterThan(0);

  await stopServe();
});
