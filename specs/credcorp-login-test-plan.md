# CredCorp Login Test Plan

## Application Overview

This page is the CredCorp authentication screen for enterprise login. The plan focuses on the primary user flow for email/password sign-in, account recovery options, OTP sign-in, validation states, and the expected UI behavior of the login form.

## Test Scenarios

### 1. Authentication page coverage

**Seed:** `tests/seed.spec.ts`

#### 1.1. loads the login page and verifies core layout

**File:** `tests/credcorp/login-page-layout.spec.ts`

**Steps:**
  1. Open the login URL in a fresh browser session.
    - expect: The page loads successfully without a blank screen or fatal error.
    - expect: The logo or brand is visible.
    - expect: The heading 'Login' and subheading 'Sign in to continue to your dashboard.' are shown.
  2. Inspect the visible form fields and controls.
    - expect: Email ID, Password, Remember me, Forgot Password?, Login, and Login with OTP are visible.
    - expect: The password input shows a mask or hidden value by default, and the visibility toggle is available.
  3. Check the footer agreement text and branding.
    - expect: The User Agreement and Privacy Policy text is visible.
    - expect: The Credentia branding remains visible in the lower section of the card.

#### 1.2. validates login form behavior for empty and invalid input

**File:** `tests/credcorp/login-form-validation.spec.ts`

**Steps:**
  1. Leave both fields empty and click Login.
    - expect: Validation messages or inline errors appear for required email and password fields.
    - expect: The form does not proceed to the next screen.
  2. Enter an invalid email format and a short/incorrect password, then click Login.
    - expect: The app rejects the attempt with a clear error message or validation feedback.
    - expect: The user remains on the login page and can retry.
  3. Enter a valid-looking email format with an incorrect password and submit.
    - expect: The authentication attempt fails without crashing the UI.
    - expect: The page remains responsive and does not leave the user in a broken state.

#### 1.3. successfully signs in with email and password

**File:** `tests/credcorp/login-success.spec.ts`

**Steps:**
  1. Enter a valid registered email address and password.
    - expect: The email and password fields accept the entered values.
    - expect: The form is ready to submit without validation warnings.
  2. Click the Login button.
    - expect: The app authenticates the user and redirects to the dashboard or next authorized page.
    - expect: The user is no longer on the login screen.
  3. Verify post-login session state.
    - expect: The authenticated dashboard or landing page loads successfully.
    - expect: Any session- or auth-related UI matches the logged-in state.

#### 1.4. checks remember me and password visibility behavior

**File:** `tests/credcorp/login-remember-me-and-password.spec.ts`

**Steps:**
  1. Enter credential values and toggle the password visibility button.
    - expect: The password field switches between hidden and visible states without data loss.
    - expect: The input value remains intact after toggling.
  2. Select Remember me and sign in with valid credentials.
    - expect: The login completes successfully.
    - expect: The remember-me state is preserved in the expected session or browser behavior the app uses.
  3. Sign out and re-open the app in a new session if the app supports persistent authentication.
    - expect: The remembered session behavior is consistent with the implementation.
    - expect: The page does not expose incorrect or stale session state.

#### 1.5. verifies forgot password flow

**File:** `tests/credcorp/forgot-password.spec.ts`

**Steps:**
  1. Click Forgot Password?.
    - expect: The password recovery flow opens the relevant reset page or modal.
    - expect: The user is guided into the next step of account recovery.
  2. Use a valid, registered email in the reset flow and submit.
    - expect: The system accepts the reset request and shows a success message or follow-up instruction.
    - expect: The user can return to login safely after the flow.
  3. Try an invalid or unregistered email in the recovery flow.
    - expect: The page shows a clear validation or error message.
    - expect: No account is reset without proper user verification.

#### 1.6. checks OTP login option

**File:** `tests/credcorp/otp-login.spec.ts`

**Steps:**
  1. Click Login with OTP.
    - expect: The OTP authentication view or modal appears.
    - expect: The page transitions away from email/password login without a UI break.
  2. Enter a valid registered mobile or email for OTP and request the code.
    - expect: The system triggers OTP delivery if the account is valid.
    - expect: The request result is clearly communicated to the user.
  3. Submit a valid OTP and complete sign-in.
    - expect: The user is authenticated successfully and redirected to the authorized page.
    - expect: The app clearly indicates a successful OTP-based login.
  4. Submit an expired, wrong, or blank OTP.
    - expect: The app rejects invalid OTP values with a clear error.
    - expect: The user remains on the OTP step and can retry.

#### 1.7. reviews agreement text and general accessibility behavior

**File:** `tests/credcorp/accessibility-and-legal.spec.ts`

**Steps:**
  1. Inspect the agreement text and action buttons for readability and focus order.
    - expect: The User Agreement and Privacy Policy wording is visible and legible.
    - expect: The tab order proceeds logically from email to password to login actions.
  2. Tab through the login form using keyboard navigation.
    - expect: Each interactive element receives focus in a logical sequence.
    - expect: The login controls are keyboard-accessible and usable without a mouse.
  3. Check for broken form states or console errors while interacting with the form.
    - expect: The page does not throw major runtime errors during normal interaction.
    - expect: The fields remain stable after repeated typing, validation, and resets.
