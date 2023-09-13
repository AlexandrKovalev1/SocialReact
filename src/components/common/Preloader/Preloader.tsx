import * as React from 'react'
import preloader from '../../../assets/preloader.gif'

type PreloaderPropsType = {
    height: string
}


const Preloader: React.FC<PreloaderPropsType> = (props) => {
    return (
        <div style={{ paddingLeft: '30%' }}>
            <img src={preloader} style={{ height: props.height }} alt={'preloader-img'} />
        </div>
    )
}

export default Preloader;