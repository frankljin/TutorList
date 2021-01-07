import React from "react";
import { Link } from "react-router-dom";

export function Filter() {
    return (
    <div className="col-sm-4 col-md-3">
        <h5>Categories</h5>
        <div class="list-group">
            <Link to="/postings" className="list-group-item text-info">Show All</Link>
        </div>
        <br />
        <div class="list-group">
            <Link to="/math" className="list-group-item text-info">Math</Link>
            <Link to="/science" className="list-group-item text-info">Science</Link>
            <Link to="/language" className="list-group-item text-info">Language</Link>
            <Link to="/social" className="list-group-item text-info">Social</Link>
        </div>
        <br />
        <div class="list-group">
            <Link to="/grade10" className="list-group-item text-info">Grade 10</Link>
            <Link to="/grade11" className="list-group-item text-info">Grade 11</Link>
            <Link to="/grade12" className="list-group-item text-info">Grade 12</Link>
        </div>
    </div>
    )
}

