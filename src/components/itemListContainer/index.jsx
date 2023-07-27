import "./style.css";

function ItemListContainer(props){
    const text = props.text;
    return(
        <div className="itemListContainer">
            <h2>{text}</h2>
        </div>
    )
}
export default ItemListContainer;