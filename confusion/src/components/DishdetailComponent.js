import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


function RenderDish({dish}) {

    if (dish == null) {
        return(<div></div>);
    }

    return(
        <Card className="col-12 col-md-5 m-1">
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({comments}) {
    if (comments == null) {
        return(<div></div>);
    }

    const renderedComments = comments.map(comment => {
        const fmtDate = new Intl.DateTimeFormat('en', {month: "short", day: "numeric", year: "numeric"}).format(new Date(comment.date));

        return(
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author}, {fmtDate.toString()}</p>
            </li>
        );
    });

    return(    
        <div className="col-12 col-md-5 m-1">
            <h4>Comments:</h4>
            <ul className="list-unstyled">
                {renderedComments}
            </ul>
        </div>
    );
}

const DishDetail = (props) => {

    const dish = props.dish;

    if (dish == null) {
        return(<div></div>);
    }

    return(
        <div className="container">
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.dish.comments} />
            </div>
        </div>        
    );
}


export default DishDetail;