/**
 * Classifying triangles by their angles
 * + Acute triangles
 * + Right triangles
 * + Obtuse triangles
 * + Oblique Triangles
 *
 * Classifying triangles by their sides
 * + Equilateral triangles
 * + Isosceles triangles
 * + Scalene triangles
 *
 * Special Triangles
 * + Heronian triangle
 * + Pythagorean triple (https://en.wikipedia.org/wiki/Pythagorean_triple)
 * + Almost-equilateral Heronian triangles
 */
function eqTriangle(a) {
  var SQRT_3 = Math.pow(3, 0.5);

  const pts = [
    [0 + 30, -a / SQRT_3 + 30],
    [-a / 2 + 30, a * 0.5 / SQRT_3 + 30],
    [a / 2 + 30, a * 0.5 / SQRT_3 + 30],
  ];

  return ['M', pts[0], 'L', pts[1], 'L', pts[2], 'Z'].join('');
}
