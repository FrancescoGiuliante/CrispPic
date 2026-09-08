/**
 * Resolves a requested {width, height, lockAspect} against the source
 * (post-crop) dimensions into a concrete output size in px.
 *
 * - Neither set: keep source size.
 * - Only one set: the other is derived to preserve aspect ratio.
 * - Both set with lockAspect: fit within the box, preserving aspect ratio
 *   (like "contain") rather than stretching.
 * - Both set without lockAspect: stretch to exactly width×height.
 */
export function resolveDimensions(
  source: { width: number; height: number },
  target: { width?: number; height?: number; lockAspect?: boolean }
): { width: number; height: number } {
  const { width, height, lockAspect = true } = target;
  const ratio = source.width / source.height;

  if (!width && !height) return { width: source.width, height: source.height };

  if (width && !height) return { width: round(width), height: round(width / ratio) };
  if (height && !width) return { width: round(height * ratio), height: round(height) };

  // Both provided.
  if (!lockAspect) return { width: round(width!), height: round(height!) };

  const boxRatio = width! / height!;
  if (boxRatio > ratio) {
    return { width: round(height! * ratio), height: round(height!) };
  }
  return { width: round(width!), height: round(width! / ratio) };
}

function round(n: number): number {
  return Math.max(1, Math.round(n));
}
