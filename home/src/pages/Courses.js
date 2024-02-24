import React from "react";
import { Link } from "react-router-dom"

export default function Courses() {
return (
    <div>
        <div className="pagetitle">
            <h1>Courses</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active">Courses</li>
                    </ol>
                </nav>
        </div>

    </div>
);
}