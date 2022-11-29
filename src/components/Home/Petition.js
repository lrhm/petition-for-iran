

import { Button } from "react-bootstrap";
import Count from "../Counter/Count";

export default function Petition({ title, url, buttonText }) {


    return (
        <div>
            <div className="petition" >
                {title}
            </div>

            <Button className="home-about-social" style={{ padding: 10 }} href={url} target="_blank" rel="noreferrer">{buttonText}</Button>
            {/* <Count number={15000} duration={1} /> */}

        </div>

    )
}