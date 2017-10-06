import { asyncComponent } from '../asyncComponent';

export default [
  asyncComponent(() => import(/* webpackChunkName: "right" */ './Right')),
  asyncComponent(() => import(/* webpackChunkName: "acute" */ './Acute')),
  asyncComponent(() => import(/* webpackChunkName: "obtuse" */ './Obtuse')),
  asyncComponent(() => import(/* webpackChunkName: "oblique" */ './Oblique')),
  asyncComponent(() =>
    import(/* webpackChunkName: "equilateral" */ './Equilateral'),
  ),
  asyncComponent(() =>
    import(/* webpackChunkName: "isosceles" */ './Isosceles'),
  ),
  asyncComponent(() => import(/* webpackChunkName: "scalene" */ './Scalene')),
  asyncComponent(() =>
    import(/* webpackChunkName: "pythagorean-triple" */ './Heronian'),
  ),
  asyncComponent(() =>
    import(/* webpackChunkName: "ae-heronian" */ './AlmostEquilateralHeronian'),
  ),
];

/**
 * Static imports (no code-splitting)
 */
// import Right from './Right';
// import Acute from './Acute';
// import Obtuse from './Obtuse';
// import Oblique from './Oblique';
// import Equilateral from './Equilateral';
// import Isosceles from './Isosceles';
// import Scalene from './Scalene';
// import Heronian from './Heronian';
// import AlmostEquilateralHeronian from './AlmostEquilateralHeronian';
//
// export default [
//   Right,
//   Acute,
//   Obtuse,
//   Oblique,
//   Equilateral,
//   Isosceles,
//   Scalene,
//   Heronian,
//   AlmostEquilateralHeronian,
// ];
