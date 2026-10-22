# Automation Practice Test Plan

## Application Overview

This page is a demo automation playground for Selenium, Cypress, and Playwright. The test plan covers the core landing-page structure, data-entry form workflow, table validation, alert and popup interactions, upload actions, and common browser UI behaviors that are usually exercised in browser automation training sites.

## Test Scenarios

### 1. Automation Practice page coverage

**Seed:** `tests/seed.spec.ts`

#### 1.1. loads the page and verifies core layout

**File:** `tests/automation-practice/loads-page-and-layout.spec.ts`

**Steps:**
  1. Open https://testautomationpractice.blogspot.com/ in a fresh browser context.
    - expect: The page title is 'Automation Testing Practice'.
    - expect: The main heading 'Automation Testing Practice' is visible.
    - expect: The navigation links for Home, Udemy Courses, Online Trainings, Blog, and PlaywrightPractice are displayed.
  2. Scroll through the page to inspect the main sections.
    - expect: The Data Entry Form, Upload Files, Static Web Table, Dynamic Web Table, Pagination Web Table, and several UI control sections are visible.
    - expect: The page is usable without layout collapse or major rendering defects.

#### 1.2. fills and submits the Data Entry Form

**File:** `tests/automation-practice/data-entry-form.spec.ts`

**Steps:**
  1. Locate the Data Entry Form and fill all text fields with valid values: name, email, phone, address, and a selected gender.
    - expect: The text boxes accept input without truncation or unexpected formatting.
    - expect: The selected gender radio button matches the user's choice.
  2. Choose several weekdays from the Days checkboxes, select a country from the dropdown, choose multiple colors, and select an item from each listbox.
    - expect: Each selection is reflected in the UI state.
    - expect: The chosen options remain selected after interaction.
  3. Set date values in the date picker fields and click Submit.
    - expect: The form accepts the input values without throwing a page error.
    - expect: The user can continue interacting with the page after submission.
  4. Repeat with blank values and invalid email/phone input, then submit.
    - expect: The page shows either validation feedback or the form remains stable without crashing.
    - expect: No broken or unhandled error is thrown in the browser console.

#### 1.3. verifies static and dynamic table content

**File:** `tests/automation-practice/tables-and-data.spec.ts`

**Steps:**
  1. Inspect the Static Web Table and confirm the headers and row data for known entries such as Learn Selenium and Master In Java.
    - expect: The column headers match BookName, Author, Subject, and Price.
    - expect: The row values reflect the expected text and price amounts.
  2. Read the Dynamic Web Table values and confirm key measurements for the Chrome and Firefox rows.
    - expect: The CPU, memory, disk, and network values update correctly for each browser row.
    - expect: The text values for Chrome/Firefox metrics match the page content.
  3. Use the Pagination Web Table and select one or more checkboxes across pages if pagination links are enabled.
    - expect: The pagination links navigate between pages correctly.
    - expect: Selecting rows does not break the table or cause duplicate row state.

#### 1.4. handles alert, prompt, and popup interactions

**File:** `tests/automation-practice/alerts-popups.spec.ts`

**Steps:**
  1. Click the Simple Alert button.
    - expect: A browser alert appears with the expected message.
    - expect: The user can dismiss it and return to the page.
  2. Click the Confirmation Alert button and accept the dialog.
    - expect: The confirmation dialog is displayed.
    - expect: Choosing OK results in the expected success state or updated text on the page.
  3. Click the Confirmation Alert button again and cancel the dialog.
    - expect: The cancel path is handled correctly.
    - expect: The page remains responsive and no unexpected navigation occurs.
  4. Click the Prompt Alert button, enter text, and submit it.
    - expect: The prompt accepts user input and the page reflects the entered value.
    - expect: Canceling the prompt keeps the page stable and returns to the normal state.
  5. Click New Tab and Popup Windows buttons.
    - expect: A new browser tab or popup opens as expected.
    - expect: The focus can be moved back to the original page without stale state.

#### 1.5. tests file upload and drag-and-drop behaviors

**File:** `tests/automation-practice/uploads-and-dnd.spec.ts`

**Steps:**
  1. Use the single-file upload control to choose a small valid file and click Upload Single File.
    - expect: The chosen file is attached.
    - expect: The upload action completes without an unhandled error.
  2. Use the multiple-file upload control to choose more than one file and click Upload Multiple Files.
    - expect: All selected files are accepted by the uploader.
    - expect: The resulting upload status reflects the multiple-file flow.
  3. Drag the draggable item to the drop target and release it.
    - expect: The draggable item is successfully moved into the drop zone.
    - expect: The drop target reflects the updated state without duplication or offset errors.

#### 1.6. exercises mouse hover, double click, slider, and custom controls

**File:** `tests/automation-practice/advanced-ui-controls.spec.ts`

**Steps:**
  1. Hover over the Point Me button and inspect the dropdown menu.
    - expect: The menu opens on hover.
    - expect: The available menu items are visible and clickable.
  2. Double-click the Copy Text button while Field1 contains text.
    - expect: The text from Field1 is copied into Field2.
    - expect: The copy behavior is visible and stable across repeated attempts.
  3. Move the slider to a new value and verify the displayed price range updates.
    - expect: The value changes to the user-selected range.
    - expect: The slider remains draggable and does not jump unexpectedly.
  4. Interact with the scrolling dropdown control and select an item from the list.
    - expect: The list opens and allows selection.
    - expect: The chosen value is displayed in the input field.

#### 1.7. validates external links and broken-link section

**File:** `tests/automation-practice/links-and-navigation.spec.ts`

**Steps:**
  1. Open the Desktop / Laptop / Mobile link group and click one of the valid links.
    - expect: The link opens the target page or expected domain without a broken redirect.
    - expect: The browser returns to the page cleanly after the user navigates back.
  2. Click a broken link such as Errorcode 404 or 500 in the Broken Links section.
    - expect: The page handles the broken link without causing a crash or JS error.
    - expect: The user can continue browsing after the failed navigation attempt.
  3. Check the site navigation links in the header and footer.
    - expect: Each link resolves to its expected page or external destination.
    - expect: There are no dead or empty links in the primary navigation.
