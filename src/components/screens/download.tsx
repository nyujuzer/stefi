import { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "../elements/card";
import Button from "@mui/material/Button";
import "./download.css"

function Download() {
  return (
    <Fragment>
      <div>
        <div className="row">
          <Card title={"Android"}>
            <Button variant={"contained"} className="btn-yimn">
            <Link className="clickable-text" to={"https://google.com"}>
              <h1 >Download From Play Store</h1>
            </Link>
            </Button>
          </Card>
          <Card title={"Iphone"}>
            <Button variant="contained" className="btn-yimn">
            <Link className="clickable-text" to={"https://google.com"}>
              <h1 >Download From Play Store</h1>
            </Link>
            </Button>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}

export default Download;
