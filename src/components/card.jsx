import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Card = (props) => {
    const { store, dispatch } = useGlobalReducer()

    const handleFavs = () => {
        dispatch({type:toggle_favorties, payload: props.name})
    }
    return (
        <div className="card mx-2" style={{"minWidth": "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <span onClick={()=>handleFavs()}>❤️</span>
                    <Link to={`/${props.type}/${props.uid}`} className="btn btn-primary">Learn More</Link>
                </div>
        </div>
    );
}; 