import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import * as React from 'react'


type InjectedProps = {

}

const WithRouter = <BaseProps extends InjectedProps>(Component) => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (

            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        
        );
    }

return ComponentWithRouterProp;
}

export default WithRouter;