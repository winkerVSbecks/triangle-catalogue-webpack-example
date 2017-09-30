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
  asyncComponent(() => import(/* webpackChunkName: "heronian" */ './Heronian')),
  asyncComponent(() =>
    import(/* webpackChunkName: "almost-equilateral-heronian" */ './AlmostEquilateralHeronian'),
  ),
];
