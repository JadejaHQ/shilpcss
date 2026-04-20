/**
 * Detect function type mixin's argument placeholder and replace by user input
 * @example - def: not(<1>) ; userInput: not(.disabled) { ... } ; result: 1 === .disabled
 */
export const FUNCTION_MIXIN_ARGS_PLACEHOLDER_PATTERN = /<([^>]+)>/g;

/* ============================================================================================= */

/**
 * Extract mixins's variant
 * @example - screen md:xl -> screen, [md, xl]
 */
export const MIXINS_VARIANT_PLACEHOLDER_PATTERN =
	/@([a-z-]+)\s([a-z-:]+)(\(.+\))?\s{/g;
