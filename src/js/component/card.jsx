import React from "react";


const Card = () => {
    return (
        <div class="card col-12 col-sm-6 col-md-3 col-lg-4">
            <img src="https://picsum.photos/200" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Find out more!</a>
            </div>
        </div>
    );
}

export default Card;