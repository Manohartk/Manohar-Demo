import {Catalog} from 'react-planner';

let catalog = new Catalog();

import * as Areas from './areas/**/planner-element.jsx';
import * as Lines from './lines/**/planner-element.jsx';
import * as Holes from './holes/**/planner-element.jsx';
//import * as Items from './items/**/planner-element.jsx';

for( let x in Areas ) catalog.registerElement( Areas[x] );
for( let x in Lines ) catalog.registerElement( Lines[x] );
for( let x in Holes ) catalog.registerElement( Holes[x] );
//for( let x in Items ) catalog.registerElement( Items[x] );

// console.log(Lines);

catalog.registerCategory('windows', 'Windows', [Holes.window, Holes.sashWindow] );
catalog.registerCategory('doors', 'Doors', [Holes.door, Holes.doorDouble] );

export default catalog;
