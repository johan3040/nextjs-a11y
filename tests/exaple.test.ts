import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const header = await page.getByRole('heading', { name: /hemmet/i });

  const accessibilityScanResults = await new AxeBuilder({ page }).withTags(['wcag21aa']).analyze();

  // Expect a title "to contain" a substring.
  await expect(header).toBeTruthy();

  expect(accessibilityScanResults.violations).toEqual([]);
});
