import preloader from'../../../assets/preloader.gif'
const Preloader = (props) =>{
return (
    <div style={{paddingLeft:'30%'}}>
        <img src={preloader} style={{height:props.height}} />
    </div>
)
}

export default Preloader;