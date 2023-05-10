import "./ItemList.css"
import Item from './../Item/Item';
import { ColorRing } from 'react-loader-spinner';

const ItemList = ({list}) => {
    return(
        <div className="ListGroup">
            {!list.length && <ColorRing visible={true}  height="80"  width="80"  ariaLabel="blocks-loading" wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}/>}
            {list.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}
export default ItemList