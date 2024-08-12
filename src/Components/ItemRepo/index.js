import React from "react";
import { ItemContainer } from "./styles";


function ItemRepo({repo, handleRemoveRepo}) {
    
    const hanldeRemove = () => {
        handleRemoveRepo(repo.id)
    }


    return (
        <ItemContainer onClick={hanldeRemove}>
            <h3>{repo.name}</h3>
             <p>{repo.full_name}</p>
            <a href={repo.html_url} rel="noreferrer" target="_blank"> Repositorio</a> <br/>
            <a href="#" rel="noreferrer" className="remove"> Remove</a>
            <hr/>
        </ItemContainer>
    )
}

export default ItemRepo;