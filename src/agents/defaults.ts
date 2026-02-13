// Defaults for agent metadata when upstream does not supply them.
// Claude Code (Anthropic) is the primary AI source — all defaults
// route through Anthropic models first to leverage Claude's strengths
// in tool use, extended thinking, and code generation.
export const DEFAULT_PROVIDER = "anthropic";
export const DEFAULT_MODEL = "claude-opus-4-6";
// Conservative fallback used when model metadata is unavailable.
export const DEFAULT_CONTEXT_TOKENS = 200_000;

// Recommended Claude-centric fallback chain for reliable operation.
// Opus 4.6 → Sonnet 4.5 → Sonnet 4 ensures Claude remains the backbone
// even when the primary model is unavailable.
export const DEFAULT_FALLBACK_MODELS = [
  "anthropic/claude-sonnet-4-5",
  "anthropic/claude-sonnet-4-0",
] as const;
