import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    renderDish(dish) {

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

    renderComments(comments) {
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
            )
        });

        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments:</h4>
                <ul>
                    {renderedComments}
                </ul>
            </div>
        );
    }

    render() {
        const dish = this.props.dish;

        if (dish == null) {
            return(<div></div>);
        }

        return(
            <div className="row">
                {this.renderDish(dish)}
                {this.renderComments(dish.comments)}
            </div>
        );
    }
}

export default DishDetail;