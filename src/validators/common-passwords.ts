/**
 * Manages a set of common passwords that should be rejected
 */
class CommonPasswordsValidator {
  /**
   * Internal set of common passwords
   * @private
   */
  private static commonPasswords: Set<string> = new Set([
    "123456",
    "password",
    "qwerty",
    "admin",
    "letmein",
    "welcome",
    "12345678",
    "abc123",
    "login",
    "111111",
    "passw0rd",
    "default",
  ]);

  /**
   * Checks if a password is in the list of common passwords
   * @param password - Password to check
   * @returns True if the password is common, false otherwise
   */
  static isCommonPassword(password: string): boolean {
    return this.commonPasswords.has(password.toLowerCase());
  }

  /**
   * Adds one or more passwords to the list of common passwords
   * @param passwords - Passwords to add to the blocked list
   */
  static addCommonPasswords(...passwords: string[]): void {
    passwords.forEach((password) => {
      this.commonPasswords.add(password.toLowerCase());
    });
  }

  /**
   * Adds an array of passwords to the list of common passwords
   * @param passwordArray - Array of passwords to block
   */
  static addCommonPasswordsFromArray(passwordArray: string[]): void {
    passwordArray.forEach((password) => {
      this.commonPasswords.add(password.toLowerCase());
    });
  }

  /**
   * Retrieves the current list of common passwords
   * @returns Array of common passwords
   */
  static getCommonPasswords(): string[] {
    return Array.from(this.commonPasswords);
  }

  /**
   * Removes passwords from the list of common passwords
   * @param passwords - Passwords to remove from the blocked list
   */
  static removeCommonPasswords(...passwords: string[]): void {
    passwords.forEach((password) => {
      this.commonPasswords.delete(password.toLowerCase());
    });
  }

  /**
   * Completely resets the list of common passwords to the default list
   */
  static resetToDefaultPasswords(): void {
    this.commonPasswords = new Set([
      "123456",
      "password",
      "qwerty",
      "admin",
      "letmein",
      "welcome",
      "12345678",
      "abc123",
      "login",
      "111111",
      "passw0rd",
      "default",
    ]);
  }
}

export default CommonPasswordsValidator;
