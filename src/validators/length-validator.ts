import type {
  ValidationOptions,
  ValidationResult,
} from "../types/validation-options";

/**
 * Validates password length based on provided options
 * @param password - The password to validate
 * @param options - Validation configuration options
 * @returns Validation result with potential length-related errors
 */
export function validateLength(
  password: string,
  options: ValidationOptions
): ValidationResult {
  const errors: string[] = [];

  const minLength = options.minLength || 8;
  const maxLength = options.maxLength || 64;

  if (password.length < minLength) {
    errors.push(`Password must be at least ${minLength} characters long`);
  }

  if (password.length > maxLength) {
    errors.push(`Password must not exceed ${maxLength} characters`);
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
