import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class EthCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
      const details = this.props.details;
      const url = `https://www.youtube.com/embed/${details.video}`;

    return (
    <Card>
    <CardHeader
      title={details.expert.name}
      subtitle={details.expert.quote}
      avatar={details.expert.pic}
      style={{border: "solid", "border-width": "0px 0px 1px 0px"}}
    />
     <CardTitle title={details.blurb}/>
      <CardText>{details.about}</CardText>
      <CardMedia>
        <iframe className="embed-responsive-item" src={url} height={315}></iframe>
      </CardMedia>
      <CardActions>
      </CardActions>
  </Card>
    );
  }
}