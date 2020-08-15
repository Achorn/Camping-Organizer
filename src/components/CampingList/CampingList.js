import React from "react";
import { Component } from "react";
import CampingItem from "../CampingItem/CampingItem";
import { v4 as uuidv4 } from "uuid";
import Grid from "@material-ui/core/Grid";
import NewItem from "../NewItem/NewItem";
class CampingList extends Component {
  state = {
    items: [
      { id: uuidv4(), name: "Tent", weight: 6.7 },
      { id: uuidv4(), name: "backpack", weight: 9.5 },
      { id: uuidv4(), name: "treking poles", weight: 3.1 },
      { id: uuidv4(), name: "kettle", weight: 2.1 },
    ],
  };

  deleteItem = (id, e) => {
    const items = Object.assign([], this.state.items);
    items.splice(id, 1);
    this.setState({ items: items });
    console.log("deleting item ", id);
  };

  render() {
    return (
      <div flexGrow={1}>
        <NewItem />
        <Grid container spacing={3}>
          {this.state.items.map((item) => {
            return (
              <Grid item xs>
                <CampingItem
                  key={item.id}
                  name={item.name}
                  weight={item.weight}
                  delEvent={this.deleteItem.bind(this, item.id)}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default CampingList;
