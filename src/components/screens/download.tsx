import { Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "../elements/card";
import Button from "@mui/material/Button";

function Download() {
  return (
    <Fragment>
      <div>
        <div className="row">
          <Card title={"Android"}>
            <Button color="primary">
            <Link to={"https://google.com"}>
              <h1 >Download From Play Store</h1>
            </Link>
            </Button>
          </Card>
          <Card title={"Iphone"}>
            <Link to={"https://google.com"}>
              <h1 >Download From Play Store</h1>
            </Link>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}

export default Download;
