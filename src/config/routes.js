import Grid from '../components/grid';

import Details from '../components/Pokemon';

import Error404 from '../components/404';

const routes = [
    {
        path:"/",
        component:Grid,
        exact:false,
        routes:[
            {
                path:"pokemon/:id",
            }
        ]
    }
]