import './Backdrop.scss';

function Backdrop(props: {onClick: Function}) {
    return <div onClick={() => {props.onClick()}} className='backdrop'></div>
}

export default Backdrop;