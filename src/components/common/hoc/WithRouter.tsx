import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import * as React from 'react'




export type WithRouterPropsType = {
    location: ReturnType<typeof useLocation>;
    params: Record<string, string>;
    navigate: ReturnType<typeof useNavigate>;
}

const WithRouter = <BaseProps extends WithRouterPropsType>(Component: React.ComponentType<BaseProps>) => {
    function ComponentWithRouterProp(props: Omit<BaseProps, keyof WithRouterPropsType>) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (

            <Component
                {...props as BaseProps}
                router={{ location, navigate, params }}
            />

        );
    }

    return ComponentWithRouterProp;
}

export default WithRouter;