import type {
  ValidationOptions,
  ValidationResult,
} from "./types/validation-options";
import CommonPasswordsValidator from "./validators/common-passwords";
import { validateComplexity } from "./validators/complexity-validator";
import { validateLength } from "./validators/length-validator";

/**
 * Default validation options
 */
const DEFAULT_OPTIONS: ValidationOptions = {
  minLength: 8,
  maxLength: 64,
  requireUpperCase: true,
  requireLowerCase: true,
  requireNumbers: true,
  requireSpecialChars: true,
  rejectCommonPasswords: true,
};

/**
 * Validates a password against configurable security criteria
 * @param password - Password to validate
 * @param customOptions - Optional custom validation rules
 * @returns Validation result indicating password strength
 */
export function validatePassword(
  password: string,
  customOptions: ValidationOptions = {}
): ValidationResult {
  // Merge default and custom options
  const options = { ...DEFAULT_OPTIONS, ...customOptions };

  // Length validation
  const lengthValidation = validateLength(password, options);
  if (!lengthValidation.isValid) {
    return lengthValidation;
  }

  // Complexity validation
  const complexityValidation = validateComplexity(password, options);
  if (!complexityValidation.isValid) {
    return complexityValidation;
  }

  // Common passwords validation
  if (
    options.rejectCommonPasswords &&
    CommonPasswordsValidator.isCommonPassword(password)
  ) {
    return {
      isValid: false,
      errors: ["Password is too common"],
    };
  }

  return {
    isValid: true,
    errors: [],
  };
}

// Export CommonPasswordsValidator for external customization
export { CommonPasswordsValidator };

