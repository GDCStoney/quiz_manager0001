import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return(
        <div>
            <ul>
                <li>
                    <Link to={'/quizmanager'}>Access Quiz Manager</Link>
                </li>
            </ul>
        </div>
    );
}