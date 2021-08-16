describe('Example CI Tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should have all Views', async () => {
    await expect(element(by.id('Text_Container'))).toBeVisible();
    await expect(element(by.id('Test_Button_Container'))).toBeVisible();
  });

  it('should have all Texts', async () => {
    await expect(element(by.id('Test_String'))).toBeVisible();
    await expect(element(by.id('Disappearing_Text'))).toBeVisible();
  });

  it('should hide text after tap', async () => {
    await element(by.id('Toggle_Button')).tap();
    await expect(element(by.id('Disappearing_Text'))).toBeNotVisible();
  });

  it('should show text after tap', async () => {
    await element(by.id('Toggle_Button')).tap();
    await expect(element(by.id('Disappearing_Text'))).toBeVisible();
  });
});
